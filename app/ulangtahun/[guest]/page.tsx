"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";

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

    const countdown = useCountdown("2026-05-14T10:00:00+07:00");
    const params = useParams();

    const guestName = decodeURIComponent(
        (params.guest as string || "Tamu Undangan")
    ).replace(/\+/g, " ");


    const handleOpenInvitation = () => {
        setOpened(true);
        if (audioRef.current) {
            audioRef.current.play().catch((err) => {
                console.log("Autoplay dicegah:", err);
            });
        }
    };

    return (
        <div className="relative min-h-screen text-[#5C4033] font-sans overflow-x-hidden selection:bg-yellow-200">
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <Image
                    src="/gallery/ayam.png" // Ganti dengan path foto kartun anak ayam Anda
                    alt="Background Kartun"
                    fill
                    className="object-cover opacity-20" // Opacity rendah agar konten tetap terbaca
                    priority
                />
                {/* Overlay gradasi agar background menyatu */}
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
                        initial={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100vh" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Background elements */}
                        <div className="absolute top-10 left-10 text-6xl opacity-30 animate-bounce">🐥</div>
                        <div className="absolute bottom-20 right-10 text-6xl opacity-30 animate-bounce" style={{ animationDelay: "1s" }}>🐣</div>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center bg-white/60 backdrop-blur-md p-10 rounded-[3rem] border-4 border-yellow-300 shadow-xl max-w-md w-full relative z-10"
                        >
                            <div className="text-sm font-bold tracking-widest text-yellow-600 mb-2 uppercase">Undangan Ulang Tahun</div>
                            <h1 className="text-5xl md:text-6xl font-black text-yellow-500 mb-2 drop-shadow-sm">KIARA SOVIA</h1>
                            <div className="text-xl font-bold bg-yellow-400 text-white inline-block px-4 py-1 rounded-full mb-8 transform -rotate-2">
                                YANG KE-1
                            </div>

                            <div className="mb-8">
                                <p className="text-gray-500 mb-1">Kepada Yth. Bapak/Ibu/Saudara/i</p>
                                <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-yellow-200 inline-block pb-1">{guestName}</h2>
                            </div>

                            <button
                                onClick={handleOpenInvitation}
                                className="bg-yellow-400 hover:bg-yellow-500 text-white transition-all duration-500 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center mx-auto gap-2"
                            >
                                <span>💌</span> Buka Undangan
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CONTENT (Only scrollable when opened) */}
            <div className={`transition-all duration-1000 ${opened ? "opacity-100" : "opacity-0 h-screen overflow-hidden"}`}>

                {/* WELCOME SECTION */}
                <section className="relative pt-20 z-10 pb-32 px-5 text-center bg-white overflow-hidden z-10">
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
                    <div className="absolute top-20 -right-10 w-60 h-60 bg-yellow-200 rounded-full blur-3xl opacity-30"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10 max-w-2xl mx-auto"
                    ><div className="relative w-80 h-80 md:w-70 md:h-70 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-yellow-100">
                            <Image
                                src="/gallery/kiara1.jpg"
                                alt="Baby"
                                fill
                                sizes="(max-width: 768px) 160px, 208px"
                                className="object-cover"
                                priority
                            />
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">Halooooo..!</h2>
                        <h2 className="text-xl md:text-xl font-bold text-white-600 mb-4">Kak : {guestName}</h2>
                        <p className="text-xl text-gray-600 mb-6 font-medium">Datang Yuk! Ke Acara Ulang Tahunku</p>

                        <h1 className="text-5xl md:text-8xl font-black text-gray-800 mb-4">Kiara Sovia</h1>

                    </motion.div>

                    {/* SVG Wave */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
                        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFDF0"></path>
                        </svg>
                    </div>
                </section>

                {/* EVENT SECTION */}
                <section className="relative z-10 py-20 px-5 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block bg-yellow-300 text-white font-bold px-6 py-2 rounded-full mb-10 shadow-md">
                            DETAIL ACARA
                        </div>

                        <div className="grid md:grid-cols-2 gap-10">
                            {/* Event Card */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-yellow-400 relative overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="absolute -right-5 -top-5 text-8xl opacity-10 group-hover:rotate-12 transition-transform">📅</div>
                                <h3 className="text-2xl font-bold text-yellow-600 mb-6">Waktu Pelaksanaan</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Hari & Tanggal</div>
                                        <div className="text-xl font-bold text-gray-800">Kamis, 14 Mei 2026</div>
                                    </div>
                                    <div className="w-full h-px bg-gray-100"></div>
                                    <div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Jam</div>
                                        <div className="text-xl font-bold text-gray-800">10:00 WIB / Pokoknya abis bangun tidur siang pertama kalo moodnya bagus</div>
                                    </div>
                                </div>
                            </div>

                            {/* Location Card */}
                            <div className="bg-white rounded-[2rem] p-8 shadow-xl border-t-8 border-yellow-400 relative overflow-hidden group hover:-translate-y-2 transition-transform">
                                <div className="absolute -right-5 -top-5 text-8xl opacity-10 group-hover:rotate-12 transition-transform">📍</div>
                                <h3 className="text-2xl font-bold text-yellow-600 mb-6">Lokasi Acara</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Tempat</div>
                                        <div className="text-xl font-bold text-gray-800">Garasi Rumah Omanya Kiara</div>
                                    </div>
                                    <div className="w-full h-px bg-gray-100"></div>
                                    <div>
                                        <div className="text-gray-400 text-sm font-bold uppercase tracking-wider">Alamat</div>
                                        <div className="text-md text-gray-600 leading-relaxed">Perum Binong Permai, Kec. Curug, Tangerang</div>
                                    </div>
                                </div>
                                <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
                                    🗺️ Buka Google Maps
                                </button>
                            </div>
                        </div>

                        {/* Countdown */}
                        <div className="mt-16 bg-white p-8 rounded-[2rem] shadow-lg max-w-3xl mx-auto border-2 border-yellow-100">
                            <h3 className="text-xl font-bold text-gray-600 mb-6">Menuju Hari Bahagia</h3>
                            <div className="grid grid-cols-4 gap-4">
                                {[
                                    { label: "Hari", value: countdown.days },
                                    { label: "Jam", value: countdown.hours },
                                    { label: "Menit", value: countdown.minutes },
                                    { label: "Detik", value: countdown.seconds },
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="w-16 h-16 md:w-24 md:h-24 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center text-2xl md:text-4xl font-black shadow-inner border border-yellow-200">
                                            {item.value}
                                        </div>
                                        <span className="mt-2 text-sm md:text-base font-bold text-gray-500">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* GALLERY SECTION */}
                <section className="py-20 px-5 bg-white relative">
                    {/* SVG Wave Top */}
                    <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
                        <svg className="relative block w-full h-[30px] md:h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFDF0"></path>
                        </svg>
                    </div>

                    <div className="max-w-6xl mx-auto pt-10">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-yellow-300 text-white font-bold px-6 py-2 rounded-full mb-4 shadow-md">
                                GALERI FOTO
                            </div>
                            <h2 className="text-4xl font-black text-gray-800">Momen Bahagia Kiara</h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                            {galleryPhotos.map((photo, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-lg group border-4 border-yellow-50"
                                >
                                    <Image
                                        src={photo}
                                        alt={`Kiara ${i + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* KADO DIGITAL SECTION */}
                <section className="py-20 px-5 text-center relative overflow-hidden">
                    <div className="max-w-3xl mx-auto relative z-10">
                        <div className="inline-block bg-yellow-300 text-white font-bold px-6 py-2 rounded-full mb-8 shadow-md">
                            KADO DIGITAL
                        </div>
                        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
                            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika Anda ingin memberikan tanda kasih untuk Kiara, dapat melalui:
                        </p>

                        <div className="bg-white p-8 rounded-[2rem] shadow-xl border-2 border-yellow-100 max-w-md mx-auto">
                            <div className="w-20 h-20 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4">
                                <span className="text-4xl">💳</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-800 mb-1">BCA</h4>
                            <p className="text-2xl font-black text-yellow-600 mb-1 tracking-widest">7610782951</p>
                            <p className="text-gray-500 mb-6">a.n Ovikarina</p>

                            <button className="bg-gray-100 hover:bg-yellow-50 text-gray-700 font-bold py-2 px-6 rounded-full transition-colors flex items-center justify-center mx-auto gap-2 text-sm border border-gray-200">
                                📋 Salin Nomor Rekening
                            </button>
                        </div>
                    </div>

                    {/* Decorative chicks */}
                    <div className="absolute bottom-10 left-10 text-5xl opacity-50">🐤</div>
                    <div className="absolute top-20 right-10 text-5xl opacity-50">🐥</div>
                </section>

                {/* RSVP & UCAPAN */}
                <section className="py-20 px-5 bg-white text-center border-t-4 border-yellow-100">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl font-black text-gray-800 mb-4">RSVP & Ucapan</h2>
                        <p className="text-gray-600 mb-10">Kirimkan doa dan konfirmasi kehadiran Anda melalui WhatsApp.</p>

                        <a
                            href="https://wa.me/?text=Halo%20saya%20akan%20hadir%20di%20ulang%20tahun%20Kiara"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#25D366] hover:bg-[#1ebd5c] text-white transition-all duration-300 px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:scale-105"
                        >
                            💬 Konfirmasi via WhatsApp
                        </a>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="py-16 text-center bg-yellow-400 text-white rounded-t-[3rem] mt-10">
                    <div className="text-5xl mb-6">🐣🐥🐤</div>
                    <h2 className="text-3xl font-black mb-4">Terima Kasih!</h2>
                    <p className="font-medium text-white-800 mb-8 max-w-md mx-auto px-5">
                        Kehadiran Anda merupakan kebahagiaan bagi buna bapak kia, dan memberikan doa terbaik untuk Kiara ❤️
                    </p>
                    <div className="w-16 h-1 mx-auto bg-yellow-500 rounded-full mb-8"></div>
                    <p className="text-sm font-bold opacity-75">
                        Keluarga Besar Kiara Sovia
                    </p>
                </footer>

            </div>
        </div>
    );
}
