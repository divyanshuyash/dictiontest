import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  image?: { src: string; alt: string; credit?: string };
};

export default function PageIntro({ eyebrow, title, description, primary, secondary, image }: PageIntroProps) {
  return (
    <section className="page-hero bg-[#080808] text-white">
      <div className={`site-container relative grid gap-14 ${image ? "lg:grid-cols-[1.05fr_0.95fr] lg:items-end" : "lg:grid-cols-[1.25fr_0.75fr] lg:items-end"}`}>
        <div><p className="section-label text-[#bd84ff]">{eyebrow}</p><h1 className="editorial-title mt-8">{title}</h1></div>
        {image ? (
          <div><div className="relative aspect-[4/4.35] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"><Image src={image.src} alt={image.alt} fill fetchPriority="high" className="object-cover grayscale-[12%]" sizes="(min-width: 1024px) 42vw, 100vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/36 via-transparent to-transparent" aria-hidden="true" /></div>{image.credit ? <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-white/25">{image.credit}</p> : null}</div>
        ) : (
          <div><p className="body-large max-w-xl text-white/55">{description}</p>{(primary || secondary) ? <div className="mt-8 flex flex-col gap-3 sm:flex-row">{primary ? <Link href={primary.href} className="button-light">{primary.label} <ArrowRight size={16} aria-hidden="true" /></Link> : null}{secondary ? <Link href={secondary.href} className="button-ghost">{secondary.label}</Link> : null}</div> : null}</div>
        )}
      </div>
      {image ? <div className="site-container relative mt-12 grid gap-7 border-t border-white/10 pt-8 lg:grid-cols-[1.05fr_0.95fr]"><p className="body-large max-w-2xl text-white/55">{description}</p>{(primary || secondary) ? <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">{primary ? <Link href={primary.href} className="button-light">{primary.label} <ArrowRight size={16} aria-hidden="true" /></Link> : null}{secondary ? <Link href={secondary.href} className="button-ghost">{secondary.label}</Link> : null}</div> : null}</div> : null}
    </section>
  );
}
