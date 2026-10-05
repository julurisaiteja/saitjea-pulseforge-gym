"use client";
import Link from "next/link";
import { products } from "@/lib/products";
import { useWishlist } from "@/context/WishlistContext";
import { formatPrice } from "@/lib/products";
import Image from "next/image";

export default function WishlistPage() {
  const { ids } = useWishlist();
  const list = products.filter((p) => ids.includes(p.id));
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold">Wishlist</h1>
      <p className="mt-2 text-sm text-[var(--muted)]">Saved from product pages — demo localStorage.</p>
      <ul className="mt-10 space-y-4">
        {list.map((p) => (
          <li key={p.id} className="flex gap-4 rounded-xl border border-[var(--border)] p-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg"><Image src={p.image} alt={p.name} fill className="object-cover" sizes="80px" /></div>
            <div className="flex-1"><Link href={`/shop/${p.id}`} className="font-semibold hover:underline">{p.name}</Link><p className="text-sm text-[var(--muted)]">{formatPrice(p.price)}</p></div>
          </li>
        ))}
        {list.length === 0 && <li className="text-[var(--muted)]">No saved items yet.</li>}
      </ul>
    </main>
  );
}