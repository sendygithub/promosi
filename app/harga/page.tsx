"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Cpu,
  HardDrive,
  Wrench,
  ShieldCheck,
  Zap,
  Keyboard,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Truck,
  Clock,
  Award,
  Smile,
  Download,
  Sparkles,
  Wifi,
  Laptop,
  Printer,
  Smartphone,
  Gamepad2,
  Search,
  ChevronDown,
  ChevronUp,
  Info,
  Tag,
  Package,
  Star,
  Settings,
  RefreshCw,
  Shield,
  MonitorSmartphone,
  Thermometer,
  Globe,
} from "lucide-react";
import Link from "next/link";

// ===== DATA PRICE LIST =====

interface PriceItem {
  name: string;
  price: string;
  note?: string;
  popular?: boolean;
}

interface PriceCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  borderGlow: string;
  items: PriceItem[];
}

const priceCategories: PriceCategory[] = [
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Instalasi Sistem Operasi",
    description:
      "Install OS Windows/Linux bersih, driver lengkap, dan siap pakai.",
    gradient: "from-violet-500/20 to-purple-500/10",
    borderGlow: "group-hover:shadow-violet-500/20",
    items: [
      {
        name: "Install Windows 10 / 11 Pro",
        price: "Rp 75.000",
        popular: true,
      },
      { name: "Install Windows 10 / 11 Home", price: "Rp 65.000" },
      {
        name: "Install Linux (Ubuntu, Mint, Pop!_OS, dll)",
        price: "Rp 100.000",
      },
      { name: "Dual-Boot (Windows + Linux)", price: "Rp 150.000" },
      { name: "Upgrade Windows 10 ke 11", price: "Rp 50.000" },
      { name: "Aktivasi Windows / Office", price: "Rp 25.000" },
      { name: "Install Ulang + Backup Data", price: "Rp 100.000" },
      {
        name: "Install macOS Hackintosh",
        price: "Rp 350.000",
        note: "Tergantung kompatibilitas hardware",
      },
    ],
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "Instalasi Software & Driver",
    description:
      "Install software profesional, driver, dan aplikasi pendukung.",
    gradient: "from-emerald-500/20 to-green-500/10",
    borderGlow: "group-hover:shadow-emerald-500/20",
    items: [
      { name: "Microsoft Office 2021 / 365", price: "Rp 50.000" },
      {
        name: "Adobe Photoshop / Premiere / After Effects",
        price: "Rp 75.000",
      },
      { name: "CorelDraw / AutoCAD / SketchUp", price: "Rp 75.000" },
      {
        name: "Antivirus (Kaspersky / Avast / Bitdefender)",
        price: "Rp 35.000",
      },
      { name: "Driver Lengkap (VGA, Audio, Chipset, LAN)", price: "Rp 40.000" },
      { name: "Browser & Multimedia Pack", price: "Rp 25.000" },
      {
        name: "Software Programming (VS Code, XAMPP, Git, Node.js)",
        price: "Rp 60.000",
      },
      {
        name: "Paket Lengkap Software (Office + Driver + Antivirus + Browser)",
        price: "Rp 100.000",
        popular: true,
      },
    ],
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Rakit PC & Upgrade Hardware",
    description: "Rakit PC baru atau upgrade komponen untuk performa maksimal.",
    gradient: "from-amber-500/20 to-orange-500/10",
    borderGlow: "group-hover:shadow-amber-500/20",
    items: [
      { name: "Rakit PC Gaming (Entry Level)", price: "Rp 200.000" },
      { name: "Rakit PC Gaming (Mid Range)", price: "Rp 300.000" },
      { name: "Rakit PC Gaming (High End)", price: "Rp 500.000" },
      { name: "Rakit PC Kantor / Desain", price: "Rp 150.000" },
      { name: "Rakit PC Editing Video", price: "Rp 250.000" },
      { name: "Pasang / Upgrade VGA Card", price: "Rp 50.000" },
      { name: "Pasang / Upgrade Processor", price: "Rp 75.000" },
      { name: "Pasang / Upgrade Motherboard", price: "Rp 75.000" },
      { name: "Pasang / Upgrade RAM Desktop", price: "Rp 30.000" },
      { name: "Pasang / Upgrade RAM Laptop (slot)", price: "Rp 50.000" },
      {
        name: "Pasang / Upgrade RAM Laptop (solder)",
        price: "Rp 150.000",
        note: "Perlu reballing",
      },
      {
        name: "Rakit PC + Install OS + Software Lengkap",
        price: "Rp 350.000",
        popular: true,
      },
    ],
  },
  {
    icon: <HardDrive className="w-6 h-6" />,
    title: "Storage & SSD Upgrade",
    description:
      "Upgrade SSD, clone HDD, dan konfigurasi RAID untuk performa storage.",
    gradient: "from-cyan-500/20 to-blue-500/10",
    borderGlow: "group-hover:shadow-cyan-500/20",
    items: [
      { name: "Pasang SSD NVMe M.2", price: "Rp 40.000" },
      { name: "Pasang SSD SATA", price: "Rp 35.000" },
      { name: "Clone HDD ke SSD (termasuk install)", price: "Rp 100.000" },
      { name: "Clone HDD ke SSD (data only)", price: "Rp 75.000" },
      { name: "Pasang Hardisk Internal 2.5 / 3.5", price: "Rp 30.000" },
      { name: "Pasang Hardisk Eksternal", price: "Rp 25.000" },
      { name: "Setup RAID 0 / 1 / 5", price: "Rp 150.000" },
      { name: "Partisi & Manajemen Drive", price: "Rp 30.000" },
      {
        name: "Data Recovery (Ringan)",
        price: "Rp 100.000",
        note: "Harga tergantung tingkat kerusakan",
      },
      {
        name: "Data Recovery (Berat)",
        price: "Rp 250.000 - 500.000",
        note: "Konsultasi dulu",
      },
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Optimasi & Perbaikan Sistem",
    description:
      "Atasi laptop lemot, BlueScreen, error sistem, dan masalah software.",
    gradient: "from-red-500/20 to-rose-500/10",
    borderGlow: "group-hover:shadow-red-500/20",
    items: [
      { name: "Bersihkan Virus / Malware / Adware", price: "Rp 75.000" },
      { name: "Optimasi Windows (Lemot / Lambat)", price: "Rp 60.000" },
      { name: "Atasi BlueScreen / BSOD Error", price: "Rp 75.000" },
      { name: "Atasi Laptop Restart / Mati Sendiri", price: "Rp 75.000" },
      { name: "Atasi Laptop Tidak Bisa Masuk Windows", price: "Rp 100.000" },
      { name: "Atasi Laptop Hang / Freeze", price: "Rp 60.000" },
      { name: "Bersihkan Startup & Registry", price: "Rp 40.000" },
      { name: "Update Driver & BIOS", price: "Rp 50.000" },
      { name: "Reset Password Windows / BIOS", price: "Rp 50.000" },
      {
        name: "Paket Lengkap Optimasi + Bersih Virus + Install Ulang",
        price: "Rp 150.000",
        popular: true,
      },
    ],
  },
  {
    icon: <Keyboard className="w-6 h-6" />,
    title: "Servis Hardware Laptop",
    description: "Perbaikan dan penggantian komponen hardware laptop.",
    gradient: "from-pink-500/20 to-fuchsia-500/10",
    borderGlow: "group-hover:shadow-pink-500/20",
    items: [
      {
        name: "Ganti Keyboard Laptop",
        price: "Rp 100.000",
        note: "+ harga spare part",
      },
      {
        name: "Ganti LCD / Layar Laptop",
        price: "Rp 150.000",
        note: "+ harga spare part",
      },
      { name: "Ganti Flexible Cable LCD", price: "Rp 100.000" },
      { name: "Ganti Touchpad Laptop", price: "Rp 75.000" },
      { name: "Ganti DC Jack / Port Charger", price: "Rp 100.000" },
      { name: "Ganti Kipas / Fan Laptop", price: "Rp 75.000" },
      { name: "Ganti Speaker Laptop", price: "Rp 50.000" },
      { name: "Ganti Battery Laptop", price: "Rp 50.000" },
      {
        name: "Servis LCD Bergaris / Blank / Mati",
        price: "Rp 100.000 - 200.000",
      },
      { name: "Servis Touchpad Tidak Berfungsi", price: "Rp 75.000" },
    ],
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: "Perawatan & Pendinginan",
    description:
      "Bersihkan debu, ganti thermal paste, dan optimasi pendinginan.",
    gradient: "from-blue-500/20 to-indigo-500/10",
    borderGlow: "group-hover:shadow-blue-500/20",
    items: [
      { name: "Bersihkan Debu Laptop (Full Cleaning)", price: "Rp 75.000" },
      { name: "Bersihkan Debu PC Desktop", price: "Rp 50.000" },
      { name: "Ganti Thermal Paste (CPU + GPU)", price: "Rp 50.000" },
      {
        name: "Paket Cleaning + Ganti Thermal Paste",
        price: "Rp 100.000",
        popular: true,
      },
      { name: "Servis Laptop Panas / Overheat", price: "Rp 100.000" },
      { name: "Tambahan Kipas / Fan Casing", price: "Rp 25.000" },
      { name: "Pasang Liquid Cooling AIO", price: "Rp 100.000" },
      {
        name: "Pasang Water Cooling Custom",
        price: "Rp 300.000",
        note: "Tergantung kompleksitas",
      },
    ],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Servis Power Supply & Casing",
    description: "Ganti PSU, casing, dan perbaikan komponen power.",
    gradient: "from-slate-500/20 to-gray-500/10",
    borderGlow: "group-hover:shadow-slate-500/20",
    items: [
      { name: "Ganti Power Supply (PSU) Desktop", price: "Rp 50.000" },
      { name: "Ganti Power Supply (PSU) Laptop / Charger", price: "Rp 30.000" },
      { name: "Ganti Casing PC", price: "Rp 75.000" },
      { name: "Cable Management Rapi", price: "Rp 50.000" },
      { name: "Pasang RGB Strip / Fan RGB", price: "Rp 50.000" },
      { name: "Servis Power On / No Display", price: "Rp 75.000" },
      { name: "Servis Laptop Tidak Mau Nyala", price: "Rp 100.000" },
      { name: "Servis Laptop Nyala Tapi Layar Gelap", price: "Rp 75.000" },
    ],
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Jaringan & Internet",
    description:
      "Setup jaringan WiFi, LAN, dan troubleshooting koneksi internet.",
    gradient: "from-teal-500/20 to-emerald-500/10",
    borderGlow: "group-hover:shadow-teal-500/20",
    items: [
      { name: "Setting WiFi Router / Modem", price: "Rp 50.000" },
      { name: "Setting Jaringan LAN Kantor / Rumah", price: "Rp 100.000" },
      { name: "Crimping Kabel LAN (per titik)", price: "Rp 25.000" },
      { name: "Pasang Access Point / Extender", price: "Rp 75.000" },
      { name: "Troubleshoot Internet Lemot / Putus", price: "Rp 50.000" },
      { name: "Setting IP Printer / Sharing Printer", price: "Rp 50.000" },
      { name: "Setup VPN / Remote Desktop", price: "Rp 75.000" },
      { name: "Setting Jaringan Warnet / Kantor Kecil", price: "Rp 200.000" },
    ],
  },
  {
    icon: <Printer className="w-6 h-6" />,
    title: "Servis Printer & Scanner",
    description: "Perbaikan printer, instalasi driver, dan setting scanner.",
    gradient: "from-orange-500/20 to-amber-500/10",
    borderGlow: "group-hover:shadow-orange-500/20",
    items: [
      { name: "Install Driver Printer / Scanner", price: "Rp 35.000" },
      { name: "Setting Printer Network / WiFi", price: "Rp 50.000" },
      { name: "Servis Printer Tidak Mencetak", price: "Rp 50.000" },
      { name: "Bersihkan Head Printer (Cleaning)", price: "Rp 50.000" },
      { name: "Ganti Tinta / Toner Printer", price: "Rp 25.000" },
      { name: "Ganti Cartridge / Drum Printer", price: "Rp 50.000" },
      { name: "Servis Printer Error / Blinking", price: "Rp 75.000" },
      { name: "Setting Scan to Email / Folder", price: "Rp 50.000" },
    ],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Servis Monitor & TV",
    description: "Perbaikan monitor, TV, dan perangkat display lainnya.",
    gradient: "from-rose-500/20 to-pink-500/10",
    borderGlow: "group-hover:shadow-rose-500/20",
    items: [
      { name: "Servis Monitor Mati / No Display", price: "Rp 100.000" },
      { name: "Servis Monitor Bergaris / Flicker", price: "Rp 75.000" },
      { name: "Servis Monitor Redup / Backlight Rusak", price: "Rp 100.000" },
      { name: "Ganti Port HDMI / VGA / DVI Monitor", price: "Rp 75.000" },
      { name: "Setting Dual Monitor / Extended Display", price: "Rp 35.000" },
      { name: "Kalibrasi Warna Monitor", price: "Rp 50.000" },
      { name: "Pasang TV Wall Mount", price: "Rp 100.000" },
      { name: "Servis TV LED Mati Total", price: "Rp 150.000" },
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Servis HP & Tablet",
    description: "Perbaikan smartphone dan tablet untuk masalah software.",
    gradient: "from-sky-500/20 to-blue-500/10",
    borderGlow: "group-hover:shadow-sky-500/20",
    items: [
      { name: "Install Ulang HP Android (Flash ROM)", price: "Rp 75.000" },
      { name: "Unlock / Bypass FRP HP Android", price: "Rp 50.000" },
      { name: "Root HP Android", price: "Rp 50.000" },
      { name: "Install Custom ROM", price: "Rp 100.000" },
      { name: "Atasi HP Bootloop / Mati Total (Software)", price: "Rp 75.000" },
      { name: "Backup & Restore Data HP", price: "Rp 50.000" },
      { name: "Install Ulang iPad / Tablet Android", price: "Rp 75.000" },
      { name: "Transfer Data HP ke HP Baru", price: "Rp 50.000" },
    ],
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: "Servis Gaming & Perangkat Khusus",
    description: "Perbaikan dan setup perangkat gaming, VR, dan aksesoris.",
    gradient: "from-fuchsia-500/20 to-purple-500/10",
    borderGlow: "group-hover:shadow-fuchsia-500/20",
    items: [
      { name: "Setup PC Gaming + Streaming", price: "Rp 250.000" },
      { name: "Setting Emulator Game (PS, Nintendo, dll)", price: "Rp 75.000" },
      { name: "Servis Joystick / Gamepad Rusak", price: "Rp 50.000" },
      { name: "Servis Keyboard Gaming (Mechanical)", price: "Rp 75.000" },
      { name: "Servis Mouse Gaming (Ganti Switch)", price: "Rp 50.000" },
      { name: "Setting VR Headset", price: "Rp 100.000" },
      { name: "Optimasi PC untuk Gaming", price: "Rp 75.000" },
      { name: "Setting Capture Card / Streaming", price: "Rp 100.000" },
    ],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Keamanan & Backup",
    description: "Setup keamanan data, backup, dan recovery sistem.",
    gradient: "from-green-500/20 to-emerald-500/10",
    borderGlow: "group-hover:shadow-green-500/20",
    items: [
      { name: "Setup Antivirus + Firewall", price: "Rp 50.000" },
      { name: "Enkripsi Data / BitLocker", price: "Rp 50.000" },
      { name: "Backup Data ke Cloud / Eksternal", price: "Rp 75.000" },
      { name: "Setup Scheduled Backup Otomatis", price: "Rp 100.000" },
      { name: "Recovery File Terhapus", price: "Rp 100.000" },
      { name: "Setup Parental Control", price: "Rp 50.000" },
      { name: "Audit Keamanan Sistem", price: "Rp 150.000" },
      { name: "Setup CCTV / IP Camera (per titik)", price: "Rp 100.000" },
    ],
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Layanan Online & Remote",
    description: "Bantuan jarak jauh dan layanan online untuk kemudahan Anda.",
    gradient: "from-indigo-500/20 to-violet-500/10",
    borderGlow: "group-hover:shadow-indigo-500/20",
    items: [
      { name: "Remote TeamViewer / AnyDesk (per sesi)", price: "Rp 35.000" },
      { name: "Konsultasi Online (via WA / Video Call)", price: "Gratis" },
      {
        name: "Setting Email (Outlook, Gmail, Thunderbird)",
        price: "Rp 35.000",
      },
      { name: "Setting Domain & Hosting", price: "Rp 100.000" },
      { name: "Install & Setting CMS (WordPress, dll)", price: "Rp 150.000" },
      {
        name: "Setting Cloud Storage (Google Drive, OneDrive)",
        price: "Rp 35.000",
      },
      { name: "Migrasi Data ke PC Baru", price: "Rp 100.000" },
      { name: "Setting RDP / Remote Desktop", price: "Rp 75.000" },
    ],
  },
];

// ===== PAKET BUNDLING =====

interface BundleItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  price: string;
  savings: string;
  gradient: string;
  popular?: boolean;
}

