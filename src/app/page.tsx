import { ContentPanel } from "./_components/content-panel";
import { ProfileSidebar } from "./_components/profile-sidebar";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col bg-background-dark lg:flex-row">
      <ProfileSidebar />
      <ContentPanel />
    </main>
  );
}
