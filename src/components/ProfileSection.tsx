import { Container } from "./Container";
import { SecondaryButton } from "./SecondaryButton";
import { Socials } from "./Socials";
import { TimeWidget } from "./TimeWidget";
import { WeatherWidget } from "./WeatherWidget";
import Image from "next/image";
import { DownloadIcon } from "./icons/Download";

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
              <div className="w-24 h-24 bg-zinc-900 rounded flex justify-center items-center relative overflow-hidden">
                <Image
                  src={"/avatar_1.png"}
                  fill
                  alt="avatar"
                  className="avatar hue-rotate-180"
                />
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <h3 className="text-lg font-bold">Kévin Ostafinski</h3>
                <ul className="flex flex-row gap-2">
                  <Socials />

                  <a href="/resume.pdf" target="_blank">
                    <SecondaryButton icon={<DownloadIcon />}>
                      Resume
                    </SecondaryButton>
                  </a>
                </ul>
              </div>
            </div>
            <span className="absolute top-8 right-8 text-sm italic text-cyan-400">
              Available
            </span>
          </div>
          <ul className="flex flex-row gap-8 justify-end">
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
            <TimeWidget />
            <WeatherWidget />
          </ul>
        </div>
      </Container>
    </section>
  );
}
