import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import CallToAction from "@/components/CallToAction";
import type { InsightArticle } from "@/lib/insightContent";

export default function ArticlePage({ article }: { article: InsightArticle }) {
  return (
    <main className="bg-[#080808] text-white"><PageHeader />
      <article><header className="page-hero"><div className="site-container relative max-w-[1100px]"><Link href="/insights" className="text-link text-white/50"><ArrowLeft size={14} /> All insights</Link><p className="section-label mt-12 text-[#bd84ff]">{article.category} · {article.readTime}</p><h1 className="editorial-title mt-8 max-w-[12ch]">{article.title}</h1><p className="body-large mt-10 max-w-3xl text-white/55">{article.standfirst}</p></div></header>
        <div className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[900px]">{article.sections.map((section, index) => <section key={section.heading} className={`${index ? "mt-20 border-t border-black/12 pt-16" : ""}`}><p className="section-label text-[#7134cb]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-5 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[0.98] tracking-[-0.055em]">{section.heading}</h2><div className="mt-8 grid gap-5 text-[1.05rem] leading-8 text-black/62">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>{section.points ? <ul className="mt-9 grid gap-3 border-l-2 border-[#7134cb] pl-6 text-sm font-semibold leading-relaxed">{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</section>)}</div></div>
      </article>
      <CallToAction eyebrow="Put the idea to work" title="Diagnosis makes the next step clearer." body="Use the recommended free tool to locate the gap in your own presence and connect it to the wider system." href={article.tool.href} label={article.tool.label} />
      <section className="bg-[#f1eee8] px-6 pb-20 text-[#111] md:px-10 md:pb-28"><div className="mx-auto max-w-[900px]"><Link href="/insights" className="text-link">Read more insights <ArrowRight size={14} /></Link></div></section><PageFooter /></main>
  );
}
