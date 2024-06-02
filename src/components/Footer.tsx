import { Container } from "./Container";

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <ul className="flex gap-2 items-center">
            <li className="w-8 h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer">
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
              </div>
              <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
            </li>
            <li className="w-8 h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer">
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
              </div>
              <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
            </li>
            <li className="w-8 h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer">
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
              </div>
              <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
            </li>
            <li className="w-8 h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer">
              <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
              </div>
              <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center">
                <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
              </div>
            </li>
          </ul>
          <button className="h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer">
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
            </div>
            <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center gap-3 px-4">
              <span>Resume</span>
              <div className="w-4 h-4 rounded-full bg-zinc-900"></div>
            </div>
          </button>
        </div>
        <div className="flex justify-between items-center text-zinc-500">
          <span>2024 - All rights reserved.</span>
          <span>Made with :brain: & :hands:</span>
        </div>
      </Container>
    </footer>
  );
}
