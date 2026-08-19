"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";

const dimensions = [
  { letter: "D", name: "Define positioning", weight: 15, gap: "People do not understand what I do", questions: ["A new visitor can explain what I should be known for.", "My point of view is distinct from generic category advice."] },
  { letter: "I", name: "Identify audience", weight: 10, gap: "My audience is too broad", questions: ["My message speaks to a specific decision-maker and context.", "I understand the language my audience uses for its most urgent problem."] },
  { letter: "C", name: "Create authority content", weight: 15, gap: "My content does not build authority", questions: ["My content reveals how I think, not only what I know.", "My ideas consistently reinforce the expertise I want to own."] },
  { letter: "T", name: "Turn expertise into trust", weight: 15, gap: "My website does not create trust", questions: ["Important claims are supported by evidence, context or stories.", "My human voice and values are visible alongside my expertise."] },
  { letter: "I", name: "Integrate platforms", weight: 15, gap: "My platforms feel disconnected", questions: ["My profiles, website and content communicate the same position.", "The experience feels recognisably mine across every key platform."] },
  { letter: "O", name: "Optimise opportunities", weight: 15, gap: "Attention does not create opportunities", questions: ["Every key page or channel has one relevant next action.", "My calls to action match the audience's level of readiness."] },
  { letter: "N", name: "Nurture relationships", weight: 15, gap: "I do not have a follow-up system", questions: ["I have a useful follow-up path after someone shows interest.", "My system can turn attention into an ongoing relationship."] },
] as const;

const options = [
  { label: "Not true yet", value: 0 },
  { label: "Rarely true", value: 1 },
  { label: "Sometimes", value: 2 },
  { label: "Usually", value: 3 },
  { label: "Consistently", value: 4 },
];

function stageFor(score: number) {
  if (score <= 24) return { name: "Unseen", copy: "Your expertise is not yet supported by a clear, connected digital system." };
  if (score <= 44) return { name: "Emerging", copy: "Useful signals exist, but they are too inconsistent to create recognition." };
  if (score <= 64) return { name: "Visible", copy: "People can find you, but clarity and trust still depend on individual moments." };
  if (score <= 84) return { name: "Recognised", copy: "Your strongest signals are working together; focused gaps are limiting opportunity." };
  return { name: "Known by Design", copy: "Your presence has a strong connected base. The next work is refinement and leverage." };
}

export default function ScoreAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[][]>(() => dimensions.map(() => [null, null]));
  const [finished, setFinished] = useState(false);
  const current = dimensions[step];
  const stepComplete = answers[step].every((answer) => answer !== null);

  const result = useMemo(() => {
    const scores = dimensions.map((dimension, index) => {
      const raw = answers[index].reduce<number>((sum, value) => sum + (value ?? 0), 0) / 8;
      return { ...dimension, percentage: Math.round(raw * 100), weighted: raw * dimension.weight };
    });
    const total = Math.round(scores.reduce((sum, item) => sum + item.weighted, 0));
    const weakest = [...scores].sort((a, b) => a.percentage - b.percentage)[0];
    return { total, stage: stageFor(total), scores, weakest };
  }, [answers]);

  function answer(questionIndex: number, value: number) {
    setAnswers((existing) => existing.map((dimension, index) => index === step ? dimension.map((answerValue, answerIndex) => answerIndex === questionIndex ? value : answerValue) : dimension));
  }

  function restart() {
    setAnswers(dimensions.map(() => [null, null]));
    setStep(0);
    setFinished(false);
  }

  if (finished) {
    const registerHref = `/register?source=digital-presence-score&score=${result.total}&gap=${encodeURIComponent(result.weakest.gap)}`;
    return (
      <div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="section-label text-[#bd84ff]">Your directional score</p><div className="mt-7 flex items-end gap-3"><span className="text-[clamp(6rem,15vw,10rem)] font-black leading-none tracking-[-0.09em]">{result.total}</span><span className="pb-4 text-sm text-white/30">/ 100</span></div><p className="mt-5 text-2xl font-semibold">{result.stage.name}</p><p className="mt-3 text-sm leading-relaxed text-white/46">{result.stage.copy}</p></div>
          <div><p className="section-label text-white/28">Dimension breakdown</p><div className="mt-6 grid gap-3">{result.scores.map((item, index) => <div key={`${item.letter}-${item.name}`} className="grid grid-cols-[28px_1fr_42px] items-center gap-3"><span className="font-black text-[#bd84ff]">{item.letter}</span><div><div className="flex justify-between text-xs"><span>{item.name}</span></div><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#a855f7]" style={{ width: `${item.percentage}%` }} /></div></div><span className="text-right text-xs text-white/45">{item.percentage}</span></div>)}</div></div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-8"><p className="section-label text-white/28">The gap to address first</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{result.weakest.name}</h3><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/48">Strengthening this dimension will make the rest of your presence work harder. Treat the score as a decision aid, not a scientific, competitive or permanent rating.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link href={registerHref} className="button-light">Build my 90-day roadmap <ArrowRight size={16} /></Link><button type="button" onClick={restart} className="button-ghost"><RotateCcw size={15} /> Retake assessment</button></div></div>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/[0.035] p-6 md:p-10">
      <div className="flex items-center justify-between gap-4"><p className="section-label text-[#bd84ff]">{current.letter} · {current.name}</p><span className="text-xs text-white/30">{step + 1} / {dimensions.length}</span></div>
      <div className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#a855f7] transition-[width]" style={{ width: `${((step + 1) / dimensions.length) * 100}%` }} /></div>
      <div className="mt-9 grid gap-8">
        {current.questions.map((question, questionIndex) => <fieldset key={question}><legend className="text-lg font-semibold leading-snug tracking-[-0.025em]">{question}</legend><div className="mt-4 grid gap-2 sm:grid-cols-5">{options.map((option) => <label key={option.value} className="cursor-pointer rounded-xl border border-white/10 p-3 text-center text-[10px] font-bold uppercase tracking-[0.08em] text-white/42 transition-colors has-[:checked]:border-[#a855f7] has-[:checked]:bg-[#a855f7]/12 has-[:checked]:text-white"><input className="sr-only" type="radio" name={`step-${step}-question-${questionIndex}`} checked={answers[step][questionIndex] === option.value} onChange={() => answer(questionIndex, option.value)} />{option.label}</label>)}</div></fieldset>)}
      </div>
      <div className="mt-10 flex items-center justify-between gap-3"><button type="button" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0} className="button-ghost disabled:cursor-not-allowed disabled:opacity-30"><ArrowLeft size={15} /> Previous</button>{step < dimensions.length - 1 ? <button type="button" disabled={!stepComplete} onClick={() => setStep((value) => value + 1)} className="button-light disabled:cursor-not-allowed disabled:opacity-35">Next dimension <ArrowRight size={15} /></button> : <button type="button" disabled={!stepComplete} onClick={() => setFinished(true)} className="button-light disabled:cursor-not-allowed disabled:opacity-35">See my score <ArrowRight size={15} /></button>}</div>
    </div>
  );
}
