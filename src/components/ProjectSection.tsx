import { getProjects } from "@/lib/api";
import { ProjectList } from "./ProjectList";

export async function ProjectSection() {
  const projects = await getProjects();

  if (!projects) {
    return "No Projects";
  }

  return <ProjectList projects={projects} />;
}
