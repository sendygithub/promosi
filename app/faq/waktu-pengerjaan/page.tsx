"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Zap,
  CalendarCheck,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function WaktuPengerjaanPage() {
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
          <Badge className="mb-6 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30 py-1.5 px-5 rounded-full font-medium tracking-wide shadow-lg shadow-blue-500/5">
            <Clock className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Waktu Pengerjaan
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-white">Berapa lama waktu</span>
            <br />
            <span className="bg-gradient-to-r from-blue-200 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              pengerjaan servis?
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed font-medium mb-10">
            Estimasi pengerjaan tergantung jenis kerusakan dan ketersediaan
            spare part. Kami selalu berusaha menyelesaikan servis secepat
            mungkin tanpa mengorbankan kualitas.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Estimasi per jenis servis */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <Zap className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Estimasi Waktu Servis
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5">
                  Berikut adalah estimasi waktu pengerjaan untuk masing-masing
                  jenis layanan:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      service: "Instalasi OS (Windows/Linux)",
                      time: "1 - 3 Jam",
                    },
                    {
                      service: "Instalasi Software & Office",
                      time: "1 - 2 Jam",
                    },
                    {
                      service: "Upgrade RAM / SSD",
                      time: "30 Menit - 1 Jam",
                    },
                    {
                      service: "Ganti Keyboard Laptop",
                      time: "1 - 2 Jam",
                    },
                    {
                      service: "Bersihkan Debu & Ganti Thermal Paste",
                      time: "1 - 2 Jam",
                    },
                    {
                      service: "Rakit PC Baru",
                      time: "2 - 4 Jam",
                    },
                    {
                      service: "Servis BlueScreen / Lemot",
                      time: "1 - 2 Hari (diagnosa + perbaikan)",
                    },
                    {
                      service: "Ganti LCD Laptop",
                      time: "1 - 2 Hari (tergantung ketersediaan spare part)",
                    },
                    {
                      service: "Perbaikan Motherboard",
                      time: "2 - 5 Hari",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <span className="text-sm text-slate-300">
                        {item.service}
                      </span>
                      <span className="text-sm font-bold text-blue-400 shrink-0 ml-4">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Faktor yang mempengaruhi */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <AlertCircle className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Faktor yang Mempengaruhi Waktu Pengerjaan
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Beberapa hal yang dapat mempengaruhi lama waktu pengerjaan
                  servis:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Ketersediaan spare part di distributor",
                    "Tingkat kerusakan (ringan / berat)",
                    "Antrian servis yang sedang berlangsung",
                    "Kompleksitas perbaikan (misal: motherboard rusak)",
                    "Perlunya waktu testing & quality control",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Prioritas */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-blue-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-7 h-7 text-blue-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Layanan Prioritas
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Untuk kebutuhan yang mendesak, kami menyediakan layanan
                  prioritas dengan waktu pengerjaan lebih cepat. Silakan hubungi
                  kami untuk informasi lebih lanjut mengenai biaya dan
                  ketersediaan layanan prioritas.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-blue-500/5 to-transparent"
        >
          <Sparkles className="w-8 h-8 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Ingin servis secepatnya?
          </h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Konsultasi dulu gratis! Ceritakan masalah perangkat Anda dan kami
            akan berikan estimasi waktu yang akurat.
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20estimasi%20waktu%20pengerjaan%20servis"
            target="_blank"
          >
            <Button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-xl shadow-blue-500/20 group">
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
