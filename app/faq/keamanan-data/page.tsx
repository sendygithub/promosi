"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  ArrowLeft,
  MessageCircle,
  CheckCircle2,
  Lock,
  Eye,
  FileWarning,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function KeamananDataPage() {
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
          <Badge className="mb-6 bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-400/30 py-1.5 px-5 rounded-full font-medium tracking-wide shadow-lg shadow-violet-500/5">
            <ShieldCheck className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Keamanan Data
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
            <span className="text-white">Data saya</span>
            <br />
            <span className="bg-gradient-to-r from-violet-200 via-purple-400 to-violet-400 bg-clip-text text-transparent">
              aman tidak?
            </span>
          </h1>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed font-medium mb-10">
            Kami menjaga keamanan data pelanggan selama proses servis
            berlangsung. Privasi Anda adalah prioritas utama kami.
          </p>
        </motion.div>

        {/* Detail content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Komitmen keamanan */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-violet-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Lock className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Komitmen Keamanan Data
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Kami memahami bahwa perangkat Anda menyimpan data-data penting
                  dan pribadi. Oleh karena itu, kami menerapkan standar keamanan
                  yang ketat:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Data Anda tidak akan kami akses, salin, atau sebarkan",
                    "Kami tidak bertanggung jawab atas data yang tidak di-backup",
                    "Disarankan untuk backup data penting sebelum servis",
                    "Teknisi kami profesional dan terikat kode etik",
                    "Area kerja teknisi diawasi CCTV untuk keamanan",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Saran backup */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-violet-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <FileWarning className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Saran Sebelum Servis
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Untuk keamanan data Anda, kami sangat menyarankan:
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Backup data penting ke hardisk eksternal atau cloud",
                    "Hapus data sensitif jika tidak diperlukan",
                    "Logout dari akun-akun penting (email, sosial media, banking)",
                    "Catat password yang mungkin diperlukan untuk testing",
                    "Untuk servis berat, lepaskan hardisk jika data sangat rahasia",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Kebijakan privasi */}
          <div className="rounded-2xl border border-white/5 bg-[#0f172a]/40 p-8 hover:border-violet-500/30 transition-all duration-500">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0">
                <Eye className="w-7 h-7 text-violet-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">
                  Kebijakan Privasi
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  Prisma Komputer berkomitmen untuk melindungi privasi setiap
                  pelanggan. Kami tidak akan pernah meminta password akun
                  pribadi Anda (email, sosial media, banking, dll) tanpa alasan
                  teknis yang jelas. Jika ada kebutuhan teknis yang mengharuskan
                  akses ke akun tertentu, kami akan meminta izin tertulis
                  terlebih dahulu. Setelah servis selesai, kami merekomendasikan
                  Anda untuk mengganti password akun-akun penting sebagai
                  langkah keamanan tambahan.
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
          className="mt-12 text-center p-10 rounded-3xl border border-white/5 bg-gradient-to-b from-violet-500/5 to-transparent"
        >
          <Sparkles className="w-8 h-8 text-violet-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-3">
            Ada kekhawatiran soal data?
          </h3>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            Tanyakan langsung via WhatsApp. Kami akan jelaskan bagaimana kami
            menjaga keamanan data Anda.
          </p>
          <Link
            href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20soal%20keamanan%20data%20saat%20servis"
            target="_blank"
          >
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white font-bold px-8 py-6 rounded-full transition-all duration-300 shadow-xl shadow-violet-500/20 group">
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
