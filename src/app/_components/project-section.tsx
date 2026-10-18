import Link from "next/link";
import { ProjectCard } from "./project-card";
import { projects, SHOWCASE_PROJECT_INDEXES } from "./projects";

export function ProjectSection() {
  const showcaseProjects = projects
    .filter((project) => SHOWCASE_PROJECT_INDEXES.includes(project.index))
    .sort((first, second) => first.index - second.index);

  return (
    <section id="projects" className="scroll-mt-8 py-5 sm:py-10">
      <div>
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="text-2xl font-semibold sm:text-3xl">Projects</h2>
        </div>
        <div className="grid gap-4">
          {showcaseProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-6 inline-flex text-sm text-accent-primary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
        >
          View all projects <span aria-hidden="true" className="ml-2">↗</span>
        </Link>
      </div>
    </section>
  );
}