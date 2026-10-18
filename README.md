# thienluong.dev

Personal portfolio and writing site for myself. The site is a place to share selected projects, notes, and the work I have done.

## What's inside

- About section with profile and contact links
- Selected project showcase with technology tags and external links
- Writing collection powered by local MDX articles
- Individual project and article pages
- Downloadable resume link

## Built with

- [Next.js](https://nextjs.org) 16 with the App Router
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 4
- [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) for article content
- [gray-matter](https://github.com/jonschlinkert/gray-matter) for frontmatter parsing

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

```bash
npm run dev      # Start the development server
npm run lint     # Check the project with ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

## Project structure

```text
content/articles/       Writing content in MDX
public/                  Images and static assets
src/app/                 Routes, layout, and global styles
src/app/_components/    Shared portfolio sections and cards
src/app/_lib/            Content loading utilities
src/app/projects/        Projects route
src/app/writing/         Writing routes
```

## Adding content

Projects are defined in [`src/app/_components/projects.ts`](src/app/_components/projects.ts). Add new writing as an `.mdx` file in [`content/articles`](content/articles) with the frontmatter fields expected by the article loader.

## Links

- Website: [thienluong.dev](https://thienluong.dev)
- GitHub: [github.com/senpr](https://github.com/senpr)
- LinkedIn: [linkedin.com/in/thiennluong](https://linkedin.com/in/thiennluong)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.