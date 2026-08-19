import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import ScoreAssessment from "@/components/ScoreAssessment";
import DictionFramework from "@/components/DictionFramework";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = { title: "Digital Presence Score", description: "Discover your directional Digital Presence Score across the seven parts of the D.I.C.T.I.O.N. framework." };

export default function DigitalPresenceScorePage() {
  return <main className="bg-[#080808] text-white"><PageHeader /><PageIntro eyebrow="Free digital presence diagnostic" title="How well does your expertise translate online?" description="Answer fourteen practical questions across positioning, audience, content, trust, platforms, opportunity and relationships. See your directional score immediately—before registration." primary={{ label: "Discover my score", href: "#assessment" }} secondary={{ label: "Why this framework", href: "/about#framework" }} /><section id="assessment" className="section-pad px-6 md:px-10"><div className="mx-auto max-w-[1120px]"><div className="mb-10 grid gap-6 lg:grid-cols-2 lg:items-end"><div><p className="section-label text-[#bd84ff]">Fourteen questions · Seven dimensions</p><h2 className="editorial-heading mt-7">Answer from what is true today.</h2></div><p className="text-sm leading-relaxed text-white/44">This is a directional self-assessment, not a scientific or comparative benchmark. Its purpose is to help you choose a useful next step.</p></div><ScoreAssessment /></div></section><DictionFramework compact /><CallToAction title="Bring your result into the KNOWN masterclass." body="Use the full framework to understand your weakest dimension and choose a clear build order for the next 90 days." /><PageFooter /></main>;
}
