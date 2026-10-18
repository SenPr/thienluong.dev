import Image from "next/image";
import Link from "next/link";
import { formatArticleDate, type ArticleSummary } from "../_lib/articles";

type WritingCardProps = {
  article: ArticleSummary;
  showDate?: boolean;
};

export function WritingCard({ article, showDate = false }: WritingCardProps) {
  return (
    <Link
      href={`/writing/${article.slug}`}
      className="group flex min-w-0 gap-4 rounded-xl border border-text-primary/10 bg-surface-card p-4 transition-colors hover:border-accent-primary/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary sm:gap-5 sm:p-5"
    >
      {article.preview ? (
        <div className="relative aspect-video w-1/4 shrink-0 overflow-hidden rounded-xl bg-background-dark">
          <Image
            src={article.preview}
            alt=""
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="min-w-0 flex-1">
        <h3 className="wrap-break-word text-xl font-medium leading-tight">{article.title}</h3>
        <p className="mt-3 font-mono text-sm text-accent-primary">
          {showDate ? formatArticleDate(article.date) : article.year}
        </p>
      </div>
    </Link>
  );
}
