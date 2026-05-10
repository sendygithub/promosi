"use client";
import { motion } from "framer-motion";
import Countdown, { CountdownRenderProps } from "react-countdown";
import { useState, useEffect } from "react";

const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => (
  <div className="flex gap-4 md:gap-8 justify-center">
    {[
      { label: "Hari", value: days },
      { label: "Jam", value: hours },
      { label: "Menit", value: minutes },
      { label: "Detik", value: seconds },
    ].map((item, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border border-[#d4af37]/30 bg-white/5 rounded-full mb-2">
          <span className="text-2xl md:text-4xl font-bold text-[#d4af37]">
            {item.value}
          </span>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-gray-400">
          {item.label}
        </span>
      </div>
    ))}
  </div>
);

export default function CountdownSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render placeholder atau loading agar layout tidak lompat
    return <div className="w-16 h-16">...</div>; 
  }

  return (
    // Kode countdown asli kamu di sini
    <span className="text-2xl md:text-4xl font-bold text-[#d4af37]">
      27
    </span>
  );
}