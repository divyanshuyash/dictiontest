"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      const frame = requestAnimationFrame(() => {
        setVisible(false);
        onComplete();
      });
      return () => cancelAnimationFrame(frame);
    }

    const timeout = setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 1000);

    return () => clearTimeout(timeout);
  }, [onComplete, shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-[#050505] px-8"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="w-full max-w-xs text-center">
            <Image
              src="/diction-wordmark.png"
              alt="Diction"
              width={2155}
              height={730}
              className="mx-auto h-auto w-52 object-contain sm:w-60 md:w-72"
              loading="eager"
              sizes="(min-width: 768px) 288px, (min-width: 640px) 240px, 208px"
            />
            <p className="mt-8 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/38">
              Loading
            </p>
            <div className="mt-3 h-px overflow-hidden bg-white/10" aria-hidden="true">
              <motion.div
                className="h-full origin-left bg-[#a855f7]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