const bundles: BundleItem[] = [
  {
    icon: <Package className="w-6 h-6" />,
    title: "Paket Komplit PC Baru",
    description: "Rakit PC + Install OS + Software Lengkap + Bersih + Garansi",
    items: [
      "Rakit PC sesuai kebutuhan",
      "Install Windows 10/11 Pro",
      "Microsoft Office 2021",
      "Driver lengkap + Antivirus",
      "Browser & Multimedia",
      "Cable Management rapi",
      "Garansi servis 1 bulan",
    ],
    price: "Rp 350.000",
    savings: "Hemat Rp 100.000",
    gradient: "from-amber-500/20 to-orange-500/10",
    popular: true,
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "Paket Upgrade SSD",
    description: "Upgrade SSD + Clone Data + Optimasi Sistem",
    items: [
      "Pasang SSD baru (NVMe/SATA)",
      "Clone OS & data dari HDD lama",
      "Install driver & update",
      "Optimasi boot & startup",
      "Test performa & verifikasi",
      "Garansi hasil clone 7 hari",
    ],
    price: "Rp 150.000",
    savings: "Hemat Rp 50.000",
    gradient: "from-cyan-500/20 to-blue-500/10",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Paket Full Servis Laptop",
    description: "Cleaning + Ganti Thermal Paste + Install Ulang + Optimasi",
    items: [
      "Bersihkan debu full (bongkar total)",
      "Ganti thermal paste CPU & GPU",
      "Install ulang Windows 10/11",
      "Install driver & software dasar",
      "Optimasi sistem & startup",
      "Garansi servis 1 bulan",
    ],
    price: "Rp 200.000",
    savings: "Hemat Rp 75.000",
    gradient: "from-purple-500/20 to-pink-500/10",
    popular: true,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Paket Keamanan & Backup",
    description: "Backup Data + Antivirus + Firewall + Recovery Plan",
    items: [
      "Backup data ke HDD eksternal/cloud",
      "Install antivirus premium",
      "Setup firewall & keamanan",
      "Enkripsi data penting",
      "Buat recovery disk / USB",
      "Dokumentasi prosedur recovery",
    ],
    price: "Rp 200.000",
    savings: "Hemat Rp 50.000",
    gradient: "from-green-500/20 to-emerald-500/10",
  },
];

