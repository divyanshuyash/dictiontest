"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";

export default function MiniAudit({ title, checks, gap }: { title: string; checks: string[]; gap: string }) {
  const [result, setResult] = useState<number | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = checks.map((_, index) => Number(form.get(`q-${index}`)));
    if (values.some((value) => Number.isNaN(value))) return;
    setResult(Math.round((values.reduce((sum, value) => sum + value, 0) / (checks.length * 2)) * 100));
  }

  const diagnosis = result === null ? null : result < 40 ? "Foundation gap" : result < 72 ? "Inconsistent signal" : "Strong base";
  const registerHref = `/register?source=${encodeURIComponent(title)}&gap=${encodeURIComponent(gap)}`;

  if (result !== null) {
    return (
      <div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-7 md:p-10">
        <p className="section-label text-[#bd84ff]">Your directional result</p>
        <div className="mt-8 flex items-end gap-4"><span className="text-[clamp(5rem,12vw,8rem)] font-black leading-none tracking-[-0.08em]">{result}</span><span className="pb-3 text-sm text-white/35">/ 100</span></div>
        <h3 className="mt-6 text-2xl font-semibold tracking-[-0.04em]">{diagnosis}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">Your quickest improvement is to strengthen the statements you marked “not true” before adding more channels or output. This score is directional, not a scientific or comparative benchmark.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={registerHref} className="button-light">See the full system in KNOWN <ArrowRight size={16} /></Link><button type="button" onClick={() => setResult(null)} className="button-ghost"><RotateCcw size={15} /> Retake audit</button></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {checks.map((check, index) => (
        <fieldset key={check} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <legend className="px-1 text-sm font-semibold leading-relaxed"><span className="mr-3 text-[#bd84ff]">{String(index + 1).padStart(2, "0")}</span>{check}</legend>
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[{ label: "Not true", value: 0 }, { label: "Partly", value: 1 }, { label: "Consistently", value: 2 }].map((option) => (
              <label key={option.value} className="cursor-pointer rounded-xl border border-white/10 p-3 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-white/44 transition-colors has-[:checked]:border-[#a855f7] has-[:checked]:bg-[#a855f7]/12 has-[:checked]:text-white">
                <input className="sr-only" type="radio" name={`q-${index}`} value={option.value} required />{option.label}
              </label>
            ))}
          </div>
        </fieldset>
      ))}
      <button type="submit" className="button-light mt-4 w-full">See my result <ArrowRight size={16} /></button>
    </form>
  );
}
