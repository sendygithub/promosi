import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Apakah Antar Jemput Servis Benar-benar Gratis?",
  description:
    "Layanan antar jemput perangkat gratis untuk area Tangerang dan sekitarnya. Kami jemput perangkat Anda, servis, lalu antar kembali setelah selesai.",
  path: "/faq/antar-jemput",
});

export default function FaqAntarJemputLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
