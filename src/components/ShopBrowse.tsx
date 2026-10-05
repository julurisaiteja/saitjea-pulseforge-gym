"use client";
import { useMemo, useState } from "react";
import { products, categories } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export function ShopBrowse() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [sort, setSort] = useState<SortKey>("featured");
  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      const matchQ = !q || p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase());
      const matchC = cat === "All" || p.category === cat;
      return matchQ && matchC;
    });
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [q, cat, sort]);
  return (
    <div className="mt-10 space-y-6">
      <div className="membership-slab flex flex-col gap-3 border-4 border-black p-4 md:flex-row md:items-stretch">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="HUNT GEAR"
          className="flex-1 border-4 border-black bg-white px-4 py-3 text-sm font-bold uppercase"
        />
        <select
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="border-4 border-black bg-white px-4 py-3 text-sm font-black uppercase"
        >
          <option value="All">All zones</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
          className="border-4 border-black bg-[var(--accent)] px-4 py-3 text-sm font-black uppercase text-white"
        >
          <option value="featured">Forge picks</option>
          <option value="price-asc">$ ↑</option>
          <option value="price-desc">$ ↓</option>
          <option value="rating">Top rated</option>
        </select>
      </div>
      <p className="text-sm font-black uppercase">{filtered.length} items in the pit</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
