"use client";

import React, { useState } from "react";
import CodeViewerTransformation from "./codeviewertransformation";

export function TransformasiData() {
  const [angkaAsal] = useState([2, 5, 8, 12, 20]);
  const [hasilTransformasi, setHasilTransformasi] = useState<number[]>([]);

  const lipatGandakan = () => {
    const hasil = angkaAsal.map((angka) => {
      return angka * 2;
    });

    setHasilTransformasi(hasil);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* BAGIAN KANAN: Form Input */}
        <div className="flex flex-col items-center justify-center min-h-screen p-4 w-full md:w-1/2">
          <div className="border border-white/[0.06] bg-[#141619] p-8 w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Double It! 🚀
            </h2>

            {/* Barisan Angka Asal */}
            <div className="mb-8 text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] mb-2">
                Angka Asal
              </p>
              <div className="flex gap-2 justify-center">
                {angkaAsal.map((a, i) => (
                  <span
                    key={i}
                    className="bg-white/[0.03] text-[#A8B0BC] w-10 h-10 flex items-center justify-center font-bold border border-white/[0.06]"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Tombol Aksi */}
            <button
              onClick={lipatGandakan}
              className="w-full bg-[#1C69D4] hover:bg-[#1C69D4]/90 text-white font-bold py-3 transition-all active:scale-95 mb-8"
            >
              Kalikan Semua x2
            </button>

            {/* Hasil Transformasi */}
            {hasilTransformasi.length > 0 && (
              <div className="text-center animate-in fade-in zoom-in duration-300">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#1C69D4] mb-2">
                  Hasil Baru
                </p>
                <div className="flex gap-2 justify-center">
                  {hasilTransformasi.map((h, i) => (
                    <span
                      key={i}
                      className="bg-[#1C69D4] text-white w-10 h-10 flex items-center justify-center font-bold"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-[#A8B0BC]/50 text-[13px] italic">
            Logika: [2, 5, 8] → .map(x * 2) → [4, 10, 16]
          </p>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4">
          <CodeViewerTransformation />
        </div>
      </div>
    </div>
  );
}

export default TransformasiData;
