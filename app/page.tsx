"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
import Navbar from "@/app/components/Navbar";

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
    <main className="min-h-screen bg-black text-[#A8B0BC] selection:bg-[#1C69D4]/20 overflow-x-hidden">
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
          <div className="mb-8">
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
              Konsultasi skripsi • Pengembangan aplikasi • Servis komputer
            </span>
          </div>

          <h1 className="text-[40px] md:text-[80px] font-bold tracking-[-0.02em] leading-[1.05] text-white mb-8">
            Prisma Komputer
            <br />
            <span className="text-[#A8B0BC]">Partner Skripsi & IT Support</span>
          </h1>

          <p className="text-[15px] text-[#A8B0BC] max-w-2xl mx-auto mb-12 leading-relaxed">
            Kami membantu mahasiswa mengembangkan aplikasi skripsi, memperbaiki
            bug, menyusun dokumentasi, hingga persiapan sidang. Selain itu
            tersedia layanan servis komputer dan laptop untuk kebutuhan harian
            maupun pekerjaan.
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Link href="/showroom">
              <Button
                size="lg"
                className="bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-10 py-6 text-[15px]"
              >
                Pendampingan Skripsi
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>

            <Link href="/servis">
              <Button
                size="lg"
                variant="outline"
                className="border-white/[0.12] text-[#A8B0BC] hover:text-white hover:border-white/[0.25] px-10 py-6 text-[15px]"
              >
                Servis Komputer & Laptop
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* TECH STACK - INFINITE MARQUEE ANIMATION */}
      <section className="py-12 border-y border-white/[0.06] overflow-hidden">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50 mb-10">
          Teknologi yang kami gunakan
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex flex-nowrap gap-10 md:gap-20 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[
              {
                name: "Next.js",
                icon: <Globe className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "TypeScript",
                icon: <Code2 className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "Laravel",
                icon: <Laptop className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "AI/ML",
                icon: <BrainCircuit className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "Supabase",
                icon: <Rocket className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "Tailwind",
                icon: <Code2 className="w-15 h-15 text-[#A8B0BC]" />,
              },
            ].map((stack, index) => (
              <div
                key={index}
                className="flex items-center gap-2.5 font-medium text-[15px] text-[#A8B0BC]/40 whitespace-nowrap"
              >
                {stack.icon} {stack.name}
              </div>
            ))}

            {[
              {
                name: "Next.js",
                icon: <Globe className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "TypeScript",
                icon: <Code2 className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "Laravel",
                icon: <Laptop className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "AI/ML",
                icon: <BrainCircuit className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "Supabase",
                icon: <Rocket className="w-15 h-15 text-[#A8B0BC]" />,
              },
              {
                name: "Tailwind",
                icon: <Code2 className="w-15 h-15 text-[#A8B0BC]" />,
              },
            ].map((stack, index) => (
              <div
                key={`dup-${index}`}
                className="flex items-center gap-2.5 font-medium text-[15px] text-[#A8B0BC]/40 whitespace-nowrap"
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
          <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
            Layanan
          </span>
          <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
            Layanan yang tersedia
          </h2>
          <p className="text-[15px] text-[#A8B0BC] max-w-md mx-auto">
            Mulai dari konsultasi, pengembangan aplikasi, hingga penyelesaian
            revisi.
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
            },
            {
              title: "Full Chapter (Bab 1-5)",
              icon: <Rocket className="w-5 h-5" />,
              desc: "Lengkap dengan dokumen teknis, perancangan sistem, dan mentoring bimbingan.",
            },
            {
              title: "Mentoring & Debug",
              icon: <MessageCircle className="w-5 h-5" />,
              desc: "Optimasi kode yang sudah ada, perbaikan bug, dan penjelasan logika sistem.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="group bg-[#141619] border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 flex items-center justify-center mb-8 text-[#A8B0BC] group-hover:text-[#1C69D4] transition-colors duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#A8B0BC] leading-relaxed mb-8">
                    {item.desc}
                  </p>
                  <div className="text-[#1C69D4] font-medium flex items-center gap-2 text-[13px] cursor-pointer group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="px-6 py-28 border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-left">
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
                Portfolio
              </span>
              <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-3 mb-4">
                Beberapa project yang pernah dikerjakan
              </h2>
              <p className="text-[15px] text-[#A8B0BC]">
                Beberapa sistem yang telah sukses dipresentasikan.
              </p>
            </div>
            <Link
              href="/showroom"
              className="text-[#1C69D4] text-[13px] font-medium border-b border-[#1C69D4]/20 pb-1 hover:border-[#1C69D4] transition-all"
            >
              Lihat Semua Demo
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6 auto-rows-[320px]">
            <div className="md:col-span-2 bg-[#141619] border border-white/[0.06] p-10 flex flex-col justify-between group hover:border-white/[0.12] transition-all duration-500">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] mb-6 block">
                  AI System
                </span>
                <h3 className="text-[22px] font-semibold text-white mb-3">
                  SPK Pemilihan Karyawan
                </h3>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                  Metode AHP & TOPSIS dengan dashboard analitik modern.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[10px] font-medium text-[#A8B0BC]/50 border border-white/[0.06] px-3 py-1 uppercase tracking-[0.1em]">
                  Next.js
                </span>
                <span className="text-[10px] font-medium text-[#A8B0BC]/50 border border-white/[0.06] px-3 py-1 uppercase tracking-[0.1em]">
                  PostgreSQL
                </span>
              </div>
            </div>

            <div className="md:col-span-2 bg-[#141619] border border-white/[0.06] p-10 flex flex-col justify-between group hover:border-white/[0.12] transition-all duration-500">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] mb-6 block">
                  Mobile App
                </span>
                <h3 className="text-[22px] font-semibold text-white mb-3">
                  Sistem Inventori Lab
                </h3>
                <p className="text-[13px] text-[#A8B0BC] leading-relaxed">
                  Tracking aset real-time menggunakan integrasi QR Code.
                </p>
              </div>
              <div className="flex gap-3">
                <span className="text-[10px] font-medium text-[#A8B0BC]/50 border border-white/[0.06] px-3 py-1 uppercase tracking-[0.1em]">
                  React Native
                </span>
                <span className="text-[10px] font-medium text-[#A8B0BC]/50 border border-white/[0.06] px-3 py-1 uppercase tracking-[0.1em]">
                  Node.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 py-40 text-center relative">
        <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50">
          Gratis Konsultasi
        </span>
        <h2 className="text-[38px] md:text-[48px] font-bold tracking-[-0.02em] text-white mt-4 mb-4">
          Punya project yang ingin didiskusikan?
        </h2>
        <p className="text-[15px] text-[#A8B0BC] max-w-lg mx-auto mb-12 leading-relaxed">
          Hubungi kami untuk konsultasi skripsi, pengembangan aplikasi, atau
          servis komputer. Respon cepat melalui WhatsApp.
        </p>
        <Button
          size="lg"
          className="bg-[#1C69D4] text-white hover:bg-[#1C69D4]/90 font-medium px-12 py-7 text-[15px]"
        >
          <MessageCircle className="mr-3 w-5 h-5" /> Hubungi WhatsApp
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-14 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#141619] flex items-center justify-center text-[#A8B0BC] font-semibold text-[14px]">
              P
            </div>
            <div className="text-left">
              <span className="block font-semibold text-white text-[15px] tracking-tight">
                Prisma Tangerang
              </span>
              <span className="block text-[10px] uppercase tracking-[0.1em] text-[#A8B0BC]/50 font-medium">
                Tangerang District
              </span>
            </div>
          </div>

          <p className="text-[#A8B0BC]/50 text-[12px] font-medium">
            &copy; 2026 Prisma Komputer. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Instagram", "Github"].map((item) => (
              <span
                key={item}
                className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#A8B0BC]/50 hover:text-white cursor-pointer transition-colors"
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
