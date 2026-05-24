"use client"; 
import React, { useState } from "react";
import CodeViewer from "./codeview";

export default function PencariAngka() {
  // 1. Sekumpulan data (Array)
  const kumpulanData = [12, 45, 7, 23, 56, 89, 3];
  
  // State untuk menangkap input dan menyimpan pesan hasil
  const [inputAngka, setInputAngka] = useState("");
  const [hasil, setHasil] = useState({ pesan: "", sukses: false });

  const jalankanPencarian = () => {
    let ditemukan = false;
    let posisi = -1;
    const target = Number(inputAngka);

    // --- ALUR LOGIKA DASAR ---
    // 1. Loop: Ambil satu per satu angka
    for (let i = 0; i < kumpulanData.length; i++) {
      
      // 2. If: Bandingkan data ke-i dengan target
      if (kumpulanData[i] === target) {
        // 3. Jika sama: Tandai ditemukan dan simpan urutannya
        ditemukan = true;
        posisi = i + 1; // i + 1 agar urutan mulai dari 1 (manusiawi)
        break; // 4. Berhenti: Tidak perlu cari sisanya
      }
    }

    // Update tampilan berdasarkan hasil loop
    if (ditemukan) {
      setHasil({ pesan: `Angka ${target} ditemukan di posisi ke-${posisi}!`, sukses: true });
    } else {
      setHasil({ pesan: `Maaf, angka ${target} tidak ditemukan.`, sukses: false });
    }
  };

  return (

    <div className=" bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        


      {/* BAGIAN KANAN: Form Input */}
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border border-gray-200 mt-15">
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Cari Angka</h2>
        
        {/* Visualisasi Data */}
        <div className="flex gap-2 flex-wrap justify-center mb-6">
          {kumpulanData.map((item, idx) => (
            <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md font-mono text-sm border border-blue-200">
              {item}
            </span>
          ))}
        </div>

        {/* Form Input */}
        <div className="space-y-3">
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all text-center text-black"
            placeholder="Ketik angka yang dicari..."
            value={inputAngka}
            onChange={(e) => setInputAngka(e.target.value)}
          />
          <button
            onClick={jalankanPencarian}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors shadow-sm"
          >
            Cari Sekarang
          </button>
        </div>

        {/* Tampilan Pesan Hasil */}
        {hasil.pesan && (
          <div className={`mt-4 p-3 rounded-lg text-sm text-center font-medium ${
            hasil.sukses ? "bg-green-100 text-green-700 border border-green-200" : "bg-red-100 text-red-700 border border-red-200"
          }`}>
            {hasil.pesan}
          </div>
        )}
      </div>
      
      <p className="mt-4 text-gray-500 text-xs text-center">
        Logika: Loop Array → If per Angka → Break jika Ketemu
      </p> 
      
      
    </div>


    {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="  text-white flex flex-col justify-center">
          <CodeViewer/>
          
        </div>


       </div>
    </div>
   
   
  );
}
