# Jean Aniceto — produtos digitais

Site institucional de **Jean Aniceto**, marca profissional de **51.046.020 JEAN CARLOS SANTOS LIMA ANICETO** (CNPJ 51.046.020/0001-34), estúdio independente de produto sediado em São José dos Campos/SP. A página apresenta o trabalho (microsaas, sistemas sob medida e automação), o processo de construção e as informações públicas da empresa.

**Site em produção:** [janiceto.com.br](https://janiceto.com.br)

## Estrutura

- `index.html`: página completa em arquivo único, com HTML, CSS e JavaScript embutidos (sem dependências externas além de fontes e ícones inline).
- `site.webmanifest`: manifest PWA usado pelo navegador (nome, cores e ícone da aba).
- `robots.txt`: libera a indexação do site para buscadores.

## Publicação

Este é um site estático puro — não há etapa de instalação nem de build. O deploy é feito via **Vercel**, conectado a este repositório: qualquer push para `main` gera um novo deploy de produção em `janiceto.com.br`.

Para testar localmente, abra `index.html` diretamente no navegador ou sirva a pasta com qualquer servidor estático simples, por exemplo:

```bash
npx serve .
```

## Seções da página

1. **Hero** — apresentação do estúdio e proposta de valor.
2. **Trabalho selecionado** — projetos públicos: Catálogo Super, Guincho na Hora e Cidade Guess.
3. **O que faço** — microsaas próprio, sistemas sob medida e automação/integração.
4. **Processo** — como um problema vira produto (entender o atrito → construir o essencial → melhorar com uso).
5. **Empresa** — identificação pública da operação responsável (nome empresarial, CNPJ, município e atividades).
6. **Políticas** — suporte, reembolso/disputas, cancelamento e privacidade.
7. **Próximos passos** — link para o GitHub e contato.

## Contato

- **E-mail:** [contato@janiceto.com.br](mailto:contato@janiceto.com.br)
- **GitHub:** [@jeancsla](https://github.com/jeancsla)
