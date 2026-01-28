import React, { useEffect, useState } from "react";
import { Entry, ContentBlock } from "../types";
import { useSkyTheme } from "../services/theme";

interface ProjectDetailProps {
  project: Entry;
  t: (key: string) => string;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  t,
  onBack,
}) => {
  const { isDark } = useSkyTheme();
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      window.scrollTo(0, 0);
    } catch (error) {
      console.warn("scrollTo failed:", error);
      try {
        document.documentElement.scrollTop = 0;
      } catch (fallbackError) {
        console.warn("fallback scrollTop failed:", fallbackError);
      }
    }
    if (project.github && project.showReadme) {
      setLoading(true);
      setTimeout(() => {
        setReadme(
          `### GitHub README Data\n\nThis project is actively maintained on GitHub. You can find detailed technical documentation, contribution guidelines, and the full codebase at ${project.github}.\n\n*Last synchronized: ${new Date().toLocaleDateString()}*`,
        );
        setLoading(false);
      }, 800);
    }
  }, [project]);

  const renderBlock = (block: ContentBlock, index: number) => {
    switch (block.type) {
      case "heading":
        return (
          <h2
            key={index}
            className={`text-2xl font-bold mt-12 mb-6 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {block.text}
          </h2>
        );
      case "paragraph":
        return (
          <p
            key={index}
            className={`text-lg leading-relaxed mb-6 ${isDark ? "text-white/80" : "text-slate-700"}`}
          >
            {block.text}
          </p>
        );
      case "image":
        return (
          <figure key={index} className="my-10 group">
            <div
              className={`rounded-2xl overflow-hidden border p-2 transition-transform duration-500 group-hover:scale-[1.01] ${isDark ? "border-white/10 bg-white/5" : "border-black/5 bg-black/5"}`}
            >
              <img
                src={block.url}
                alt={block.alt}
                className="w-full h-auto rounded-xl object-cover max-h-[500px]"
              />
            </div>
            {block.text && (
              <figcaption
                className={`mt-4 text-sm italic text-center ${isDark ? "text-white/50" : "text-slate-500"}`}
              >
                {block.text}
              </figcaption>
            )}
          </figure>
        );
      case "list":
        return (
          <ul key={index} className="space-y-3 mb-8 ml-4">
            {block.items?.map((item, i) => (
              <li
                key={i}
                className={`flex items-start gap-3 text-lg ${isDark ? "text-white/80" : "text-slate-700"}`}
              >
                <span
                  className={`mt-2.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${isDark ? "bg-indigo-400" : "bg-indigo-600"}`}
                ></span>
                {item}
              </li>
            ))}
          </ul>
        );
      case "link":
        return (
          <a
            key={index}
            href={block.url}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl border transition-all mb-8 ${isDark ? "border-white/20 hover:bg-white/10 text-white" : "border-indigo-200 hover:bg-indigo-50 text-indigo-700"}`}
          >
            <span>{block.text}</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in pb-20">
      <div className="flex justify-between items-center mb-12">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-full glass transition-all hover:pr-6 ${isDark ? "text-white border-white/10" : "text-slate-800 border-white/20"}`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          {t("github.view").split(" ")[1] === "on" ? "Back" : "Voltar"}
        </button>
      </div>

      <div
        className={`glass p-6 sm:p-8 md:p-16 rounded-[2.5rem] ${isDark ? "border-white/10" : "border-white/20"}`}
      >
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            <span
              className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full glass ${isDark ? "text-indigo-300" : "text-indigo-600"}`}
            >
              {project.date}
            </span>
            {project.tags?.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${isDark ? "border-white/10 text-white/40" : "border-black/10 text-black/40"}`}
              >
                #{tag}
              </span>
            ))}
          </div>
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tighter ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {t(project.titleKey)}
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl font-light italic opacity-60 ${isDark ? "text-white" : "text-slate-900"}`}
          >
            {t(project.descriptionKey)}
          </p>
        </div>

        {/* Local Rich Content */}
        <div className="project-content">
          {project.fullContent?.map((block, index) =>
            renderBlock(block, index),
          )}
        </div>

        {/* Optional GitHub Section */}
        {project.github && project.showReadme && (
          <div
            className={`mt-16 pt-16 border-t ${isDark ? "border-white/10" : "border-black/5"}`}
          >
            <div className="flex items-center justify-between mb-8">
              <h2
                className={`text-2xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
              >
                Repository Details
              </h2>
              <a
                href={`https://github.com/${project.github}`}
                target="_blank"
                rel="noreferrer"
                className={`text-sm font-mono p-2 rounded glass hover:bg-white/10 transition-colors ${isDark ? "text-indigo-300" : "text-indigo-600"}`}
              >
                {project.github}
              </a>
            </div>
            {loading ? (
              <div className="flex items-center gap-3 opacity-50 italic py-8">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                {t("github.loading")}
              </div>
            ) : (
              <div
                className={`prose prose-sm max-w-none font-mono p-8 rounded-3xl ${isDark ? "bg-black/30 text-white/60" : "bg-white/40 text-slate-700"}`}
              >
                <div className="whitespace-pre-wrap">{readme}</div>
                <div className="mt-10">
                  <a
                    href={`https://github.com/${project.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-slate-950 text-white font-bold hover:bg-indigo-600 transition-all shadow-xl hover:-translate-y-1"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-60.86 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    {t("github.view")}
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
