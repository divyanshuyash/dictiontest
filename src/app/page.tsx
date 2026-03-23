"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import Preloader from "../components/Preloader";

// Dynamic import for the 3D canvas so we don't encounter Next.js SSR errors with React-Three-Fiber
const GlobeCanvas = dynamic(() => import("../components/GlobeCanvas"), {
  ssr: false,
});

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Premium Grain/Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Subtle Edge Vignette */}
      <div className="pointer-events-none fixed inset-0 z-40 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_120%)]"></div>

      {/* 1. Preloader Overlayer */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* 2. Interactive Background 3D Globe - Mapped to fade behind text */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: loadingComplete ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
      >
        <GlobeCanvas />
      </motion.div>

      {/* 3. Foreground Content Overlay */}
      <motion.div 
        className="relative z-10 w-full h-screen flex flex-col items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.98, y: 15 }}
        animate={loadingComplete ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.98, y: 15 }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.19, 1, 0.22, 1] }} // Luxurious Expo Out
      >
        
        {/* Centered Hero Logo replacing text */}
        <motion.div 
          className="relative w-full max-w-[70vw] md:max-w-2xl px-6 pointer-events-none flex justify-center mix-blend-difference drop-shadow-[0_0_40px_rgba(168,85,247,0.15)]"
          initial={{ opacity: 0, y: 15 }}
          animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
        >
           <Image 
             src="/logo-v3.png" 
             alt="Diction Logo" 
             width={800} 
             height={300} 
             className="w-full h-auto object-contain"
             priority
           />
        </motion.div>

        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="-mt-4 md:-mt-8 text-sm md:text-xl font-light tracking-[0.25em] uppercase text-white/50 max-w-2xl text-center px-4 mix-blend-difference drop-shadow-[0_0_20px_rgba(168,85,247,0.3)]"
        >
          For founders who deserve to be known.
        </motion.p>

        {/* Premium Coming Soon Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={loadingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          className="mt-16 px-8 py-3.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl text-white/80 text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-4 shadow-[0_0_40px_rgba(168,85,247,0.1)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_12px_#a855f7]"></span>
          Coming Soon
        </motion.div>

      </motion.div>
    </main>
  );
}
