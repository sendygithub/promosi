"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  ChevronRight,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  Sparkles,
  ExternalLink,
  Star,
  Globe,
  Monitor,
  Smartphone,
  Palette,
  Zap,
  Shield,
  BarChart3,
  Layers,
} from "lucide-react";
import Image from "next/image";

// Helper untuk mengambil URL Logo Tech Stack
const getTechIcon = (tech: string) => {
  const icons: { [key: string]: string } = {
    "Next.js": "https://svgl.app/library/nextjs_icon_dark.svg",
    Laravel: "https://svgl.app/library/laravel.svg",
    TypeScript: "https://svgl.app/library/typescript.svg",
    Python: "https://svgl.app/library/python.svg",
    React: "https://svgl.app/library/react.svg",
    MySQL: "https://svgl.app/library/mysql.svg",
    PostgreSQL: "https://svgl.app/library/postgresql.svg",
    Tailwind: "https://svgl.app/library/tailwindcss.svg",
    Prisma: "https://svgl.app/library/prisma.svg",
    Supabase: "https://svgl.app/library/supabase.svg",
    Firebase: "https://svgl.app/library/firebase.svg",
    "Node.js": "https://svgl.app/library/nodejs.svg",
    PHP: "https://svgl.app/library/php.svg",
    IoT: "https://img.icons8.com/fluency/48/internet-of-things.png",
    Bootstrap: "https://svgl.app/library/bootstrap.svg",
    MongoDB: "https://svgl.app/library/mongodb-icon.svg",
    Midtrans: "https://img.icons8.com/color/48/midtrans.png",
  };
  return icons[tech] || "https://svgl.app/library/code.svg";
};

// ===== REAL PROJECTS (milik Sendy) =====
const realProjects = [
  {
    id: "andreansah",
    title: "Andreansah — Portfolio",
    desc: "Portfolio pribadi dengan desain modern, menampilkan project, skill, dan perjalanan karier.",
    url: "https://andreansah.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Portfolio",
    gradient: "from-amber-600/20 via-orange-500/10 to-rose-600/20",
    accentColor: "amber",
    features: ["Responsive Design", "Dark Mode", "Animasi Smooth"],
  },
  {
    id: "bintang-audio",
    title: "Bintang Audio — Rental Sound System",
    desc: "Platform rental sound system profesional dengan katalog alat, harga, dan pemesanan online.",
    url: "https://bintang-audio.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Rental",
    gradient: "from-violet-600/20 via-purple-500/10 to-fuchsia-600/20",
    accentColor: "violet",
    features: ["Katalog Produk", "Sistem Booking", "Admin Dashboard"],
  },
  {
    id: "oday-aquatic",
    title: "Oday Aquatic — Toko Ikan Hias",
    desc: "Toko online ikan hias dan perlengkapan akuarium dengan sistem belanja modern.",
    url: "https://sky-fish.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "E-Commerce",
    gradient: "from-cyan-600/20 via-blue-500/10 to-teal-600/20",
    accentColor: "cyan",
    features: ["Katalog Produk", "Keranjang Belanja", "Pembayaran Online"],
  },
  {
    id: "rkk-petshop",
    title: "RKK Petshop — Toko Hewan Peliharaan",
    desc: "Toko online perlengkapan hewan peliharaan dengan layanan grooming dan penjualan hewan.",
    url: "https://rkk-petshop.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "E-Commerce",
    gradient: "from-emerald-600/20 via-green-500/10 to-lime-600/20",
    accentColor: "emerald",
    features: ["Katalog Produk", "Layanan Grooming", "Reservasi Online"],
  },
  {
    id: "rpsncsubang",
    title: "RPSNC Subang — Portal Berita",
    desc: "Portal berita dan informasi RPSNC Subang dengan sistem manajemen konten modern.",
    url: "https://rpsncsubang.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Portal Berita",
    gradient: "from-sky-600/20 via-blue-500/10 to-indigo-600/20",
    accentColor: "sky",
    features: ["Manajemen Berita", "Multi Halaman", "Responsive Design"],
  },
  {
    id: "Undangan-Ulang-Tahun",
    title: "Undangan Ulang Tahun",
    desc: "Aplikasi undangan ulang tahun digital.",
    url: "https://prisma-komputer.vercel.app/ulangtahun/nama-tamu",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    category: "Undangan",
    gradient: "from-pink-600/20 via-rose-500/10 to-red-600/20",
    accentColor: "pink",
    features: ["Desain Menarik", "Customizable", "Responsive Design"],
  },
];

