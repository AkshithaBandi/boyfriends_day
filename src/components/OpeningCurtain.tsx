import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, Volume2 } from 'lucide-react';
import { fireRomanticConfetti } from '@/src/utils/confetti';
import { romanticAudio } from '@/src/utils/audioSynth';

interface OpeningCurtainProps {
  boyfriendName: string;
  onOpen: () => void;
  audioUrl?: string;
}

export const OpeningCurtain: React.FC<OpeningCurtainProps> = ({
  boyfriendName,
  onOpen,
  audioUrl,
}) => {
  const [isOpening, setIsOpening] = useState(false);
  const [playMusicOnEnter, setPlayMusicOnEnter] = useState(true);

  const handleOpenSurprise = async () => {
    setIsOpening(true);
    fireRomanticConfetti();

    if (playMusicOnEnter) {
      try {
        await romanticAudio.play(audioUrl);
      } catch (err) {
        console.error("Audio init error:", err);
      }
    }

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <AnimatePresence>
      {!isOpening ? (
        <motion.div
          key="curtain"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-zinc-950 px-6 text-center overflow-hidden"
        >
          {/* Ambient background glows */}
          <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-rose-950/40 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-amber-950/30 blur-3xl" />
          
          {/* Subtle floating ambient specks */}
          <div className="pointer-events-none absolute inset-0 bg-film-grain opacity-60" />

          {/* Floating animated sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  y: '100vh',
                  x: `${(i * 9 + 5) % 100}vw`,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  y: '-10vh',
                  opacity: [0, 0.7, 0],
                  scale: [0.6, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 + (i % 5) * 2,
                  repeat: Infinity,
                  delay: i * 0.7,
                  ease: 'easeInOut',
                }}
                className="absolute text-rose-300/40"
              >
                <Sparkles className="h-4 w-4" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10 max-w-lg flex flex-col items-center"
          >
            {/* Soft glowing icon */}
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
              className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-rose-950/60 border border-rose-800/40 text-rose-400 shadow-xl glow-romantic"
            >
              <Heart className="h-8 w-8 fill-rose-500/80 text-rose-300" />
            </motion.div>

            {/* Main Greeting */}
            <h1 className="font-serif-romantic text-4xl sm:text-5xl md:text-6xl font-normal tracking-wide text-stone-100">
              Hey, {boyfriendName} ❤️
            </h1>

            {/* Subtext */}
            <p className="mt-4 text-base sm:text-lg text-stone-400 font-light tracking-wide">
              I made something for you...
            </p>

            {/* Playful Warning */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-900/40 bg-rose-950/30 px-4 py-1.5 text-xs text-rose-300/90 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span>Warning: You might smile a lot.</span>
            </div>

            {/* Call to action button */}
            <motion.button
              onClick={handleOpenSurprise}
              whileHover={{ scale: 1.03, boxShadow: '0 0 35px rgba(225, 29, 72, 0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-rose-700 via-rose-600 to-amber-700 px-8 py-4 text-base font-medium text-white shadow-2xl transition-all duration-300 hover:from-rose-600 hover:to-amber-600"
            >
              <span className="relative z-10 flex items-center gap-2 tracking-wide font-sans-clean">
                Open Your Surprise →
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>

            {/* Music opt-in toggle */}
            <div className="mt-6 flex items-center gap-2 text-xs text-stone-500">
              <button
                type="button"
                onClick={() => setPlayMusicOnEnter(!playMusicOnEnter)}
                className="flex items-center gap-1.5 hover:text-stone-300 transition-colors focus:outline-none"
              >
                <Volume2 className={`h-3.5 w-3.5 ${playMusicOnEnter ? 'text-rose-400' : 'text-stone-600'}`} />
                <span>{playMusicOnEnter ? 'Music: Ed Sheeran – Perfect 🎵' : 'Music muted'}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
