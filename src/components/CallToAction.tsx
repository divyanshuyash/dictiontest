import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ eyebrow = "Your next step", title, body, href = "/register", label = "Reserve my free seat" }: { eyebrow?: string; title: string; body: string; href?: string; label?: string }) {
  return (
    <section className="bg-[#a855f7] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="section-label text-white/62">{eyebrow}</p><h2 className="editorial-heading mt-7">{title}</h2></div><div><p className="max-w-xl text-base leading-relaxed text-white/72">{body}</p><Link href={href} className="button-dark mt-8">{label} <ArrowRight size={16} aria-hidden="true" /></Link></div></div>
    </section>
  );
}
