"use client";

import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

const PRODUCTS = [
  { id: 1, name: "Sepatu Lari Pro", price: 750000 },
  { id: 2, name: "Tas Punggung Urban", price: 450000 },
  { id: 3, name: "Botol Minum Alumunium", price: 120000 },
];

export function ShopPage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Toko Keren</h1>
        <Link href="/tutorial/checkout">
          <Button variant="outline">🛒 Keranjang ({cart.length})</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PRODUCTS.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle className="text-lg">{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 font-semibold text-primary">Rp {product.price.toLocaleString()}</p>
              <Button className="w-full" onClick={() => addToCart({ ...product, quantity: 1 })}>
                Tambah ke Keranjang
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
