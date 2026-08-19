import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

export const metadata: Metadata = { title: "Privacy", description: "Diction website privacy notice." };

const sections = [
  ["Information you provide", "When you register for a masterclass or complete a form, Diction may collect the details you submit, such as your name, email address, role, goals, selected session and communication preferences. A mobile number is only required when you choose WhatsApp communication."],
  ["Diagnostic results", "Free tool responses and scores are designed to provide a directional result. In the current website experience, a result may be passed to registration as context so the form can prefill the gap you selected. Avoid submitting confidential or sensitive information in free-text fields."],
  ["How information is used", "Information may be used to provide the requested registration, toolkit, essential session communication and any optional communication you explicitly choose. It may also be used to improve the website and understand which educational resources are useful."],
  ["Service providers", "Diction may use hosting, form, email, analytics, CRM or automation providers to operate the website and deliver requested communication. Those providers should only receive the information needed for their role and are subject to their own privacy and security terms."],
  ["Retention and choices", "Information should be kept only for as long as it is needed for the purpose described, legal obligations or legitimate business records. You may request access, correction or deletion through Diction's published contact channel, subject to applicable law."],
  ["Consent", "Optional marketing and WhatsApp consent must be affirmative and may be withdrawn. Essential registration or service messages are limited to the request you made."],
];

export default function PrivacyPage() {
  return <main className="bg-[#080808] text-white"><PageHeader /><header className="page-hero"><div className="site-container relative"><p className="section-label text-[#bd84ff]">Legal</p><h1 className="editorial-title mt-8">Privacy notice.</h1><p className="mt-8 text-sm text-white/35">Effective 20 August 2026</p></div></header><div className="section-pad bg-[#f1eee8] px-6 text-[#111] md:px-10"><div className="mx-auto max-w-[900px]"><p className="body-large text-black/58">This notice explains the information Diction may collect through this website and how it is intended to be used. It should be reviewed against Diction's actual operating entity, providers and applicable law before publication.</p>{sections.map(([title, body], index) => <section key={title} className="mt-12 border-t border-black/12 pt-9"><p className="section-label text-[#7134cb]">{String(index + 1).padStart(2, "0")}</p><h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{title}</h2><p className="mt-4 text-base leading-7 text-black/58">{body}</p></section>)}</div></div><PageFooter /></main>;
}