// ===== DUMMY PROJECTS =====
const dummyProjects = [
  {
    id: 6,
    slug: "absensi-guru",
    title: "Absensi Guru",
    desc: "Sistem absensi guru berbasis web.",
    stack: ["Laravel", "MySQL"],
    category: "Absensi",
  },
  {
    id: 7,
    slug: "absensi-karyawan-gps-barcode",
    title: "Absensi Karyawan GPS Barcode",
    desc: "Sistem absensi karyawan dengan GPS dan barcode.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Absensi",
  },
  {
    id: 8,
    slug: "absensi-kelas-sederhana",
    title: "Absensi Kelas Sederhana",
    desc: "Aplikasi absensi kelas sederhana.",
    stack: ["Laravel", "MySQL"],
    category: "Sekolah",
  },
  {
    id: 9,
    slug: "aplikasi-absensi-karyawan",
    title: "Aplikasi Absensi Karyawan",
    desc: "Manajemen absensi pegawai perusahaan.",
    stack: ["PHP", "MySQL"],
    category: "Absensi",
  },
  {
    id: 10,
    slug: "aplikasi-antrian-sederhana",
    title: "Aplikasi Antrian Sederhana",
    desc: "Sistem antrian digital sederhana.",
    stack: ["Laravel", "Bootstrap"],
    category: "Pelayanan",
  },
  {
    id: 11,
    slug: "aplikasi-cuti-karyawan",
    title: "Aplikasi Cuti Karyawan",
    desc: "Manajemen pengajuan cuti pegawai.",
    stack: ["Next.js", "Prisma"],
    category: "HR",
  },
  {
    id: 12,
    slug: "aplikasi-e-surat-desa",
    title: "Aplikasi E-Surat Desa",
    desc: "Pengelolaan surat menyurat desa.",
    stack: ["Laravel", "MySQL"],
    category: "Pemerintahan",
  },
  {
    id: 13,
    slug: "aplikasi-hr-karyawan",
    title: "Aplikasi HR Karyawan",
    desc: "Human resource management system.",
    stack: ["Next.js", "PostgreSQL"],
    category: "HR",
  },
  {
    id: 14,
    slug: "aplikasi-management-inventaris",
    title: "Aplikasi Management Inventaris",
    desc: "Sistem pengelolaan inventaris barang.",
    stack: ["Laravel", "MySQL"],
    category: "Inventory",
  },
  {
    id: 15,
    slug: "aplikasi-smart-hr",
    title: "Aplikasi Smart HR",
    desc: "Platform HR modern dengan fitur otomatisasi.",
    stack: ["Next.js", "Tailwind"],
    category: "HR",
  },
  {
    id: 16,
    slug: "booking-futsal",
    title: "Booking Futsal",
    desc: "Reservasi lapangan futsal online.",
    stack: ["Laravel", "MySQL"],
    category: "Booking",
  },
  {
    id: 17,
    slug: "cms-portal-berita",
    title: "CMS Portal Berita",
    desc: "Content management system portal berita.",
    stack: ["Next.js", "MongoDB"],
    category: "CMS",
  },
  {
    id: 18,
    slug: "ecommerce-fashion",
    title: "E-Commerce Fashion",
    desc: "Toko online fashion modern.",
    stack: ["Next.js", "Midtrans"],
    category: "E-Commerce",
  },
  {
    id: 19,
    slug: "ecommerce-tumbuhan",
    title: "E-Commerce Tumbuhan",
    desc: "Marketplace tanaman hias.",
    stack: ["Laravel", "MySQL"],
    category: "E-Commerce",
  },
  {
    id: 20,
    slug: "ecommerce-with-midtrans",
    title: "E-Commerce With Midtrans",
    desc: "E-commerce dengan integrasi pembayaran Midtrans.",
    stack: ["Next.js", "Midtrans"],
    category: "E-Commerce",
  },
  {
    id: 21,
    slug: "e-office",
    title: "E-Office",
    desc: "Sistem administrasi kantor digital.",
    stack: ["Laravel", "MySQL"],
    category: "Office",
  },
  {
    id: 22,
    slug: "e-todolist",
    title: "E-Todolist",
    desc: "Aplikasi manajemen tugas harian.",
    stack: ["React", "Firebase"],
    category: "Produktivitas",
  },
  {
    id: 23,
    slug: "hris",
    title: "HRIS",
    desc: "Human Resource Information System.",
    stack: ["Next.js", "Prisma"],
    category: "HR",
  },
  {
    id: 24,
    slug: "inventory",
    title: "Inventory",
    desc: "Manajemen stok dan barang.",
    stack: ["Laravel", "MySQL"],
    category: "Inventory",
  },
  {
    id: 25,
    slug: "kasir-restoran-sederhana",
    title: "Kasir Restoran Sederhana",
    desc: "Point of sale restoran sederhana.",
    stack: ["PHP", "MySQL"],
    category: "POS",
  },
  {
    id: 26,
    slug: "learning-management-system",
    title: "Learning Management System",
    desc: "Platform pembelajaran online.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Education",
  },
  {
    id: 27,
    slug: "medical-checkup",
    title: "Medical Checkup",
    desc: "Sistem pemeriksaan kesehatan digital.",
    stack: ["Laravel", "MySQL"],
    category: "Kesehatan",
  },
  {
    id: 28,
    slug: "point-of-sale",
    title: "Point Of Sale",
    desc: "Sistem kasir modern.",
    stack: ["React", "Firebase"],
    category: "POS",
  },
  {
    id: 29,
    slug: "siakad",
    title: "SIAKAD",
    desc: "Sistem informasi akademik.",
    stack: ["Laravel", "MySQL"],
    category: "Education",
  },
  {
    id: 30,
    slug: "siakad-smp",
    title: "SIAKAD SMP",
    desc: "Sistem akademik khusus SMP.",
    stack: ["PHP", "MySQL"],
    category: "Education",
  },
  {
    id: 31,
    slug: "sistem-absensi-sekolah",
    title: "Sistem Absensi Sekolah",
    desc: "Absensi siswa dan guru sekolah.",
    stack: ["Laravel", "MySQL"],
    category: "Sekolah",
  },
  {
    id: 32,
    slug: "sistem-antrian-puskesmas",
    title: "Sistem Antrian Puskesmas",
    desc: "Digitalisasi antrian layanan kesehatan.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Kesehatan",
  },
  {
    id: 33,
    slug: "sistem-informasi-desa",
    title: "Sistem Informasi Desa",
    desc: "Website dan layanan administrasi desa.",
    stack: ["Laravel", "MySQL"],
    category: "Pemerintahan",
  },
  {
    id: 34,
    slug: "sistem-management-perpustakaan-digital",
    title: "Sistem Management Perpustakaan Digital",
    desc: "Perpustakaan digital modern.",
    stack: ["Next.js", "MongoDB"],
    category: "Education",
  },
  {
    id: 35,
    slug: "website-company-profile",
    title: "Website Company Profile",
    desc: "Website profil perusahaan profesional.",
    stack: ["Next.js", "Tailwind"],
    category: "Company Profile",
  },
  {
    id: 36,
    slug: "website-donasi",
    title: "Website Donasi",
    desc: "Platform penggalangan dana online.",
    stack: ["Laravel", "Midtrans"],
    category: "Donasi",
  },
  {
    id: 37,
    slug: "web-klinik",
    title: "Web Klinik",
    desc: "Sistem layanan klinik digital.",
    stack: ["Next.js", "Prisma"],
    category: "Kesehatan",
  },
  {
    id: 38,
    slug: "web-klinik-gigi",
    title: "Web Klinik Gigi",
    desc: "Aplikasi manajemen klinik gigi.",
    stack: ["Laravel", "MySQL"],
    category: "Kesehatan",
  },
];

