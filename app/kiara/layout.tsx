import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

// Halaman personal, jangan diindeks mesin pencari.
export const metadata: Metadata = pageMetadata({
  title: "Undangan Ulang Tahun Kiara",
  description: "Halaman undangan ulang tahun personal Kiara Sovia.",
  path: "/kiara",
  index: false,
});

export default function KiaraLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
