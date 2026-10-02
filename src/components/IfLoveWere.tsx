import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Music, MapPin, Utensils, Palette, CloudSun, Sparkles, RefreshCw } from 'lucide-react';
import { IfOurLoveWereItem } from '@/src/data/relationshipData';

interface IfLoveWereProps {
  items: IfOurLoveWereItem[];
}

export const IfLoveWere: React.FC<IfLoveWereProps> = ({ items }) => {
  const [flippedIds, setFlippedIds] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (name: string) => {
    switch (name) {
      case 'Film':
        return <Film className="h-6 w-6 text-rose-400" />;
      case 'Music':
        return <Music className="h-6 w-6 text-pink-400" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6 text-amber-400" />;
      case 'Utensils':
        return <Utensils className="h-6 w-6 text-orange-400" />;
      case 'Palette':
        return <Palette className="h-6 w-6 text-rose-300" />;
      case 'CloudSun':
        return <CloudSun className="h-6 w-6 text-yellow-300" />;
      default:
        return <Sparkles className="h-6 w-6 text-rose-400" />;
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-rose-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Sparkles className="h-3.5 w-3.5 text-rose-400" />
          <span>Metaphors Of Us</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          If Our Love Were...
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          Tap each card to flip and reveal the little truths about us.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const isFlipped = !!flippedIds[item.id];

          return (
            <div
              key={item.id}
              onClick={() => toggleFlip(item.id)}
              className="group perspective-1000 h-64 cursor-pointer select-none"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* FRONT FACE */}
                <div className="absolute inset-0 backface-hidden rounded-2xl bg-zinc-900/60 border border-zinc-800/90 p-6 flex flex-col justify-between shadow-xl group-hover:border-rose-900/60 group-hover:bg-zinc-900/80 transition-all">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-rose-400/80 font-medium">
                      {item.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif-romantic text-2xl text-stone-100 font-normal leading-snug">
                      {item.prompt}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs text-stone-500 pt-2 border-t border-zinc-800/60">
                    <span>Tap to reveal</span>
                    <RefreshCw className="h-3.5 w-3.5 group-hover:rotate-180 transition-transform duration-500" />
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-rose-950/80 via-zinc-900/95 to-zinc-950 border border-rose-800/50 p-6 flex flex-col justify-between shadow-2xl text-left">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-rose-300 font-semibold">
                      {item.category}
                    </span>
                    <h4 className="mt-3 font-serif-romantic text-xl text-stone-100 leading-snug">
                      "{item.answer}"
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                      {item.subtext}
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-rose-400/80 pt-2 border-t border-rose-900/40">
                    <span>Tap to flip back</span>
                    <RefreshCw className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
