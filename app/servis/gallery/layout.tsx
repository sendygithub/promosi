import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Galeri Dokumentasi Servis Komputer & Laptop",
  description:
    "Koleksi dokumentasi pekerjaan servis komputer dan laptop: perbaikan hardware, upgrade SSD & RAM, instalasi sistem operasi, dan penggantian komponen.",
  path: "/servis/gallery",
});

export default function ServisGalleryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
