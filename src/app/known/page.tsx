import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, Download, Users, X } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import RegistrationForm from "@/components/RegistrationForm";
import DictionFramework from "@/components/DictionFramework";

export const metadata: Metadata = { title: "KNOWN: The Free Digital Presence Masterclass", description: "Build a digital presence that turns credible expertise into clarity, recognition, trust and opportunity." };

const modules = [
  ["00–08", "Opening and promise", "Name the visibility-to-recognition gap and set a teaching-first tone."],
  ["08–20", "Why capable people remain unknown", "Break the myths of posting frequency, follower counts and isolated design."],
  ["20–48", "The D.I.C.T.I.O.N. framework", "Learn all seven connected components with practical examples."],
  ["48–62", "Digital presence diagnosis", "Locate your current stage and the biggest leak in the system."],
  ["62–72", "Your 90-day roadmap", "Sequence foundation, authority and opportunity in the right order."],
  ["72–80", "Proof and cases", "See how the process changes clarity, recognition and trust."],
  ["80–90", "Implementation pathways", "Choose what to build yourself and where expert support creates leverage."],
];

const outcomes = [
  "Understand why visibility does not automatically create recognition or trust.",
  "Identify the seven components of a complete Digital Authority Ecosystem.",
  "Recognise why content, branding and websites fail when they work separately.",
  "Determine the correct first priority for your current stage.",
  "Build a simple and practical 90-day digital presence roadmap.",
  "Know what you can implement yourself and where expert execution adds leverage.",
];

const faqs = [
  ["Is KNOWN really free?", "Yes. Registration is free. Diction may explain optional implementation support at the end, but there is no obligation to apply or purchase."],
  ["Is this a practical class or a sales webinar?", "It is a teaching-led masterclass built around the D.I.C.T.I.O.N. framework, a diagnosis and a 90-day roadmap. Any implementation explanation is clearly separated at the end."],
  ["When is the next session?", "Dates are being finalised. Register to receive the next confirmed live schedule rather than a placeholder date."],
  ["Will there be a recording?", "Recording access is not promised. Any replay or follow-up access will be stated in the registration confirmation for your session."],
  ["Do I need a large audience?", "No. The class is designed around clarity, recognition and trust, not follower thresholds."],
  ["Is this for a company brand or a personal brand?", "It is most useful when a founder, coach, consultant or corporate expert is a meaningful source of expertise, trust or opportunity."],
];

