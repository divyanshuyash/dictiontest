import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
import { tools } from "@/lib/siteContent";

export const metadata: Metadata = { title: "Free Digital Presence Tools", description: "Diagnose the gaps between your expertise, recognition, trust and opportunity with Diction's free tools." };

export default function ToolsPage() {
  return (
    <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="The Diction diagnostic suite" title="Know what to fix before you build more." description="Short, practical tools for founders and experts who want a clearer view of the gap between credible work and a recognisable digital presence." primary={{ label: "Start with the full score", href: "/tools/digital-presence-score" }} secondary={{ label: "Explore the framework", href: "/about#framework" }} />
      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[1240px]"><div className="grid gap-7 border-b border-black/12 pb-10 lg:grid-cols-2 lg:items-end"><h2 className="editorial-heading">One useful answer at a time.</h2><p className="body-large max-w-xl text-black/52 lg:justify-self-end">Every result appears before registration, includes a practical quick win and shows how the gap connects to the wider system.</p></div><div className="mt-10 grid gap-4 lg:grid-cols-2">{tools.map((tool, index) => <Link key={tool.slug} href={`/tools/${tool.slug}`} className={`group flex min-h-72 flex-col justify-between rounded-[1.8rem] border p-7 transition-transform hover:-translate-y-1 md:p-9 ${index === 0 ? "border-[#7b3bd1] bg-[#111] text-white lg:col-span-2" : "border-black/12 bg-[#f8f5ef]"}`}><div><div className="flex items-center justify-between gap-4"><p className={`section-label ${index === 0 ? "text-[#bd84ff]" : "text-[#7134cb]"}`}>{tool.eyebrow}</p><span className={`flex items-center gap-1.5 text-[10px] uppercase tracking-[0.1em] ${index === 0 ? "text-white/35" : "text-black/35"}`}><Clock3 size={12} /> {tool.time}</span></div><h3 className={`mt-8 max-w-2xl text-3xl font-semibold tracking-[-0.05em] ${index === 0 ? "md:text-5xl" : "md:text-4xl"}`}>{tool.title}</h3><p className={`mt-4 max-w-2xl text-sm leading-relaxed ${index === 0 ? "text-white/48" : "text-black/50"}`}>{tool.description}</p></div><span className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]">{tool.cta} <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
      <CallToAction eyebrow="Learn before you decide" title="A score names the gap. KNOWN shows the system." body="Join the free live masterclass to connect your diagnosis to a focused, practical 90-day roadmap." /><PageFooter /></main>
  );
}
