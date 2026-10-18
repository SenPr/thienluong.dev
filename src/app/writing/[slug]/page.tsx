import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { BackButton } from "@/app/_components/back-button";
import { formatArticleDate, getArticleBySlug, getArticles } from "@/app/_lib/articles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug).catch(() => null);

  return article
    ? { title: `${article.title} — Thien Luong` }
    : { title: "Writing — Thien Luong" };
}

function ArticleSkeleton() {
  return (
    <article>
      <header className="border-b border-text-primary/10 pb-8">
        <div className="h-5 w-16 animate-pulse rounded bg-surface-card" />
        <div className="mt-4 h-12 w-3/4 animate-pulse rounded bg-surface-card" />
      </header>
      <div className="mt-10 space-y-4">
        <div className="h-5 w-full animate-pulse rounded bg-surface-card" />
        <div className="h-5 w-5/6 animate-pulse rounded bg-surface-card" />
        <div className="h-5 w-2/3 animate-pulse rounded bg-surface-card" />
      </div>
    </article>
  );
}

async function ArticleContent({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug).catch(() => null);

  if (!article) {
    notFound();
  }

  return (
    <article>
      <header className="border-b border-text-primary/10 pb-8">
        <p className="font-mono text-sm text-accent-primary">
          {formatArticleDate(article.date)}
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          {article.title}
        </h1>
        {article.preview ? (
          <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-surface-card">
            <Image
              src={article.preview}
              alt={`${article.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        ) : null}
      </header>
      <div className="mt-10 space-y-6 leading-7 text-text-muted [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:leading-tight [&_h1]:text-text-primary [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-text-primary [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-text-primary [&_p]:mt-6 [&_strong]:text-text-primary [&_a]:text-accent-primary [&_a]:underline [&_code]:rounded [&_code]:bg-surface-card [&_code]:px-1 [&_code]:text-accent-secondary [&_pre]:overflow-x-auto [&_pre]:rounded [&_pre]:bg-surface-card [&_pre]:p-4 [&_ul]:list-disc [&_ul]:pl-6">
        <MDXRemote source={article.content} />
      </div>
      <footer className="mt-16 border-t border-text-primary/10 pt-8">
        <div className="flex items-end justify-between gap-6">
          <a
            href="/"
            className="text-sm text-accent-primary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
          >
            Home <span aria-hidden="true" className="ml-2">↗</span>
          </a>
          <p className="font-mono text-sm text-text-muted">Thien Luong</p>
        </div>
        <div className="mt-8">
          <BackButton fallbackHref="/" />
        </div>
      </footer>
    </article>
  );
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
      <div className="mb-12">
        <BackButton />
      </div>
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleContent params={params} />
      </Suspense>
    </main>
  );
}
