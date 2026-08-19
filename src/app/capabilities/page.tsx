import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "Capabilities", description: "See what Diction can help implement after the strategy is clear—without packages, menus or disconnected deliverables." };

const capabilities = [
  { number: "01", title: "Positioning & narrative", body: "Clarify the expertise association, audience, problem, point of view and language every platform should reinforce.", outputs: ["Positioning system", "Narrative architecture", "Homepage message", "Founder story"] },
  { number: "02", title: "Authority content", body: "Translate expertise into themes, evidence, stories and repeatable formats that make thinking visible.", outputs: ["Editorial strategy", "Authority themes", "Content systems", "Thought-leadership formats"] },
  { number: "03", title: "Trust experience", body: "Design the owned experience around clarity, proof, human credibility and relevant next actions.", outputs: ["Website strategy", "Information architecture", "UX direction", "Conversion journeys"] },
  { number: "04", title: "Platform integration", body: "Connect website, profiles, content, lead capture and follow-up so every part contributes to one recognisable identity.", outputs: ["Platform roles", "Profile alignment", "Lead journeys", "Nurture architecture"] },
];

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="Capabilities" title="Implementation after the strategy is clear." description="Diction can help shape and build the parts of a digital authority ecosystem. The work is scoped around the gap and desired opportunity—not a menu of disconnected packages." primary={{ label: "Learn the system first", href: "/known" }} secondary={{ label: "About Diction", href: "/about" }} />
      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[1220px]"><div className="border-t border-black/12">{capabilities.map((capability) => <article key={capability.title} className="grid gap-8 border-b border-black/12 py-10 lg:grid-cols-[80px_0.8fr_0.9fr_0.8fr] lg:items-start"><span className="text-sm font-bold text-[#7134cb]">{capability.number}</span><h2 className="text-3xl font-semibold tracking-[-0.05em]">{capability.title}</h2><p className="text-sm leading-relaxed text-black/52">{capability.body}</p><ul className="grid gap-2 text-xs font-bold uppercase tracking-[0.08em] text-black/48">{capability.outputs.map((output) => <li key={output}>{output}</li>)}</ul></article>)}</div></div></section>
      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="section-label text-[#bd84ff]">How an engagement begins</p><h2 className="editorial-heading mt-7">Diagnose. Decide. Then design the right scope.</h2></div><ol className="grid gap-px bg-white/12">{[["01", "Diagnose", "Locate the gap currently limiting the wider system."], ["02", "Prioritise", "Choose the smallest focused sequence capable of creating meaningful change."], ["03", "Implement", "Build the agreed parts with the founder or expert actively involved."], ["04", "Integrate", "Make the new work reinforce every important platform and next step."]].map(([number, title, body]) => <li key={title} className="bg-[#0b0b0b] p-7"><span className="text-xs font-bold text-[#bd84ff]">{number}</span><h3 className="mt-5 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-white/44">{body}</p></li>)}</ol></div><div className="mx-auto mt-12 max-w-[1160px] border-t border-white/10 pt-8"><p className="max-w-3xl text-sm leading-relaxed text-white/35">Diction does not publish fixed packages or promise predetermined outcomes. Scope, timing and fit depend on the diagnosis, the available evidence and the capacity to implement well.</p><Link href="/success-stories" className="text-link mt-6">See the process in context <ArrowRight size={14} /></Link></div></section>
      <CallToAction title="Understand your priority before discussing implementation." body="KNOWN gives you the framework and 90-day build order to make a better decision about what to do yourself and where support creates leverage." /><PageFooter /></main>
  );
}
