"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const images = [
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974",
  "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-[#d4af37] mb-12 italic">
          Momen Bahagia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="h-80 overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            >
              <Image
                width={480}
                height={480}
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
