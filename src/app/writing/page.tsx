import { CollectionPage } from "../_components/collection-page";
import { WritingCard } from "../_components/writing-card";
import { getArticles } from "../_lib/articles";

export const metadata = {
  title: "Writing — Thien Luong",
};

export default async function WritingPage() {
  const articles = await getArticles();

  return (
    <CollectionPage title="Writing">
      {articles.map((article) => (
        <WritingCard key={article.slug} article={article} showDate />
      ))}
    </CollectionPage>
  );
}
