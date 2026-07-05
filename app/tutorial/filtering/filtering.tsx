"use client";

import React, { useState } from "react";
import CodeViewerFiltering from "./codeviewerfiltering";

export function PenyaringGenap() {
  const [angkaAsal] = useState<number[]>([1, 4, 7, 10, 13, 16, 19, 22]);
  const [hasilFilter, setHasilFilter] = useState<number[]>([]);

  const saringAngkaGenap = () => {
    const hasil = angkaAsal.filter((angka) => {
      return angka % 2 === 0;
    });

    setHasilFilter(hasil);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full md:w-1/2">
          <div className="border border-white/[0.06] bg-[#141619] p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Penyaring Angka Genap 🔢
            </h2>

            {/* Visualisasi Angka Asal */}
            <div className="mb-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] mb-3 text-center">
                Data Asal
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {angkaAsal.map((a, i) => (
                  <span
                    key={i}
                    className="bg-white/[0.03] text-[#A8B0BC] w-10 h-10 flex items-center justify-center text-sm font-semibold border border-white/[0.06]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Aksi */}
            <button
              onClick={saringAngkaGenap}
              className="w-full bg-[#1C69D4] hover:bg-[#1C69D4]/90 text-white font-bold py-3 transition-all active:scale-95"
            >
              Ambil Angka Genap saja
            </button>

            {/* Hasil Filter */}
            <div className="mt-8 min-h-[80px]">
              {hasilFilter.length > 0 ? (
                <div className="animate-in slide-in-from-bottom-4 duration-500">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] mb-3 text-center">
                    Hasil (Hanya Genap)
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {hasilFilter.map((h, i) => (
                      <span
                        key={i}
                        className="bg-[#1C69D4] text-white w-10 h-10 flex items-center justify-center text-sm font-bold"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-center text-[#A8B0BC]/50 text-[13px] italic mt-4">
                  Klik tombol untuk menyaring...
                </p>
              )}
            </div>
          </div>

          <div className="mt-6 border border-white/[0.06] bg-[#141619] px-4 py-2">
            <code className="text-[11px] text-[#1C69D4] font-mono">
              Logika: angka % 2 === 0
            </code>
          </div>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4">
          <CodeViewerFiltering />
        </div>
      </div>
    </div>
  );
}

export default PenyaringGenap;
