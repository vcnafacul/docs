// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import AutoImport from 'astro-auto-import';
import mdx from '@astrojs/mdx';

// Repositório de projeto no GitHub Pages: o site fica em /docs.
// ⚠️ Se um dia passar a ter domínio próprio, trocar `site` e tirar o `base`.
export default defineConfig({
	site: 'https://vcnafacul.github.io',
	base: '/docs',
	integrations: [
		// `<Video>` disponível em toda página .mdx SEM linha de `import` — quem
		// edita pelo painel (Sveltia) não precisa saber de import, e o editor
		// visual não tem como estragar uma linha que não existe.
		// ⚠️ Ordem importa: o AutoImport só se registra se já enxergar o MDX na
		// lista — por isso o `mdx()` explícito no fim (o Starlight não duplica).
		AutoImport({ imports: ['./src/components/Video.astro'] }),
		starlight({
			title: 'Você na Facul — Ajuda',
			logo: { src: './src/assets/logo.svg', alt: 'Você na Facul' },
			favicon: '/favicon.svg',
			// Site só em português: o pt-BR vira o idioma raiz (sem seletor de idioma).
			locales: {
				root: { label: 'Português', lang: 'pt-BR' },
			},
			// "Editar esta página" abre o arquivo no editor do GitHub.
			editLink: {
				baseUrl: 'https://github.com/vcnafacul/docs/edit/main/',
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/vcnafacul/docs' },
			],
			customCss: ['./src/styles/custom.css'],
			// Uma seção por público; página nova numa pasta entra no menu sozinha.
			sidebar: [
				{ label: 'Estudantes', items: [{ autogenerate: { directory: 'estudantes' } }] },
				{ label: 'Cursinhos', items: [{ autogenerate: { directory: 'cursinhos' } }] },
				{ label: 'Equipe do projeto', items: [{ autogenerate: { directory: 'projeto' } }] },
			],
		}),
		mdx(),
	],
});