const filterOptions = [
  "All",
  "Next.js",
  "Laravel",
  "TypeScript",
  "React",
  "Portfolio",
  "E-Commerce",
];

const processProjects = [
  {
    title: "Portfolio Sendy",
    desc: "Halaman profil, project, skill, dan perjalanan karier pribadi.",
    href: "/portofolio",
    status: "Live preview",
    stack: ["Next.js", "Tailwind"],
  },
  {
    title: "Kiara Birthday",
    desc: "Undangan ulang tahun digital dengan galeri, countdown, dan detail acara.",
    href: "/kiara",
    status: "On process",
    stack: ["React", "Framer Motion"],
  },
  {
    title: "Undangan Ulang Tahun",
    desc: "Template undangan personal dengan halaman tamu dinamis.",
    href: "/ulangtahun/Sahabat",
    status: "Template",
    stack: ["Next.js", "Dynamic Route"],
  },
  {
    title: "Client Dashboard",
    desc: "Area dashboard untuk tracking project, revisi, jadwal, dan pembayaran.",
    href: "/dashboard",
    status: "Prototype",
    stack: ["Shadcn UI", "Sidebar"],
  },
  {
    title: "Pricing Program",
    desc: "Daftar harga layanan program skripsi berdasarkan katalog showroom.",
    href: "/pricing",
    status: "Draft",
    stack: ["Next.js", "Table"],
  },
  {
    title: "Next Project",
    desc: "Slot project baru untuk demo, template, atau studi kasus berikutnya.",
    href: "#",
    status: "Coming soon",
    stack: ["Dummy", "Planning"],
  },
];

