import Link from "next/link";
import { getArticles } from "../_lib/articles";
import { WritingCard } from "./writing-card";

export async function WritingSection() {
  const articles = await getArticles();

  return (
    <section id="writing" className="scroll-mt-8 py-5 sm:py-10">
      <div>
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Writing</h2>
        </div>
        <div className="grid gap-4">
          {articles.map((article) => <WritingCard key={article.slug} article={article} />)}
        </div>
        <Link
          href="/writing"
          className="mt-6 inline-flex text-sm text-accent-primary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
        >
          View all blogs <span aria-hidden="true" className="ml-2">↗</span>
        </Link>
      </div>
    </section>
  );
}