// ===== BIAYA TAMBAHAN =====

interface ExtraFee {
  service: string;
  fee: string;
  note: string;
}

const extraFees: ExtraFee[] = [
  {
    service: "Biaya antar jemput (Tangerang)",
    fee: "Gratis",
    note: "Wilayah Tangerang dan sekitarnya",
  },
  {
    service: "Biaya antar jemput (Luar Tangerang)",
    fee: "Rp 25.000 - 50.000",
    note: "Tergantung jarak",
  },
  {
    service: "Biaya diagnosa (jika tidak jadi servis)",
    fee: "Rp 25.000",
    note: "Gratis jika jadi servis",
  },
  {
    service: "Biaya konsultasi",
    fee: "Gratis",
    note: "Konsultasi via WA / telepon",
  },
  {
    service: "Biaya remote bantuan",
    fee: "Gratis - Rp 35.000",
    note: "Gratis untuk pelanggan servis",
  },
  {
    service: "Biaya spare part",
    fee: "Sesuai harga pasar",
    note: "Kami berikan harga terbaik",
  },
  {
    service: "Biaya prioritas (cepat)",
    fee: "+ 50% dari biaya jasa",
    note: "Prioritas pengerjaan 1 hari",
  },
];

export default function HargaPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
  };

  // Filter categories based on search
  const filteredCategories = searchQuery
    ? priceCategories
        .map((cat) => ({
          ...cat,
          items: cat.items.filter(
            (item) =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              cat.title.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((cat) => cat.items.length > 0)
    : priceCategories;

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 selection:bg-[#d4af37]/20 overflow-x-hidden">
      {/* ===== AMBIENT GLOW BACKGROUNDS ===== */}
      <div className="fixed top-0 -left-10 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] -z-10" />
      <div className="fixed bottom-0 -right-10 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[150px] -z-10" />
      <div className="fixed top-1/3 left-1/3 w-[400px] h-[400px] bg-violet-900/5 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-900/5 rounded-full blur-[100px] -z-10" />

      {/* ===== ANIMATED GRID BACKGROUND ===== */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(212, 175, 55, 0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* NAVBAR SPACER */}
      <div className="h-20 w-full" />

      {/* ===== HERO SECTION ===== */}
      <section
        ref={heroRef}
        className="relative px-6 pt-16 pb-20 text-center overflow-hidden"
      >
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent blur-[60px] -z-5 rounded-full" />

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-400/30 py-1.5 px-5 rounded-full font-medium tracking-wide shadow-lg shadow-emerald-500/5">
              <Tag className="w-3.5 h-3.5 mr-1.5 inline-block" />
              Price List Prisma Komputer
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]"
          >
            <span className="text-white">Harga Servis</span>
            <br />
            <span className="bg-gradient-to-r from-emerald-200 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Transparan & Terjangkau
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
          >
            Semua harga sudah termasuk jasa servis. Biaya spare part dihitung
            terpisah sesuai harga pasar. Konsultasi GRATIS, bayar setelah beres!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-5 justify-center items-center"
          >
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20harga%20servis"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-xl shadow-emerald-500/20 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  <MessageCircle className="mr-2 w-5 h-5 fill-current" />
                  Tanya Harga via WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>

            <Link href="#price-list">
              <Button
                size="lg"
                variant="outline"
                className="border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/40 px-10 py-7 text-lg rounded-full transition-all duration-300 text-slate-300 group"
              >
                Lihat Price List
                <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {[
              "Harga Transparan",
              "Konsultasi Gratis",
              "Bayar Setelah Beres",
              "Bergaransi",
            ].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-400"
              >
                ✅ {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ===== SEARCH BAR ===== */}
      <section className="px-6 pb-10 max-w-3xl mx-auto sticky top-20 z-20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            placeholder="Cari layanan atau harga..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0f172a]/80 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all duration-300 backdrop-blur-xl"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {/* ===== PRICE LIST SECTION ===== */}
      <section id="price-list" className="px-6 pb-10 max-w-7xl mx-auto">
        {/* Category Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {priceCategories.map((cat, i) => (
            <Link
              key={i}
              href={`#cat-${i}`}
              className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400 hover:text-white hover:border-emerald-500/30 transition-all duration-300"
            >
              {cat.title}
            </Link>
          ))}
        </div>

        {/* Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {filteredCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              id={`cat-${catIndex}`}
              variants={itemVariants}
              className="scroll-mt-28"
            >
              <Card
                className={`group bg-[#0f172a]/40 border-white/5 hover:border-transparent backdrop-blur-md hover:bg-[#0f172a]/60 transition-all duration-500 relative overflow-hidden ${category.borderGlow} hover:shadow-xl`}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <CardContent className="p-6 md:p-8 relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-amber-500/10 flex items-center justify-center text-[#d4af37] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shrink-0">
                      {category.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-slate-400 mt-1 font-medium">
                        {category.description}
                      </p>
                    </div>
                    {/* Mobile toggle */}
                    <button
                      onClick={() => toggleCategory(catIndex)}
                      className="md:hidden w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors shrink-0"
                    >
                      {expandedCategory === catIndex ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Price Items - Desktop: always visible, Mobile: toggle */}
                  <div
                    className={`${expandedCategory === catIndex || expandedCategory === null ? "block" : "hidden"} md:block`}
                  >
                    <div className="space-y-1.5">
                      {category.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className={`flex items-center justify-between py-2.5 px-4 rounded-xl transition-all duration-300 ${
                            item.popular
                              ? "bg-emerald-500/10 border border-emerald-500/20"
                              : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.05]"
                          }`}
                        >
                          <div className="flex items-start gap-2.5 flex-1 min-w-0 pr-4">
                            {item.popular && (
                              <Star className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0 fill-emerald-400" />
                            )}
                            <div className="min-w-0">
                              <span
                                className={`text-sm ${item.popular ? "text-emerald-200 font-semibold" : "text-slate-300"}`}
                              >
                                {item.name}
                              </span>
                              {item.note && (
                                <span className="block text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                                  <Info className="w-3 h-3 inline-block" />
                                  {item.note}
                                </span>
                              )}
                            </div>
                          </div>
                          <span
                            className={`text-sm font-bold shrink-0 ${
                              item.popular
                                ? "text-emerald-400"
                                : "text-[#d4af37]"
                            }`}
                          >
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* No results */}
        {filteredCategories.length === 0 && searchQuery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400 text-lg font-medium">
              Tidak ada layanan yang cocok dengan &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
            >
              Reset pencarian
            </button>
          </motion.div>
        )}
      </section>

      {/* ===== PAKET BUNDLING ===== */}
      <section className="px-6 py-24 bg-gradient-to-b from-white/[0.01] to-transparent border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-amber-500/10 to-emerald-500/10 text-amber-300 border-amber-400/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
                🎯 Paket Hemat
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Paket Bundling Spesial
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto font-medium">
                Dapatkan harga lebih hemat dengan paket bundling layanan kami.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bundles.map((bundle, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-amber-500 to-emerald-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                      Paling Laris
                    </span>
                  </div>
                )}
                <div
                  className={`relative bg-[#0f172a]/40 border ${bundle.popular ? "border-emerald-500/30" : "border-white/5"} rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 h-full flex flex-col ${bundle.popular ? "shadow-xl shadow-emerald-500/10" : ""}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bundle.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <div className="text-[#d4af37]">{bundle.icon}</div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {bundle.title}
                  </h3>
                  <p className="text-sm text-slate-400 mb-5 font-medium">
                    {bundle.description}
                  </p>

                  <ul className="space-y-2.5 mb-8 flex-1">
                    {bundle.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-xs text-slate-400"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="border-t border-white/5 pt-5 mt-auto">
                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-sm text-slate-500">Harga</span>
                      <span className="text-2xl font-bold text-emerald-400">
                        {bundle.price}
                      </span>
                    </div>
                    <span className="block text-[11px] text-emerald-500/70 font-medium mb-4">
                      {bundle.savings}
                    </span>
                    <Link
                      href={`https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(bundle.title)}`}
                      target="_blank"
                    >
                      <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl py-5 text-sm shadow-lg shadow-emerald-500/20 group/btn">
                        <MessageCircle className="w-4 h-4 mr-2 fill-current" />
                        Ambil Paket Ini
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BIAYA TAMBAHAN ===== */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-300 border-blue-400/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
              ℹ️ Informasi Tambahan
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Biaya & Ketentuan
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto font-medium">
              Informasi lengkap mengenai biaya tambahan dan ketentuan layanan.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/5 bg-[#0f172a]/40 overflow-hidden"
        >
          <div className="divide-y divide-white/5">
            {extraFees.map((fee, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
              >
                <div className="pr-4">
                  <p className="text-sm font-medium text-slate-200">
                    {fee.service}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{fee.note}</p>
                </div>
                <span
                  className={`text-sm font-bold shrink-0 ${
                    fee.fee === "Gratis" ? "text-emerald-400" : "text-[#d4af37]"
                  }`}
                >
                  {fee.fee}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 p-6 rounded-2xl border border-amber-500/10 bg-amber-500/5"
        >
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium text-amber-200 mb-1">
                Catatan Penting
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih
                dahulu. Harga final akan dikonfirmasi setelah diagnosa dan
                konsultasi dengan teknisi kami. Semua harga sudah termasuk PPN.
                Garansi jasa berlaku sesuai dengan jenis perbaikan yang
                dilakukan.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== KENAPA PILIH KAMI ===== */}
      <section className="px-6 py-24 bg-gradient-to-b from-transparent to-white/[0.01] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 text-emerald-300 border-emerald-400/20 px-4 py-1.5 text-[10px] uppercase tracking-widest rounded-full">
                ⚡ Kenapa Kami
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                Kenapa Pilih Kami?
              </h2>
              <p className="text-slate-500 max-w-lg mx-auto font-medium">
                Harga bersaing dengan kualitas servis yang terjamin.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Tag className="w-6 h-6" />,
                title: "Harga Transparan",
                desc: "Tidak ada biaya tersembunyi. Semua harga sudah termasuk jasa. Konsultasi GRATIS.",
                color: "text-emerald-400",
                bgColor: "bg-emerald-500/10",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Cepat & Tepat",
                desc: "Pengerjaan cepat tanpa mengorbankan kualitas. Hasil rapi dan terjamin.",
                color: "text-blue-400",
                bgColor: "bg-blue-500/10",
              },
              {
                icon: <Award className="w-6 h-6" />,
                title: "Bergaransi",
                desc: "Setiap servis dilengkapi garansi jasa. Kepuasan pelanggan prioritas kami.",
                color: "text-amber-400",
                bgColor: "bg-amber-500/10",
              },
              {
                icon: <Smile className="w-6 h-6" />,
                title: "Bayar Setelah Beres",
                desc: "Servis dulu, bayar setelah selesai dan Anda puas dengan hasilnya.",
                color: "text-rose-400",
                bgColor: "bg-rose-500/10",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-[#0f172a]/40 border border-white/5 rounded-2xl p-8 text-center hover:border-emerald-500/30 transition-all duration-500 h-full">
                  <div
                    className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mx-auto mb-6 ${item.color} group-hover:scale-110 transition-transform duration-500`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="px-6 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] -z-10" />

        {/* Decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-emerald-500/5 rounded-full -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-emerald-500/10 rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-400/30 px-5 py-1.5 rounded-full text-[10px] uppercase tracking-widest font-bold shadow-lg shadow-emerald-500/5">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 inline-block" />
            Gratis Konsultasi
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            Siap Servis Komputer?
          </h2>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed text-lg">
            Tanya harga dulu aja gratis! Ceritakan kebutuhan Anda, kami akan
            kasih solusi dan harga terbaik.
          </p>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
            <Link
              href="https://wa.me/6281233445566?text=Halo%20Prisma%20Komputer%2C%20saya%20mau%20tanya%20harga%20servis"
              target="_blank"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold px-12 py-8 text-xl rounded-full transition-all duration-300 shadow-2xl shadow-emerald-500/20 group relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center">
                  <MessageCircle className="mr-3 w-6 h-6 fill-current" />
                  Klik Disini WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </Link>
            <p className="text-slate-600 text-sm font-medium">
              atau hubungi{" "}
              <span className="text-emerald-400 font-bold">0812-3344-5566</span>
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-white/5 py-16 px-8 bg-gradient-to-b from-transparent to-[#020617]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20">
              P
            </div>
            <div className="text-left">
              <span className="block font-bold text-white text-lg tracking-tighter">
                Prisma Komputer
              </span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
                Price List Servis Tangerang
              </span>
            </div>
          </div>

          <p className="text-slate-600 text-[13px] font-medium tracking-wide text-center">
            © 2026 Prisma Komputer • Harga dapat berubah sewaktu-waktu
          </p>

          <div className="flex gap-4">
            <Link
              href="https://wa.me/6281233445566"
              target="_blank"
              className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-500 cursor-pointer transition-colors"
            >
              WhatsApp
            </Link>
            <Link
              href="/servis"
              className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-[#d4af37] cursor-pointer transition-colors"
            >
              Servis Kami
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
