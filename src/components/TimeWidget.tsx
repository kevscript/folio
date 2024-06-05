"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function TimeWidget() {
  const [time, setTime] = useState<{
    hours: number;
    mins: number;
    apm: string;
  } | null>(null);

  useEffect(() => {
    let dateTime = new Date();
    let [hrs, mins, sec, apm] = dateTime
      .toLocaleTimeString("en-US", { timeZone: "Europe/Paris" })
      .split(/\W/);

    const hours = ((Number(hrs) + 11) % 12) + 1;

    setTime({ hours: hours, mins: Number(mins), apm });
  }, []);

  return (
    <li className="flex flex-row gap-2 items-center">
      <div className="w-4 h-4 flex justify-center items-center overflow-hidden relative">
        <Image src={`/clock.svg`} className="object-contain" fill alt="clock" />
      </div>
      <span className="text-sm uppercase">
        <strong>
          {time?.hours || "0"}:{time?.mins || "00"}
        </strong>{" "}
        {time?.apm || "AM"} <i>LT</i>
      </span>
    </li>
  );
}
