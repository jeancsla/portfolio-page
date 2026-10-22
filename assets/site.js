// janiceto.com.br — site.js (carregado com defer; sem JS inline, compatível com a CSP)
(() => {
  // Ano do rodapé: o HTML já traz o ano escrito; isto só o mantém atualizado.
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Botão "Copiar endereço": só aparece se o navegador permitir copiar.
  const button = document.getElementById("copiar");
  const status = document.getElementById("copiar-status");
  if (!button || !status || !navigator.clipboard || !window.isSecureContext) return;
  button.hidden = false;
  let timer;
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      status.textContent = "Endereço copiado.";
    } catch {
      status.textContent = "Não deu para copiar. Selecione o endereço acima.";
    }
    clearTimeout(timer);
    timer = setTimeout(() => { status.textContent = ""; }, 4000);
  });
})();
