import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenCheck } from "lucide-react";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Tutorial Interaktif React & Algoritma",
  description:
    "Modul latihan interaktif dasar pemrograman dan React: pencarian data, filtering, transformasi data, dekomposisi masalah, control flow, validasi input, useState, dan Zustand.",
  path: "/tutorial",
});

const tutorialLinks = [
  ["Overview", "/tutorial"],
  ["Cari Data", "/tutorial/caridata"],
  ["Filtering", "/tutorial/filtering"],
  ["Transformation", "/tutorial/transformation"],
  ["Dekomposisi", "/tutorial/dekomposisi"],
  ["If Else", "/tutorial/ifelse"],
  ["Input Validation", "/tutorial/inputvalidation"],
  ["Kalkulator", "/tutorial/kalkulator"],
  ["Kalkulator Belanja", "/tutorial/kalkulatorbelanja"],
  ["useState", "/tutorial/usestate"],
  ["Zustand", "/tutorial/zustand"],
  ["Shop", "/tutorial/shop"],
  ["Checkout", "/tutorial/checkout"],
  ["Product", "/tutorial/product"],
  ["Artikel", "/tutorial/artikel"],
  ["Movies", "/tutorial/movies"],
  ["Contact Page", "/tutorial/contactpage"],
];

export default function TutorialLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-black text-[#A8B0BC]">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6 pt-24">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 border border-white/[0.06] bg-[#141619] p-4">
            <div className="mb-5 flex items-center gap-3 border-b border-white/[0.06] pb-4">
              <div className="flex size-10 items-center justify-center bg-[#1C69D4]/10 text-[#1C69D4]">
                <BookOpenCheck className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-white leading-none">
                  Tutorial
                </p>
                <p className="mt-1 text-[11px] text-[#A8B0BC]/50">
                  React basics
                </p>
              </div>
            </div>
            <nav className="space-y-1">
              {tutorialLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block px-3 py-2 text-[13px] font-medium text-[#A8B0BC]/70 transition hover:bg-white/[0.03] hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1 border border-white/[0.06] bg-[#141619] p-4 md:p-6">
          <div className="mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {tutorialLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="shrink-0 border border-white/[0.06] px-3 py-1.5 text-[11px] font-medium text-[#A8B0BC]/70 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
