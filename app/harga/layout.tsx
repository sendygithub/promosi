import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Harga Servis Komputer & Laptop",
  description:
    "Daftar harga servis komputer dan laptop yang transparan dan terjangkau. Harga sudah termasuk jasa servis, biaya spare part dihitung terpisah sesuai harga pasar.",
  path: "/harga",
});

export default function HargaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
