"use client";

import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CheckoutPage() {
  const { cart, getTotalPrice, clearCart } = useCartStore();

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* KIRI: Ringkasan Belanja */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Ringkasan Checkout</h2>
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.quantity} x Rp {item.price.toLocaleString()}</p>
            </div>
            <p className="font-semibold">Rp {(item.price * item.quantity).toLocaleString()}</p>
          </div>
        ))}
        <div className="flex justify-between text-xl font-bold pt-4">
          <span>Total Bayar</span>
          <span className="text-primary">Rp {getTotalPrice().toLocaleString()}</span>
        </div>
        <Button className="w-full mt-4" onClick={() => alert("Pesanan Diproses!")}>
          Bayar Sekarang
        </Button>
        <Button variant="outline" className="w-full" onClick={clearCart}>
          Kosongkan Keranjang
        </Button>
      </div>

      {/* KANAN: Penjelasan Cara Kerja Zustand */}
      <Card className="bg-slate-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-700">Bagaimana Zustand Bekerja?</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-3 leading-relaxed">
          <p>
            **1. Store sebagai Single Source of Truth:** Data keranjang disimpan di luar komponen React. Saat kamu pindah dari halaman produk ke halaman checkout, data tetap ada tanpa perlu dikirim lewat URL atau Props.
          </p>
          <p>
            **2. Hooks-based:** Kita menggunakan `useCartStore()`. Ini memberi tahu React: *Tolong pantau store ini, kalau isinya berubah, update tampilan saya.*
          </p>
          <p>
            **3. Tanpa Context Provider:** Tidak seperti Context API, Zustand tidak membungkus seluruh aplikasi kamu. Ini membuat aplikasi lebih cepat karena hanya komponen yang memanggil data saja yang akan diproses ulang (*re-render*).
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            Zustand itu seperti lemari pusat di toko. Siapa pun (komponen mana pun) bisa ambil atau taruh barang di sana kapan saja tanpa harus tanya ke kasir.
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}