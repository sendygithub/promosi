import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Data Saya Aman Tidak Saat Diservis?",
  description:
    "Kami menjaga keamanan dan privasi data pelanggan selama proses servis komputer maupun laptop berlangsung. Data Anda adalah prioritas utama kami.",
  path: "/faq/keamanan-data",
});

export default function FaqKeamananDataLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
