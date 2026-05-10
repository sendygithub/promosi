"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryPhotos = [
  "/gallery/kiara1.jpg",
  "/gallery/kiara2.jpg",
  "/gallery/kiara3.jpg",
  "/gallery/kiara4.jpg",
  "/gallery/kiara5.jpg",
  "/gallery/kiara6.jpg",
];

function useCountdown(targetDate: string) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());

      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, [targetDate]);

  return timeLeft;
}


function BirthdayEffects() {
  const candies = ["🍬", "🍭", "🧁", "🎀", "✨"];
  const balloons = ["🎈", "🎉", "🎊", "💛"];

  return (
    <>
      {/* ================= CANDY RAIN ================= */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`candy-${i}`}
          initial={{
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="fixed top-0 z-10 pointer-events-none text-2xl"
        >
          {candies[i % candies.length]}
        </motion.div>
      ))}

      {/* ================= FLOATING GIFTS ================= */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`gift-${i}`}
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
          }}
          className="fixed z-10 pointer-events-none text-5xl"
          style={{
            top: `${10 + i * 10}%`,
            left: i % 2 === 0 ? "5%" : "90%",
          }}
        >
          🎁
        </motion.div>
      ))}

      {/* ================= FLOATING BALLOONS ================= */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`balloon-${i}`}
          initial={{
            y: "110vh",
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            y: "-20vh",
          }}
          transition={{
            duration: 12 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="fixed z-10 pointer-events-none text-5xl opacity-70"
        >
          {balloons[i % balloons.length]}
        </motion.div>
      ))}

      
    </>
  );
}






















export default function KiaraPage() {
  const [opened, setOpened] = useState(false);
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Inisialisasi Ref

  const countdown = useCountdown(
    "2026-05-12T10:00:00+07:00"
  );

  const handleClick = (e: React.MouseEvent) => {
  const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
  setClicks((prev) => [...prev, newClick]);
  setTimeout(() => {
    setClicks((prev) => prev.filter((c) => c.id !== newClick.id));
  }, 1000);
};



const handleOpenInvitation = () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Autoplay dicegah oleh browser:", err);
      });
    }
  };


  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-yellow-50 via-orange-50 to-amber-100 text-[#6D4C41]">

        <audio ref={audioRef} loop>
        <source src="/music/birthday-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <BirthdayEffects />

      {/* ================= OPENING ================= */}
     <AnimatePresence>
        {!opened && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-5"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2 }}
              className="bg-white rounded-[40px] shadow-2xl p-8 max-w-md w-full text-center border-4 border-yellow-200"
            >
              <div className="text-6xl mb-4 animate-bounce">🐣</div>
              <h1 className="text-3xl font-bold mb-3">You're Invited!</h1>
              <p className="text-lg mb-6 text-[#8D6E63]">
                Ulang Tahun Pertama Kiara Sovia 🎂
              </p>
              <button
                onClick={handleOpenInvitation}
                className="bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:scale-105"
              >
                💌 Buka Undangan
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5">

        {/* floating emoji */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute top-20 left-10 text-5xl"
        >
          🐥
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute top-32 right-10 text-4xl"
        >
          🐣
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={opened ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-yellow-300 px-5 py-2 rounded-full font-bold shadow">
            🐤 Happy 1st Birthday 🐤
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-black mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={opened ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          Kiara Sovia
        </motion.h1>

        <motion.p
          className="mt-5 text-xl md:text-2xl text-[#8D6E63] max-w-xl"
          initial={{ opacity: 0 }}
          animate={opened ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          merayakan hari istimewanya yang pertama 🎂
        </motion.p>

        {/* photo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={opened ? { scale: 1 } : {}}
          transition={{
            type: "spring",
            delay: 0.9,
          }}
          className="mt-10"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <Image
              src="/gallery/kiara1.jpg"
              alt="Kiara"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* countdown */}
        <div className="grid grid-cols-4 gap-4 mt-12">
          {[
            ["Hari", countdown.days],
            ["Jam", countdown.hours],
            ["Menit", countdown.minutes],
            ["Detik", countdown.seconds],
          ].map(([label, value], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={opened ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 + i * 0.2 }}
              className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl p-4 w-20 md:w-28"
            >
              <div className="text-2xl md:text-4xl font-black">
                {value}
              </div>

              <div className="text-sm mt-1">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-24 px-5 max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-center mb-4"
        >
          📸 Galeri Kiara
        </motion.h2>

        <p className="text-center text-[#8D6E63] mb-14">
          Momen lucu dan menggemaskan Kiara 🐣
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 40,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
              }}
              whileHover={{
                scale: 1.05,
                rotate: i % 2 === 0 ? 2 : -2,
              }}
              className="relative group overflow-hidden rounded-[30px] shadow-2xl"
            >
              <div className="relative h-64 md:h-96">

                <motion.div
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                  }}
                  className="w-full h-full"
                >
                  <Image
                    src={photo}
                    alt={`Kiara ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                <div className="absolute bottom-3 left-3 text-white font-bold opacity-0 group-hover:opacity-100 transition duration-300">
                  ✨ Kiara Moment
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= EVENT ================= */}
      <section className="py-20 px-5">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-[40px] shadow-2xl p-10 text-center">

          <h2 className="text-4xl font-black mb-10">
            📅 Detail Acara
          </h2>

          <div className="space-y-8">

            <div>
              <div className="text-5xl mb-3">📆</div>
              <div className="font-bold text-xl">
                Selasa, 12 Mei 2026
              </div>
            </div>

            <div>
              <div className="text-5xl mb-3">⏰</div>
              <div className="font-bold text-xl">
                10:00 WIB / Sebangunnya Kia 😆
              </div>
            </div>

            <div>
              <div className="text-5xl mb-3">📍</div>
              <div className="font-bold text-xl">
                Di Kediaman Omanya
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= RSVP ================= */}
      <section className="py-24 px-5 text-center">

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="max-w-2xl mx-auto bg-white rounded-[40px] p-10 shadow-2xl"
        >
          <div className="text-6xl mb-5">
            💛
          </div>

          <h2 className="text-4xl font-black mb-6">
            Kehadiran Anda
          </h2>

          <p className="text-lg leading-8 text-[#8D6E63]">
            Merupakan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir dan
            memberikan doa terbaik untuk Kiara.
          </p>

          <a
            href="https://wa.me/?text=Halo%20saya%20akan%20hadir%20di%20ulang%20tahun%20Kiara"
            target="_blank"
            className="inline-block mt-10 bg-yellow-400 hover:bg-yellow-300 transition-all duration-300 px-10 py-5 rounded-full text-xl font-bold shadow-lg hover:scale-105"
          >
            💌 Konfirmasi Kehadiran
          </a>
        </motion.div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center">
        <div className="text-4xl mb-4">
          🐣💛🐥
        </div>

        <p className="font-semibold">
          Terima kasih atas doa dan kehadiran Anda
        </p>

        <p className="text-sm mt-2 text-[#8D6E63]">
          Keluarga Besar Kiara Sovia
        </p>
      </footer>

      <AnimatePresence>
  {clicks.map((click) => (
    <motion.span
      key={click.id}
      initial={{ opacity: 1, scale: 0, y: 0 }}
      animate={{ opacity: 0, scale: 1.5, y: -100 }}
      exit={{ opacity: 0 }}
      className="fixed pointer-events-none z-[100] text-2xl"
      style={{ left: click.x, top: click.y }}
    >
      🌸
    </motion.span>
  ))}
</AnimatePresence>

    </div>
  );
}