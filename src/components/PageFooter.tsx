import Image from "next/image";
import Link from "next/link";

export default function PageFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#070707] px-6 py-12 text-white md:px-10">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <Image src="/diction-wordmark.png" alt="Diction" width={2155} height={730} className="h-auto w-40 md:w-48" sizes="(min-width: 768px) 192px, 160px" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/45">A connected digital presence for founders and experts whose work deserves to be known.</p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.17em] text-white/45">
          <Link href="/">Home</Link><Link href="/known">KNOWN masterclass</Link><span>Privacy</span><span>Terms</span>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-[1320px] flex-col gap-2 border-t border-white/8 pt-5 text-[10px] uppercase tracking-[0.14em] text-white/28 sm:flex-row sm:justify-between">
        <span>© 2026 Diction</span><span>For founders who deserve to be known</span>
      </div>
    </footer>
  );
}
