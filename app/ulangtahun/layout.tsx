import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

// Halaman personal, jangan diindeks mesin pencari.
export const metadata: Metadata = pageMetadata({
  title: "Undangan Ulang Tahun",
  description: "Halaman undangan ulang tahun personal.",
  path: "/ulangtahun",
  index: false,
});

export default function UlangTahunLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
