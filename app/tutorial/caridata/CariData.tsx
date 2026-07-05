"use client";
import React, { useState } from "react";
import CodeViewer from "./codeview";

export default function PencariAngka() {
  const kumpulanData = [12, 45, 7, 23, 56, 89, 3];

  const [inputAngka, setInputAngka] = useState("");
  const [hasil, setHasil] = useState({ pesan: "", sukses: false });

  const jalankanPencarian = () => {
    let ditemukan = false;
    let posisi = -1;
    const target = Number(inputAngka);

    for (let i = 0; i < kumpulanData.length; i++) {
      if (kumpulanData[i] === target) {
        ditemukan = true;
        posisi = i + 1;
        break;
      }
    }

    if (ditemukan) {
      setHasil({
        pesan: `Angka ${target} ditemukan di posisi ke-${posisi}!`,
        sukses: true,
      });
    } else {
      setHasil({
        pesan: `Maaf, angka ${target} tidak ditemukan.`,
        sukses: false,
      });
    }
  };

  return (
    <div className="flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* BAGIAN KANAN: Form Input */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full md:w-1/2">
          <div className="border border-white/[0.06] bg-[#141619] p-6 w-full max-w-sm">
            <h2 className="text-xl font-bold text-white mb-4 text-center">
              Cari Angka
            </h2>

            {/* Visualisasi Data */}
            <div className="flex gap-2 flex-wrap justify-center mb-6">
              {kumpulanData.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-[#1C69D4]/10 text-[#1C69D4] px-3 py-1 font-mono text-sm border border-[#1C69D4]/30"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Form Input */}
            <div className="space-y-3">
              <input
                type="number"
                className="w-full bg-transparent border border-white/[0.12] px-3 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors text-center"
                placeholder="Ketik angka yang dicari..."
                value={inputAngka}
                onChange={(e) => setInputAngka(e.target.value)}
              />
              <button
                onClick={jalankanPencarian}
                className="w-full bg-[#1C69D4] hover:bg-[#1C69D4]/90 text-white font-semibold py-2 transition-colors"
              >
                Cari Sekarang
              </button>
            </div>

            {/* Tampilan Pesan Hasil */}
            {hasil.pesan && (
              <div
                className={`mt-4 p-3 text-sm text-center font-medium border ${
                  hasil.sukses
                    ? "bg-green-500/10 text-green-400 border-green-500/30"
                    : "bg-red-500/10 text-red-400 border-red-500/30"
                }`}
              >
                {hasil.pesan}
              </div>
            )}
          </div>

          <p className="mt-4 text-[#A8B0BC]/50 text-[11px] text-center">
            Logika: Loop Array → If per Angka → Break jika Ketemu
          </p>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4">
          <CodeViewer />
        </div>
      </div>
    </div>
  );
}
