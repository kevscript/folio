import { getWeather } from "@/lib/weather";
import Image from "next/image";

export async function WeatherWidget() {
  const weatherData = await getWeather();
  if (!weatherData) {
    return null;
  }

  const text: string = weatherData.weather[0].main;
  const temperature: number = Math.round(Number(weatherData.main.temp));
  const description = weatherData.weather[0].description;
  const iconId: string = weatherData.weather[0].icon;

  return (
    <li className="flex flex-row items-center gap-1">
      <div className="w-6 h-6 flex justify-center items-center overflow-hidden relative">
        <Image
          src={`/owm/${iconId}.svg`}
          className="object-contain"
          fill
          alt={description}
        />
      </div>
      <span className="text-sm">
        {text}, <strong>{temperature}</strong>
        <i>°C</i>
      </span>
    </li>
  );
}
