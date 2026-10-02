import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Sparkles, X } from 'lucide-react';
import { triggerHeartShower, fireRomanticConfetti } from '@/src/utils/confetti';

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
  boyfriendName: string;
  surpriseData: {
    firstMessage: string;
    secondMessage: string;
    thirdMessage: string;
    finalLoveDeclaration: string;
  };
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({
  isOpen,
  onClose,
  boyfriendName,
  surpriseData,
}) => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      fireRomanticConfetti();
      triggerHeartShower();

      const t1 = setTimeout(() => {
        setStep(2);
      }, 2200);

      const t2 = setTimeout(() => {
        setStep(3);
        fireRomanticConfetti();
      }, 4500);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 text-center"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900/80 text-stone-400 hover:text-white transition-colors"
          aria-label="Close surprise"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="relative max-w-xl w-full flex flex-col items-center">
          {/* Beating Heart Icon */}
          <motion.div
            animate={{ scale: [1, 1.25, 1, 1.25, 1] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-rose-950/80 border-2 border-rose-500 shadow-2xl glow-romantic"
          >
            <Heart className="h-12 w-12 fill-rose-500 text-rose-300" />
          </motion.div>

          {/* Sequential reveals */}
          {step >= 1 && (
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif-romantic text-3xl sm:text-5xl text-stone-100 font-normal"
            >
              {surpriseData.firstMessage}
            </motion.h3>
          )}

          {step >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 font-serif-romantic text-2xl sm:text-4xl text-rose-300 font-light"
            >
              Happy Boyfriend's Day, {boyfriendName}.
            </motion.p>
          )}

          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-8 flex flex-col items-center"
            >
              <span className="font-serif-romantic text-4xl sm:text-6xl text-amber-200 font-semibold tracking-wide">
                I love you.
              </span>
              <p className="mt-3 text-sm sm:text-base text-stone-400 font-light max-w-md">
                {surpriseData.finalLoveDeclaration}
              </p>

              <button
                onClick={onClose}
                className="mt-10 inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-rose-700 to-amber-700 text-white font-medium text-sm shadow-xl hover:scale-105 transition-transform"
              >
                <Sparkles className="h-4 w-4 text-amber-200" />
                <span>Keep This In Your Heart Forever</span>
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
