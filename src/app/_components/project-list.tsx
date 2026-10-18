import Link from "next/link";
import type { Project } from "./projects";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-text-primary/10 font-mono text-xs uppercase text-text-muted">
            <th scope="col" className="px-4 py-3 font-normal">Year</th>
            <th scope="col" className="px-4 py-3 font-normal">Project</th>
            <th scope="col" className="px-4 py-3 font-normal">Built With</th>
            <th scope="col" className="px-4 py-3 text-right font-normal">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.title} className="border-b border-text-primary/10 align-top">
              <td className="whitespace-nowrap px-4 py-5 font-mono text-sm text-text-muted">
                {project.year}
              </td>
              <th scope="row" className="px-4 py-5 font-medium">
                {project.title}
              </th>
              <td className="px-4 py-5 text-sm text-text-muted">
                {project.builtWith.join(", ")}
              </td>
              <td className="px-4 py-5 text-right text-sm">
                {project.url ? (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent-primary transition-colors hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-primary"
                  >
                    View <span aria-hidden="true">↗</span>
                  </Link>
                ) : (
                  <span className="text-text-muted">Not available</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
