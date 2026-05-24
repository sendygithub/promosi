// app/mood-mochi/page.tsx  (atau nama file sesuai keinginanmu)

"use client";

import { useState } from "react";

type MoodType = "senang" | "bosen" | "marah" | "sedih" | "bahagia";

interface MoodData {
  emoji: string;
  text: string;
  bgClass: string; // nama field diubah agar lebih jelas (class Tailwind)
}

const moodData: Record<MoodType, MoodData> = {
  senang: {
    emoji: "😊",
    text: "Senang sekali hari ini aku bermain bersama Sendy!",
    bgClass: "bg-gradient-to-br from-green-200 to-emerald-300",
  },
  bosen: {
    emoji: "😐",
    text: "Aku bosen nih, gak ada yang nemenin aku main...",
    bgClass: "bg-gradient-to-br from-pink-200 to-rose-300",
  },
  marah: {
    emoji: "😠",
    text: "Aduh aku marah banget nih, mainanku diambil sama Sendy!",
    bgClass: "bg-gradient-to-br from-red-300 to-rose-400", // diubah jadi gradient biar konsisten
  },
  sedih: {
    emoji: "😢",
    text: "Aku sedih banget hari ini, Sendy gak mau ajak aku main...",
    bgClass: "bg-gradient-to-br from-orange-200 to-amber-300",
  },
  bahagia: {
    emoji: "😁",
    text: "Hari ini aku bahagia sekali, Sendy ngajak aku main!",
    bgClass: "bg-gradient-to-br from-yellow-300 to-amber-400",
  },
};

export default function MoodMochiPage() {
  const [mood, setMood] = useState<MoodType>("senang");
  const currentMood = moodData[mood];

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background yang berubah sesuai mood */}
      <div
        className={`absolute inset-0 ${currentMood.bgClass} transition-all duration-700 -z-10`}
      />

      {/* Konten utama */}
      <div className="relative z-10 text-center space-y-8 max-w-xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-lg">
          Mood Mochi Hari Ini 🐱
        </h1>

        <div className="text-9xl md:text-[14rem] transition-transform duration-500 hover:scale-110 active:scale-105">
          {currentMood.emoji}
        </div>

        <p className="text-xl md:text-2xl font-medium text-gray-800 bg-white/75 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/40">
          {currentMood.text}
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10">
          {(Object.keys(moodData) as MoodType[]).map((key) => (
            <button
              key={key}
              onClick={() => setMood(key)}
              className={`
                px-6 py-3 rounded-full font-semibold text-base sm:text-lg shadow-md
                transition-all duration-300 transform
                ${mood === key
                  ? "scale-110 ring-4 ring-white/60 shadow-2xl"
                  : "opacity-85 hover:opacity-100 hover:scale-105 active:scale-95"
                }
                bg-gray-800/85 hover:bg-gray-900/95 text-white border border-gray-700/50
              `}
            >
              {moodData[key].emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </div>

        <p className="text-sm md:text-base text-gray-600 mt-12 opacity-80">
          Klik tombol di atas untuk mengubah mood Mochii! 🐾
        </p>
      </div>
    </main>
  );
}