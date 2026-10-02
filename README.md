# Você na Facul — Ajuda

Documentação de uso da plataforma [Você na Facul](https://github.com/vcnafacul), publicada em
**https://vcnafacul.github.io/docs/**.

Feita com [Starlight](https://starlight.astro.build) (Astro) e publicada pelo GitHub Pages: sem servidor, sem
banco, sem custo. Cada mudança na `main` republica o site sozinha (`.github/workflows/deploy.yml`).

## Como editar (sem ser dev)
- Em qualquer página do site, clique em **Editar esta página** (rodapé): abre o arquivo no editor do GitHub.
  Edite, confira na aba **Preview** e clique em **Commit changes**. Em 1–2 minutos o site atualiza.
- Ou use o painel visual em **https://vcnafacul.github.io/docs/admin/** (Sveltia CMS): entre com
  **"Entrar Usando Token de Acesso"** (como criar o token: `tickets/032-documentacao/04` no workspace). O painel
  edita as seções Estudantes, Cursinhos e Equipe do projeto, envia imagens (`public/imagens`) e tem o bloco
  **Vídeo do YouTube**. A página inicial fica de fora: editar pelo GitHub.

Para pôr um vídeo em qualquer página `.mdx`: `<Video id="CODIGO" titulo="Título" inicio={95} />`
(`inicio` em segundos, opcional; não precisa de `import`).

## Onde fica cada coisa
| Pasta | Seção do menu |
|---|---|
| `src/content/docs/estudantes/` | Estudantes |
| `src/content/docs/cursinhos/` | Cursinhos |
| `src/content/docs/projeto/` | Equipe do projeto |

Página nova numa dessas pastas entra no menu sozinha.

⚠️ **Prints e vídeos só com dados de homologação ou fictícios** — a documentação é pública, e as telas de
administração mostram dados pessoais de estudantes.

## Rodar no computador (devs)
Precisa de Node 22.12 ou mais novo (`.nvmrc`).

```bash
yarn install
yarn dev      # http://localhost:4321/docs/
yarn build    # gera dist/
```
