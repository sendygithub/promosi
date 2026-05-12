"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import { div } from "framer-motion/client";

const galleryPhotos = [
    "/gallery/kiara1.jpg",
    "/gallery/kiara2.jpg",
    "/gallery/kiara3.jpg",
    "/gallery/kiara4.jpg",
    "/gallery/kiara5.jpg",
    "/gallery/kiara6.jpg",
    "/gallery/kiara7.jpg",
    "/gallery/kiara8.jpg",
    "/gallery/kiara9.jpg",
];



function FadeInSection({
    children,
    delay = 0,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.8,
                delay,
                ease: "easeOut",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}




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


function ChickBackground() {
    const chicks = ["🐥", "🐣", "🐤"];

    return (
        <>
            {Array.from({ length: 15 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: -200,
                        y: Math.random() * 2000,
                        rotate: 0,
                        opacity: 0.15,
                    }}
                    animate={{
                        x: ["0vw", "120vw"],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 20 + i * 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 1.5,
                    }}
                    className="fixed text-4xl md:text-6xl pointer-events-none z-0"
                    style={{
                        top: `${Math.random() * 100}%`,
                    }}
                >
                    {chicks[i % chicks.length]}
                </motion.div>
            ))}

            {/* Floating chick */}
            {Array.from({ length: 10 }).map((_, i) => (
                <motion.div
                    key={`float-${i}`}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [-5, 5, -5],
                    }}
                    transition={{
                        duration: 3 + i,
                        repeat: Infinity,
                    }}
                    className="fixed pointer-events-none z-0 text-3xl opacity-20"
                    style={{
                        left: `${i * 10}%`,
                        top: `${10 + (i % 5) * 15}%`,
                    }}
                >
                    🐥
                </motion.div>
            ))}
        </>
    );
}
export default function UlangTahunPage() {
    const [opened, setOpened] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const countdown = useCountdown("2026-05-14T11:30:00+07:00");
    const params = useParams();

    const guestName = decodeURIComponent((params.guest as string || "Tamu Undangan")).replace(/\+/g, " ");

    const handleOpenInvitation = () => {
        setOpened(true);
        if (audioRef.current) {
            audioRef.current.play().catch(() => console.log("Autoplay blocked"));
        }
    };

    return (
        <div className="relative min-h-screen text-[#5C4033] font-sans overflow-x-hidden selection:bg-yellow-200 bg-[#FFFAEB]">
            {/* BACKGROUND FIXED */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <Image
                    src="/gallery/ayam.png"
                    alt="Background Kartun"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-white/40" />
            </div>
            
            <ChickBackground />
            
            <audio ref={audioRef} loop>
                <source src="/music/birthday-song.mp3" type="audio/mpeg" />
            </audio>

            {/* COVER / HERO */}
            <AnimatePresence>
                {!opened && (
                    <motion.div
                        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFFAEB] p-5 overflow-hidden"
                        exit={{ opacity: 0, y: "-100vh" }}
                        transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1] }}
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border-4 border-yellow-300 shadow-xl max-w-md w-full relative z-10"
                        >
                            <div className="text-sm font-bold tracking-widest text-yellow-600 mb-2 uppercase">Undangan Ulang Tahun</div>
                            <h1 className="text-5xl md:text-6xl font-black text-yellow-500 mb-2">KIARA SOVIA</h1>
                            <div className="text-xl font-bold bg-yellow-400 text-white inline-block px-4 py-1 rounded-full mb-8 transform -rotate-2">
                                YANG KE-1
                            </div>
                            <div className="mb-8">
                                <p className="text-gray-500 mb-1">Hallo Kakak :</p>
                                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-200 inline-block">{guestName}</h2>
                            </div>
                            <button
                                onClick={handleOpenInvitation}
                                className="bg-yellow-400 hover:bg-yellow-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg flex items-center justify-center mx-auto gap-2 transition-transform hover:scale-105 active:scale-95"
                            >
                                💌 Buka Undangan
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CONTENT */}
            <div className={`transition-opacity duration-1000 ${opened ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>
                
                {/* WELCOME SECTION */}
                <section className="relative pt-20 pb-32 px-5 text-center z-10">
                    <FadeInSection>
                        <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto mb-8 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            <Image src="/gallery/kiara1.jpg" alt="Baby" fill className="object-cover" priority />
                        </div>
                        <h2 className="text-3xl font-bold text-yellow-600 mb-2">Halooooo..!</h2>
                        <h3 className="text-xl font-medium text-gray-600 mb-4">Kakak {guestName}</h3>
                        <p className="text-lg text-gray-500 mb-2">Datang Yuk! Ke Acara Ulang Tahun</p>
                        <h1 className="text-5xl md:text-7xl font-black text-gray-800">Kiara Sovia</h1>
                    </FadeInSection>
                </section>

                {/* EVENT SECTION */}
                <section className="relative z-10 py-10 px-5">
                    <div className="max-w-4xl mx-auto">
                        <FadeInSection className="text-center mb-10">
                            <div className="inline-block bg-yellow-300 text-white font-bold px-6 py-2 rounded-full shadow-md">
                                DETAIL ACARA
                            </div>
                        </FadeInSection>

                        <div className="grid md:grid-cols-2 gap-8">
                            <FadeInSection delay={0.2}>
                                <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-yellow-400 h-full">
                                    <h3 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center gap-2">📅 Waktu</h3>
                                    <div className="space-y-4 text-left">
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase">Hari & Tanggal</p>
                                            <p className="text-lg font-bold text-gray-800">Kamis, 14 Mei 2026</p>
                                        </div>
                                        <div className="w-full h-px bg-gray-100" />
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase">Jam</p>
                                            <p className="text-lg font-bold text-gray-800">11:30 WIB - Selesai</p>
                                            <p className="text-sm text-yellow-600 italic mt-1">*Bangun tidur siang pertama*</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={0.4}>
                                <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-yellow-400 h-full">
                                    <h3 className="text-2xl font-bold text-yellow-600 mb-6 flex items-center gap-2">📍 Lokasi</h3>
                                    <div className="space-y-4 text-left">
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase">Tempat</p>
                                            <p className="text-lg font-bold text-gray-800">Garasi Rumah Omanya Kiara</p>
                                        </div>
                                        <div className="w-full h-px bg-gray-100" />
                                        <div>
                                            <p className="text-gray-400 text-xs font-bold uppercase">Alamat</p>
                                            <p className="text-md text-gray-600">Perum Binong Permai, Kec. Curug, Tangerang</p>
                                        </div>
                                    </div>
                                    <button className="mt-6 w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-700 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                        🗺️ Google Maps
                                    </button>
                                </div>
                            </FadeInSection>
                        </div>

                        {/* Countdown */}
                        <FadeInSection delay={0.6} className="mt-12">
                            <div className="bg-white p-8 rounded-[2rem] shadow-lg border-2 border-yellow-100 text-center">
                                <h3 className="text-xl font-bold text-gray-600 mb-6">Menuju Hari Bahagia</h3>
                                <div className="grid grid-cols-4 gap-2 md:gap-4">
                                    {[
                                        { label: "Hari", value: countdown.days },
                                        { label: "Jam", value: countdown.hours },
                                        { label: "Menit", value: countdown.minutes },
                                        { label: "Detik", value: countdown.seconds },
                                    ].map((item, i) => (
                                        <div key={i} className="flex flex-col items-center">
                                            <div className="w-14 h-14 md:w-20 md:h-20 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center text-xl md:text-3xl font-black border border-yellow-200">
                                                {item.value}
                                            </div>
                                            <span className="mt-2 text-xs font-bold text-gray-500 uppercase">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </section>

                {/* GALLERY SECTION */}
                <section className="py-20 px-5">
                    <div className="max-w-6xl mx-auto">
                        <FadeInSection className="text-center mb-12">
                            <div className="inline-block bg-yellow-300 text-white font-bold px-6 py-2 rounded-full mb-4 shadow-md">
                                GALERI FOTO
                            </div>
                            <h2 className="text-4xl font-black text-gray-800">Momen Bahagia Kiara</h2>
                        </FadeInSection>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {galleryPhotos.map((photo, i) => (
                                <FadeInSection key={i} delay={i * 0.1}>
                                    <div className="relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group border-4 border-white">
                                        <Image
                                            src={photo}
                                            alt={`Kiara ${i + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </FadeInSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* RSVP */}
                <FadeInSection className="py-20 px-5 text-center">
                    <div className="max-w-2xl mx-auto bg-white p-10 rounded-[3rem] shadow-xl">
                        <h2 className="text-3xl font-black text-gray-800 mb-4">RSVP & Ucapan</h2>
                        <p className="text-gray-600 mb-10">Kirimkan doa dan konfirmasi kehadiran Anda melalui WhatsApp.</p>
                        <a
                            href="https://wa.me/?text=Halo%20saya%20akan%20hadir%20di%20ulang%20tahun%20Kiara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#25D366] hover:bg-[#1ebd5c] text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl transition-transform hover:scale-105"
                        >
                            💬 Konfirmasi WhatsApp
                        </a>
                    </div>
                </FadeInSection>

                {/* FOOTER */}
                <footer className="py-20 text-center bg-yellow-400 text-white rounded-t-[3rem] mt-10">
                    <FadeInSection>
                        <div className="text-5xl mb-6">🐣🐥🐤</div>
                        <h2 className="text-3xl font-black mb-4">Terima Kasih!</h2>
                        <p className="font-medium mb-8 max-w-md mx-auto px-5 opacity-90">
                            Kehadiran Anda merupakan kebahagiaan bagi Buna, Bapak, dan Kiara. Sampai jumpa di hari bahagia nanti! ❤️
                        </p>
                        <div className="text-2xl tracking-widest opacity-50">🐣🐥🐤🐣🐥🐤🐣🐥🐤</div>
                    </FadeInSection>
                </footer>
            </div>
        </div>
    );
}