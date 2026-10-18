import Image from "next/image";
import type { Project } from "./projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectPreview({ project }: ProjectCardProps) {
  const initials = project.title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-accent-primary text-background-dark">
      {project.preview ? (
        <Image
          src={project.preview}
          alt={`${project.title} preview`}
          fill
          sizes="25vw"
          className="object-cover"
        />
      ) : (
        <span aria-label={`${project.title} initials`} className="text-4xl font-semibold sm:text-5xl">
          {initials}
        </span>
      )}
    </div>
  );
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="flex min-w-0 flex-col justify-between">
      <div className="min-w-0">
        <h3 className="wrap-break-word text-xl font-medium leading-tight">
          {project.title} {project.url ? <span className="text-accent-primary">↗</span> : null}
        </h3>
        <p className="mt-2 wrap-break-word text-sm leading-6 text-text-muted">
          {project.description}
        </p>
        <div className="mt-2 flex flex-wrap gap-2 text-[10px] uppercase text-accent-secondary">
          {project.tags.map((tag, tagIndex) => (
            <span key={tag} className="bg-accent-primary rounded-2xl text-black p-2">
              {tagIndex > 0 && " "}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  const card = (
    <article className="group flex min-w-0 gap-4 rounded-xl border border-text-primary/10 bg-surface-card p-4 transition-colors hover:border-accent-primary/60 sm:gap-5 sm:p-5">
      <div className="w-1/4 shrink-0">
        <ProjectPreview project={project} />
      </div>
      <div className="min-w-0 flex-1">
        <ProjectDetails project={project} />
      </div>
    </article>
  );

  return project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${project.title}`}
      className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
    >
      {card}
    </a>
  ) : card;
}