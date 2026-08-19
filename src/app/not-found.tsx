import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export default function NotFound() {
  return <main className="min-h-screen bg-[#080808] text-white"><PageHeader /><section className="page-hero"><div className="site-container relative"><p className="section-label text-[#bd84ff]">404 · Page not found</p><h1 className="editorial-title mt-8">This path does not lead anywhere yet.</h1><p className="body-large mt-8 max-w-2xl text-white/50">Return to Diction or use a free diagnostic to find the next useful step for your digital presence.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/" className="button-light"><ArrowLeft size={16} /> Return home</Link><Link href="/tools" className="button-ghost">Explore free tools <ArrowRight size={16} /></Link></div></div></section><PageFooter /></main>;
}
