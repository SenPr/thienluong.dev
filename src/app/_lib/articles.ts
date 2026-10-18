import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

type ArticleFrontmatter = {
  title: string;
  year: number;
  date: string;
  preview?: string;
};

export type ArticleSummary = ArticleFrontmatter & {
  slug: string;
};

export type Article = ArticleSummary & {
  content: string;
};

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

async function getArticleSlugs() {
  const files = await fs.readdir(articlesDirectory);

  return files
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => path.basename(file, ".mdx"));
}

export async function getArticles(): Promise<ArticleSummary[]> {
  const slugs = await getArticleSlugs();
  const articles = await Promise.all(slugs.map((slug) => getArticleBySlug(slug)));

  return articles
    .map(({ slug, title, year, date, preview }) => ({ slug, title, year, date, preview }))
    .sort((first, second) => second.year - first.year);
}

export async function getArticleBySlug(slug: string): Promise<Article> {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = data as ArticleFrontmatter;

  return {
    ...frontmatter,
    slug,
    content,
  };
}
