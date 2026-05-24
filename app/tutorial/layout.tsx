import Link from "next/link";
import { BookOpenCheck } from "lucide-react";

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
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-4 py-6">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-6 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-5 flex items-center gap-3 border-b border-slate-100 pb-4">
              <div className="flex size-10 items-center justify-center rounded-lg bg-slate-950 text-[#d4af37]">
                <BookOpenCheck className="size-5" />
              </div>
              <div>
                <p className="font-extrabold leading-none">Tutorial</p>
                <p className="mt-1 text-xs text-slate-500">React basics</p>
              </div>
            </div>
            <nav className="space-y-1">
              {tutorialLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
          <div className="mb-5 flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {tutorialLinks.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="shrink-0 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-bold text-slate-600"
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
