// janiceto.com.br — site.js (carregado com defer; sem JS inline, compatível com a CSP)
(() => {
  // Ano do rodapé: o HTML já traz o ano escrito; isto só o mantém atualizado.
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Altura real do cabeçalho fixo para o scroll-padding das âncoras: com texto ampliado ou espaçamento
  // de texto aumentado, o cabeçalho quebra em mais linhas. Sem JS, vale o --header-h do CSS.
  const top = document.querySelector(".top");
  if (top && window.ResizeObserver) {
    new ResizeObserver(() => document.documentElement.style.setProperty("--header-real", top.offsetHeight + "px")).observe(top);
  }

  // Botão "Copiar endereço": só aparece se o navegador permitir copiar.
  // A mensagem fica até o próximo clique: sumir sozinha faria a página pular sem o visitante ter feito nada.
  const button = document.getElementById("copiar");
  const status = document.getElementById("copiar-status");
  if (!button || !status || !navigator.clipboard || !window.isSecureContext) return;
  button.hidden = false;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = "Endereço copiado.";
    } catch {
      status.textContent = "Não deu para copiar. Selecione o endereço acima.";
    }
  });
})();
