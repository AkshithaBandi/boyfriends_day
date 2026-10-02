import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Smile,
  Laugh,
  HeartHandshake,
  Sparkles,
  ShieldCheck,
  Heart,
  Sun,
  Compass,
  PlusCircle,
  Eye,
} from 'lucide-react';
import { LoveCard } from '@/src/data/relationshipData';
import { triggerHeartShower } from '@/src/utils/confetti';

interface ThingsILoveProps {
  cards: LoveCard[];
}

export const ThingsILove: React.FC<ThingsILoveProps> = ({ cards }) => {
  const [revealedCount, setRevealedCount] = useState<number>(4);
  const [clickedFinal, setClickedFinal] = useState<boolean>(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Smile':
        return <Smile className="h-5 w-5 text-amber-400" />;
      case 'Laugh':
        return <Laugh className="h-5 w-5 text-rose-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="h-5 w-5 text-rose-300" />;
      case 'Sparkles':
        return <Sparkles className="h-5 w-5 text-amber-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-5 w-5 text-pink-400" />;
      case 'Sun':
        return <Sun className="h-5 w-5 text-amber-400" />;
      case 'Compass':
        return <Compass className="h-5 w-5 text-rose-400" />;
      default:
        return <Heart className="h-5 w-5 text-rose-400" />;
    }
  };

  const handleRevealMore = () => {
    setRevealedCount(cards.length);
  };

  const handleFinalCardClick = () => {
    setClickedFinal(!clickedFinal);
    triggerHeartShower();
  };

  return (
    <section id="things-i-love" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-rose-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Heart className="h-3.5 w-3.5 fill-rose-500/80 text-rose-400" />
          <span>From My Heart</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          Things I Love About You
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-lg mx-auto">
          Just a small fraction of the million little reasons you are my favorite person to love.
        </p>
      </div>

      {/* Grid of love cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.slice(0, revealedCount).map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 backdrop-blur-sm shadow-xl hover:border-rose-900/50 hover:bg-zinc-900/80 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Category & Icon header */}
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-rose-800/40 transition-colors">
                  {getIcon(card.iconName)}
                </div>
                {card.category && (
                  <span className="text-xs text-stone-400 font-light">
                    {card.category}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-serif-romantic text-2xl text-stone-100 font-normal group-hover:text-rose-200 transition-colors">
                {card.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-stone-300/90 leading-relaxed font-light">
                {card.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800/60 flex items-center justify-end">
              <span className="text-[11px] text-rose-400/80 group-hover:text-rose-300 flex items-center gap-1 transition-colors">
                <span>With all my heart</span>
                <Heart className="h-2.5 w-2.5 fill-rose-500/70" />
              </span>
            </div>
          </motion.div>
        ))}

        {/* Reveal More Button if not all shown */}
        {revealedCount < cards.length && (
          <motion.button
            onClick={handleRevealMore}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="col-span-1 sm:col-span-2 lg:col-span-3 py-6 px-4 rounded-2xl border-2 border-dashed border-zinc-800 hover:border-rose-800/60 bg-zinc-950/40 text-stone-400 hover:text-stone-200 transition-all flex items-center justify-center gap-3 group cursor-pointer"
          >
            <Eye className="h-4 w-4 text-rose-400 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium">Reveal {cards.length - revealedCount} More Reasons...</span>
          </motion.button>
        )}

        {/* Final Card: "And honestly... I could keep going." */}
        <motion.div
          whileHover={{ y: -4 }}
          onClick={handleFinalCardClick}
          className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-2xl bg-gradient-to-r from-rose-950/40 via-zinc-900/80 to-amber-950/30 border border-rose-900/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer group"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="h-12 w-12 rounded-full bg-rose-950 border border-rose-700/60 flex items-center justify-center text-rose-400 shrink-0 group-hover:scale-110 transition-transform">
              <PlusCircle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100 font-normal">
                And honestly... I could keep going.
              </h3>
              <p className="mt-1 text-sm text-stone-300 font-light">
                {clickedFinal
                  ? "Because every day with you gives me ten more reasons to fall in love all over again. ❤️"
                  : "Tap this card to shower our page with love."}
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs uppercase tracking-wider text-rose-300 group-hover:text-rose-200 font-medium">
            <span>Shower Love</span>
            <Sparkles className="h-4 w-4 text-amber-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
