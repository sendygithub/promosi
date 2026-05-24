"use client";

import React, { useState } from "react";
import CodeViewerInputValidation from "./codeviewerinputvalidation";

export function InputValidation() {
  // 1. State untuk menampung input password
  const [password, setPassword] = useState<string>("");

  // 2. Alur Logika: Pastikan input sesuai aturan
  // Kita melakukan pengecekan langsung (computed property)
  const isPanjangCukup = password.length >= 8;
  const isKosong = password.length === 0;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        

        {/* BAGIAN KANAN: Form Input */}




    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Buat Password</h2>
        <p className="text-sm text-slate-500 mb-6">Silakan masukkan password baru Anda.</p>

        {/* Input Field */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Password</label>
          <input
            type="password"
            className={` text-black w-full p-3 border rounded-xl outline-none transition-all ${
              isKosong 
                ? "border-slate-300 focus:border-blue-500" 
                : isPanjangCukup 
                  ? "border-green-500 focus:ring-2 focus:ring-green-200" 
                  : "border-red-500 focus:ring-2 focus:ring-red-200"
            }`}
            placeholder="Minimal 8 karakter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Notifikasi Validasi (Alur Logika IF di dalam UI) */}
        <div className="mt-4 flex items-center gap-2">
          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
            isPanjangCukup ? "bg-green-500" : "bg-slate-200"
          }`}>
            {isPanjangCukup && (
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>
          <p className={`text-sm font-medium ${
            isKosong ? "text-slate-400" : isPanjangCukup ? "text-green-600" : "text-red-500"
          }`}>
            {isPanjangCukup ? "Password sudah kuat" : "Minimal 8 karakter"}
          </p>
        </div>

        {/* Tombol Aksi (Hanya aktif jika valid) */}
        <button
          disabled={!isPanjangCukup}
          className={`w-full mt-8 py-3 rounded-xl font-bold transition-all shadow-lg ${
            isPanjangCukup 
              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200" 
              : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          Daftar Sekarang
        </button>
      </div>

      {/* Info Debug Logika */}
      <div className="mt-6 text-slate-400 text-xs text-center font-mono">
        Alur: password.length ({password.length}) {isPanjangCukup ? "≥" : "<"} 8
      </div>
    </div>


    {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="flex flex-col justify-center">
         <CodeViewerInputValidation />
        </div>

      </div>
    </div>


  );
}

export default InputValidation