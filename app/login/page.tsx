import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Eye, LockKeyhole, Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Login Client Area",
  description: "Masuk ke dashboard pendampingan skripsi SI Solution.",
};

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#06080f] text-white lg:grid-cols-[1fr_0.9fr]">
      <section className="flex items-center px-6 py-16">
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/25 md:p-8">
            <div className="mb-8">
              <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-[#d4af37]/10 text-[#d4af37]">
                <LockKeyhole className="size-5" />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                Masuk Dashboard
              </h1>
              <p className="mt-3 leading-7 text-white/58">
                Pantau progress project, milestone revisi, dokumen, dan catatan
                pendampingan skripsi.
              </p>
            </div>

            <form className="space-y-5">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Email
                </span>
                <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                  <Mail className="size-4 text-white/35" />
                  <input
                    type="email"
                    placeholder="nama@email.com"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/25"
                  />
                </div>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-white/72">
                  Password
                </span>
                <div className="flex h-12 items-center gap-3 rounded-lg border border-white/10 bg-[#0b101b] px-4 focus-within:border-[#d4af37]/60">
                  <LockKeyhole className="size-4 text-white/35" />
                  <input
                    type="password"
                    placeholder="Masukkan password"
                    className="w-full bg-transparent text-sm outline-none placeholder:text-white/25"
                  />
                  <Eye className="size-4 text-white/35" />
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-white/58">
                  <input type="checkbox" className="size-4 accent-[#d4af37]" />
                  Ingat saya
                </label>
                <a href="#" className="font-bold text-[#d4af37]">
                  Lupa password?
                </a>
              </div>

              <Link
                href="/dashboard"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-6 font-bold text-slate-950 transition hover:bg-white"
              >
                Masuk
                <ArrowRight className="size-4" />
              </Link>
            </form>
          </div>
        </div>
      </section>

      <aside className="hidden border-l border-white/10 bg-white/[0.025] p-10 lg:flex lg:flex-col lg:justify-between">
        <div>
          <div className="mb-10 inline-flex items-center gap-2 rounded-lg border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-2 text-sm font-bold text-[#d4af37]">
            <ShieldCheck className="size-4" />
            Client Workspace
          </div>
          <h2 className="max-w-xl text-5xl font-extrabold leading-tight tracking-tight">
            Satu tempat untuk tracking pengerjaan skripsi.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-8 text-white/58">
            Dashboard dirancang untuk melihat status modul, jadwal bimbingan,
            revisi dosen, invoice, dan file project.
          </p>
        </div>
        <div className="grid gap-4">
          {[
            "Progress modul real-time",
            "Catatan revisi terstruktur",
            "File project dan dokumentasi",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-[#0b101b] p-4 font-semibold text-white/72"
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
    </main>
  );
}
