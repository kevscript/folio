import { Container } from "./Container";
import { Socials } from "./Socials";
import { TimeWidget } from "./TimeWidget";
import { WeatherWidget } from "./WeatherWidget";
import Image from "next/image";

export function ProfileSection() {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8">
          <div className="w-full bg-zinc-900 p-[1px] relative group rounded-lg overflow-hidden z-0">
            <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-50 transition -z-10">
              <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
            </div>
            <div className="w-full h-full bg-zinc-950 z-10 rounded-lg p-8 flex flex-row gap-8">
              <div className="w-24 h-24 bg-zinc-900 rounded"></div>
              <div className="flex flex-col gap-4 justify-center">
                <h3 className="text-lg font-bold">Kévin Ostafinski</h3>
                <ul className="flex flex-row gap-2">
                  <Socials />

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    className="h-8 bg-zinc-900 p-[1px] relative group/social rounded overflow-hidden z-0 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/social:opacity-50 transition -z-10">
                      <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-purple-500"></div>
                    </div>
                    <div className="w-full h-full bg-zinc-950 z-10 rounded flex justify-center items-center gap-3 px-4">
                      <span>Resume</span>
                      <div className="w-4 h-4 relative flex justify-center items-center overflow-hidden">
                        <Image
                          src={"/download.svg"}
                          fill
                          className="object-contain"
                          alt="download"
                        />
                      </div>
                    </div>
                  </a>
                </ul>
              </div>
            </div>
            <span className="absolute top-8 right-8 text-sm italic text-cyan-400">
              Available
            </span>
          </div>
          <ul className="flex flex-row gap-8 justify-end">
            <TimeWidget />
            <li className="flex flex-row gap-2 items-center">
              <div className="w-4 h-4 flex justify-center items-center overflow-hidden relative">
                <Image
                  src={`/map-pin.svg`}
                  className="object-contain"
                  fill
                  alt="location"
                />
              </div>
              <span className="text-sm">
                <strong>Paris</strong>, <i>FR</i>
              </span>
            </li>
            <WeatherWidget />
          </ul>
        </div>
      </Container>
    </section>
  );
}
