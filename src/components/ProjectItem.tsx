import { Project } from "@/lib/api";
import Image from "next/image";

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

      <span className="absolute top-8 right-8 text-sm italic">
        {project.year}
      </span>

      <div
        className={`w-full h-full bg-zinc-950 z-10 rounded-lg p-8 flex flex-row items-center gap-8 transition duration-500 ${
          isActive && "rounded-b-none transition duration-1000"
        }`}
      >
        <div className="w-20 h-20 bg-zinc-900 rounded"></div>
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
        className={`grid grid-rows-[0fr] aria-[hidden=false]:grid-rows-[1fr] bg-zinc-950 px-8 rounded-b-lg transition-all duration-500`}
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
                <span className="text-sm text-zinc-400 group-hover/tech:text-white">
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
            <a
              href={project.source}
              target="_blank"
              className="h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer"
            >
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
              </div>
              <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center gap-3 px-4">
                <span className="">Source</span>
                <div className="w-4 h-4 flex justify-center items-center relative overflow-hidden">
                  <Image
                    src={"/github.svg"}
                    fill
                    className="object-contain"
                    alt="source link"
                  />
                </div>
              </div>
            </a>
            <a
              href={project.demo}
              target="_blank"
              className="h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer"
            >
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
              </div>
              <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center gap-3 px-4">
                <span className="">Live</span>
                <div className="w-4 h-4 flex justify-center items-center relative overflow-hidden">
                  <Image
                    src={"/external-link.svg"}
                    fill
                    className="object-contain"
                    alt="source link"
                  />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
