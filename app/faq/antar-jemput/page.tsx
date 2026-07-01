"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  MapPin,
  Globe,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function AntarJemputPage() {
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
          <Badge className="mb-6 bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-400/30 py-1.5 px-5 rounded-full font-medium tracking-wide shadow-lg shadow-amber-500/5">
            <Truck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Antar Jemput Gratis
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-white">Apakah antar jemput</span>
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              benar-benar gratis?
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed font-medium mb-10">
            Layanan antar jemput tersedia untuk area tertentu tanpa biaya
            tambahan. Kami jemput perangkat Anda, servis, dan antar kembali
            setelah selesai.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Area coverage */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-amber-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <MapPin className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Area Layanan Antar Jemput
                </h2>
                <p className="text-slate-400 leading-relaxed mb-5">
                  Layanan antar jemput gratis tersedia untuk wilayah Tangerang
                  dan sekitarnya, meliputi:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Tangerang Kota",
                    "Tangerang Selatan",
                    "Ciputat",
                    "Pamulang",
                    "BSD City",
                    "Serpong",
                    "Ciledug",
                    "Karawaci",
                    "Pinang",
                    "Cimone",
                    "Batuceper",
                    "Periuk",
                  ].map((area, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 py-2 px-4 rounded-xl bg-white/[0.02] border border-white/5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="text-sm text-slate-300">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-amber-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Globe className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Cara Kerja Antar Jemput
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Hubungi Kami",
                      desc: "WhatsApp atau telepon kami untuk menjadwalkan antar jemput.",
                    },
                    {
                      step: "2",
                      title: "Kami Jemput",
                      desc: "Kurir kami akan datang ke lokasi Anda sesuai jadwal yang disepakati.",
                    },
                    {
                      step: "3",
                      title: "Servis & Perbaikan",
                      desc: "Perangkat Anda akan kami servis dengan profesional.",
                    },
                    {
                      step: "4",
                      title: "Antar Kembali",
                      desc: "Setelah selesai, kami antar kembali perangkat Anda ke tempat Anda.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                        <span className="text-sm font-bold text-amber-400">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-amber-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
                <Clock className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Ketentuan Layanan
                </h2>
                <ul className="space-y-2.5">
                  {[
                    "Gratis antar jemput untuk area Tangerang dan sekitarnya",
                    "Untuk area luar Tangerang, dikenakan biaya tambahan sesuai jarak",
                    "Penjadwalan antar jemput dilakukan via WhatsApp",
                    "Waktu antar jemput menyesuaikan jadwal kurir",
                    "Perangkat harus sudah siap saat kurir datang",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
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
          className="mt-12 text-center p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-amber-500/5 to-transparent"
        >
          <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">Mau dijemput?</h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Hubungi kami sekarang untuk menjadwalkan antar jemput gratis!
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20jadwalkan%20antar%20jemput%20servis"
            target="_blank"
          >
            <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-xl shadow-amber-500/20 group">
              <MessageCircle className="mr-2 w-5 h-5 fill-current" />
              Jadwalkan Antar Jemput
              <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
