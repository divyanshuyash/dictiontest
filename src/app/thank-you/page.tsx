import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import RegistrationConfirmation from "@/components/RegistrationConfirmation";

export const metadata: Metadata = { title: "Registration Confirmed", description: "Your KNOWN masterclass registration has been received." };

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white"><PageHeader /><section className="page-hero"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.24),transparent_38%)]" aria-hidden="true" /><div className="site-container relative"><RegistrationConfirmation whatsappNumber={process.env.NEXT_PUBLIC_DICTION_WHATSAPP_NUMBER} /><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/insights" className="button-light">Read Diction insights <ArrowRight size={16} /></Link><Link href="/" className="button-ghost"><ArrowLeft size={16} /> Return to Diction</Link></div></div></section><PageFooter /></main>
  );
}
