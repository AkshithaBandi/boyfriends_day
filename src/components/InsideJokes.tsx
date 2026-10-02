import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Laugh, Eye, Sparkles, MapPin, RefreshCw } from 'lucide-react';
import { InsideJoke } from '@/src/data/relationshipData';

interface InsideJokesProps {
  jokes: InsideJoke[];
}

export const InsideJokes: React.FC<InsideJokesProps> = ({ jokes }) => {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggleJoke = (id: string) => {
    setRevealed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-medium mb-3">
          <Laugh className="h-3.5 w-3.5 text-amber-400" />
          <span>Our Secret Lore</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          Things Only We Understand 😂
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          The unhinged moments, ongoing debates, and inside jokes nobody else would get in a million years.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {jokes.map((joke) => {
          const isKnown = !!revealed[joke.id];

          return (
            <motion.div
              key={joke.id}
              whileHover={{ y: -3 }}
              onClick={() => toggleJoke(joke.id)}
              className={`rounded-2xl border p-6 transition-all duration-300 cursor-pointer shadow-xl ${
                isKnown
                  ? 'bg-zinc-900/90 border-amber-800/50 glow-gold'
                  : 'bg-zinc-950/70 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl select-none">{joke.emoji}</span>
                <span className="text-xs text-amber-300/80 font-medium flex items-center gap-1">
                  {isKnown ? (
                    <>
                      <span>Exposed</span>
                      <RefreshCw className="h-3 w-3" />
                    </>
                  ) : (
                    <>
                      <span>{joke.teaser}</span>
                      <Eye className="h-3.5 w-3.5" />
                    </>
                  )}
                </span>
              </div>

              <h3 className="font-serif-romantic text-2xl text-stone-100 font-normal">
                {joke.title}
              </h3>

              {!isKnown ? (
                <div className="mt-4 p-4 rounded-xl bg-zinc-900/40 border border-dashed border-zinc-800 text-xs text-stone-500 flex items-center justify-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-amber-400/60" />
                  <span>Tap to reveal the shameful details</span>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-3"
                >
                  <p className="text-sm text-stone-200 leading-relaxed font-light">
                    {joke.explanation}
                  </p>

                  <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-stone-400">
                    <span className="italic font-serif-romantic text-amber-200/90">
                      "{joke.context}"
                    </span>
                    {joke.dateOrPlace && (
                      <span className="flex items-center gap-1 text-[11px] text-stone-500">
                        <MapPin className="h-3 w-3" />
                        <span>{joke.dateOrPlace}</span>
                      </span>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
