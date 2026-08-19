import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import DictionFramework from "@/components/DictionFramework";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "About Diction", description: "The beliefs, standards and seven-part framework behind Diction's approach to digital presence." };

const beliefs = [
  ["Expertise should be legible", "Credible work should not become invisible because its digital expression is unclear, fragmented or generic."],
  ["Recognition is designed", "Being known is not a fame metric. It is the result of a consistent association between a person, an idea and useful proof."],
  ["Depth creates premium", "Clear thinking, thoughtful evidence and a coherent experience matter more than decoration or volume."],
  ["Systems outlast tactics", "Platforms change. A strong position, recognisable point of view and trusted relationship system remain useful."],
];

export default function AboutPage() {
  return (
    <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="About Diction" title="For founders who deserve to be known." description="Diction helps credible founders and experts turn what they know into a clear, trusted and opportunity-generating digital presence—without performing for every platform." primary={{ label: "Explore the framework", href: "#framework" }} secondary={{ label: "See capabilities", href: "/capabilities" }} image={{ src: "/stock-founder-portrait.jpg", alt: "Founder in a calm, naturally lit workspace", credit: "Stock photography: Daniel & Hannah Snipes / Pexels" }} />
      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[1200px]"><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="section-label text-[#7134cb]">The manifesto</p><h2 className="editorial-heading mt-7">Good work should not be difficult to recognise.</h2></div><div className="grid gap-px bg-black/12 sm:grid-cols-2">{beliefs.map(([title, body], index) => <article key={title} className="bg-[#f8f5ef] p-7"><span className="text-xs font-bold text-[#7134cb]">0{index + 1}</span><h3 className="mt-9 text-xl font-semibold tracking-[-0.035em]">{title}</h3><p className="mt-3 text-sm leading-relaxed text-black/52">{body}</p></article>)}</div></div></div></section>
      <div id="framework"><DictionFramework /></div>
      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2"><div><p className="section-label text-[#bd84ff]">Selective by design</p><h2 className="editorial-heading mt-7">The work needs participation, not passive approval.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-white/48">Diction is built for people with credible expertise who want long-term authority, are willing to participate in the thinking and value a connected system over isolated deliverables.</p></div><div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-7 md:p-10"><p className="section-label text-white/28">Strong fit signals</p><ul className="mt-7 grid gap-4">{["There is real expertise or a body of work to build from.", "The goal is durable recognition, not a short burst of attention.", "The founder or expert is available for discovery and decisions.", "The desired opportunity is specific enough to design toward.", "There is capacity to implement the work with care."].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/62"><Check size={16} className="mt-0.5 shrink-0 text-[#bd84ff]" />{item}</li>)}</ul><Link href="/capabilities" className="text-link mt-9">How Diction can help <ArrowRight size={14} /></Link></div></div></section>
      <CallToAction title="Start with clarity, not a sales conversation." body="The free KNOWN masterclass teaches the full system so you can decide what to build next with context." /><PageFooter /></main>
  );
}
