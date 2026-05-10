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
  };
  return icons[tech] || "https://svgl.app/library/code.svg";
};

const projects = [
  {
    id: 1,
    slug: "absensi-guru",
    title: "Absensi Guru",
    desc: "Sistem absensi guru berbasis web.",
    stack: ["Laravel", "MySQL"],
    category: "Absensi",
  },
  {
    id: 2,
    slug: "absensi-karyawan-gps-barcode",
    title: "Absensi Karyawan GPS Barcode",
    desc: "Sistem absensi karyawan dengan GPS dan barcode.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Absensi",
  },
  {
    id: 3,
    slug: "absensi-kelas-sederhana",
    title: "Absensi Kelas Sederhana",
    desc: "Aplikasi absensi kelas sederhana.",
    stack: ["Laravel", "MySQL"],
    category: "Sekolah",
  },
  {
    id: 4,
    slug: "aplikasi-absensi-karyawan",
    title: "Aplikasi Absensi Karyawan",
    desc: "Manajemen absensi pegawai perusahaan.",
    stack: ["PHP", "MySQL"],
    category: "Absensi",
  },
  {
    id: 5,
    slug: "aplikasi-antrian-sederhana",
    title: "Aplikasi Antrian Sederhana",
    desc: "Sistem antrian digital sederhana.",
    stack: ["Laravel", "Bootstrap"],
    category: "Pelayanan",
  },
  {
    id: 6,
    slug: "aplikasi-cuti-karyawan",
    title: "Aplikasi Cuti Karyawan",
    desc: "Manajemen pengajuan cuti pegawai.",
    stack: ["Next.js", "Prisma"],
    category: "HR",
  },
  {
    id: 7,
    slug: "aplikasi-e-surat-desa",
    title: "Aplikasi E-Surat Desa",
    desc: "Pengelolaan surat menyurat desa.",
    stack: ["Laravel", "MySQL"],
    category: "Pemerintahan",
  },
  {
    id: 8,
    slug: "aplikasi-hr-karyawan",
    title: "Aplikasi HR Karyawan",
    desc: "Human resource management system.",
    stack: ["Next.js", "PostgreSQL"],
    category: "HR",
  },
  {
    id: 9,
    slug: "aplikasi-management-inventaris",
    title: "Aplikasi Management Inventaris",
    desc: "Sistem pengelolaan inventaris barang.",
    stack: ["Laravel", "MySQL"],
    category: "Inventory",
  },
  {
    id: 10,
    slug: "aplikasi-smart-hr",
    title: "Aplikasi Smart HR",
    desc: "Platform HR modern dengan fitur otomatisasi.",
    stack: ["Next.js", "Tailwind"],
    category: "HR",
  },
  {
    id: 11,
    slug: "booking-futsal",
    title: "Booking Futsal",
    desc: "Reservasi lapangan futsal online.",
    stack: ["Laravel", "MySQL"],
    category: "Booking",
  },
  {
    id: 12,
    slug: "cms-portal-berita",
    title: "CMS Portal Berita",
    desc: "Content management system portal berita.",
    stack: ["Next.js", "MongoDB"],
    category: "CMS",
  },
  {
    id: 13,
    slug: "ecommerce-fashion",
    title: "E-Commerce Fashion",
    desc: "Toko online fashion modern.",
    stack: ["Next.js", "Midtrans"],
    category: "E-Commerce",
  },
  {
    id: 14,
    slug: "ecommerce-tumbuhan",
    title: "E-Commerce Tumbuhan",
    desc: "Marketplace tanaman hias.",
    stack: ["Laravel", "MySQL"],
    category: "E-Commerce",
  },
  {
    id: 15,
    slug: "ecommerce-with-midtrans",
    title: "E-Commerce With Midtrans",
    desc: "E-commerce dengan integrasi pembayaran Midtrans.",
    stack: ["Next.js", "Midtrans"],
    category: "E-Commerce",
  },
  {
    id: 16,
    slug: "e-office",
    title: "E-Office",
    desc: "Sistem administrasi kantor digital.",
    stack: ["Laravel", "MySQL"],
    category: "Office",
  },
  {
    id: 17,
    slug: "e-todolist",
    title: "E-Todolist",
    desc: "Aplikasi manajemen tugas harian.",
    stack: ["React", "Firebase"],
    category: "Produktivitas",
  },
  {
    id: 18,
    slug: "hris",
    title: "HRIS",
    desc: "Human Resource Information System.",
    stack: ["Next.js", "Prisma"],
    category: "HR",
  },
  {
    id: 19,
    slug: "inventory",
    title: "Inventory",
    desc: "Manajemen stok dan barang.",
    stack: ["Laravel", "MySQL"],
    category: "Inventory",
  },
  {
    id: 20,
    slug: "kasir-restoran-sederhana",
    title: "Kasir Restoran Sederhana",
    desc: "Point of sale restoran sederhana.",
    stack: ["PHP", "MySQL"],
    category: "POS",
  },
  {
    id: 21,
    slug: "learning-management-system",
    title: "Learning Management System",
    desc: "Platform pembelajaran online.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Education",
  },
  {
    id: 22,
    slug: "medical-checkup",
    title: "Medical Checkup",
    desc: "Sistem pemeriksaan kesehatan digital.",
    stack: ["Laravel", "MySQL"],
    category: "Kesehatan",
  },
  {
    id: 23,
    slug: "point-of-sale",
    title: "Point Of Sale",
    desc: "Sistem kasir modern.",
    stack: ["React", "Firebase"],
    category: "POS",
  },
  {
    id: 24,
    slug: "siakad",
    title: "SIAKAD",
    desc: "Sistem informasi akademik.",
    stack: ["Laravel", "MySQL"],
    category: "Education",
  },
  {
    id: 25,
    slug: "siakad-smp",
    title: "SIAKAD SMP",
    desc: "Sistem akademik khusus SMP.",
    stack: ["PHP", "MySQL"],
    category: "Education",
  },
  {
    id: 26,
    slug: "sistem-absensi-sekolah",
    title: "Sistem Absensi Sekolah",
    desc: "Absensi siswa dan guru sekolah.",
    stack: ["Laravel", "MySQL"],
    category: "Sekolah",
  },
  {
    id: 27,
    slug: "sistem-antrian-puskesmas",
    title: "Sistem Antrian Puskesmas",
    desc: "Digitalisasi antrian layanan kesehatan.",
    stack: ["Next.js", "PostgreSQL"],
    category: "Kesehatan",
  },
  {
    id: 28,
    slug: "sistem-informasi-desa",
    title: "Sistem Informasi Desa",
    desc: "Website dan layanan administrasi desa.",
    stack: ["Laravel", "MySQL"],
    category: "Pemerintahan",
  },
  {
    id: 29,
    slug: "sistem-management-perpustakaan-digital",
    title: "Sistem Management Perpustakaan Digital",
    desc: "Perpustakaan digital modern.",
    stack: ["Next.js", "MongoDB"],
    category: "Education",
  },
  {
    id: 30,
    slug: "website-company-profile",
    title: "Website Company Profile",
    desc: "Website profil perusahaan profesional.",
    stack: ["Next.js", "Tailwind"],
    category: "Company Profile",
  },
  {
    id: 31,
    slug: "website-donasi",
    title: "Website Donasi",
    desc: "Platform penggalangan dana online.",
    stack: ["Laravel", "Midtrans"],
    category: "Donasi",
  },
  {
    id: 32,
    slug: "web-klinik",
    title: "Web Klinik",
    desc: "Sistem layanan klinik digital.",
    stack: ["Next.js", "Prisma"],
    category: "Kesehatan",
  },
  {
    id: 33,
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
  "Python",
  "React",
  "IoT",
];

export default function DemoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      activeFilter === "All" || p.stack.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#d4af37]/30">
      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] -z-10" />

      <div className="pt-10 px-8 max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-[#d4af37]/10 text-[#d4af37] border-[#d4af37]/20 mb-4 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-bold">
              Premium Showcase
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text  mb-6 tracking-tighter leading-[1.1] bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] shadow-none">
              PROJECT SHOWROOM
            </h1>
            <p className="text-white/50 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
              Eksplorasi mahakarya aplikasi Sistem Informasi yang kami bangun
              dengan standar industri dan teknologi terkini.
            </p>
          </motion.div>

          {/* SEARCH BAR - Luxury Glassmorphism */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#d4af37] w-5 h-5" />
            <input
              type="text"
              placeholder="Cari solusi atau teknologi..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/40 transition-all text-lg backdrop-blur-sm"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* FILTER BUTTONS - Styled like Navbar buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((stack) => (
              <motion.button
                key={stack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(stack)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border flex items-center gap-2 ${
                  activeFilter === stack
                    ? // Ganti bagian activeFilter === stack dengan ini:
                      "bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] shadow-none"
                    : "bg-white/5 border-white/10 text-white/50 hover:border-[#d4af37]/50 hover:text-white"
                }`}
              >
                {stack !== "All" && (
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

        {/* GRID SECTION */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
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

      {/* FOOTER - Matched with Navbar Style */}
      <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/10 pt-5 pb-10 px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] shadow-none0 rounded-xl flex items-center justify-center font-black text-white ">
                SI
              </div>
              <h2 className="text-2xl font-bold bg-[#d4af37]/10 border-[#d4af37] text-[#d4af37] shadow-none bg-clip-text tracking-tighter">
                SI SOLUTION
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
