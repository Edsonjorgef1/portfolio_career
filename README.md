# Edson Francisco Portfolio

Portfólio técnico bilingue construído com Next.js, TypeScript, Tailwind CSS, Framer Motion, shadcn/ui e Lucide React.

## Requisitos

- Node.js 20+ ou 22+
- npm 10+

## Como rodar localmente

1. Instalar dependências:

```bash
npm install
```

2. Iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abrir no browser:

```text
http://localhost:3000
```

## Comandos úteis

Executar build de produção:

```bash
npm run build
```

Iniciar a app compilada:

```bash
npm run start
```

## Rotas principais

- `/` redirecciona para `/pt`
- `/pt`
- `/en`
- `/pt/projects/[slug]`
- `/en/projects/[slug]`
- `/projects/[slug]` redirecciona para `/pt/projects/[slug]`

## Assets opcionais

Adicionar estes ficheiros quando estiverem disponíveis:

- `/public/profile/profile.jpg`
- `/public/projects/<slug>.jpg`
- `/public/Edson-Francisco-CV.pdf`

## Deploy

Projecto pronto para deploy na Vercel.

## Issues abertos / Próximas actividades

- [ ] **Galeria de fotos por projecto** — Adicionar um array `gallery` em `types/portfolio.ts` e preencher `lib/portfolioData.ts` com caminhos de imagens adicionais por `slug`. Depois, criar um componente de carrossel responsivo na página `app/[locale]/projects/[slug]/page.tsx` para mostrar as fotos com miniaturas e suporte a teclado.
- [ ] **Links de referência acessíveis** — Incluir um campo `referenceLinks` (título, url, tipo) em cada projecto dentro de `lib/portfolioData.ts`, garantindo validação no tipo correspondente. Renderizar essa lista tanto no `ProjectCard` (`components/cards/project-card.tsx`) quanto no case study (`app/[locale]/projects/[slug]/page.tsx`) com ícones, etiquetas e atributos `aria-label` descritivos.
- [ ] **CTA de galeria e referências na listagem** — Actualizar a secção de projectos (`components/sections/projects-section.tsx`) para destacar quando um projecto tem galeria ou links de referência disponíveis (ex.: badge ou tooltip), incentivando o utilizador a explorar os novos recursos.
