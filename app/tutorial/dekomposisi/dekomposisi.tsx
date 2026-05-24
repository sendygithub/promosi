"use client";

import React, { useState } from "react";
import CodeViewerDekomposisi from "./codeviewerdekomposisi";

export  function Dekomposisi() {
  const [inputNilai, setInputNilai] = useState<string>("");
  const [daftarNilai, setDaftarNilai] = useState<number[]>([]);

  // --- BAGIAN DEKOMPOSISI (Fungsi-Fungsi Kecil) ---

  // 1. Fungsi Kecil: Menghitung Total (Sum)
  const hitungTotal = (data: number[]) => {
    return data.reduce((acc, curr) => acc + curr, 0);
  };

  // 2. Fungsi Kecil: Menghitung Jumlah Data (Count)
  const hitungJumlahData = (data: number[]) => {
    return data.length;
  };

  // 3. Fungsi Utama: Menghitung Rata-Rata (MENGGABUNGKAN fungsi 1 & 2)
  const hitungRataRata = () => {
    const total = hitungTotal(daftarNilai);
    const jumlah = hitungJumlahData(daftarNilai);
    
    if (jumlah === 0) return 0;
    return total / jumlah;
  };

  // --- LOGIKA UI ---

  const tambahNilai = () => {
    const nilai = parseFloat(inputNilai);
    if (!isNaN(nilai)) {
      setDaftarNilai([...daftarNilai, nilai]);
      setInputNilai("");
    }
  };

  return (


    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        

        {/* BAGIAN KANAN: Form Input */}
    <div className=" p-8">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <span>📊</span> Kalkulator Nilai Siswa
        </h2>

        {/* Input */}
        <div className="flex gap-2 mb-6">
          <input
            type="number"
            className="flex-1 p-2 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400 text-black"
            placeholder="Masukkan nilai (0-100)"
            value={inputNilai}
            onChange={(e) => setInputNilai(e.target.value)}
          />
          <button
            onClick={tambahNilai}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
          >
            Tambah
          </button>
        </div>

        {/* List Nilai */}
        <div className="mb-6">
          <p className="text-xs font-bold text-slate-400 uppercase mb-2">Daftar Nilai Masuk</p>
          <div className="flex flex-wrap gap-2 min-h-[40px]">
            {daftarNilai.map((n, i) => (
              <span key={i} className="bg-slate-100 px-3 py-1 rounded-md text-slate-700 text-sm border border-slate-200">
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* Hasil Perhitungan (Hasil Dekomposisi) */}
        <div className="space-y-3 pt-6 border-t border-slate-100">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Total Nilai:</span>
            <span className="font-bold text-slate-800">{hitungTotal(daftarNilai)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">Jumlah Data:</span>
            <span className="font-bold text-slate-800">{hitungJumlahData(daftarNilai)}</span>
          </div>
          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-slate-800">Rata-Rata:</span>
            <span className="text-3xl font-black text-indigo-600">
              {hitungRataRata().toFixed(1)}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-6 text-slate-400 text-xs text-center max-w-xs leading-relaxed">
        <strong>Konsep Dekomposisi:</strong> Masalah &quot;Rata-Rata&quot; dipecah menjadi tugas <em>Sum</em>, <em>Count</em>, dan <em>Divide</em>.
      </p>
    </div>

    {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full text-white flex flex-col justify-center">
          <CodeViewerDekomposisi/>
          
        </div>

      </div>
    </div>




  );
}

export default Dekomposisi