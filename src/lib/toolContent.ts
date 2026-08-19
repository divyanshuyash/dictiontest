export type AuditTool = {
  slug: string;
  eyebrow: string;
  title: string;
  promise: string;
  description: string;
  checks: string[];
  resultTitle: string;
  resultCopy: string;
  gap: string;
};

export const auditTools: Record<string, AuditTool> = {
  "positioning-clarity-audit": {
    slug: "positioning-clarity-audit",
    eyebrow: "Free positioning diagnostic",
    title: "Can people understand—and remember—what you should be known for?",
    promise: "Find the language gaps making strong expertise feel generic.",
    description: "This short audit helps you examine specificity, audience fit, differentiation and point of view before you invest in more content or design.",
    checks: ["A visitor can describe what I should be known for.", "My message names a specific audience.", "The problem I solve is stated in the audience's language.", "My desired outcome is concrete and believable.", "My point of view is distinct from common category advice.", "My offers reinforce one clear expertise association.", "My positioning is consistent across key platforms.", "My introduction is memorable without relying on job titles."],
    resultTitle: "Your positioning is a system of associations.",
    resultCopy: "The strongest message makes your expertise, audience and distinct perspective feel inseparable. KNOWN shows how that position connects to content, trust and opportunity.",
    gap: "People do not understand what I do",
  },
  "authority-content-audit": {
    slug: "authority-content-audit",
    eyebrow: "Free content diagnostic",
    title: "Does your content demonstrate expertise—or simply add to the noise?",
    promise: "Review the signals that turn publishing into authority.",
    description: "Use this audit to assess whether your ideas show perspective, useful evidence, consistency and a clear relationship to the work you want to be known for.",
    checks: ["My content expresses an original perspective.", "I use evidence, examples or lived experience.", "My core topics reinforce what I want to be known for.", "A reader can recognise my voice across formats.", "My content helps the audience make a better decision.", "I explain why common approaches fail.", "Proof appears naturally within my teaching.", "Interested readers have a relevant next step."],
    resultTitle: "Authority content makes your thinking visible.",
    resultCopy: "Frequency cannot compensate for generic ideas. KNOWN helps you connect a clear position to content people can recognise and trust.",
    gap: "My content does not build authority",
  },
  "website-trust-audit": {
    slug: "website-trust-audit",
    eyebrow: "Free website diagnostic",
    title: "Does your website help a credible visitor trust you quickly?",
    promise: "Examine the clarity, proof and next-step signals on your most important owned platform.",
    description: "This audit reviews the trust journey from first impression to relevant action—without reducing your website to a list of cosmetic fixes.",
    checks: ["The first screen makes my expertise clear.", "The visitor can see who the site is for.", "Proof includes useful context, not just logos.", "My human voice and perspective are visible.", "The page hierarchy answers questions in a natural order.", "Important claims are supported by evidence.", "Every key page has one relevant next action.", "The experience feels consistent on mobile and desktop."],
    resultTitle: "A trusted website reduces uncertainty.",
    resultCopy: "Design matters most when it supports clear positioning, credible proof and an obvious next step. KNOWN shows where the website sits inside the wider system.",
    gap: "My website does not create trust",
  },
  "90-day-presence-roadmap": {
    slug: "90-day-presence-roadmap",
    eyebrow: "Free planning diagnostic",
    title: "What should you build first over the next 90 days?",
    promise: "Choose a focused sequence instead of trying to fix every platform at once.",
    description: "Use the roadmap prompts to locate your foundation, authority and opportunity priorities, then take a practical build order into the KNOWN masterclass.",
    checks: ["I can name the one gap limiting the wider system.", "My positioning is clear enough to guide execution.", "I know which audience matters most this quarter.", "I have selected a focused authority theme.", "My proof is organised and ready to use.", "I know which platform should be improved first.", "My next action matches the audience's readiness.", "The work fits a realistic 90-day sequence."],
    resultTitle: "Sequence creates momentum.",
    resultCopy: "The right next step depends on the gap currently limiting the whole system. KNOWN gives you the framework to make that choice with clarity.",
    gap: "I do not know what to build first",
  },
};
