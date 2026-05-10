// src/components/MarqueeCards.tsx
"use client";
import { motion } from "framer-motion";

const GUESTS = [
  {
    name: "Andi & Sari",
    date: "12 Dec 2025",
    msg: "Selamat menempuh hidup baru!",
  },
  {
    name: "Budi & Laras",
    date: "05 Jan 2026",
    msg: "Semoga samawa ya Rama & Shinta.",
  },
  {
    name: "Doni & Maya",
    date: "20 Feb 2026",
    msg: "Gak nyangka akhirnya nyusul juga!",
  },
  {
    name: "Eko & Dwi",
    date: "15 Mar 2026",
    msg: "Best wishes for both of you!",
  },
  {
    name: "Feri & Nia",
    date: "01 Apr 2026",
    msg: "Langgeng terus sampai kakek nenek.",
  },
];

export default function MarqueeCards() {
  return (
    <section className="py-20 bg-[#0a0a0a] overflow-hidden border-y border-[#d4af37]/10">
      <h2 className="font-serif text-3xl text-[#d4af37] text-center mb-12 italic italic">
        Ucapan Sahabat & Keluarga
      </h2>

      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {/* Kita duplikasi listnya agar loopingnya seamless (halus) */}
          {[...GUESTS, ...GUESTS].map((item, index) => (
            <div
              key={index}
              className="inline-block w-72 p-6 bg-white/5 border border-[#d4af37]/20 rounded-2xl backdrop-blur-sm"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#d4af37] font-bold tracking-wider">
                  {item.name}
                </span>
                <span className="text-[10px] text-gray-500 uppercase">
                  {item.date}
                </span>
                <p className="text-gray-300 text-sm italic whitespace-normal mt-2">
                  {item.msg}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
