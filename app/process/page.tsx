import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Code2,
  FileText,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Alur Pendampingan Skripsi",
  description:
    "Alur kerja pendampingan skripsi Sistem Informasi bersama Sendy Andreansah.",
};

const steps = [
  {
    title: "Konsultasi Judul dan Scope",
    description:
      "Saya cek judul, studi kasus, batasan masalah, kebutuhan fitur, dan tingkat kesulitan agar project tetap realistis untuk skripsi.",
    icon: MessageCircle,
  },
  {
    title: "Analisis Kebutuhan Sistem",
    description:
      "Kita susun aktor, role, alur bisnis, modul utama, database awal, dan daftar fitur yang akan masuk ke demo sidang.",
    icon: ClipboardList,
  },
  {
    title: "Perancangan dan Timeline",
    description:
      "Saya bantu petakan milestone pengerjaan, prioritas fitur, rancangan halaman, dan kebutuhan dokumen teknis.",
    icon: CalendarCheck,
  },
  {
    title: "Development Program",
    description:
      "Program dibuat bertahap dengan stack yang sesuai: Laravel, Next.js, React, PostgreSQL, MySQL, Prisma, atau Firebase.",
    icon: Code2,
  },
  {
    title: "Review, Revisi, dan Testing",
    description:
      "Setiap modul diuji, bug diperbaiki, tampilan dirapikan, dan revisi dosen disesuaikan dengan scope yang disepakati.",
    icon: ShieldCheck,
  },
  {
    title: "Dokumentasi dan Persiapan Sidang",
    description:
      "Saya bantu siapkan penjelasan alur sistem, cara instalasi, database, dan poin teknis yang biasa ditanyakan saat sidang.",
    icon: FileText,
  },
];

const deliverables = [
  "Source code aplikasi",
  "Database schema dan seed data dasar",
  "Panduan instalasi lokal",
  "Penjelasan alur sistem per role",
  "Pendampingan revisi sesuai scope",
  "Brief teknis untuk presentasi sidang",
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <Badge className="mb-5 border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1 text-[#d4af37]">
              Process
            </Badge>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
              Alur kerja pendampingan skripsi yang jelas dari awal sampai sidang.
            </h1>
          </div>
          <p className="text-lg leading-8 text-white/62">
            Pendampingan dibuat supaya mahasiswa tidak hanya menerima program,
            tetapi juga paham alur sistem, struktur database, fitur utama, dan
            cara menjelaskan aplikasi saat bimbingan maupun sidang.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                    <Icon className="size-5" />
                  </div>
                  <span className="font-mono text-sm font-bold text-white/30">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold">{step.title}</h2>
                <p className="mt-4 leading-7 text-white/60">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d4af37]">
              Output
            </p>
            <h2 className="mt-3 text-3xl font-extrabold">
              Yang kamu dapatkan selama pendampingan
            </h2>
            <p className="mt-5 leading-8 text-white/58">
              Fokusnya adalah hasil yang bisa dipresentasikan, bisa dijalankan,
              dan bisa kamu jelaskan dengan percaya diri.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] p-4 font-semibold text-white/75"
              >
                <CheckCircle2 className="size-5 shrink-0 text-[#d4af37]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
