import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const columns = [
  { title: "Explore", links: [["Free tools", "/tools"], ["Success stories", "/success-stories"], ["Insights", "/insights"], ["KNOWN masterclass", "/known"]] },
  { title: "Diction", links: [["About", "/about"], ["Capabilities", "/capabilities"], ["The Collective", "/collective"], ["Registration", "/register"]] },
] as const;

export default function PageFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-6 py-14 text-white md:px-10 md:py-18">
      <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-40 md:w-48" sizes="(min-width: 768px) 192px, 160px" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/44">A connected digital presence for founders and experts whose work deserves to be known.</p>
          <Link href="/register" className="text-link mt-8 text-white">Reserve a free seat <ArrowUpRight size={14} aria-hidden="true" /></Link>
        </div>
        {columns.map((column) => <div key={column.title}><p className="section-label text-white/26">{column.title}</p><div className="mt-5 grid gap-3 text-sm text-white/52">{column.links.map(([label, href]) => <Link key={href} href={href} className="w-fit transition-colors hover:text-white">{label}</Link>)}</div></div>)}
      </div>
      <div className="mx-auto mt-14 flex max-w-[1320px] flex-col gap-4 border-t border-white/8 pt-6 text-[10px] uppercase tracking-[0.14em] text-white/28 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Diction</span><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div><span>For founders who deserve to be known</span>
      </div>
    </footer>
  );
}
