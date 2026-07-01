"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  ShieldCheck,
  Zap,
  Keyboard,
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle2,
  Truck,
  Clock,
  Award,
  Smile,
  Download,
  ChevronDown,
  Sparkles,
  Wifi,
  Headphones,
  Laptop,
} from "lucide-react";
import Link from "next/link";
import ServisNavbar from "@/app/components/ServisNavbar";

const services = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Rakit PC & Upgrade Hardware",
    desc: "Merakit PC gaming, editing, atau kantor sesuai kebutuhan. Upgrade processor, RAM, VGA, dan komponen lainnya.",
    gradient: "from-amber-500/20 to-orange-500/10",
    borderGlow: "group-hover:shadow-amber-500/20",
    items: [
      "Rakit PC Gaming/Editing/Kantor",
      "Upgrade Processor & Motherboard",
      "Pasang VGA Card Baru",
      "Upgrade RAM & SSD",
    ],
  },
  {
    icon: <HardDrive className="w-6 h-6" />,
    title: "Pasang SSD & Upgrade Storage",
    desc: "Tingkatkan performa laptop/PC dengan SSD NVMe atau SATA. Boot dalam hitungan detik!",
    gradient: "from-cyan-500/20 to-blue-500/10",
    borderGlow: "group-hover:shadow-cyan-500/20",
    items: [
      "Pasang SSD NVMe / SATA",
      "Clone HDD ke SSD",
      "Upgrade Hardisk Eksternal",
      "Raid Storage Configuration",
    ],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Instalasi Sistem Operasi",
    desc: "Install Windows 10/11, Linux, atau dual-boot. Bebas dari bug dan siap pakai.",
    gradient: "from-violet-500/20 to-purple-500/10",
    borderGlow: "group-hover:shadow-violet-500/20",
    items: [
      "Install Windows 10 / 11 Pro",
      "Install Linux (Ubuntu, Mint, dll)",
      "Dual-Boot OS",
      "Aktivasi & Driver Lengkap",
    ],
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Instalasi Software & Office",
    desc: "Install Microsoft Office, browser, antivirus, dan software multimedia lainnya.",
    gradient: "from-emerald-500/20 to-green-500/10",
    borderGlow: "group-hover:shadow-emerald-500/20",
    items: [
      "Microsoft Office 2021/365",
      "Chrome, Browser & Multimedia",
      "Adobe & Design Software",
      "Antivirus & Security Tools",
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Atasi Laptop Lemot & BlueScreen",
    desc: "Laptop lemot, sering nge-freeze, atau BlueScreen? Kami diagnosa dan perbaiki sampai normal.",
    gradient: "from-red-500/20 to-rose-500/10",
    borderGlow: "group-hover:shadow-red-500/20",
    items: [
      "Bersihkan Virus & Malware",
      "Optimasi Startup & Registry",
      "Atasi BlueScreen Error",
      "Bersihkan Debu & Ganti Thermal Paste",
    ],
  },
  {
    icon: <Keyboard className="w-6 h-6" />,
    title: "Ganti Keyboard & RAM Laptop",
    desc: "Keyboard laptop rusak? RAM kurang? Kami ganti dengan komponen original berkualitas.",
    gradient: "from-pink-500/20 to-fuchsia-500/10",
    borderGlow: "group-hover:shadow-pink-500/20",
    items: [
      "Ganti Keyboard Laptop",
      "Upgrade RAM Laptop (solder/slot)",
      "Ganti LCD & Flexible Cable",
      "Servis Touchpad & Port",
    ],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Upgrade OS Win10 ke Win11",
    desc: "Naikkan versi Windows 10 ke 11 dengan aman. Data tetap utuh, performa meningkat.",
    gradient: "from-blue-500/20 to-indigo-500/10",
    borderGlow: "group-hover:shadow-blue-500/20",
    items: [
      "Upgrade Win10 ke Win11",
      "Cek Kompatibilitas TPM 2.0",
      "Migrasi Data & Setting",
      "Optimasi Pasca Upgrade",
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Ganti PSU & Casing",
    desc: "PSU rusak atau kurang daya? Ganti casing biar lebih adem dan keren.",
    gradient: "from-slate-500/20 to-gray-500/10",
    borderGlow: "group-hover:shadow-slate-500/20",
    items: [
      "Ganti Power Supply (PSU)",
      "Ganti Casing PC",
      "Rapihkan Cable Management",
      "Tambahan Fan & RGB",
    ],
  },
];

const whyUs = [
  {
    icon: <Truck className="w-6 h-6" />,
    title: "Antar Jemput Tangerang",
    desc: "Wilayah Tangerang dan sekitarnya. Kami jemput, servis, dan antar kembali. Gratis biaya antar!",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Cepat & Tepat Waktu",
    desc: "Pengerjaan cepat tanpa mengorbankan kualitas. Hasil rapi, terjamin, dan sesuai janji.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Berpengalaman",
    desc: "Sudah menangani berbagai kasus dari PC kantor, gaming, hingga laptop lawas. Ribuan jam terbang!",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Harga Bersahabat",
    desc: "Biaya servis transparan, tanpa biaya tersembunyi. Konsultasi GRATIS! Bayar setelah beres.",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
  },
];

const testimonials = [
  {
    name: "Rudi Hartono",
    role: "Mahasiswa",
    text: "Laptop saya yang lemot parah sekarang jadi ngebut lagi. Udah kayak baru! Makasih banget servisnya.",
    rating: 5,
    initials: "RH",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Siti Nurhaliza",
    role: "Karyawan Swasta",
    text: "Keyboard laptop saya rusak kena tumpahan kopi. Diganti baru, sekarang berfungsi normal lagi. Recommended!",
    rating: 5,
    initials: "SN",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    name: "Bambang Suprapto",
    role: "Owner Warnet",
    text: "Langganan rakit PC untuk warnet. Cepat, rapi, dan harganya pas. Sangat profesional. Langganan terus!",
    rating: 5,
    initials: "BS",
    gradient: "from-cyan-500 to-blue-600",
  },
];

const faqs = [
  {
    q: "Apakah ada garansi untuk servis?",
    a: "Garansi jasa dan spare part sesuai jenis perbaikan yang dilakukan.",
    href: "/faq/garansi-servis",
  },
  {
    q: "Berapa lama waktu pengerjaan?",
    a: "Estimasi pengerjaan tergantung jenis kerusakan dan ketersediaan spare part.",
    href: "/faq/waktu-pengerjaan",
  },
  {
    q: "Apakah antar jemput benar-benar gratis?",
    a: "Layanan antar jemput tersedia untuk area tertentu tanpa biaya tambahan.",
    href: "/faq/antar-jemput",
  },
  {
    q: "Data saya aman tidak?",
    a: "Kami menjaga keamanan data pelanggan selama proses servis berlangsung.",
    href: "/faq/keamanan-data",
  },
];
export default function ServisPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#d4af37]/20 overflow-x-hidden">
      {/* ===== NAVBAR ===== */}
      <ServisNavbar />

      {/* ===== AMBIENT GLOW BACKGROUNDS ===== */}
      <div className="fixed top-0 -left-10 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] -z-10" />
      <div className="fixed bottom-0 -right-10 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] -z-10" />
      <div className="fixed top-1/3 left-1/3 w-[400px] h-[400px] bg-purple-900/5 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[300px] h-[300px] bg-emerald-900/5 rounded-full blur-[100px] -z-10" />

      {/* ===== ANIMATED GRID BACKGROUND ===== */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* NAVBAR SPACER */}
      <div className="h-20 w-full" />

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative px-6 pt-16 pb-20 text-center overflow-hidden"
      >
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          {/* Decorative elements */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent blur-[60px] -z-5 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-amber-500/20 to-blue-500/20 text-amber-300 border-amber-400/30 py-1.5 px-5 rounded-full font-medium tracking-wide shadow-lg shadow-amber-500/5">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block" />
              Servis Komputer & Laptop Tangerang
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            <span className="text-white">Prisma Komputer</span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-[#d4af37] to-amber-400 bg-clip-text text-transparent">
              Servis & Perbaikan Profesional
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Melayani servis komputer dan laptop di wilayah Tangerang. Dari rakit
            PC, upgrade hardware, instalasi software, hingga perbaikan
            BlueScreen dan laptop lemot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-5 justify-center items-center"
          >
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20servis%20komputer%2Flaptop"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#d4af37] to-amber-500 hover:from-amber-500 hover:to-[#d4af37] text-slate-950 font-bold px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-xl shadow-[#d4af37]/20 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  <MessageCircle className="mr-2 w-5 h-5 fill-current" />
                  Hubungi WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>

            <Link href="#services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#d4af37]/40 px-10 py-7 text-lg rounded-full transition-all duration-300 text-slate-300 group"
              >
                Lihat Layanan
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {[
              "Antar Jemput",
              "Bergaransi",
              "Berpengalaman",
              "Harga Terjangkau",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400"
              >
                ✅ {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== DOCUMENTATION GALLERY ===== */}
      <section
        id="dokumentasi"
        className="border-y border-white/5 bg-gradient-to-b from-slate-900/20 to-transparent py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#d4af37] text-sm uppercase tracking-[0.25em] mb-3">
              Dokumentasi
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Hasil pekerjaan kami
            </h2>

            <p className="text-slate-400 mt-5 max-w-2xl mx-auto leading-relaxed">
              Beberapa dokumentasi saat melakukan servis laptop, upgrade
              hardware, perakitan PC, instalasi sistem operasi, dan maintenance
              komputer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                src: "/servis/servis 1.jpeg",
                label: "Perbaikan Hardware",
                category: "perbaikan-hardware",
              },
              {
                src: "/servis/servis 2.jpeg",
                label: "Instalasi Software",
                category: "instalasi-software",
              },
              {
                src: "/servis/servis 3.jpeg",
                label: "Fix Problem Sistem BlueScreen",
                category: "fix-bluescreen",
              },
              {
                src: "/servis/servis 4.jpeg",
                label: "Upgrade Komponen",
                category: "upgrade-komponen",
              },
              {
                src: "/servis/servis 5.jpeg",
                label: "Perbaikan Laptop",
                category: "perbaikan-laptop",
              },
              {
                src: "/servis/servis 6.jpeg",
                label: "Lihat Semua Dokumentasi",
                category: "all",
              },
            ].map((item, index) => (
              <Link
                key={index}
                href={`/servis/gallery${item.category !== "all" ? `?category=${item.category}` : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  <div className="absolute bottom-5 left-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
                    <p className="text-white font-semibold">{item.label}</p>
                    <p className="text-sm text-slate-300">Klik untuk melihat</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LAYANAN KAMI ===== */}
      <section id="services" className="px-6 py-28 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-[#d4af37]/10 to-amber-500/10 text-[#d4af37] border-[#d4af37]/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
              ✦ Layanan Kami
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Solusi Lengkap
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto font-medium">
              Dari perbaikan ringan hingga rakit PC high-end, semua kami tangani
              dengan profesional dan penuh dedikasi.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card
                className={`group bg-[#0f172a]/40 border-white/5 hover:border-transparent backdrop-blur-md hover:bg-[#0f172a]/60 transition-all duration-500 h-full relative overflow-hidden ${service.borderGlow} hover:shadow-xl`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardContent className="p-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-amber-500/10 flex items-center justify-center mb-6 text-[#d4af37] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white group-hover:text-[#d4af37] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 font-medium group-hover:text-slate-300 transition-colors">
                    {service.desc}
                  </p>
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-xs text-slate-500 font-medium group-hover:text-slate-400 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#d4af37] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ===== KENAPA PILIH KAMI ===== */}
      <section
        id="keunggulan"
        className="px-6 py-28 bg-gradient-to-b from-white/[0.01] to-transparent border-y border-white/5 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/5 via-transparent to-transparent -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 border-blue-400/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
                ⚡ Keunggulan
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Kenapa Pilih Kami?
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto font-medium">
                Kami tidak hanya servis, tapi memberikan solusi terbaik untuk
                perangkat Anda.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-[#0f172a]/40 border border-white/5 rounded-2xl p-8 text-center hover:border-[#d4af37]/30 transition-all duration-500 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mx-auto mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimoni" className="px-6 py-28 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-amber-500/10 to-rose-500/10 text-amber-300 border-amber-400/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
              💬 Testimoni
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Apa Kata Pelanggan?
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto font-medium">
              Kepercayaan pelanggan adalah prioritas utama kami.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-[#0f172a]/40 border border-white/5 rounded-2xl p-8 hover:border-[#d4af37]/20 transition-all duration-500 relative group"
            >
              {/* Quote decoration */}
              <div className="absolute -top-3 -left-2 text-6xl text-[#d4af37]/10 font-serif leading-none">
                &ldquo;
              </div>

              <div className="flex gap-1 mb-5 relative">
                {Array.from({ length: testi.rating }).map((_, j) => (
                  <motion.div
                    key={j}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + j * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-[#d4af37] text-[#d4af37]" />
                  </motion.div>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic relative z-10">
                &ldquo;{testi.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 border-t border-white/5 pt-5">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${testi.gradient} flex items-center justify-center text-xs font-bold text-white shadow-lg`}
                >
                  {testi.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{testi.name}</p>
                  <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">
                    {testi.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        id="faq"
        className="px-6 py-28 bg-gradient-to-b from-transparent to-white/[0.01] border-y border-white/5"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-amber-500/10 to-rose-500/10 text-amber-300 border-amber-400/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
              ❓ FAQ
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto font-medium">
              kami memberikan penjelasan lengkap untuk pertanyaan yang sering
              diajukan.
            </p>
          </motion.div>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={faq.href}
                className="group flex items-center justify-between rounded-2xl border border-white/5 bg-[#0f172a]/40 p-6 transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-[#111c31]"
              >
                <div className="pr-6">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-[#d4af37]">
                    {faq.q}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {faq.a}
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-[#d4af37]/40 group-hover:bg-[#d4af37]/10">
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#d4af37]" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        id="konsultasi"
        className="px-6 py-32 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4af37]/5 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] -z-10" />

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#d4af37]/5 rounded-full -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-[#d4af37]/10 rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-[#d4af37]/20 to-amber-500/20 text-[#d4af37] border-[#d4af37]/30 px-5 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg shadow-[#d4af37]/5">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Gratis Konsultasi
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Siap Servis Komputer?
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed text-lg">
            Konsultasi dulu aja gratis! Ceritakan masalah perangkat Anda, kami
            akan kasih solusi terbaik.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20konsultasi%20servis"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#d4af37] to-amber-500 hover:from-amber-500 hover:to-[#d4af37] text-slate-950 font-bold px-12 py-8 text-xl rounded-full transition-all duration-300 shadow-2xl shadow-[#d4af37]/20 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  <MessageCircle className="mr-3 w-6 h-6 fill-current" />
                  Klik Disini WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <p className="text-slate-600 text-sm font-medium">
              atau hubungi{" "}
              <span className="text-[#d4af37] font-bold">0812-3344-5566</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/5 py-16 px-8 bg-gradient-to-b from-transparent to-[#020617]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-amber-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-[#d4af37]/20">
              P
            </div>
            <div className="text-left">
              <span className="block font-bold text-white text-lg tracking-tighter">
                Prisma Komputer
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
                Servis & Perbaikan Tangerang
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-[13px] font-medium tracking-wide text-center">
            © 2026 Prisma Komputer • Servis Komputer & Laptop Tangerang
          </p>

          <div className="flex gap-4">
            <Link
              href="https://wa.me/6281233445566"
              target="_blank"
              className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors"
            >
              WhatsApp
            </Link>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#d4af37] cursor-pointer transition-colors">
              Instagram
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
