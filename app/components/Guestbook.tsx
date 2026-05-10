"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Guestbook() {
  const [messages, setMessages] = useState([
    { name: "Admin", text: "Selamat berbahagia Rama & Shinta!" },
  ]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newMessage = {
      name: formData.get("name") as string,
      text: formData.get("message") as string,
    };
    setMessages([newMessage, ...messages]);
    e.currentTarget.reset();
  };

  return (
    <section className="py-20 bg-[#0f0f0f] text-[#d4af37]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-4xl text-center mb-10 italic">
          Buku Tamu
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 mb-12">
          <input
            name="name"
            placeholder="Nama Anda"
            className="w-full p-3 bg-white/5 border border-[#d4af37]/30 rounded focus:border-[#d4af37] outline-none"
            required
          />
          <textarea
            name="message"
            placeholder="Ucapan & Doa"
            rows={4}
            className="w-full p-3 bg-white/5 border border-[#d4af37]/30 rounded focus:border-[#d4af37] outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#d4af37] text-black font-bold rounded hover:bg-[#b8962d] transition"
          >
            Kirim Ucapan
          </button>
        </form>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {messages.map((msg, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={i}
              className="p-4 border-b border-white/10 italic"
            >
              <p className="font-bold text-sm not-italic uppercase tracking-widest">
                {msg.name}
              </p>
              <p className="text-gray-400 mt-1">{msg.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
