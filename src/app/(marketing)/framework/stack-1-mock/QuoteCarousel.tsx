"use client";

import { useEffect, useState } from "react";

const QUOTES = [
  {
    text: "The advantage isn't virtue. It's having the right numbers in the right folder before someone asks.",
  },
  {
    text: "Most companies don't need more data. They need to organize the data they already generate.",
  },
  {
    text: "You can't improve what you can't measure. You can't defend what you can't trace.",
  },
  {
    text: "Sustainability looks like a discipline because that's exactly what it is.",
  },
];

const ACCENT = "#3D2E7C";
const INTERVAL_MS = 6000;

export default function QuoteCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % QUOTES.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-[#ddd5c9] p-8 rounded-2xl flex flex-col justify-between min-h-[200px]">
      <p
        key={index}
        className="text-base text-gray-700 italic leading-relaxed mb-6 transition-opacity duration-500"
        style={{ fontFamily: "ui-serif, Georgia, serif" }}
      >
        &ldquo;{QUOTES[index].text}&rdquo;
      </p>
      <div className="flex gap-2">
        {QUOTES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show quote ${i + 1}`}
            className="w-2 h-2 rounded-full transition-all"
            style={{
              backgroundColor: i === index ? ACCENT : "#ddd5c9",
              transform: i === index ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
