"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, LockKeyhole } from "lucide-react";

export default function RegistrationForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const wantsWhatsApp = form.get("whatsappConsent") === "on";
    const phone = String(form.get("phone") ?? "").trim();

    if (wantsWhatsApp && !phone) {
      setError("Add your WhatsApp number or remove WhatsApp reminders.");
      return;
    }

    const registration = Object.fromEntries(form.entries());
    sessionStorage.setItem("diction-known-registration", JSON.stringify(registration));
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field"><span>First name</span><input name="firstName" autoComplete="given-name" required placeholder="Your first name" /></label>
        <label className="form-field"><span>Email</span><input name="email" type="email" autoComplete="email" required placeholder="you@company.com" /></label>
      </div>
      <label className="form-field"><span>Mobile / WhatsApp <small>Optional unless reminders are selected</small></span><input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" /></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field"><span>Your role</span><select name="role" required defaultValue=""><option value="" disabled>Select your role</option><option>Founder</option><option>Coach / Consultant</option><option>Corporate Expert</option><option>Other</option></select></label>
        <label className="form-field"><span>Primary goal</span><select name="goal" required defaultValue=""><option value="" disabled>Select your goal</option><option>Build recognition and authority</option><option>Generate qualified opportunities</option><option>Clarify my positioning</option><option>Connect my digital presence</option></select></label>
      </div>
      <label className="form-field"><span>Biggest digital presence gap</span><select name="gap" required defaultValue=""><option value="" disabled>Select the closest answer</option><option>People do not understand what I do</option><option>My content does not build authority</option><option>My website does not create trust</option><option>My platforms feel disconnected</option><option>I do not know what to build first</option></select></label>
      <label className="form-field"><span>Session</span><select name="session" required defaultValue="next-live"><option value="next-live">Next live KNOWN session — date shared by email</option><option value="future">Notify me about a future session</option></select></label>
      <label className="consent-field"><input type="checkbox" name="emailConsent" required /><span>Email me the registration confirmation, toolkit access and essential session updates.</span></label>
      <label className="consent-field"><input type="checkbox" name="whatsappConsent" /><span>I would also like optional WhatsApp reminders. I understand I will initiate the conversation after registering.</span></label>
      {error ? <p role="alert" className="rounded-xl border border-red-400/25 bg-red-400/8 px-4 py-3 text-sm text-red-200">{error}</p> : null}
      <button type="submit" className="button-light mt-2 w-full">Reserve my free seat <ArrowRight size={17} aria-hidden="true" /></button>
      <p className="flex items-center justify-center gap-2 text-center text-[0.64rem] leading-relaxed text-white/30"><LockKeyhole size={12} aria-hidden="true" /> Your details are used only for registration and the communication you choose.</p>
    </form>
  );
}
