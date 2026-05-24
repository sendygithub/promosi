"use client";

import React, { useState } from "react";
import CodeViewerFiltering from "./codeviewerfiltering";

export function PenyaringGenap() {
  // 1. Data awal (Array acak)
  const [angkaAsal] = useState<number[]>([1, 4, 7, 10, 13, 16, 19, 22]);
  const [hasilFilter, setHasilFilter] = useState<number[]>([]);

  // Alur Logika: Ambil data yang memenuhi syarat
  const saringAngkaGenap = () => {
    // .filter() secara otomatis:
    // 1. Ambil satu angka
    // 2. Periksa syarat (angka % 2 === 0)
    // 3. Jika TRUE -> Simpan ke array baru
    const hasil = angkaAsal.filter((angka) => {
      return angka % 2 === 0; // Syarat: sisa bagi 2 harus nol
    });

    setHasilFilter(hasil);
  };

  return (
    

    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">


    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
          Penyaring Angka Genap 🔢
        </h2>

        {/* Visualisasi Angka Asal */}
        <div className="mb-8">
          <p className="text-xs font-bold text-emerald-500 mb-3 uppercase text-center">Data Asal</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {angkaAsal.map((a, i) => (
              <span key={i} className="bg-slate-100 text-slate-600 w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold border border-slate-200">
                {a}
              </span>
            ))}
          </div>
        </div>

        {/* Tombol Aksi */}
        <button
          onClick={saringAngkaGenap}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-emerald-200 active:scale-95"
        >
          Ambil Angka Genap saja
        </button>

        {/* Hasil Filter */}
        <div className="mt-8 min-h-[80px]">
          {hasilFilter.length > 0 ? (
            <div className="animate-in slide-in-from-bottom-4 duration-500">
              <p className="text-xs font-bold text-emerald-500 mb-3 uppercase text-center">Hasil (Hanya Genap)</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {hasilFilter.map((h, i) => (
                  <span key={i} className="bg-emerald-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-sm font-bold shadow-md">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center text-slate-400 text-sm italic mt-4 italic">Klik tombol untuk menyaring...</p>
          )}
        </div>
      </div>

      <div className="mt-6 bg-white px-4 py-2 rounded-full shadow-sm border border-emerald-100">
        <code className="text-xs text-emerald-700 font-mono">
          Logika: angka % 2 === 0
        </code>
      </div>
    </div>


    {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full text-white flex flex-col justify-center">
          
         <CodeViewerFiltering />
        </div>


    </div>
    </div>
  );
}

export default PenyaringGenap