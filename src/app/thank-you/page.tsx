import Link from "next/link";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import PageFooter from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";

const whatsappMessage = encodeURIComponent("Hi Diction, I have registered for KNOWN. Please send my class reminders here.");

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <PageHeader />
      <section className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(168,85,247,0.24),transparent_38%)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl text-center"><div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-purple-300/30 bg-purple-400/10 text-purple-200"><Check size={28} /></div><p className="section-label mt-8 text-[#bd84ff]">Your place is reserved</p><h1 className="display-heading mt-7 text-[clamp(3.5rem,8vw,7.5rem)]">You are on the path to being known.</h1><p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/52 md:text-lg">Watch your inbox for the next live session date, confirmation details and toolkit access. If you want WhatsApp reminders, start the conversation below.</p><div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row"><a href={`https://wa.me/?text=${whatsappMessage}`} className="button-light"><MessageCircle size={17} /> Start WhatsApp reminders</a><Link href="/" className="button-ghost"><ArrowLeft size={16} /> Return to Diction</Link></div><p className="mt-7 text-xs text-white/28">WhatsApp opens a user-initiated conversation. You choose whether to send the message.</p></div>
      </section>
      <PageFooter />
    </main>
  );
}
