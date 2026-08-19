import type { Metadata } from "next";
import { Clock3, Download, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import RegistrationForm from "@/components/RegistrationForm";

export const metadata: Metadata = { title: "Register for KNOWN", description: "Reserve a free seat for KNOWN: The Digital Presence Masterclass by Diction." };

type RegisterPageProps = { searchParams: Promise<{ gap?: string; source?: string; score?: string }> };

export default async function RegisterPage({ searchParams }: RegisterPageProps) {
  const params = await searchParams;
  return (
    <main className="min-h-screen bg-[#080808] text-white"><PageHeader /><section className="page-hero"><div className="site-container relative grid gap-14 lg:grid-cols-[0.82fr_1.18fr]"><div><p className="section-label text-[#bd84ff]">Free live masterclass by Diction</p><h1 className="editorial-title mt-8">Reserve your place for KNOWN.</h1><p className="body-large mt-8 max-w-xl text-white/52">Build a clear, trusted and opportunity-generating digital presence using the seven-part D.I.C.T.I.O.N. framework.</p><div className="mt-8 flex flex-wrap gap-3"><span className="pill"><Clock3 size={13} /> 75–90 minutes</span><span className="pill"><Users size={13} /> Live and practical</span><span className="pill"><Download size={13} /> Toolkit included</span></div><p className="mt-8 max-w-lg text-xs leading-relaxed text-white/30">Session dates are being finalised. Your confirmation will include the next available schedule. Diction may explain optional implementation support at the end; there is no obligation to apply or purchase.</p></div><div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 shadow-[0_30px_100px_rgba(56,13,97,0.28)] md:p-10"><RegistrationForm defaultGap={params.gap ?? ""} source={params.source ?? "Registration page"} score={params.score} /></div></div></section><PageFooter /></main>
  );
}
