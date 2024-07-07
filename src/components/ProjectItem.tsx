import { Project } from "@/lib/api";
import Image from "next/image";
import { SecondaryButton } from "./SecondaryButton";
import { GithubIcon } from "./icons/Github";
import { ExternalLinkIcon } from "./icons/ExternalLink";

export function ProjectItem({
  isActive,
  handleActive,
  project,
}: {
  isActive: boolean;
  handleActive: () => void;
  project: Project;
}) {
  return (
    <div
      className={`overflow-hidden w-full bg-zinc-900 p-[1px] relative group rounded-lg z-0 ${
        !isActive && "cursor-pointer"
      }`}
      onClick={handleActive}
    >
      <div
        className={`absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-50 transition -z-10 ${
          isActive && "opacity-50"
        }`}
      >
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
      </div>

      <div className="absolute top-8 right-8 flex items-center gap-2">
        {project.active ? (
          <div className="p-1 text-xs uppercase font-semibold bg-zinc-900 border border-cyan-700 flex justify-center items-center text-cyan-600 rounded-sm tracking-tight">
            ACTIVE
          </div>
        ) : (
          <div className="p-1 text-xs uppercase font-semibold bg-zinc-900 border border-zinc-800 flex justify-center items-center text-zinc-400 rounded-sm">
            {project.year}
          </div>
        )}
      </div>

      <div
        className={`w-full h-full bg-zinc-950 z-10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-8 transition duration-500 ${
          isActive && "rounded-b-none transition duration-1000"
        }`}
      >
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-zinc-900 rounded flex justify-center items-center relative overflow-hidden">
          <Image
            src={`/projects${project.imgPath}`}
            width={0}
            height={0}
            sizes="100vw"
            className="object-contain h-8 w-8"
            alt={project.name}
          />
        </div>
        <div className="flex flex-col gap-4 flex-1 min-h-full">
          <h5
            className={`w-fit text-xl font-bold bg-clip-text transition group-hover:text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 ${
              isActive ? "text-transparent" : "text-white"
            }`}
          >
            {project.name}
          </h5>

          <p>{project.description}</p>
        </div>
      </div>

      <div
        className={`grid grid-rows-[0fr] aria-[hidden=false]:grid-rows-[1fr] bg-zinc-950 px-6 md:px-8 rounded-b-lg transition-all duration-500`}
        aria-hidden={!isActive}
      >
        <div className={`w-full overflow-hidden`}>
          <div className="w-full h-[1px] bg-zinc-900"></div>
          <ul className="my-8 flex flex-wrap gap-2">
            {project.stack.map((tech, i) => (
              <div
                key={i}
                className="py-1 px-2 bg-zinc-900 rounded group/tech cursor-default"
              >
                <span className="text-xs md:text-sm text-zinc-400 group-hover/tech:text-white">
                  {tech}
                </span>
              </div>
            ))}
          </ul>
          <div
            className="flex leading-relaxed flex-col gap-4 my-8"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          <div className="flex items-center justify-end gap-2 my-8">
            {project.source ? (
              <a href={project.source} target="_blank">
                <SecondaryButton icon={<GithubIcon />}>Source</SecondaryButton>
              </a>
            ) : (
              <span className="text-zinc-400 italic text-sm">
                Internal Repo
              </span>
            )}
            <a href={project.demo} target="_blank">
              <SecondaryButton icon={<ExternalLinkIcon />}>
                Website
              </SecondaryButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
