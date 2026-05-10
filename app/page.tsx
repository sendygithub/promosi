"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Rocket,
  Code2,
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  Laptop,
  BrainCircuit,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar"

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#d4af37]/20 overflow-x-hidden">
      {/* SOFT GLOW OVERLAYS - Dibuat lebih redup agar kalem */}
      <div className="fixed top-0 -left-10 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 -right-10 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] -z-10" />

      {/* NAVBAR PLACEHOLDER */}
      <div className="h-20 w-full" />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative px-6 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-6 bg-white/5 text-[#d4af37] border-[#d4af37]/20 py-1.5 px-5 rounded-full font-medium tracking-wide">
            ✨ Partner Skripsi Terpercaya #1
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-[1.1] text-white">
            Wujudkan Skripsi <br />
            <span className="text-[#d4af37]">Tanpa Revisi Berulang</span>
          </h1>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
            Membantu mahasiswa Sistem Informasi membangun aplikasi profesional
            dengan standar industri. Fokus pada kualitas kode dan pendampingan
            intensif.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Button
            
              size="lg"
              className="bg-[#d4af37] hover:bg-[#b8962f] text-slate-950 font-bold px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-xl shadow-[#d4af37]/10 group"
            >
              Mulai Project Sekarang
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#d4af37]/40 px-10 py-7 text-lg rounded-full transition-all duration-300 text-slate-300"
              >
                Lihat Demo App
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TECH STACK - INFINITE MARQUEE ANIMATION */}
      <section className="py-12 border-y border-white/5 bg-slate-900/20 overflow-hidden">
        <p className="text-center text-[20px] font-bold uppercase tracking-[0.3em] text-slate-500 mb-10">
          Industrial Standard Tech Stack
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex flex-nowrap gap-10 md:gap-20 items-center"
            animate={{
              x: [0, -1000], // Sesuaikan angka ini jika stack kamu sangat panjang
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // Semakin besar angka, semakin lambat jalannya
                ease: "linear",
              },
            }}
          >
            {/* Konten Utama */}
            {[
              {
                name: "Next.js",
                icon: <Globe className="w-15 h-15 text-[#d4af37]" />,
              },
              {
                name: "TypeScript",
                icon: <Code2 className="w-15 h-15 text-[#d4af37]" />,
              },
              {
                name: "Laravel",
                icon: <Laptop className="w-15 h-15 text-blue-400" />,
              },
              {
                name: "AI/ML",
                icon: <BrainCircuit className="w-15 h-15 text-[#d4af37]" />,
              },
              {
                name: "Supabase",
                icon: <Rocket className="w-15 h-15 text-blue-400" />,
              },
              {
                name: "Tailwind",
                icon: <Code2 className="w-15 h-15 text-blue-400" />,
              },
            ].map((stack, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 font-medium text-lg text-slate-400 whitespace-nowrap opacity-40 hover:opacity-100 hover:text-white transition-opacity cursor-default"
              >
                {stack.icon} {stack.name}
              </div>
            ))}

            {/* Duplikasi Konten (Agar Looping Mulus) */}
            {[
              {
                name: "Next.js",
                icon: <Globe className="w-15 h-15 text-[#d4af37]" />,
              },
              {
                name: "TypeScript",
                icon: <Code2 className="w-15 h-15 text-[#d4af37]" />,
              },
              {
                name: "Laravel",
                icon: <Laptop className="w-15 h-15 text-blue-400" />,
              },
              {
                name: "AI/ML",
                icon: <BrainCircuit className="w-15 h-15 text-[#d4af37]" />,
              },
              {
                name: "Supabase",
                icon: <Rocket className="w-15 h-15 text-blue-400" />,
              },
              {
                name: "Tailwind",
                icon: <Code2 className="w-15 h-15 text-blue-400" />,
              },
            ].map((stack, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-2.5 font-medium text-lg text-slate-400 whitespace-nowrap opacity-40 hover:opacity-100 hover:text-white transition-opacity cursor-default"
              >
                {stack.icon} {stack.name}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="px-6 py-28 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Badge className="mb-4 bg-[#d4af37]/5 text-[#d4af37] border-none px-4 text-[10px] uppercase tracking-widest">
            Layanan
          </Badge>
          <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">
            Solusi End-to-End
          </h2>
          <p className="text-slate-500 max-w-md mx-auto font-medium">
            Proses transparan, kode berkualitas, dan bimbingan hingga sidang.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Custom Application",
              icon: <Code2 className="w-5 h-5" />,
              desc: "Pembuatan sistem informasi kustom dengan clean architecture & siap uji.",
              accent: "border-t-[#d4af37]",
            },
            {
              title: "Full Chapter (Bab 1-5)",
              icon: <Rocket className="w-5 h-5" />,
              desc: "Lengkap dengan dokumen teknis, perancangan sistem, dan mentoring bimbingan.",
              accent: "border-t-blue-500",
            },
            {
              title: "Mentoring & Debug",
              icon: <MessageCircle className="w-5 h-5" />,
              desc: "Optimasi kode yang sudah ada, perbaikan bug, dan penjelasan logika sistem.",
              accent: "border-t-emerald-500",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card
                className={`group bg-[#0f172a]/40 border-white/5 border-t-2 ${item.accent} backdrop-blur-md hover:bg-[#0f172a]/60 transition-all duration-500 h-full`}
              >
                <CardContent className="p-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-white group-hover:bg-[#d4af37] group-hover:text-slate-950 transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-8 text-sm font-medium">
                    {item.desc}
                  </p>
                  <div className="text-[#d4af37] font-bold flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PORTFOLIO SECTION - CLEANER STYLE */}
      <section className="px-6 py-28 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <h2 className="text-4xl font-bold text-white tracking-tight mb-4">
                Project Terkini
              </h2>
              <p className="text-slate-500 font-medium">
                Beberapa sistem yang telah sukses dipresentasikan.
              </p>
            </div>
            <Link
              href="/demo"
              className="text-[#d4af37] text-sm font-bold border-b border-[#d4af37]/20 pb-1 hover:border-[#d4af37] transition-all uppercase tracking-widest"
            >
              Lihat Semua Demo
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6 auto-rows-[320px]">
            {/* Project Utama */}
            <div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between group hover:border-[#d4af37]/30 transition-all duration-500">
              <div>
                <Badge className="bg-[#d4af37]/10 text-[#d4af37] border-none mb-6 rounded-lg">
                  AI System
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-3">
                  SPK Pemilihan Karyawan
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Metode AHP & TOPSIS dengan dashboard analitik modern.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[10px] font-bold text-slate-600 border border-white/10 px-3 py-1 rounded-md uppercase tracking-wider">
                  Next.js
                </span>
                <span className="text-[10px] font-bold text-slate-600 border border-white/10 px-3 py-1 rounded-md uppercase tracking-wider">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="md:col-span-2 bg-slate-900 border border-white/5 rounded-[2rem] p-10 flex flex-col justify-between group hover:border-[#d4af37]/30 transition-all duration-500">
              <div>
                <Badge className="bg-blue-500/10 text-blue-400 border-none mb-6 rounded-lg">
                  Mobile App
                </Badge>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Sistem Inventori Lab
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Tracking aset real-time menggunakan integrasi QR Code.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[10px] font-bold text-slate-600 border border-white/10 px-3 py-1 rounded-md uppercase tracking-wider">
                  React Native
                </span>
                <span className="text-[10px] font-bold text-slate-600 border border-white/10 px-3 py-1 rounded-md uppercase tracking-wider">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 py-40 text-center relative">
        <h2 className="text-5xl font-bold mb-8 text-white tracking-tight">
          Siap Lulus Semester Ini?
        </h2>
        <p className="text-slate-400 mb-12 max-w-lg mx-auto font-medium leading-relaxed text-lg">
          Jangan biarkan revisi teknis menghambat kelulusanmu. <br />
          Konsultasikan project-mu secara privat.
        </p>
        <Button
          size="lg"
          className="bg-white text-slate-950 hover:bg-[#d4af37] hover:text-slate-950 font-bold px-12 py-8 text-xl rounded-full transition-all duration-300 shadow-2xl shadow-white/5"
        >
          <MessageCircle className="mr-3 w-6 h-6 fill-current" /> Hubungi
          WhatsApp
        </Button>
      </section>

      {/* FOOTER - MINIMALIST GOLD */}
      <footer className="border-t border-white/5 py-16 px-8 bg-[#020617]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/5 border border-[#d4af37]/20 rounded-xl flex items-center justify-center font-bold text-[#d4af37]">
              S
            </div>
            <div className="text-left">
              <span className="block font-bold text-white text-lg tracking-tighter">
                SI Solution
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
                Tangerang District
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-[13px] font-medium tracking-wide">
            © 2026 Crafted with Excellence for Information System Students.
          </p>

          <div className="flex gap-6">
            {["Instagram", "Github"].map((item) => (
              <span
                key={item}
                className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#d4af37] cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
