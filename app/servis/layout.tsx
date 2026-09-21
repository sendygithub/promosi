import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Servis Komputer & Laptop Tangerang",
  description:
    "Servis komputer dan laptop di wilayah Tangerang: rakit PC, upgrade SSD/RAM, instalasi Windows & Office, ganti keyboard atau LCD, sampai atasi BlueScreen dan laptop lemot. Konsultasi gratis.",
  path: "/servis",
});

export default function ServisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
