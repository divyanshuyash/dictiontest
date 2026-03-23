"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(1);
  const [stage, setStage] = useState<"loading" | "expanding" | "done">("loading");

  useEffect(() => {
    // Ultra-fast entrance count from 1 to 100
    const duration = 900; 
    const intervalTime = 15;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setProgress(100);
        clearInterval(interval);
      } else {
        const nextProgress = Math.floor((currentStep / steps) * 100);
        setProgress(nextProgress);
      }
    }, intervalTime);

    // After reaching 100%, trigger the majestic purple screen wipe extremely quickly
    const timeout1 = setTimeout(() => {
      setStage("expanding");
      onComplete(); // Signals to page.tsx to fade in everything else
    }, 1100);

    // Completely unmount after wipe
    const timeout2 = setTimeout(() => {
      setStage("done");
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-between px-10 md:px-20 bg-[#0a0a0a] overflow-hidden"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle LOADING typography on exactly Fandom specs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage === "loading" ? 1 : 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#555] text-lg md:text-xl font-mono tracking-widest z-10 w-full md:w-auto text-left mb-10 md:mb-0 uppercase"
          >
            Loading Initial Sequences...
          </motion.div>

          {/* Majestic 1-100% Counter */}
          <motion.div
            layout
            animate={{ opacity: stage === "loading" ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-auto text-accent text-[20vw] md:text-[15vw] font-black leading-none text-right z-10 tracking-tighter"
          >
            {progress}%
          </motion.div>

          {/* Expanding Circle Transition strictly matching reference */}
          {stage === "expanding" && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 150, opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10vw] h-[10vw] bg-accent rounded-full pointer-events-none"
              style={{ mixBlendMode: "screen" }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
