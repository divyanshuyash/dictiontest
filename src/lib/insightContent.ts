export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  standfirst: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[]; points?: string[] }[];
  tool: { label: string; href: string };
};

export const insightArticles: Record<string, InsightArticle> = {
  "from-visible-to-recognised": {
    slug: "from-visible-to-recognised",
    category: "From expert to known",
    title: "Visibility is not the same as recognition",
    standfirst: "Being seen is a distribution outcome. Being remembered for the right idea is a positioning outcome—and the difference changes what you should build.",
    readTime: "5 min read",
    sections: [
      { heading: "Visibility answers only one question", paragraphs: ["Visibility tells you whether someone had the chance to encounter your work. It does not tell you what they understood, remembered or trusted after the encounter.", "That is why more reach can leave a credible expert with the same commercial problem: people have seen the name, but cannot connect it to a clear expertise, point of view or next step."] },
      { heading: "Recognition needs a repeated association", paragraphs: ["A recognisable presence makes the same useful association across content, profiles, website, proof and conversations. The repetition is strategic rather than identical: every part reinforces what this person should be known for.", "This is less about visual consistency alone and more about conceptual consistency. The audience should repeatedly encounter the same expertise, problem, perspective and evidence."], points: ["A clear expertise association", "A specific audience and problem context", "A distinct point of view", "Proof that makes the claim believable", "A relevant path from attention to opportunity"] },
      { heading: "Build for memory, not just reach", paragraphs: ["Before adding another platform, ask whether the platforms you already use create one coherent impression. Before publishing more, ask what every piece should help the audience remember.", "The useful goal is not to be visible everywhere. It is to become easy to understand, easy to trust and easy to recall in the right context."] },
    ],
    tool: { label: "Discover your Digital Presence Score", href: "/tools/digital-presence-score" },
  },
  "positioning-before-content": {
    slug: "positioning-before-content",
    category: "Positioning & point of view",
    title: "Why positioning should come before a content calendar",
    standfirst: "More output cannot solve an unclear association. Decide what every piece of content should reinforce before deciding how often to publish.",
    readTime: "6 min read",
    sections: [
      { heading: "A calendar can organise the wrong work", paragraphs: ["Content calendars are useful execution tools. They cannot decide the strategic meaning of the content on their own.", "When positioning is broad, the calendar often becomes a collection of category tips, personal updates and trends. Each post may be competent, yet the collection fails to build a clear association."] },
      { heading: "Positioning gives content a job", paragraphs: ["A strong position tells you which ideas to repeat, which evidence to surface and which conversations to decline. It gives the audience a stable lens through which to interpret different formats.", "This does not make content repetitive. It creates a recognisable territory in which stories, frameworks, opinions, examples and questions can all play different roles."], points: ["The audience you are helping", "The problem you understand unusually well", "The outcome you can credibly support", "The perspective that shapes your method", "The evidence that makes the position trustworthy"] },
      { heading: "Use the calendar after the association is clear", paragraphs: ["Once the position is clear, a calendar can balance teaching, perspective, proof, story and invitation. Frequency becomes an operational choice instead of a substitute for strategy.", "The better question is not ‘what should I post this week?’ It is ‘what should this week help the right person understand about how I think?’"] },
    ],
    tool: { label: "Start the Positioning Clarity Audit", href: "/tools/positioning-clarity-audit" },
  },
  "ai-made-content-easy-trust-harder": {
    slug: "ai-made-content-easy-trust-harder",
    category: "AI-era visibility",
    title: "AI made content easier—and trust more valuable",
    standfirst: "When polished information is abundant, lived evidence, original judgment and a recognisable voice become the differentiators.",
    readTime: "7 min read",
    sections: [
      { heading: "Production is no longer the main constraint", paragraphs: ["AI can help almost anyone draft a polished explanation, summarise a topic or produce a steady stream of acceptable posts. This lowers the cost of publishing, but it also raises the amount of competent-looking information competing for attention.", "The scarce asset is shifting from production capacity to credible judgment: why this idea matters, which trade-off to accept and what experience supports the recommendation."] },
      { heading: "Trust leaves specific signals", paragraphs: ["Trust is rarely created by polish alone. It grows when people can see how a conclusion was reached, where it has been tested and what the expert is willing to say that generic consensus cannot.", "AI can support the expression of those signals, but it cannot manufacture the lived context behind them."], points: ["Specific examples rather than universal claims", "Visible trade-offs and reasoning", "A consistent point of view", "Proof with enough context to evaluate", "Human language that reflects real experience"] },
      { heading: "Use AI to strengthen the system, not flatten the voice", paragraphs: ["Use AI for structure, exploration, editing and repurposing while keeping the source material anchored in original observations, client-safe evidence and deliberate judgment.", "In an abundant content environment, the goal is not to sound more polished than everyone else. It is to become more recognisable, more useful and more believable."] },
    ],
    tool: { label: "Join the KNOWN masterclass", href: "/known" },
  },
};
