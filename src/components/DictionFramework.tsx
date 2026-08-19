import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { framework } from "@/lib/siteContent";

export default function DictionFramework({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div><p className="section-label text-[#7134cb]">The D.I.C.T.I.O.N. framework</p><h2 className="editorial-heading mt-7">Seven connected parts. One recognisable presence.</h2></div>
          <p className="body-large max-w-xl text-black/52 lg:justify-self-end">A digital presence becomes useful when positioning, audience, content, trust, platforms, opportunities and relationships reinforce one another.</p>
        </div>
        <div className="mt-16 border-t border-black/12">
          {framework.slice(0, compact ? 4 : framework.length).map((item, index) => (
            <details key={`${item.letter}-${item.title}`} className="group border-b border-black/12">
              <summary className="grid cursor-pointer list-none gap-5 py-6 [&::-webkit-details-marker]:hidden md:grid-cols-[72px_0.8fr_1.2fr] md:items-center md:py-8">
                <span className="text-3xl font-black text-[#7134cb]">{item.letter}</span>
                <h3 className="text-xl font-semibold tracking-[-0.035em] md:text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-black/50">{item.description}</p>
              </summary>
              <div className="grid gap-6 pb-7 pl-0 text-sm md:grid-cols-2 md:pl-[calc(72px+1.25rem)]">
                <div className="border-l-2 border-[#a855f7] pl-4"><p className="section-label text-black/35">Question</p><p className="mt-2 leading-relaxed text-black/66">{item.question}</p></div>
                <div className="border-l-2 border-black/15 pl-4"><p className="section-label text-black/35">Common mistake</p><p className="mt-2 leading-relaxed text-black/66">{item.mistake}</p></div>
              </div>
            </details>
          ))}
        </div>
        {compact ? <Link href="/about#framework" className="button-dark mt-10">See how all seven parts work together <ArrowRight size={16} aria-hidden="true" /></Link> : <Link href="/tools/digital-presence-score" className="button-dark mt-10">Measure the seven parts <ArrowRight size={16} aria-hidden="true" /></Link>}
      </div>
    </section>
  );
}
