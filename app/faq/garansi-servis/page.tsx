"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Clock,
  Wrench,
  FileText,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function GaransiServisPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#d4af37]/20 overflow-x-hidden">
      {/* Ambient glow */}
      <div className="fixed top-0 -left-10 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] -z-10" />
      <div className="fixed bottom-0 -right-10 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] -z-10" />
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Navbar spacer */}
      <div className="h-20 w-full" />

      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link href="/servis#faq">
          <Button
            variant="ghost"
            className="text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke FAQ
          </Button>
        </Link>
      </div>

      {/* Hero section */}
      <section className="px-6 pt-12 pb-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-400/30 py-1.5 px-5 rounded-full font-medium tracking-wide shadow-lg shadow-emerald-500/5">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Garansi Servis
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-white">Apakah ada garansi</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-green-400 bg-clip-text text-transparent">
              untuk servis?
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed font-medium mb-10">
            Garansi jasa dan spare part sesuai jenis perbaikan yang dilakukan.
            Kami memberikan garansi penuh atas setiap pekerjaan yang kami
            lakukan, baik itu jasa perbaikan maupun penggantian komponen.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Garansi Jasa */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Wrench className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Garansi Jasa Perbaikan
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Setiap servis yang kami lakukan mendapatkan garansi jasa
                  sesuai dengan jenis perbaikan. Jika dalam masa garansi terjadi
                  masalah yang sama, kami akan perbaiki kembali tanpa biaya
                  tambahan. Garansi jasa berlaku untuk:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Servis laptop & PC (software & hardware)",
                    "Instalasi sistem operasi",
                    "Perbaikan motherboard & komponen",
                    "Setting & konfigurasi jaringan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Garansi Spare Part */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <FileText className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Garansi Spare Part
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Spare part yang diganti di Prisma Komputer mendapatkan garansi
                  dari distributor resmi. Garansi spare part meliputi:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "SSD / HDD: Garansi 1-3 tahun (tergantung merek)",
                    "RAM: Garansi seumur hidup (lifetime warranty)",
                    "Keyboard laptop: Garansi 3-6 bulan",
                    "Power Supply (PSU): Garansi 1-3 tahun",
                    "LCD & Flexible Cable: Garansi 3 bulan",
                    "Baterai laptop: Garansi 6 bulan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Masa Berlaku */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-emerald-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Masa Berlaku Garansi
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Masa berlaku garansi dimulai sejak barang selesai diperbaiki
                  dan diserahkan kembali kepada pelanggan. Garansi tidak berlaku
                  jika:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {[
                    "Kerusakan akibat kesalahan penggunaan",
                    "Terkena cairan atau benturan fisik",
                    "Dibongkar oleh pihak ketiga",
                    "Bencana alam (force majeure)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <span className="w-4 h-4 text-red-400 mt-0.5 shrink-0 text-center leading-none">
                        ✕
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-emerald-500/5 to-transparent"
        >
          <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Masih punya pertanyaan?
          </h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Hubungi kami langsung via WhatsApp untuk konsultasi gratis seputar
            garansi servis.
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20soal%20garansi%20servis"
            target="_blank"
          >
            <Button className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/20 group">
              <MessageCircle className="mr-2 w-5 h-5 fill-current" />
              Tanya via WhatsApp
              <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