export default function KnownPage() {
  return (
    <main className="bg-[#080808] text-white"><PageHeader />
      <section className="known-grid relative overflow-hidden px-6 pb-24 pt-20 md:px-10 md:pb-36 md:pt-28"><div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(168,85,247,0.24),transparent_34%)]" aria-hidden="true" /><div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.16fr_0.84fr] lg:items-end"><div><p className="section-label text-[#bd84ff]">Free live masterclass by Diction</p><p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-white/48">KNOWN</p><h1 className="display-heading mt-4 max-w-5xl text-[clamp(4rem,8vw,8.4rem)]">Build a digital presence that makes your expertise <span className="text-[#b66cff]">known.</span></h1></div><div className="pb-2"><p className="text-lg leading-relaxed text-white/58">Learn the seven-part system founders and experts can use to become clearly positioned, consistently recognised and trusted—without chasing every platform or producing empty content.</p><div className="mt-8 flex flex-wrap gap-3"><span className="pill"><Clock3 size={13} /> 75–90 minutes</span><span className="pill"><Users size={13} /> Live and practical</span><span className="pill"><Download size={13} /> Toolkit included</span></div><Link href="/register" className="button-light mt-9">Reserve my free seat <ArrowRight size={17} /></Link></div></div></section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto grid max-w-[1220px] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><p className="section-label text-[#7134cb]">The 2026 reality</p><h2 className="editorial-heading mt-7">Content became easier. Recognition did not.</h2><p className="body-large mt-7 text-black/52">AI can help anyone produce polished information. That makes original perspective, credible evidence and a connected trust experience more valuable—not less.</p></div><div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]"><Image src="/stock-masterclass-stage.jpg" alt="Speaker presenting ideas to a live audience" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent" /><p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.1em] text-white/65">Stock photography: Matheus Bertelli / Pexels</p></div></div></section>

      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.76fr_1.24fr]"><div><p className="section-label text-[#bd84ff]">What you will leave with</p><h2 className="editorial-heading mt-7">A system—not another list of content tips.</h2></div><div className="grid gap-px bg-white/12 sm:grid-cols-2">{outcomes.map((outcome, index) => <div key={outcome} className="bg-[#0b0b0b] p-7 md:p-8"><span className="text-xs font-bold text-[#bd84ff]">0{index + 1}</span><p className="mt-10 font-semibold leading-snug">{outcome}</p></div>)}</div></div></section>

      <DictionFramework compact />

      <section className="section-pad px-6 md:px-10"><div className="mx-auto max-w-[1200px]"><div className="text-center"><p className="section-label text-[#bd84ff]">The run of show</p><h2 className="editorial-heading mx-auto mt-7">Ninety minutes from visible to recognisable.</h2></div><div className="mt-16 border-t border-white/12">{modules.map(([time, title, description]) => <div key={title} className="grid gap-4 border-b border-white/12 py-7 md:grid-cols-[110px_0.8fr_1.2fr] md:items-center"><span className="text-xs font-bold text-[#bd84ff]">{time} min</span><h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="text-sm leading-relaxed text-white/42">{description}</p></div>)}</div></div></section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto grid max-w-[1180px] gap-5 lg:grid-cols-2"><div className="rounded-[1.8rem] border border-black/10 bg-white p-7 md:p-9"><p className="section-label text-[#7134cb]">KNOWN is for you if</p><ul className="mt-8 grid gap-4">{["Your real-world credibility is stronger than your digital recognition.", "Your content or website does not express the depth of your expertise.", "Your platforms feel disconnected or difficult to prioritise.", "You want durable authority rather than viral attention."].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed"><Check size={16} className="mt-0.5 shrink-0 text-[#7134cb]" />{item}</li>)}</ul></div><div className="rounded-[1.8rem] border border-black/10 bg-[#151515] p-7 text-white md:p-9"><p className="section-label text-white/40">It is not designed for</p><ul className="mt-8 grid gap-4">{["Shortcuts to fame or follower growth.", "Platform hacks without strategic foundations.", "Guaranteed leads, revenue or business outcomes.", "A done-for-you pitch disguised as education."].map((item) => <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/58"><X size={16} className="mt-0.5 shrink-0 text-white/35" />{item}</li>)}</ul></div></div></section>

      <section className="bg-[#a855f7] px-6 py-24 md:px-10 md:py-32"><div className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:items-center"><div><p className="section-label text-white/65">Included with your seat</p><h2 className="editorial-heading mt-7">The Diction Digital Presence Toolkit.</h2><p className="mt-7 max-w-lg text-white/68">Practical assets that help you translate the class into action after the session.</p></div><ul className="grid gap-3 text-sm text-white/85 sm:grid-cols-2">{["90-day build-order worksheet", "Digital presence action checklist", "Authority content planner", "Founder story builder", "Homepage message builder", "Platform integration checklist"].map((item) => <li key={item} className="flex items-start gap-3 border border-white/18 p-4"><Check size={16} className="mt-0.5 shrink-0" />{item}</li>)}</ul></div></section>

      <section className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="section-label text-[#bd84ff]">Your host</p><h2 className="editorial-heading mt-7">Taught by the Diction strategy team.</h2></div><div><p className="body-large text-white/52">The class is led from Diction's positioning and digital authority practice. A named host biography and verified credentials should be added only when the teaching team is confirmed.</p><Link href="/about" className="text-link mt-8">Read Diction's beliefs <ArrowRight size={14} /></Link></div></div></section>

      <section id="register" className="section-pad bg-[#0b0b0b] px-6 md:px-10"><div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.78fr_1.22fr]"><div><p className="section-label text-[#bd84ff]">Reserve your place</p><h2 className="editorial-heading mt-7">Your expertise is ready. Build the system around it.</h2><p className="mt-7 max-w-md text-base leading-relaxed text-white/48">Session dates are being finalised. Register now to receive the next live date, your seat confirmation and toolkit access.</p><p className="mt-8 text-xs leading-relaxed text-white/30">KNOWN is a practical educational masterclass. Diction may explain optional implementation support at the end. There is no obligation to apply or purchase.</p></div><div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 shadow-[0_30px_100px_rgba(56,13,97,0.28)] md:p-10"><RegistrationForm /></div></div></section>

      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[960px]"><p className="section-label text-center text-[#7134cb]">Frequently asked questions</p><h2 className="editorial-heading mx-auto mt-7 text-center">Know what to expect.</h2><div className="mt-14 border-t border-black/12">{faqs.map(([question, answer]) => <details key={question} className="group border-b border-black/12 py-6"><summary className="cursor-pointer list-none pr-8 text-lg font-semibold tracking-[-0.025em] [&::-webkit-details-marker]:hidden">{question}</summary><p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/52">{answer}</p></details>)}</div></div></section>

      <section className="px-6 py-20 text-center md:px-10 md:py-28"><div className="mx-auto max-w-4xl"><p className="section-label text-[#bd84ff]">Learn first. Decide with clarity.</p><h2 className="editorial-heading mx-auto mt-7">Your score shows the gap. KNOWN shows what to build next.</h2><Link href="/tools/digital-presence-score" className="button-light mt-9">See the Digital Presence Score <ArrowRight size={16} /></Link></div></section><PageFooter />
    </main>
  );
}
