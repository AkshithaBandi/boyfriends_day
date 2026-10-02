import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, X, KeyRound } from 'lucide-react';

interface SecretEasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
  secret: {
    secretTitle: string;
    secretMessage: string;
    secretDate: string;
  };
}

export const SecretEasterEggModal: React.FC<SecretEasterEggModalProps> = ({
  isOpen,
  onClose,
  secret,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 text-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-md w-full rounded-3xl bg-zinc-950 border border-amber-500/50 p-6 sm:p-8 shadow-2xl overflow-hidden glow-gold"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-stone-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-amber-950/60 border border-amber-500/60 flex items-center justify-center text-amber-300 mb-4">
              <KeyRound className="h-8 w-8" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              Hidden Vault Unlocked
            </span>
            <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100 mt-1">
              {secret.secretTitle}
            </h3>

            <p className="mt-5 text-sm text-stone-200 leading-relaxed font-light bg-zinc-900/60 p-4 rounded-xl border border-zinc-800 text-left">
              "{secret.secretMessage}"
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs text-amber-300/80 font-mono">
              <Sparkles className="h-3 w-3 text-amber-400" />
              <span>{secret.secretDate}</span>
            </div>

            <button
              onClick={onClose}
              className="mt-6 px-6 py-2 rounded-full bg-amber-600/90 hover:bg-amber-500 text-zinc-950 font-semibold text-xs transition-colors"
            >
              My lips are sealed 🤫
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
