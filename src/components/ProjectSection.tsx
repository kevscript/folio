"use client";
import { useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { Container } from "./Container";

export function ProjectSection() {
  const [activeProjectId, setActiveProjectId] = useState(0);

  function handleActive(newId: number) {
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
          {Array.from({ length: 5 }, (_, i) => i).map((i) => (
            <ProjectItem
              key={i}
              isActive={activeProjectId === i}
              handleActive={() => handleActive(i)}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
