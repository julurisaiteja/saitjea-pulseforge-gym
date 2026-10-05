import { ShopBrowse } from "@/components/ShopBrowse";

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="slash-title text-5xl font-black uppercase">Gear shop</h1>
      <p className="mt-4 max-w-2xl font-bold text-[var(--muted)]">
        Chalk, wraps, and recovery slabs — brutal filters, zero fluff. Search, sort, rip into any PDP.
      </p>
      <ShopBrowse />
    </main>
  );
}
