import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
import { insights } from "@/lib/siteContent";

export const metadata: Metadata = { title: "Insights", description: "Practical thinking on positioning, authority, trust, websites and AI-era digital presence." };

export default function InsightsPage() {
  return <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="Diction insights" title="Clear thinking for a recognisable presence." description="Practical essays for founders and experts who want to build authority, trust and opportunity without chasing every platform or trend." primary={{ label: "Read the latest insight", href: `/insights/${insights[0].slug}` }} secondary={{ label: "Use a free tool", href: "/tools" }} /><section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[1220px]"><div className="grid gap-px bg-black/12">{insights.map((insight, index) => <Link key={insight.slug} href={`/insights/${insight.slug}`} className="group grid gap-7 bg-[#f8f5ef] p-7 transition-colors hover:bg-white md:p-10 lg:grid-cols-[80px_0.8fr_1.4fr_0.8fr_48px] lg:items-center"><span className="text-xs font-bold text-[#7134cb]">0{index + 1}</span><div><p className="section-label text-black/35">{insight.category}</p><p className="mt-2 text-xs text-black/32">{insight.readTime}</p></div><h2 className="text-3xl font-semibold leading-none tracking-[-0.05em]">{insight.title}</h2><p className="text-sm leading-relaxed text-black/46">{insight.excerpt}</p><ArrowRight size={20} className="text-[#7134cb] transition-transform group-hover:translate-x-1" /></Link>)}</div></div></section><CallToAction title="Reading creates context. Diagnosis creates priority." body="Use a free Diction tool to understand which part of your digital presence deserves attention first." href="/tools" label="Explore free tools" /><PageFooter /></main>;
}
