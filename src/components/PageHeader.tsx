import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/86 px-5 backdrop-blur-xl md:px-10">
      <div className="mx-auto flex h-20 max-w-[1320px] items-center justify-between">
        <Link href="/" className="w-32 sm:w-36 md:w-40" aria-label="Diction home"><Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-full" loading="eager" sizes="(min-width: 768px) 160px, (min-width: 640px) 144px, 128px" /></Link>
        <nav className="hidden items-center gap-7 text-[10px] uppercase tracking-[0.16em] text-white/48 md:flex" aria-label="Primary navigation">
          <Link href="/#score">Score</Link><Link href="/#framework">Framework</Link><Link href="/known">KNOWN</Link><Link href="/#about">About</Link>
        </nav>
        <Link href="/known#register" className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/18 px-4 text-[9px] font-bold uppercase tracking-[0.13em] transition-colors hover:bg-white hover:text-black md:text-[10px]">Reserve my seat <ArrowRight size={13} aria-hidden="true" /></Link>
      </div>
    </header>
  );
}
