"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function TimeWidget() {
  const [time, setTime] = useState<{
    hours: string;
    mins: string;
    apm: string;
  } | null>(null);

  useEffect(() => {
    function formatTime() {
      let dateTime = new Date();
      let [hrs, mins, sec, apm] = dateTime
        .toLocaleTimeString("en-US", { timeZone: "Europe/Paris" })
        .split(/\W/);

      const hours = ((Number(hrs) + 11) % 12) + 1;
      const paddedHours = hours < 10 ? `0${hours}` : hours.toString();
      const paddedMins =
        Number(mins) < 10 ? `0${Number(mins)}` : Number(mins).toString();
      setTime({ hours: paddedHours, mins: paddedMins, apm });
    }

    formatTime();

    const intervalId = setInterval(() => {
      formatTime();
    }, 1000 * 60);
    return () => clearInterval(intervalId);
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
