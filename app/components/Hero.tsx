// components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Music, Pause } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Mencegah Hydration Error untuk elemen yang bergantung pada browser API
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Browser sering memblokir auto-play tanpa interaksi user
        audioRef.current.play().catch((err) => console.log("Playback blocked:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#0a0a0a] text-[#d4af37] overflow-hidden">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" /> 
        
        <Image
          // Hapus width/height statis jika menggunakan fill agar responsif
          fill
          src="https://images.unsplash.com/photo-1519741497674-611481863552"
          alt="Prewedding Background"
          className="object-cover scale-110 animate-subtle-zoom"
          // Properti priority krusial untuk LCP (Largest Contentful Paint)
          priority
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="z-20 text-center text-[#d4af37] px-4"
      >
        <span className="uppercase tracking-[0.5em] text-sm mb-4 block">
          The Wedding of
        </span>
        <h1 className="font-serif text-6xl md:text-9xl mb-4 drop-shadow-2xl">
          Rama & Shinta
        </h1>
        <p className="text-lg md:text-xl tracking-[0.3em] italic">08 . 08 . 2026</p>
      </motion.div>

      {/* Floating Music Control */}
      {mounted && (
        <Button
          // Gunakan variant "ghost" atau styling manual agar tidak konflik dengan CSS Button default
          onClick={toggleMusic}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center bg-[#d4af37] hover:bg-[#b8962f] text-black rounded-full shadow-lg transition-all duration-300 active:scale-90"
        >
          {isPlaying ? <Pause size={20} /> : <Music size={20} />}
        </Button>
      )}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} loop src="/wedding-song.mp3" preload="auto" />
    </section>
  );
}