"use client";
import Link from "next/link";
import { PromoStrip } from "@/components/PromoStrip";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden border-b-4 border-black">
        <video className="absolute inset-0 h-full w-full object-cover kenburns grayscale contrast-125" autoPlay muted loop playsInline src="https://videos.pexels.com/video-files/4754166/4754166-uhd_2560_1440_25fps.mp4" />
        <div className="absolute inset-0 bg-[var(--bg)]/70 mix-blend-multiply" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-20 md:px-6">
          <h1 className="slash-title text-6xl uppercase leading-none md:text-[7rem]">PulseForge Gym</h1>
          <p className="mt-6 max-w-lg text-lg font-semibold md:text-xl">Lift loud. Recover harder.</p>
          <p className="mt-2 max-w-md text-sm">Membership slabs and class grid — reserve before the floor fills.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/schedule" className="brutal-btn text-center">Reserve a class</Link>
            <Link href="/shop" className="border-4 border-black bg-white px-8 py-3 text-center font-black uppercase">Shop forge gear</Link>
          </div>
        </div>
      </section>
      <div className="counter-pulse flex flex-wrap justify-around border-b-4 border-black bg-black py-6 text-[var(--bg)]">
        {[{ n: "240+", l: "Lifts logged today" }, { n: "18", l: "Live classes" }, { n: "4.9", l: "Floor rating" }].map((s) => (
          <div key={s.l} className="px-4 text-center"><p className="text-3xl font-black md:text-4xl">{s.n}</p><p className="text-xs uppercase tracking-widest">{s.l}</p></div>
        ))}
      </div>
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="text-4xl font-black uppercase">Membership slabs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[{ t: "Day", p: "$25", d: "Open floor + locker" }, { t: "Forge", p: "$89/mo", d: "Classes + sauna" }, { t: "Elite", p: "$149/mo", d: "PT blocks + recovery" }].map((tier) => (
            <Link key={tier.t} href="/schedule" className="membership-slab block border-4 border-black p-8 shadow-[8px_8px_0_#000] animate-rise">
              <p className="text-2xl font-black">{tier.t}</p>
              <p className="mt-2 text-xl">{tier.p}</p>
              <p className="mt-2 text-sm">{tier.d}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="border-t-4 border-black bg-white px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-black uppercase">Recovery lane</h2>
          <p className="mt-3 max-w-xl">Contrast plunge, chalk, protein — stacked after your session.</p>
          <Link href="/shop" className="brutal-btn mt-8 inline-block">Load recovery cart</Link>
        </div>
      </section>
      <PromoStrip />
      <Reviews />
    </main>
  );
}