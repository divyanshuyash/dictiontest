import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PageIntro from "@/components/PageIntro";
import CallToAction from "@/components/CallToAction";
import MiniAudit from "@/components/MiniAudit";
import type { AuditTool } from "@/lib/toolContent";

export function toolMetadata(tool: AuditTool): Metadata {
  return { title: tool.title, description: tool.description };
}

export default function ToolLandingPage({ tool }: { tool: AuditTool }) {
  return (
    <main className="bg-[#080808] text-white">
      <PageHeader />
      <PageIntro eyebrow={tool.eyebrow} title={tool.title} description={tool.description} primary={{ label: "Start the free audit", href: "#audit" }} secondary={{ label: "Explore all tools", href: "/tools" }} />
      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div><p className="section-label text-[#7134cb]">What this examines</p><h2 className="editorial-heading mt-7">{tool.promise}</h2></div>
          <div className="grid gap-px bg-black/12 sm:grid-cols-2">{tool.checks.map((check) => <div key={check} className="flex items-start gap-3 bg-[#f8f5ef] p-6 text-sm font-semibold"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#7134cb]" />{check}</div>)}</div>
        </div>
      </section>
      <section id="audit" className="section-pad px-6 md:px-10"><div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[0.72fr_1.28fr]"><div><p className="section-label text-[#bd84ff]">The audit</p><h2 className="editorial-heading mt-7">Answer from evidence, not intention.</h2><p className="mt-6 text-sm leading-relaxed text-white/45">Choose the response that best describes what a new visitor can experience today. Your result appears immediately and does not require registration.</p></div><MiniAudit title={tool.title} checks={tool.checks} gap={tool.gap} /></div></section>
      <section className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto grid max-w-[1100px] gap-10 lg:grid-cols-2"><div><p className="section-label text-[#7134cb]">The larger gap</p><h2 className="editorial-heading mt-7">{tool.resultTitle}</h2></div><p className="body-large text-black/54">{tool.resultCopy}</p></div></section>
      <CallToAction title="Turn the diagnosis into a practical build order." body="The free KNOWN masterclass connects your result to the full seven-part system and a focused 90-day roadmap." />
      <PageFooter />
    </main>
  );
}
