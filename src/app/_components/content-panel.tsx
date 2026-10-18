import { AboutSection } from "./about-section";
import { SiteFooter } from "./site-footer";
import { ProjectSection } from "./project-section";
import { WritingSection } from "./writing-section";

export function ContentPanel() {
  return (
    <div className="relative min-w-0 flex-1 bg-background-dark">
      <div id="top" className="mx-auto max-w-3xl px-6 sm:px-10 lg:px-14 xl:px-20">
        <AboutSection />
        <ProjectSection />
        <WritingSection />
        <SiteFooter />
      </div>
    </div>
  );
}