"use client";
import { QRCodeSVG } from "qrcode.react";

export default function QRSection() {
  return (
    <section className="py-20 bg-[#0f0f0f] text-center border-t border-[#d4af37]/20">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-3xl text-[#d4af37] mb-4">
          Konfirmasi Kehadiran
        </h2>
        <p className="text-gray-400 mb-8">
          Gunakan QR Code di bawah untuk akses masuk gedung
        </p>
        <div className="inline-block p-6 bg-white rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.2)]">
          <QRCodeSVG
            value="https://andreansah.vercel.app"
            size={200}
            bgColor="#ffffff"
            fgColor="#000000"
          />
        </div>
        <div className="mt-8 text-[#d4af37] font-serif text-xl tracking-widest">
          Rama & Shinta
        </div>
      </div>
    </section>
  );
}
