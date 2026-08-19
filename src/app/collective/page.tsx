import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "The Diction Collective", description: "An editorial view of the Diction Founder Kit and the culture behind work built to last." };

const kit = [
  ["The field notebook", "A place for ideas worth returning to—not another branded giveaway."],
  ["The thinking pen", "A simple daily object chosen to make writing and decision-making feel deliberate."],
  ["The founder cap", "A quiet marker of the work behind the work, made for use rather than display."],
  ["The welcome letter", "A statement of standards, participation and the kind of presence we are building together."],
  ["The identity card", "A small reminder that being known is an association built through repeated choices."],
  ["The desk object", "A tactile prompt to protect depth, clarity and time for original thinking."],
];

export default function CollectivePage() {
  return (
    <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="The Diction Collective" title="Some things are made to mark belonging." description="The Diction Founder Kit is an editorial expression of client culture: thoughtful objects for people building work, ideas and reputations meant to last. It is not a public merchandise store." primary={{ label: "Understand Diction", href: "/about" }} secondary={{ label: "Join the masterclass", href: "/known" }} />
      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/10"><Image src="/stock-founder-kit.jpg" alt="Minimal black notebook and pen on a clean desk" fill className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" /></div><div><p className="section-label text-[#7134cb]">The founder kit</p><h2 className="editorial-heading mt-7">Useful. Quiet. Deliberate.</h2><p className="body-large mt-7 text-black/52">Objects should support the practice behind a recognisable presence: capturing original ideas, making thoughtful decisions and showing up with consistency.</p><p className="mt-6 text-[10px] uppercase tracking-[0.1em] text-black/32">Stock photography: Vie Studio / Pexels</p></div></div></section>
      <section className="section-pad px-6 md:px-10"><div className="mx-auto max-w-[1180px]"><div className="grid gap-px bg-white/12 sm:grid-cols-2 lg:grid-cols-3">{kit.map(([title, body], index) => <article key={title} className="min-h-64 bg-[#0b0b0b] p-7"><span className="text-xs font-bold text-[#bd84ff]">0{index + 1}</span><h3 className="mt-12 text-2xl font-semibold tracking-[-0.04em]">{title}</h3><p className="mt-4 text-sm leading-relaxed text-white/44">{body}</p></article>)}</div><p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed text-white/36">Contents, formats and availability can evolve. No item shown here is offered for public sale, and client inclusion should only be described when confirmed for a specific engagement.</p></div></section>
      <CallToAction eyebrow="The work comes first" title="Belonging starts with a shared standard." body="Begin with KNOWN: a free practical masterclass on the system that turns credible expertise into recognition and trust." /><PageFooter /></main>
  );
}
