import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { primaryNavigation } from "@/lib/siteContent";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/92 px-5 text-white backdrop-blur-xl md:px-10">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between gap-5">
        <Link href="/" className="w-32 shrink-0 sm:w-36 md:w-40" aria-label="Diction home">
          <Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-full" loading="eager" sizes="(min-width: 768px) 160px, (min-width: 640px) 144px, 128px" />
        </Link>

        <nav className="hidden items-center gap-6 text-[10px] font-bold uppercase tracking-[0.14em] text-white/52 lg:flex xl:gap-8" aria-label="Primary navigation">
          {primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-white">{item.label}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/register" className="hidden min-h-11 items-center gap-2 rounded-full border border-white/18 px-5 text-[10px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white hover:text-black sm:inline-flex">Reserve my seat <ArrowRight size={13} aria-hidden="true" /></Link>
          <details className="group relative lg:hidden">
            <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/18 bg-white/[0.03] [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Open navigation</span><ChevronDown size={17} aria-hidden="true" className="transition-transform group-open:rotate-180" />
            </summary>
            <nav aria-label="Mobile navigation" className="absolute right-0 mt-3 w-[min(19rem,calc(100vw-2rem))] rounded-3xl border border-white/12 bg-[#0b0b0b] p-3 shadow-2xl">
              {primaryNavigation.map((item) => <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white/58 transition-colors hover:bg-white/6 hover:text-white">{item.label}</Link>)}
              <Link href="/capabilities" className="block rounded-2xl px-4 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white/58 transition-colors hover:bg-white/6 hover:text-white">Capabilities</Link>
              <Link href="/known" className="mt-2 flex min-h-12 items-center justify-between rounded-full bg-white px-5 text-xs font-bold uppercase tracking-[0.12em] text-black">KNOWN masterclass <ArrowRight size={15} aria-hidden="true" /></Link>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
