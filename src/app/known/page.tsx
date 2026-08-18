import Link from "next/link";
import { ArrowRight, Check, Clock3, Download, Users } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import RegistrationForm from "@/components/RegistrationForm";
import Reveal from "@/components/Reveal";

const modules = [
  ["00–08", "Opening and promise", "Name the visibility-to-recognition gap and set a teaching-first tone."],
  ["08–20", "Why capable people remain unknown", "Break the myths of posting frequency, follower counts and isolated design."],
  ["20–48", "The D.I.C.T.I.O.N. framework", "Learn all seven components with practical founder and expert examples."],
  ["48–62", "Digital presence diagnosis", "Locate your current stage and the biggest leak in your system."],
  ["62–72", "Your 90-day roadmap", "Sequence foundation, authority and opportunity in the right build order."],
  ["72–90", "Proof and implementation paths", "See what you can build independently and where expert support creates leverage."],
];

const outcomes = [
  "Understand why visibility does not automatically create recognition or trust.",
  "Identify the seven components of a complete Digital Authority Ecosystem.",
  "Recognise why content, branding and websites fail when they work separately.",
  "Determine the correct first priority for your current stage.",
  "Build a simple and practical 90-day digital presence roadmap.",
  "Know what you can implement yourself and where expert execution adds leverage.",
];

export default function KnownPage() {
  return (
    <main className="bg-[#080808] text-white">
      <PageHeader />
      <section className="known-grid relative overflow-hidden px-6 pb-24 pt-20 md:px-10 md:pb-36 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(168,85,247,0.24),transparent_34%)]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.16fr_0.84fr] lg:items-end">
          <Reveal><p className="section-label text-[#bd84ff]">Free live masterclass by Diction</p><p className="mt-10 text-sm font-bold uppercase tracking-[0.28em] text-white/48">KNOWN</p><h1 className="display-heading mt-4 max-w-5xl text-[clamp(4rem,8vw,8.4rem)]">Build a digital presence that makes your expertise <span className="font-serif font-normal italic text-[#b66cff]">known.</span></h1></Reveal>
          <Reveal delay={0.1} className="pb-2"><p className="text-lg leading-relaxed text-white/58">Learn the seven-part system founders and experts can use to become clearly positioned, consistently recognised and trusted—without chasing every platform or producing empty content.</p><div className="mt-8 flex flex-wrap gap-3"><span className="pill"><Clock3 size={13} /> 75–90 minutes</span><span className="pill"><Users size={13} /> Live and practical</span><span className="pill"><Download size={13} /> Toolkit included</span></div><a href="#register" className="button-light mt-9">Reserve my free seat <ArrowRight size={17} /></a></Reveal>
        </div>
      </section>

      <section className="bg-[#f1eee8] px-6 py-24 text-[#111] md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal><p className="section-label text-[#7134cb]">What you will leave with</p><h2 className="display-heading mt-8 text-[clamp(3.2rem,6vw,6rem)]">A system—not another list of content tips.</h2></Reveal>
          <div className="grid gap-px bg-black/12 sm:grid-cols-2">{outcomes.map((outcome, index) => <Reveal key={outcome} delay={index * 0.04} className="bg-[#f8f5ef] p-7 md:p-8"><span className="text-xs font-bold text-[#7134cb]">0{index + 1}</span><p className="mt-10 font-semibold leading-snug">{outcome}</p></Reveal>)}</div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1200px]"><Reveal className="text-center"><p className="section-label text-[#ad72ff]">The run of show</p><h2 className="display-heading mt-7 text-[clamp(3.2rem,6vw,6rem)]">Ninety minutes from visible to recognisable.</h2></Reveal><div className="mt-16 border-t border-white/12">{modules.map(([time, title, description], index) => <Reveal key={title} delay={index * 0.04} className="grid gap-4 border-b border-white/12 py-7 md:grid-cols-[110px_0.8fr_1.2fr] md:items-center"><span className="text-xs font-bold text-[#ad72ff]">{time} min</span><h3 className="text-xl font-semibold tracking-[-0.03em]">{title}</h3><p className="text-sm leading-relaxed text-white/42">{description}</p></Reveal>)}</div></div>
      </section>

      <section className="bg-[#a855f7] px-6 py-24 md:px-10 md:py-32">
        <Reveal className="mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:items-center"><div><p className="section-label text-white/65">Included with your seat</p><h2 className="display-heading mt-7 text-[clamp(3.2rem,6vw,6.2rem)]">The Diction Digital Presence Toolkit.</h2><p className="mt-7 max-w-lg text-white/68">Practical assets that help you translate the class into action after the session.</p></div><ul className="grid gap-3 text-sm text-white/85 sm:grid-cols-2">{["90-day build-order worksheet", "Digital presence action checklist", "Authority content planner", "Founder story builder", "Homepage message builder", "Platform integration checklist"].map(item => <li key={item} className="flex items-start gap-3 border border-white/18 p-4"><Check size={16} className="mt-0.5 shrink-0" />{item}</li>)}</ul></Reveal>
      </section>

      <section id="register" className="px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal><p className="section-label text-[#ad72ff]">Reserve your place</p><h2 className="display-heading mt-7 text-[clamp(3.2rem,5.7vw,5.8rem)]">Your expertise is ready. Build the system around it.</h2><p className="mt-7 max-w-md text-base leading-relaxed text-white/48">Session dates are being finalised. Register now to receive the next live date, your seat confirmation and toolkit access.</p><p className="mt-8 text-xs leading-relaxed text-white/30">KNOWN is a practical educational masterclass. Diction may explain optional implementation support at the end. There is no obligation to apply or purchase.</p></Reveal>
          <Reveal delay={0.1} className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 shadow-[0_30px_100px_rgba(56,13,97,0.28)] md:p-10"><RegistrationForm /></Reveal>
        </div>
      </section>
      <section className="bg-[#f1eee8] px-6 py-20 text-center text-[#111] md:px-10 md:py-28"><Reveal className="mx-auto max-w-4xl"><p className="section-label text-[#7134cb]">Learn first. Decide with clarity.</p><h2 className="display-heading mt-7 text-[clamp(3rem,6vw,5.8rem)]">Your score shows the gap. KNOWN shows what to build next.</h2><Link href="/#score" className="button-dark mt-9">See the Digital Presence Score <ArrowRight size={16} /></Link></Reveal></section>
      <PageFooter />
    </main>
  );
}
