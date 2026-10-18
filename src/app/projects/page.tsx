import { CollectionPage } from "../_components/collection-page";
import { ProjectList } from "../_components/project-list";
import { projects } from "../_components/projects";

export const metadata = {
  title: "Projects — Thien Luong",
};

export default function ProjectsPage() {
  return (
    <CollectionPage title="Projects">
      <ProjectList projects={projects} />
    </CollectionPage>
  );
}
