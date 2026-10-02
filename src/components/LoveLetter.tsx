import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Heart, Sparkles, X, BookOpen } from 'lucide-react';
import { triggerHeartShower } from '@/src/utils/confetti';

interface LoveLetterProps {
  letter: {
    letterTitle: string;
    letterDate: string;
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    postscript?: string;
  };
}

export const LoveLetter: React.FC<LoveLetterProps> = ({ letter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
    triggerHeartShower();
  };

  return (
    <section id="letter" className="relative py-28 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Mail className="h-3.5 w-3.5 text-rose-400" />
          <span>Handwritten From The Heart</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          {letter.letterTitle}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          Words I might get too shy to say out loud, but feel every single day.
        </p>
      </div>

      <div className="flex flex-col items-center">
        {!isOpen ? (
          /* Sealed Envelope Graphic */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={handleOpenLetter}
            className="group relative w-full max-w-md cursor-pointer select-none rounded-2xl bg-gradient-to-b from-stone-900 via-zinc-900 to-zinc-950 border border-stone-800 p-8 shadow-2xl glow-romantic text-center flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Wax seal simulation */}
            <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-rose-700 to-burgundy-950 border-2 border-rose-500/70 shadow-2xl glow-romantic group-hover:scale-110 transition-transform">
              <Heart className="h-9 w-9 fill-rose-300 text-rose-100" />
              <div className="absolute inset-0 rounded-full border border-amber-300/30" />
            </div>

            <span className="text-xs uppercase tracking-[0.2em] text-rose-400 font-medium">
              Confidential & For Your Eyes Only
            </span>
            <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100 mt-2">
              Sealed with Love
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Tap the envelope to break the seal and read my letter.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose-900/80 hover:bg-rose-800 border border-rose-600/50 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-rose-100 shadow-lg transition-all"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>Open Letter 💌</span>
            </motion.button>
          </motion.div>
        ) : (
          /* Unfolded Handwritten Style Letter */
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl rounded-2xl bg-[#fbf9f4] text-zinc-900 p-8 sm:p-14 shadow-2xl border border-amber-200/60 overflow-hidden"
            style={{
              backgroundImage: 'radial-gradient(#e5e0d3 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          >
            {/* Top header row */}
            <div className="flex items-center justify-between border-b border-stone-300/70 pb-4 mb-8">
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-stone-500 uppercase">
                <BookOpen className="h-3.5 w-3.5 text-rose-800" />
                <span>{letter.letterDate}</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
                title="Fold letter back"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Salutation */}
            <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-900 font-semibold mb-6 italic">
              {letter.salutation}
            </h3>

            {/* Paragraphs */}
            <div className="space-y-5 text-stone-800 font-serif-romantic text-lg sm:text-xl leading-relaxed">
              {letter.paragraphs.map((p, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                  className="whitespace-pre-line"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Closing & Signature */}
            <div className="mt-10 pt-6 border-t border-stone-300/70 text-right">
              <p className="font-serif-romantic text-lg text-stone-700 italic">
                {letter.closing}
              </p>
              <p className="font-serif-romantic text-2xl sm:text-3xl font-bold text-rose-900 mt-1 tracking-wide">
                {letter.signature}
              </p>
              {letter.postscript && (
                <p className="mt-6 text-left text-xs sm:text-sm font-sans-clean text-stone-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200/50">
                  {letter.postscript}
                </p>
              )}
            </div>

            {/* Gentle heart stamp watermark */}
            <div className="absolute bottom-6 left-8 opacity-10 pointer-events-none">
              <Heart className="h-28 w-28 text-rose-900 fill-rose-900" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
