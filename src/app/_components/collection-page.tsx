import type { ReactNode } from "react";
import { BackButton } from "./back-button";

type CollectionPageProps = {
  title: string;
  children: ReactNode;
};

export function CollectionPage({ title, children }: CollectionPageProps) {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
      <BackButton />
      <header className="mt-12 border-b border-text-primary/10 pb-8">
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
      </header>
      <div className="mt-10 grid gap-4">{children}</div>
    </main>
  );
}
