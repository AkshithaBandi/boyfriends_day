import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

interface FinalSectionProps {
  heading: string;
  paragraphs: string[];
  signature: string;
  onTriggerSurprise: () => void;
  surpriseButtonLabel: string;
}

export const FinalSection: React.FC<FinalSectionProps> = ({
  heading,
  paragraphs,
  signature,
  onTriggerSurprise,
  surpriseButtonLabel,
}) => {
  return (
    <section className="relative py-28 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-rose-950/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Elegant Starlit Digital Love Card (Replacing stock photo banner) */}
      <div className="relative mb-16 rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-rose-950/40 border border-zinc-800 p-8 sm:p-14 shadow-2xl glow-romantic">
        <div className="flex flex-col items-center max-w-2xl mx-auto">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-rose-950/90 border-2 border-rose-500/80 text-rose-300 mb-6 shadow-xl glow-romantic">
            <Heart className="h-8 w-8 fill-rose-500/80 text-rose-300" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-rose-400 font-semibold mb-3">
            Teja & Achii
          </span>

          <h3 className="font-serif-romantic text-3xl sm:text-5xl text-stone-100 font-normal leading-tight">
            “Distance Means So Little When Someone Means So Much.”
          </h3>

          <p className="mt-4 text-xs sm:text-sm text-stone-300 font-light max-w-lg leading-relaxed">
            Miles apart right now, but every road in my heart leads straight back to you. After everything, it's still you — and it will always be you.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-4">
          <Sparkles className="h-3.5 w-3.5 text-rose-400" />
          <span>With All My Heart</span>
        </div>

        <h2 className="font-serif-romantic text-4xl sm:text-6xl text-stone-100 font-normal">
          {heading}
        </h2>

        <div className="mt-8 space-y-3 font-serif-romantic text-xl sm:text-2xl text-stone-300 font-light leading-relaxed">
          {paragraphs.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <p className="mt-8 font-serif-romantic italic text-2xl sm:text-3xl text-rose-300 font-normal">
          “I can't wait for all the memories and pictures we haven't made yet.”
        </p>

        <p className="mt-8 text-xl sm:text-2xl text-stone-100 font-serif-romantic font-medium tracking-wide">
          {signature}
        </p>

        {/* Surprise Button Trigger */}
        <div className="mt-14">
          <motion.button
            onClick={onTriggerSurprise}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(225, 29, 72, 0.5)' }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700 text-white font-medium text-base shadow-2xl transition-all cursor-pointer glow-romantic"
          >
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="font-sans-clean tracking-wide">{surpriseButtonLabel}</span>
            <Heart className="h-4 w-4 fill-white text-white group-hover:scale-110 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
