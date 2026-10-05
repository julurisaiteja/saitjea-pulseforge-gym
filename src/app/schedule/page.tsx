"use client";
import Link from "next/link";
import { Fragment, useMemo, useState } from "react";

type ClassType = "HIIT" | "Strength" | "Ride" | "Conditioning";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const classes = [
  { id: "m-hiit", name: "Forge HIIT", type: "HIIT" as ClassType, day: 0, time: "6:30 AM", spots: 4, coach: "Rae" },
  { id: "m-pull", name: "Iron Pull", type: "Strength" as ClassType, day: 0, time: "12:00 PM", spots: 8, coach: "Mick" },
  { id: "t-ride", name: "Pulse Ride", type: "Ride" as ClassType, day: 1, time: "6:30 PM", spots: 2, coach: "Jo" },
  { id: "t-rope", name: "Battle Rope", type: "Conditioning" as ClassType, day: 1, time: "7:45 PM", spots: 6, coach: "Rae" },
  { id: "w-hiit", name: "Forge HIIT", type: "HIIT" as ClassType, day: 2, time: "6:30 AM", spots: 3, coach: "Rae" },
  { id: "w-strength", name: "Deadlift Lab", type: "Strength" as ClassType, day: 2, time: "5:30 PM", spots: 10, coach: "Mick" },
  { id: "th-ride", name: "Pulse Ride", type: "Ride" as ClassType, day: 3, time: "6:00 AM", spots: 5, coach: "Jo" },
  { id: "f-hiit", name: "Friday Forge", type: "HIIT" as ClassType, day: 4, time: "6:30 AM", spots: 1, coach: "Rae" },
  { id: "sa-cond", name: "Sled Push", type: "Conditioning" as ClassType, day: 5, time: "9:00 AM", spots: 12, coach: "Mick" },
  { id: "su-yoga", name: "Recovery Flow", type: "Conditioning" as ClassType, day: 6, time: "10:00 AM", spots: 15, coach: "Jo" },
];

const typeFilters: Array<ClassType | "All"> = ["All", "HIIT", "Strength", "Ride", "Conditioning"];

export default function SchedulePage() {
  const [held, setHeld] = useState<string | null>(null);
  const [filter, setFilter] = useState<ClassType | "All">("All");
  const [holdMsg, setHoldMsg] = useState<string | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? classes : classes.filter((c) => c.type === filter)),
    [filter],
  );

  const holdSpot = (id: string, name: string, time: string) => {
    setHeld(id);
    setHoldMsg(`Held: ${name} · ${time} — confirm at desk within 10 min.`);
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="slash-title text-5xl font-black uppercase">Class schedule</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">
        Full week grid — filter by modality, tap a cell to hold a spot. Low counts pulse live.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {typeFilters.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setFilter(t)}
            className={`border-4 border-black px-4 py-2 text-sm font-black uppercase ${filter === t ? "bg-black text-[var(--bg)]" : "bg-white"}`}
          >
            {t}
          </button>
        ))}
      </div>

      {holdMsg && (
        <div className="membership-slab mt-6 border-4 border-black bg-[var(--accent)] p-4 text-sm font-bold text-white motion-rise">
          {holdMsg}
        </div>
      )}

      <div className="mt-10 overflow-x-auto">
        <div className="min-w-[720px]">
          <div className="grid grid-cols-8 gap-1 border-4 border-black bg-black p-1">
            <div className="bg-[var(--bg)] p-2 text-center text-xs font-black uppercase">Time</div>
            {weekDays.map((d) => (
              <div key={d} className="bg-[var(--bg)] p-2 text-center text-xs font-black uppercase">{d}</div>
            ))}
            {["6:30 AM", "12:00 PM", "5:30 PM", "6:30 PM", "7:45 PM", "9:00 AM", "10:00 AM"].map((slot) => (
              <Fragment key={slot}>
                <div className="bg-white p-2 text-xs font-bold">{slot}</div>
                {weekDays.map((_, dayIdx) => {
                  const cell = filtered.find((c) => c.day === dayIdx && c.time === slot);
                  if (!cell) {
                    return <div key={`${slot}-${dayIdx}`} className="min-h-[4.5rem] bg-[var(--card)]/60" />;
                  }
                  const isHeld = held === cell.id;
                  return (
                    <button
                      key={cell.id}
                      type="button"
                      onClick={() => holdSpot(cell.id, cell.name, cell.time)}
                      className={`membership-slab min-h-[4.5rem] border-2 border-black p-2 text-left text-xs transition-colors ${isHeld ? "bg-[var(--accent)] text-white" : "bg-white hover:bg-[var(--accent)]/20"}`}
                    >
                      <p className="font-black leading-tight">{cell.name}</p>
                      <p className="text-[10px] opacity-80">{cell.coach}</p>
                      <p className={`mt-1 font-black ${cell.spots < 5 ? "counter-pulse text-[var(--accent)]" : ""} ${isHeld ? "text-white" : ""}`}>
                        {cell.spots} left
                      </p>
                    </button>
                  );
                })}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <section className="membership-slab mt-12 border-4 border-black p-8 md:flex md:items-center md:justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-widest text-[var(--muted)]">Membership slab</p>
          <p className="mt-2 text-2xl font-black uppercase">Unlimited holds + open gym</p>
          <p className="mt-2 max-w-md text-sm">Skip the 10-minute hold window — members auto-confirm and get priority on Forge HIIT.</p>
        </div>
        <Link href="/shop" className="brutal-btn mt-6 inline-block md:mt-0">Add membership slab</Link>
      </section>
    </main>
  );
}
