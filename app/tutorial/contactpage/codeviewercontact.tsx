"use client"

import React, { useRef } from "react"
import { SyntaxHighlighter, vscDarkPlus } from "@/components/tutorial-code-block"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, ArrowUp, ArrowDown } from "lucide-react"
import { toast } from "@/lib/toast"

export function CodeViewerContact() {
  // 1. Buat Ref untuk menargetkan kontainer scroll
  const scrollRef = useRef<HTMLDivElement>(null);

  const kodeContoh = `"use client"; 
import React, { useState } from "react";

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
      setHasil({ pesan: \`Angka \${target} ditemukan di posisi ke-\${posisi}!\`, sukses: true });
    } else {
      setHasil({ pesan: \`Maaf, angka \${target} tidak ditemukan.\`, sukses: false });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Konten Form ... */}
    </div>
  );
}`;

  // 2. Fungsi untuk Scroll
  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    scrollRef.current?.scrollTo({ 
      top: scrollRef.current.scrollHeight, 
      behavior: "smooth" 
    });
  };

  const salinKode = () => {
    navigator.clipboard.writeText(kodeContoh);
    toast.success("Kode berhasil disalin!");
  };

  return (
    <div className="relative group max-w-2xl mx-auto">
      <Card className="w-full bg-[#1e1e1e] border-none shadow-2xl overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-gray-800 bg-[#1e1e1e] z-10">
          <CardTitle className="text-sm font-mono text-gray-400">
            example-code.tsx
          </CardTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={salinKode}
            className="h-8 w-8 text-gray-400 hover:text-white"
          >
            <Copy className="h-4 w-4" />
          </Button>
        </CardHeader>

        {/* 3. Toolbar Scroll Melayang */}
        <div className="absolute right-4 top-20 flex flex-col gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button 
            size="icon" 
            variant="secondary" 
            className="h-8 w-8 rounded-full bg-gray-700/50 hover:bg-gray-600 text-white border border-gray-500"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
          <Button 
            size="icon" 
            variant="secondary" 
            className="h-8 w-8 rounded-full bg-gray-700/50 hover:bg-gray-600 text-white border border-gray-500"
            onClick={scrollToBottom}
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>

        {/* 4. Container dengan Ref dan Max Height */}
        <CardContent 
          ref={scrollRef}
          className="p-0 max-h-[400px] overflow-y-auto scrollbar-hide"
        >
          <SyntaxHighlighter
            language="typescript"
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: "20px",
              fontSize: "14px",
              background: "transparent",
            }}
          >
            {kodeContoh}
          </SyntaxHighlighter>
        </CardContent>
      </Card>
    </div>
  )
}

export default CodeViewerContact








