import Image from "next/image";

export function Socials() {
  return (
    <ul className="flex flex-row gap-2">
      <a
        href="https://github.com/kevscript"
        target="_blank"
        className="w-10 h-10 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer"
      >
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
        </div>
        <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
          <div className="w-4 h-4 flex justify-center items-center relative overflow-hidden">
            <Image
              src={`/github.svg`}
              className="object-contain"
              fill
              alt="github logo"
            />
          </div>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/kevinostafinski"
        target="_blank"
        className="w-10 h-10 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer"
      >
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
        </div>
        <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
          <div className="w-6 h-6 flex justify-center items-center relative overflow-hidden">
            <Image
              src={`/linkedin.svg`}
              className="object-contain"
              fill
              alt="linkedin logo"
            />
          </div>
        </div>
      </a>
      <a
        href="https://x.com/kevscript"
        target="_blank"
        className="w-10 h-10 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer"
      >
        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
          <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
        </div>
        <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
          <div className="w-3.5 h-3.5 flex justify-center items-center relative overflow-hidden">
            <Image
              src={`/twitter.svg`}
              className="object-contain"
              fill
              alt="x (twitter) logo"
            />
          </div>
        </div>
      </a>
    </ul>
  );
}
