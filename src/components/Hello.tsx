"use client";

export function Hello() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <p>
      Hey, hope you&apos;re having a lovely{" "}
      {days[new Date(Date.now()).getDay()]}!
    </p>
  );
}
