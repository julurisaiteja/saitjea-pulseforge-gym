"use client";
import { useState } from "react";
const faqs = [{"q":"How do class reservations work?","a":"Schedule grid shows live spots — tap to hold, checkout membership if needed."},{"q":"Does FORGE30 stack?","a":"Once per new member on first membership slab."},{"q":"Open gym hours?","a":"Floor 5am–11pm; classes listed separately on schedule."},{"q":"Beginner friendly?","a":"Every class lists scale options in the grid."}] as { q: string; a: string }[];
export function AiAssistant() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-20 right-4 z-50 md:bottom-6 md:right-6">
      {open && (
        <div className="border-4 border-black bg-white shadow-[6px_6px_0_#000] overflow-hidden mb-3 max-h-[60vh] max-w-sm overflow-y-auto p-4 animate-rise">
          <p className="font-semibold">AI Assistant</p>
          <ul className="mt-3 space-y-4 text-sm">
            {faqs.map((f) => (
              <li key={f.q}><p className="font-medium">{f.q}</p><p className="mt-1 text-[var(--muted)]">{f.a}</p></li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={() => setOpen((o) => !o)} className="rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg">Ask AI</button>
    </div>
  );
}
