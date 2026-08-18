"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import {
  MotionConfig,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Preloader from "./Preloader";

const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), {
  ssr: false,
});

const heroNavigation = [
  { label: "Home", href: "/" },
  { label: "Free Tools", href: "/#free-tools" },
  { label: "Success Stories", href: "/#success-stories" },
  { label: "Insights", href: "/#insights" },
  { label: "About", href: "/#about" },
];

export default function AnimatedHero() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [globeActive, setGlobeActive] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const rawProgress = useMotionValue(0);
  const progressTarget = useRef(0);
  const globeActiveRef = useRef(true);
  const touchY = useRef<number | null>(null);
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishLoading = useCallback(() => setLoadingComplete(true), []);
  const progress = useSpring(rawProgress, {
    stiffness: shouldReduceMotion ? 1000 : 72,
    damping: shouldReduceMotion ? 100 : 24,
    mass: 0.6,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useMotionValueEvent(progress, "change", (value) => {
    const nextGlobeActive = value < 0.72;
    if (nextGlobeActive === globeActiveRef.current) return;

    globeActiveRef.current = nextGlobeActive;
    setGlobeActive(nextGlobeActive);
    if (nextGlobeActive) setMenuOpen(false);
  });

  useEffect(() => {
    if (!loadingComplete) return;

    const moveProgress = (amount: number) => {
      const next = Math.min(1, Math.max(0, progressTarget.current + amount));
      progressTarget.current = next;
      rawProgress.set(next);

      if (settleTimer.current) clearTimeout(settleTimer.current);
      settleTimer.current = setTimeout(() => {
        const current = progressTarget.current;
        const settled = current < 0.035 ? 0 : current > 0.965 ? 1 : current;
        progressTarget.current = settled;
        rawProgress.set(settled);
      }, 180);
    };

    const handleWheel = (event: WheelEvent) => {
      const pixelDelta =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? event.deltaY * 16
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? event.deltaY * window.innerHeight
            : event.deltaY;
      const viewportScale = Math.max(window.innerHeight * 1.25, 700);
      const controlledDelta = Math.min(0.1, Math.max(-0.1, pixelDelta / viewportScale));

      const shouldControlReveal =
        window.scrollY <= 1 &&
        (progressTarget.current < 0.999 || controlledDelta < 0);
      if (!shouldControlReveal) return;

      event.preventDefault();
      moveProgress(controlledDelta);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchY.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      if (touchY.current === null || currentY === undefined) return;

      const touchDelta = (touchY.current - currentY) / Math.max(window.innerHeight * 0.9, 520);
      const controlledDelta = Math.min(0.08, Math.max(-0.08, touchDelta));
      const shouldControlReveal =
        window.scrollY <= 1 &&
        (progressTarget.current < 0.999 || controlledDelta < 0);

      if (shouldControlReveal) {
        event.preventDefault();
        moveProgress(controlledDelta);
      }
      touchY.current = currentY;
    };

    const handleTouchEnd = () => {
      touchY.current = null;
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.closest("a, button, input, textarea, select")) return;

      const increments: Record<string, number> = {
        ArrowDown: 0.12,
        ArrowUp: -0.12,
        PageDown: 0.35,
        PageUp: -0.35,
        " ": event.shiftKey ? -0.2 : 0.2,
        Enter: 1,
        Escape: -1,
      };
      const increment = increments[event.key];
      if (increment === undefined) return;

      const shouldControlReveal =
        window.scrollY <= 1 &&
        (progressTarget.current < 0.999 || increment < 0);
      if (!shouldControlReveal) return;

      event.preventDefault();
      moveProgress(increment);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      if (settleTimer.current) clearTimeout(settleTimer.current);
    };
  }, [loadingComplete, rawProgress]);

  const globeOpacity = useTransform(progress, [0, 0.34, 0.62], [1, 1, 0]);
  const globeScale = useTransform(progress, [0, 0.25, 0.7], [1, 1, 3.6]);
  const wordmarkOpacity = useTransform(progress, [0, 0.2, 0.48], [1, 1, 0]);
  const wordmarkScale = useTransform(progress, [0, 0.2, 0.58], [1, 1, 1.55]);
  const midpointOpacity = useTransform(progress, [0.16, 0.34, 0.6, 0.8], [0, 1, 1, 0]);
  const recognitionProgress = useTransform(progress, [0.2, 0.68], [0, 1]);
  const heroBackground = useTransform(progress, [0.34, 0.66], [0, 1]);
  const heroReveal = useTransform(
    progress,
    [0.34, 0.74],
    ["circle(0% at 50% 50%)", "circle(145% at 50% 50%)"],
  );
  const skyY = useTransform(progress, [0.34, 1], [-32, 18]);
  const skyScale = useTransform(progress, [0.34, 1], [1.06, 1]);
  const mountainY = useTransform(progress, [0.34, 1], [78, 8]);
  const mountainScale = useTransform(progress, [0.34, 1], [1.08, 1]);
  const titleOpacity = useTransform(progress, [0.48, 0.72], [0, 1]);
  const titleY = useTransform(progress, [0.44, 1], [96, 0]);
  const titleScale = useTransform(progress, [0.44, 1], [0.84, 1]);
  const foregroundY = useTransform(progress, [0.46, 1], [150, 0]);
  const foregroundScale = useTransform(progress, [0.46, 1], [1.06, 1]);
  const heroOpacity = useTransform(progress, [0.66, 0.86], [0, 1]);
  const heroY = useTransform(progress, [0.66, 0.86], [28, 0]);
  const heroVisibility = useTransform(progress, (value) =>
    value >= 0.42 ? "visible" : "hidden",
  );
  const heroPointerEvents = useTransform(progress, (value) =>
    value >= 0.84 ? "auto" : "none",
  );

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative h-svh overflow-hidden overscroll-none bg-black" aria-labelledby="hero-title">
        <Preloader onComplete={finishLoading} />

        <motion.div
          className="absolute inset-0"
          style={{
            opacity: loadingComplete ? globeOpacity : 0,
            scale: shouldReduceMotion ? 1 : globeScale,
          }}
        >
          <motion.div
            className="h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: loadingComplete ? 1 : 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlobeCanvas active={loadingComplete && globeActive} />
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0 grid place-items-center"
          style={{
            opacity: loadingComplete ? wordmarkOpacity : 0,
            scale: shouldReduceMotion ? 1 : wordmarkScale,
          }}
        >
          <motion.div
            className="w-[min(84vw,760px)] px-4 sm:w-[min(78vw,760px)] sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: loadingComplete ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/diction-wordmark.png"
              alt="Diction"
              width={2155}
              height={730}
              className="h-auto w-full object-contain"
              loading="eager"
              sizes="(min-width: 1024px) 760px, (min-width: 640px) 78vw, 84vw"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ opacity: midpointOpacity }}
          aria-hidden="true"
        >
          <div className="absolute inset-x-0 bottom-[8%] mx-auto flex w-[min(76vw,560px)] items-center gap-4 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-white/42 md:text-[0.65rem]">
            <span>Visible</span>
            <span className="relative h-px flex-1 overflow-hidden bg-white/12">
              <motion.span
                className="absolute inset-0 origin-left bg-[#a855f7]"
                style={{ scaleX: recognitionProgress }}
              />
            </span>
            <span>Known</span>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 overflow-hidden bg-[#07050a]"
          style={{
            opacity: heroBackground,
            clipPath: shouldReduceMotion ? "none" : heroReveal,
            visibility: heroVisibility,
          }}
        >
          <motion.div
            className="pointer-events-none absolute -inset-[4%] z-0"
            style={{
              y: shouldReduceMotion ? 0 : skyY,
              scale: shouldReduceMotion ? 1 : skyScale,
            }}
            aria-hidden="true"
          >
            <Image
              src="/diction-parallax-sky.webp"
              alt=""
              fill
              priority
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute -inset-[4%] z-10"
            style={{
              y: shouldReduceMotion ? 0 : mountainY,
              scale: shouldReduceMotion ? 1 : mountainScale,
            }}
            aria-hidden="true"
          >
            <Image
              src="/diction-parallax-mountain.webp"
              alt=""
              fill
              priority
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-0 z-20 grid place-items-center px-3 pb-[10vh] text-center sm:px-6"
            style={{
              opacity: titleOpacity,
              y: shouldReduceMotion ? 0 : titleY,
              scale: shouldReduceMotion ? 1 : titleScale,
            }}
          >
            <div>
              <p className="mb-2 text-[0.55rem] font-bold uppercase tracking-[0.28em] text-white/64 sm:mb-3 sm:text-[0.64rem] md:text-[0.72rem]">
                For founders who deserve to be known
              </p>
              <h1
                id="hero-title"
                className="whitespace-nowrap text-[clamp(4rem,15vw,14rem)] font-black leading-[0.78] tracking-[-0.085em] text-white"
              >
                BE <span className="font-serif font-normal italic text-[#bd77ff]">KNOWN.</span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="pointer-events-none absolute -inset-[4%] z-30"
            style={{
              y: shouldReduceMotion ? 0 : foregroundY,
              scale: shouldReduceMotion ? 1 : foregroundScale,
            }}
            aria-hidden="true"
          >
            <Image
              src="/diction-parallax-foreground.webp"
              alt=""
              fill
              priority
              unoptimized
              className="object-cover object-center"
              sizes="100vw"
            />
          </motion.div>

          <div
            className="pointer-events-none absolute inset-0 z-40 bg-[radial-gradient(circle_at_50%_38%,transparent_16%,rgba(5,2,8,0.18)_58%,rgba(3,2,5,0.78)_100%),linear-gradient(0deg,rgba(3,2,5,0.84)_0%,transparent_34%)]"
            aria-hidden="true"
          />

          <motion.div
            className="absolute inset-0 z-50"
            style={{
              opacity: heroOpacity,
              y: shouldReduceMotion ? 0 : heroY,
              pointerEvents: heroPointerEvents,
            }}
          >
            <header className="absolute inset-x-0 top-0 z-10 px-5 py-5 sm:px-7 sm:py-6 md:px-10 lg:px-12">
              <div className="flex items-center justify-between gap-5">
                <Link
                  href="/"
                  aria-label="Diction home"
                  className="relative block h-6 w-[8.5rem] shrink-0 overflow-hidden sm:h-7 sm:w-[10rem] md:h-8 md:w-[11.5rem]"
                >
                  <Image
                    src="/ChatGPT_Image_Aug_18__2026__11_36_22_PM-removebg-preview.png"
                    alt="Diction"
                    fill
                    className="object-cover object-center"
                    loading="eager"
                    sizes="(min-width: 768px) 184px, (min-width: 640px) 160px, 136px"
                  />
                </Link>

              <nav
                aria-label="Primary navigation"
                className="hidden items-center gap-6 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-white/62 lg:flex xl:gap-8 xl:text-[0.62rem]"
              >
                {heroNavigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={item.href === "/" ? "page" : undefined}
                    className="whitespace-nowrap transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link
                href="/known#register"
                className="hidden min-h-11 items-center gap-2 rounded-full border border-white/20 bg-black/45 px-5 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-black lg:inline-flex xl:text-[0.62rem]"
              >
                Join the Free Masterclass <ArrowRight size={14} aria-hidden="true" />
              </Link>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="hero-mobile-navigation"
                aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                className="grid size-11 place-items-center rounded-full border border-white/20 bg-black/45 text-white lg:hidden"
              >
                {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
              </div>

              {menuOpen && (
                <nav
                  id="hero-mobile-navigation"
                  aria-label="Mobile navigation"
                  className="mt-3 rounded-3xl border border-white/15 bg-[#08070a]/96 p-3 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-white/72 shadow-2xl lg:hidden"
                >
                  <div className="grid">
                    {heroNavigation.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="rounded-2xl px-4 py-3.5 transition-colors hover:bg-white/8 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/known#register"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 flex min-h-12 items-center justify-between rounded-full bg-white px-5 text-black"
                    style={{ color: "#08070a" }}
                  >
                    Join the Free Masterclass <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </nav>
              )}
            </header>

            <div className="absolute inset-x-0 bottom-0 flex justify-end px-5 pb-[max(1.35rem,env(safe-area-inset-bottom))] sm:px-7 sm:pb-7 md:px-10 md:pb-9 lg:px-12 lg:pb-10">
              <div className="flex max-w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center sm:justify-end sm:gap-3">
                <Link href="/known#register" className="button-light min-h-11 max-w-full px-4 text-center text-[0.54rem] sm:min-h-12 sm:px-5 sm:text-[0.62rem]">
                  Join the Free KNOWN Masterclass <ArrowRight size={15} aria-hidden="true" />
                </Link>
                <Link href="/known" className="button-ghost min-h-11 max-w-full px-4 text-center text-[0.54rem] sm:min-h-12 sm:px-5 sm:text-[0.62rem]">
                  Discover My Digital Presence Score
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