const accentColors: Record<
  string,
  { text: string; bg: string; border: string; glow: string }
> = {
  amber: {
    text: "text-amber-300",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    glow: "bg-amber-500/20",
  },
  violet: {
    text: "text-violet-300",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    glow: "bg-violet-500/20",
  },
  cyan: {
    text: "text-cyan-300",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "bg-cyan-500/20",
  },
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "bg-emerald-500/20",
  },
  sky: {
    text: "text-sky-300",
    bg: "bg-sky-500/10",
    border: "border-sky-500/30",
    glow: "bg-sky-500/20",
  },
};

const featureIcons = [
  Globe,
  Monitor,
  Smartphone,
  Palette,
  Zap,
  Shield,
  BarChart3,
  Layers,
];

export default function DemoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredReal, setHoveredReal] = useState<string | null>(null);

  const filteredDummy = dummyProjects.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      p.stack.includes(activeFilter) ||
      p.category.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  const filteredReal = realProjects.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      p.stack.includes(activeFilter) ||
      p.category.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#d4af37]/30">
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-amber-600/5 via-purple-600/5 to-cyan-600/5 rounded-full blur-[150px] -z-10" />

      <div className="pt-10 px-8 max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/20 mb-4 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
              Premium Showcase
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-[#d4af37] to-amber-100 mb-6 tracking-tighter leading-[1.1]">
              PROJECT SHOWROOM
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Eksplorasi mahakarya aplikasi Sistem Informasi yang kami bangun
              dengan standar industri dan teknologi terkini.
            </p>
          </motion.div>

          {/* SEARCH BAR */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#d4af37] w-5 h-5" />
            <input
              type="text"
              placeholder="Cari solusi atau teknologi..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40 transition-all text-lg backdrop-blur-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((stack) => (
              <motion.button
                key={stack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(stack)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${
                  activeFilter === stack
                    ? "bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] shadow-none"
                    : "bg-white/5 border-white/10 text-white/50 hover:border-[#d4af37]/50 hover:text-white"
                }`}
              >
                {stack !== "All" &&
                  stack !== "Portfolio" &&
                  stack !== "E-Commerce" && (
                    <Image
                      width={20}
                      height={20}
                      src={getTechIcon(stack)}
                      alt={stack}
                      className="w-4 h-4 object-contain brightness-110"
                    />
                  )}
                {stack}
              </motion.button>
            ))}
          </div>
        </header>

        {/* ===== REAL PROJECTS SECTION ===== */}
        {filteredReal.length > 0 && (
          <section className="mb-24">
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <Badge className="mb-4 bg-amber-500/10 text-amber-300 border-amber-400/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                  ★ Featured Projects
                </Badge>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                  Project Aktif & Live
                </h2>
                <p className="mt-3 max-w-2xl text-white/45 leading-relaxed">
                  Klik card untuk melihat langsung website yang sudah online dan
                  bisa diakses publik.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                <Globe className="w-4 h-4 text-emerald-400" />
                Live on Vercel
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredReal.map((project, index) => {
                const colors =
                  accentColors[project.accentColor] || accentColors.amber;
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoveredReal(project.id)}
                    onMouseLeave={() => setHoveredReal(null)}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2"
                    >
                      {/* Animated gradient background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                      />
                      {/* Glow effect on hover */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 -z-10`}
                      />

                      {/* Browser mockup bar */}
                      <div className="relative px-5 pt-5 pb-3">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex-1 mx-3">
                            <div className="bg-white/5 rounded-full px-3 py-1.5 flex items-center gap-2">
                              <Globe className="w-3 h-3 text-white/30" />
                              <span className="text-[10px] text-white/30 truncate font-mono">
                                {project.url.replace("https://", "")}
                              </span>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                        </div>

                        {/* Live Website Preview Area */}
                        <div
                          className={`relative rounded-xl overflow-hidden h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                        >
                          <div className="absolute inset-0 overflow-hidden">
                            <div
                              className={`absolute -top-10 -right-10 w-32 h-32 ${colors.glow} rounded-full blur-3xl animate-pulse`}
                            />
                            <div
                              className={`absolute -bottom-10 -left-10 w-32 h-32 ${colors.glow} rounded-full blur-3xl animate-pulse delay-1000`}
                            />
                          </div>
                          <div className="relative z-10 text-center px-6">
                            <div
                              className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center`}
                            >
                              <Globe className={`w-8 h-8 ${colors.text}`} />
                            </div>
                            <h3
                              className={`text-xl font-bold ${colors.text} mb-2`}
                            >
                              {project.title.split("—")[0].trim()}
                            </h3>
                            <p className="text-white/50 text-sm mb-4">
                              {project.title.split("—")[1]?.trim() ||
                                project.category}
                            </p>
                            <div className="flex items-center justify-center gap-1.5">
                              <div
                                className={`px-3 py-1 rounded-full ${colors.bg} ${colors.border} border`}
                              >
                                <span
                                  className={`text-[10px] font-bold ${colors.text}`}
                                >
                                  Live
                                </span>
                              </div>
                              <div className="flex -space-x-1.5">
                                {project.stack.slice(0, 3).map((tech) => (
                                  <div
                                    key={tech}
                                    className="w-7 h-7 rounded-full bg-slate-900 border-2 border-slate-950 flex items-center justify-center p-1.5"
                                    title={tech}
                                  >
                                    <Image
                                      width={28}
                                      height={28}
                                      src={getTechIcon(tech)}
                                      alt={tech}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <motion.div
                              initial={false}
                              animate={
                                hoveredReal === project.id
                                  ? { scale: 1 }
                                  : { scale: 0.8 }
                              }
                              className="flex flex-col items-center gap-3"
                            >
                              <div
                                className={`p-4 rounded-full ${colors.bg} ${colors.border} border backdrop-blur-sm`}
                              >
                                <ExternalLink
                                  className={`w-8 h-8 ${colors.text}`}
                                />
                              </div>
                              <span
                                className={`text-sm font-bold ${colors.text} tracking-wider uppercase`}
                              >
                                Kunjungi Website
                              </span>
                            </motion.div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="px-5 pb-6 relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <Badge
                            className={`${colors.bg} ${colors.text} ${colors.border} rounded-md px-3 font-mono text-[10px] font-bold`}
                          >
                            {project.category}
                          </Badge>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-3 h-3 ${colors.text} fill-current`}
                              />
                            ))}
                          </div>
                        </div>

                        <h3
                          className={`text-xl font-bold text-white mb-2 group-hover:${colors.text} transition-colors leading-snug`}
                        >
                          {project.title}
                        </h3>

                        <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                          {project.desc}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.features.map((feature, i) => {
                            const FeatureIcon =
                              featureIcons[i % featureIcons.length];
                            return (
                              <span
                                key={feature}
                                className={`inline-flex items-center gap-1 rounded-md ${colors.bg}/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${colors.text}/70`}
                              >
                                <FeatureIcon className="w-3 h-3" />
                                {feature}
                              </span>
                            );
                          })}
                        </div>

                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="flex -space-x-2">
                            {project.stack.map((tech) => (
                              <div
                                key={tech}
                                className="w-8 h-8 rounded-full bg-slate-900 border-2 border-slate-950 flex items-center justify-center p-2 hover:z-10 transition-transform hover:scale-125 shadow-2xl"
                                title={tech}
                              >
                                <Image
                                  width={32}
                                  height={32}
                                  src={getTechIcon(tech)}
                                  alt={tech}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                            ))}
                          </div>
                          <span
                            className={`text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] group-hover:${colors.text} transition-colors`}
                          >
                            Live Demo →
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {/* ===== ON PROCESS SECTION ===== */}
        <section className="mb-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <Badge className="mb-4 bg-blue-500/10 text-blue-300 border-blue-400/20 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
                New Project On Process!
              </Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Project Baru & Eksperimen Aktif
              </h2>
              <p className="mt-3 max-w-2xl text-white/45 leading-relaxed">
                Kumpulan halaman dan demo yang sedang disiapkan. Beberapa sudah
                bisa dibuka, sisanya masih dummy untuk project berikutnya.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              <Clock3 className="w-4 h-4 text-[#d4af37]" />
              Updated Showcase
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processProjects.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.055]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 ring-1 ring-blue-400/20">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#d4af37]">
                    {project.status}
                  </span>
                </div>
                <p className="mb-3 font-mono text-xs font-bold text-white/25">
                  0{index + 1}
                </p>
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-blue-200">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-sm leading-relaxed text-white/45">
                  {project.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/45"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== DUMMY PROJECTS GRID ===== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredDummy.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -10 }}
              >
                <Link href={`/demo/${project.slug}`}>
                  <Card className="group relative bg-white/[0.03] border-white/5 hover:border-[#d4af37]/40 transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col backdrop-blur-md">
                    <CardContent className="p-8">
                      <div className="flex justify-between items-center mb-6">
                        <Badge className="bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/20 rounded-md px-3 font-mono text-[10px] font-bold">
                          {project.category}
                        </Badge>
                        <div className="p-2 bg-white/5 rounded-full group-hover:bg-gradient-to-r group-hover:from-[#d4af37] group-hover:to-blue-600 transition-all duration-500">
                          <ChevronRight className="w-4 h-4 text-white group-hover:text-slate-950" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                        {project.desc}
                      </p>
                      <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex -space-x-3">
                          {project.stack.map((s) => (
                            <div
                              key={s}
                              className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-950 flex items-center justify-center p-2.5 hover:z-10 transition-transform hover:scale-125 shadow-2xl"
                              title={s}
                            >
                              <Image
                                width={40}
                                height={40}
                                src={getTechIcon(s)}
                                alt={s}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                        <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] group-hover:text-[#d4af37] transition-colors">
                          View Details
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/10 pt-5 pb-10 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] rounded-xl flex items-center justify-center font-black text-white">
                NEXT
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-[#d4af37] to-amber-100 tracking-tighter">
                NextCore Tangerang
              </h2>
            </div>
            <p className="text-white/40 max-w-sm mb-8 leading-relaxed italic text-sm">
              Mentransformasi stres pengerjaan skripsi menjadi kebanggaan
              profesional. Expert guidance for Information System students.
            </p>
            <div className="flex gap-4">
              {["WhatsApp", "Instagram", "Github"].map((social) => (
                <motion.div
                  key={social}
                  whileHover={{ scale: 1.1, color: "#d4af37" }}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white/60 hover:border-[#d4af37]/50 cursor-pointer transition-all"
                >
                  {social}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] border-b border-[#d4af37]/30 pb-2 w-fit">
              Main Services
            </h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">
                E-Commerce & Retail
              </li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">
                Expert System (AI)
              </li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">
                Decision Support (SPK)
              </li>
              <li className="hover:text-[#d4af37] cursor-pointer transition-colors">
                IoT & Hardware
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em] border-b border-[#d4af37]/30 pb-2 w-fit">
              Contact Info
            </h4>
            <ul className="space-y-4 text-sm text-white/40 font-medium">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#d4af37]" /> Tangerang, Banten
              </li>
              <li className="flex items-center gap-3 text-white font-bold">
                <MessageCircle className="w-4 h-4 text-emerald-500" />{" "}
                0812-8191-6880
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#d4af37]" /> dev@sisolution.com
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center text-[10px] text-white/20 uppercase tracking-[0.4em] font-medium">
          © 2026 SI Solution Tangerang • Sendy Andreansah • Excellence in Code
        </div>
      </footer>
    </div>
  );
}
