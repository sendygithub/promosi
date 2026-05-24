import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Pricing Program Skripsi",
  description:
    "Daftar harga wajar program skripsi Sistem Informasi berdasarkan katalog showroom.",
};

const programs = [
  ["Absensi Guru", "Absensi", "Laravel, MySQL", "Rp 2.500.000"],
  ["Absensi Karyawan GPS Barcode", "Absensi", "Next.js, PostgreSQL", "Rp 4.500.000"],
  ["Absensi Kelas Sederhana", "Sekolah", "Laravel, MySQL", "Rp 2.000.000"],
  ["Aplikasi Absensi Karyawan", "Absensi", "PHP, MySQL", "Rp 2.500.000"],
  ["Aplikasi Antrian Sederhana", "Pelayanan", "Laravel, Bootstrap", "Rp 2.250.000"],
  ["Aplikasi Cuti Karyawan", "HR", "Next.js, Prisma", "Rp 4.000.000"],
  ["Aplikasi E-Surat Desa", "Pemerintahan", "Laravel, MySQL", "Rp 4.000.000"],
  ["Aplikasi HR Karyawan", "HR", "Next.js, PostgreSQL", "Rp 5.500.000"],
  ["Aplikasi Management Inventaris", "Inventory", "Laravel, MySQL", "Rp 3.500.000"],
  ["Aplikasi Smart HR", "HR", "Next.js, Tailwind", "Rp 6.500.000"],
  ["Booking Futsal", "Booking", "Laravel, MySQL", "Rp 3.000.000"],
  ["CMS Portal Berita", "CMS", "Next.js, MongoDB", "Rp 4.000.000"],
  ["E-Commerce Fashion", "E-Commerce", "Next.js, Midtrans", "Rp 6.500.000"],
  ["E-Commerce Tumbuhan", "E-Commerce", "Laravel, MySQL", "Rp 4.500.000"],
  ["E-Commerce With Midtrans", "E-Commerce", "Next.js, Midtrans", "Rp 7.500.000"],
  ["E-Office", "Office", "Laravel, MySQL", "Rp 5.500.000"],
  ["E-Todolist", "Produktivitas", "React, Firebase", "Rp 1.750.000"],
  ["HRIS", "HR", "Next.js, Prisma", "Rp 6.000.000"],
  ["Inventory", "Inventory", "Laravel, MySQL", "Rp 3.000.000"],
  ["Kasir Restoran Sederhana", "POS", "PHP, MySQL", "Rp 3.000.000"],
  ["Learning Management System", "Education", "Next.js, PostgreSQL", "Rp 7.000.000"],
  ["Medical Checkup", "Kesehatan", "Laravel, MySQL", "Rp 5.000.000"],
  ["Point Of Sale", "POS", "React, Firebase", "Rp 4.500.000"],
  ["SIAKAD", "Education", "Laravel, MySQL", "Rp 6.500.000"],
  ["SIAKAD SMP", "Education", "PHP, MySQL", "Rp 4.500.000"],
  ["Sistem Absensi Sekolah", "Sekolah", "Laravel, MySQL", "Rp 3.500.000"],
  ["Sistem Antrian Puskesmas", "Kesehatan", "Next.js, PostgreSQL", "Rp 5.500.000"],
  ["Sistem Informasi Desa", "Pemerintahan", "Laravel, MySQL", "Rp 5.500.000"],
  ["Sistem Management Perpustakaan Digital", "Education", "Next.js, MongoDB", "Rp 5.500.000"],
  ["Website Company Profile", "Company Profile", "Next.js, Tailwind", "Rp 2.500.000"],
  ["Website Donasi", "Donasi", "Laravel, Midtrans", "Rp 5.000.000"],
  ["Web Klinik", "Kesehatan", "Next.js, Prisma", "Rp 6.000.000"],
  ["Web Klinik Gigi", "Kesehatan", "Laravel, MySQL", "Rp 5.000.000"],
];

const packages = [
  {
    name: "Starter",
    price: "mulai Rp 1,75 jt",
    description: "Cocok untuk aplikasi CRUD sederhana dan demo sidang.",
  },
  {
    name: "Professional",
    price: "Rp 3 jt - 5,5 jt",
    description: "Paket paling seimbang untuk sistem informasi skripsi.",
  },
  {
    name: "Advanced",
    price: "Rp 6 jt - 7,5 jt",
    description: "Untuk sistem dengan role kompleks, payment, atau dashboard.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#06080f] text-white">
      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <Badge className="mb-5 border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1 text-[#d4af37]">
            Pricing Program
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            Harga program skripsi yang realistis dan transparan.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/62">
            Harga berikut disusun dari katalog `/showroom`, disesuaikan dengan
            kompleksitas fitur, teknologi, jumlah role, integrasi, dan kebutuhan
            revisi. Final harga tetap mengikuti scope setelah konsultasi.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/6281281916880"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 font-bold text-slate-950 transition hover:bg-white"
            >
              <MessageCircle className="size-5" />
              Konsultasi Harga
            </a>
            <Link
              href="/showroom"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 font-bold text-white transition hover:border-[#d4af37]/60 hover:text-[#d4af37]"
            >
              Lihat Showroom
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className="rounded-lg border border-white/10 bg-white/[0.035] p-6"
            >
              <div className="mb-6 flex size-11 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                <Sparkles className="size-5" />
              </div>
              <h2 className="text-2xl font-extrabold">{item.name}</h2>
              <p className="mt-2 text-3xl font-black text-[#d4af37]">
                {item.price}
              </p>
              <p className="mt-4 leading-7 text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d4af37]">
                Program Table
              </p>
              <h2 className="mt-3 text-3xl font-extrabold">
                Daftar harga berdasarkan jenis program
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/50">
              Include source code, database, dokumentasi instalasi, dan
              pendampingan pemahaman alur sistem.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0b101b]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.14em] text-white/45">
                  <tr>
                    <th className="px-5 py-4">Program</th>
                    <th className="px-5 py-4">Kategori</th>
                    <th className="px-5 py-4">Stack</th>
                    <th className="px-5 py-4 text-right">Harga Wajar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {programs.map(([name, category, stack, price]) => (
                    <tr key={name} className="transition hover:bg-white/[0.03]">
                      <td className="px-5 py-4 font-semibold text-white">
                        {name}
                      </td>
                      <td className="px-5 py-4 text-white/60">{category}</td>
                      <td className="px-5 py-4 text-white/60">{stack}</td>
                      <td className="px-5 py-4 text-right font-extrabold text-[#d4af37]">
                        {price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Harga bisa turun jika hanya perlu modifikasi template.",
              "Harga naik jika ada payment gateway, multi-role kompleks, atau deploy production.",
              "Pembayaran bisa dibuat bertahap sesuai milestone pengerjaan.",
            ].map((note) => (
              <div
                key={note}
                className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-white/62"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#d4af37]" />
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
