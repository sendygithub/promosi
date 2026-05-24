import type { Metadata } from "next";
import {
  Bell,
  BookOpenCheck,
  CalendarCheck,
  ChartNoAxesColumn,
  CheckCircle2,
  CreditCard,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageCircle,
  PanelLeft,
  Settings,
  Users,
  WalletCards,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Dashboard Pendampingan",
  description: "Dashboard client area pendampingan skripsi SI Solution.",
};

const navItems = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Project", icon: BookOpenCheck },
  { label: "Revisi", icon: FileText },
  { label: "Jadwal", icon: CalendarCheck },
  { label: "Pembayaran", icon: CreditCard },
];

const stats = [
  { label: "Progress Project", value: "72%", icon: ChartNoAxesColumn },
  { label: "Modul Selesai", value: "8/11", icon: CheckCircle2 },
  { label: "Sesi Aktif", value: "4", icon: Users },
  { label: "Tagihan", value: "Rp 1,5 jt", icon: WalletCards },
];

const milestones = [
  ["Analisis kebutuhan", "Selesai", "100%"],
  ["Database dan role user", "Selesai", "100%"],
  ["Dashboard admin", "Berjalan", "80%"],
  ["Laporan PDF", "Berjalan", "45%"],
  ["Dokumentasi sidang", "Menunggu", "0%"],
];

const revisions = [
  "Tambahkan diagram activity untuk proses approval.",
  "Rapikan validasi form input data karyawan.",
  "Siapkan screenshot fitur untuk Bab 4.",
];

export default function DashboardPage() {
  return (
    <SidebarProvider className="bg-[#f6f7fb] text-slate-950">
      <Sidebar className="border-slate-200 bg-white">
        <SidebarHeader>
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-slate-950 font-black text-[#d4af37]">
              SI
            </div>
            <div>
              <p className="font-extrabold leading-none">SI Solution</p>
              <p className="mt-1 text-xs text-slate-500">Client dashboard</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
            <SidebarMenu>
              {navItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuButton
                    key={item.label}
                    href="#"
                    active={item.active}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </SidebarMenuButton>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
            <SidebarMenu>
              <SidebarMenuButton href="#">
                <MessageCircle className="size-4" />
                Chat Mentor
              </SidebarMenuButton>
              <SidebarMenuButton href="#">
                <Settings className="size-4" />
                Settings
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenuButton href="/login">
            <LogOut className="size-4" />
            Logout
          </SidebarMenuButton>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 px-5 py-4 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white lg:hidden">
                <Menu className="size-5" />
              </button>
              <button className="hidden size-10 items-center justify-center rounded-lg border border-slate-200 bg-white lg:inline-flex">
                <PanelLeft className="size-5" />
              </button>
              <div>
                <p className="text-sm text-slate-500">Dashboard</p>
                <h1 className="text-xl font-extrabold md:text-2xl">
                  Pendampingan Skripsi
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white">
                <Bell className="size-5" />
              </button>
              <div className="hidden items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2 md:flex">
                <div className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-sm font-bold text-white">
                  SA
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Sendy</p>
                  <p className="mt-1 text-xs text-slate-500">Mentor</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          <section className="rounded-lg border border-slate-200 bg-slate-950 p-6 text-white md:p-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <Badge className="mb-5 bg-[#d4af37]/10 text-[#d4af37]">
                  Active Project
                </Badge>
                <h2 className="max-w-3xl text-3xl font-extrabold tracking-tight md:text-5xl">
                  Sistem Informasi HR Karyawan
                </h2>
                <p className="mt-5 max-w-2xl leading-8 text-white/62">
                  Monitoring milestone, revisi dosen, jadwal bimbingan, dan
                  status pembayaran untuk project skripsi yang sedang berjalan.
                </p>
              </div>
              <a
                href="/process"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#d4af37] px-5 font-bold text-slate-950"
              >
                <Home className="size-4" />
                Lihat Alur
              </a>
            </div>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className="rounded-lg border border-slate-200 bg-white p-5"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.14em] text-emerald-600">
                      Live
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-500">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-black">{stat.value}</p>
                </article>
              );
            })}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-lg border border-slate-200 bg-white p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-extrabold">Milestone Project</h2>
                  <p className="mt-1 text-sm text-slate-500">
                    Progress pengerjaan per modul utama.
                  </p>
                </div>
                <Badge variant="outline">Week 4</Badge>
              </div>
              <div className="space-y-4">
                {milestones.map(([name, status, progress]) => (
                  <div key={name} className="rounded-lg bg-slate-50 p-4">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="font-bold">{name}</p>
                      <span className="text-sm font-semibold text-slate-500">
                        {status}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                      <div
                        className="h-full rounded-full bg-[#d4af37]"
                        style={{ width: progress }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <div className="grid gap-6">
              <article className="rounded-lg border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-extrabold">Revisi Terbaru</h2>
                <div className="mt-5 space-y-3">
                  {revisions.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-lg border border-slate-200 p-4 text-sm leading-6 text-slate-600"
                    >
                      <FileText className="mt-0.5 size-4 shrink-0 text-[#b8962f]" />
                      {item}
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-lg border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-extrabold">Jadwal Berikutnya</h2>
                <div className="mt-5 rounded-lg bg-slate-950 p-5 text-white">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#d4af37]">
                    Sabtu, 30 Mei
                  </p>
                  <p className="mt-3 text-2xl font-black">Review Bab 4</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    Bahas screenshot fitur, pengujian black box, dan flow demo
                    aplikasi.
                  </p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
