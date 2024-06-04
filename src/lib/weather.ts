export const getWeather = async () => {
  const lat = 48.87908508355064;
  const lon = 2.3571558055772903;
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`,
    { next: { revalidate: 60 * 15 } }
  );

  if (!res.ok) {
    throw new Error("failed to fetch weather");
  }
  return res.json();
};
