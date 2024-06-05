import { getProjects } from "@/lib/api";
import { ProjectList } from "./ProjectList";
import { Container } from "./Container";
import { SectionTitle } from "./SectionTitle";

export async function ProjectSection() {
  const projects = await getProjects();

  if (!projects) {
    return "No Projects";
  }

  return (
    <section>
      <Container className="gap-16 flex flex-col">
        <SectionTitle label="Projects" />
        <ProjectList projects={projects} />
      </Container>
    </section>
  );
}
