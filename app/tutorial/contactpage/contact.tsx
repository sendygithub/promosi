import React from "react";
import CodeViewerContact from "./codeviewercontact";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-5xl w-full border border-white/[0.06] bg-[#141619] flex flex-col md:flex-row">
        {/* BAGIAN KANAN: Form Input */}
        <div className="w-full md:w-1/2 p-8">
          <form className="space-y-4">
            <div>
              <label className="block text-[13px] font-medium text-[#A8B0BC]">
                Nama Lengkap
              </label>
              <input
                type="text"
                className="mt-1 block w-full bg-transparent border border-white/[0.12] px-3 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="Masukkan nama..."
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#A8B0BC]">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full bg-transparent border border-white/[0.12] px-3 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="email@anda.com"
              />
            </div>
            <div>
              <label className="block text-[13px] font-medium text-[#A8B0BC]">
                Pesan
              </label>
              <textarea
                rows={4}
                className="mt-1 block w-full bg-transparent border border-white/[0.12] px-3 py-2 text-[14px] text-white placeholder:text-[#A8B0BC]/50 focus:outline-none focus:border-white/[0.25] transition-colors"
                placeholder="Tulis pesan Anda..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#1C69D4] text-white py-2 px-4 hover:bg-[#1C69D4]/90 transition duration-200 font-medium"
            >
              Kirim Pesan
            </button>
          </form>
        </div>

        {/* BAGIAN KIRI: Keterangan/Informasi */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4">
          <CodeViewerContact />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
