import { getProjects } from "@/lib/api";
import { ProjectList } from "./ProjectList";
import markdownToHtml from "@/lib/markdownToHtml";

export async function ProjectSection() {
  // const post = getPostBySlug(params.slug);
  const projects = await getProjects();

  if (!projects) {
    return "No Projects";
  }

  return <ProjectList projects={projects} />;
}
