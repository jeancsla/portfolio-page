import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
          "vendor-react": ["react", "react-dom"],
        },
      },
    },
    reportCompressedSize: false, // Speed up build
    sourcemap: false,
  },
});
