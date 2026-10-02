import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { ReasonToChoose } from '@/src/data/relationshipData';

interface ReasonsScrollProps {
  reasons: ReasonToChoose[];
}

export const ReasonsScroll: React.FC<ReasonsScrollProps> = ({ reasons }) => {
  return (
    <section id="reasons" className="relative py-32 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-950/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Heart className="h-3.5 w-3.5 fill-rose-500/70 text-rose-400" />
          <span>Without Hesitation</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-6xl text-stone-100 font-normal">
          I'd Choose You Again.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-400 max-w-md mx-auto font-light">
          In a hundred lifetimes, in a hundred worlds, in any version of reality, I'd find you and I'd choose you.
        </p>
      </div>

      {/* Sequential reason cards */}
      <div className="space-y-10 sm:space-y-14">
        {reasons.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: index * 0.05 }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur-sm shadow-xl hover:border-rose-900/40 hover:bg-zinc-900/70 transition-all flex items-start gap-4 sm:gap-6"
          >
            <span className="font-mono text-xs sm:text-sm text-rose-400/80 font-bold shrink-0 mt-1">
              0{index + 1}.
            </span>
            <div className="flex-1">
              <p className="font-serif-romantic text-2xl sm:text-3xl text-stone-100 leading-snug group-hover:text-rose-100 transition-colors">
                "{item.reason}"
              </p>
            </div>
          </motion.div>
        ))}

        {/* Final emotional conclusion card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center pt-12 pb-6"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-rose-950/70 border border-rose-800 text-rose-300 mb-6 glow-romantic">
            <Sparkles className="h-6 w-6 text-amber-300" />
          </div>

          <h3 className="font-serif-romantic text-3xl sm:text-5xl text-stone-100 font-normal italic">
            And I'd still choose you tomorrow.
          </h3>
          <p className="mt-3 text-sm text-stone-400 font-light">
            Every single day is an easy choice with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
