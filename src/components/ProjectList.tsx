"use client";
import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { Project } from "@/lib/api";

export function ProjectList({ projects }: { projects: Project[] }) {
  const [activeProjectId, setActiveProjectId] = useState(() => projects[0].id);

  function handleActive(newId: string) {
    if (activeProjectId !== newId) {
      setActiveProjectId(newId);
    }
  }

  return (
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
  );
}
