"use client";
import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { Container } from "./Container";
import { Project } from "@/lib/api";

export function ProjectList({ projects }: { projects: Project[] }) {
  const [activeProjectId, setActiveProjectId] = useState(() => projects[0].id);

  function handleActive(newId: string) {
    if (activeProjectId !== newId) {
      setActiveProjectId(newId);
    }
  }

  return (
    <section>
      <Container className="gap-16 flex flex-col">
        <div className="relative z-0 max-w-fit">
          <h3 className="uppercase font-black text-3xl italic">PROJECTS</h3>
          <h3 className="absolute top-[1px] -left-[1px] uppercase font-black text-3xl italic text-cyan-400 -z-10">
            PROJECTS
          </h3>
          <h3 className="absolute bottom-[1px] -right-[px] uppercase font-black text-3xl italic text-purple-500 -z-20">
            PROJECTS
          </h3>
        </div>

        <ul className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
              isActive={activeProjectId === project.id}
              handleActive={() => handleActive(project.id)}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
