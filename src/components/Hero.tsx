import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowDown, Camera, Heart, Upload, ChevronLeft, ChevronRight } from 'lucide-react';
import { useSep12Photos } from '@/src/utils/photoStorage';

interface HeroProps {
  headline: string;
  subtitle: string;
  scrollIndicatorText: string;
  boyfriendName: string;
  heroImageCaption: string;
}

export const Hero: React.FC<HeroProps> = ({
  headline,
  subtitle,
  scrollIndicatorText,
  boyfriendName,
  heroImageCaption,
}) => {
  const { photos, addPhotos, hasPhotos } = useSep12Photos();
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Auto-rotate if multiple photos exist
  useEffect(() => {
    if (photos.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 4500);
      return () => clearInterval(interval);
    }
  }, [photos.length]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addPhotos(e.target.files);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Hidden file input for uploading multiple Sep 12 photos */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-amber-950/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Romantic kicker */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-300/80 mb-4"
        >
          <Sparkles className="h-3 w-3 text-rose-400" />
          <span>A Love Story For {boyfriendName}</span>
          <Sparkles className="h-3 w-3 text-rose-400" />
        </motion.div>

        {/* Cinematic Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-serif-romantic text-4xl sm:text-6xl md:text-7xl font-normal text-stone-100 leading-[1.12] tracking-normal text-balance max-w-3xl"
        >
          {headline}
        </motion.h1>

        {/* Emotional Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-stone-300 font-light max-w-2xl leading-relaxed text-balance"
        >
          {subtitle}
        </motion.p>

        {/* Framed Cinematic Card — Dedicated to September 12, 2026 Pictures */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.45 }}
          className="mt-12 relative w-full max-w-2xl rounded-3xl overflow-hidden p-3 sm:p-4 bg-gradient-to-b from-stone-800/40 via-zinc-900/60 to-zinc-950/80 border border-stone-800/60 shadow-2xl glow-romantic"
        >
          <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-zinc-950 flex flex-col items-center justify-center p-6 text-center border border-zinc-800/50">
            {hasPhotos ? (
              /* Display the user's actual September 12 pictures with slideshow controls */
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={photos[currentIndex % photos.length]}
                    alt={`Teja & Achii — September 12, 2026 (#${currentIndex + 1})`}
                    referrerPolicy="no-referrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover object-center rounded-xl"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent pointer-events-none rounded-xl" />

                {/* Left/Right controls if multiple photos */}
                {photos.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}

                {/* Bottom caption with photo counter */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-left">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-rose-300 font-semibold">
                      September 12, 2026 ❤️
                    </span>
                    <p className="font-serif-romantic text-base sm:text-lg text-stone-100">
                      Our pictures together from the day we reunited.
                    </p>
                  </div>
                  {photos.length > 1 && (
                    <span className="text-xs font-mono text-stone-300 bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
                      {currentIndex + 1} / {photos.length}
                    </span>
                  )}
                </div>

                {/* Add more photos button */}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-xs text-stone-300 flex items-center gap-1.5 backdrop-blur-sm transition-colors cursor-pointer"
                >
                  <Camera className="h-3.5 w-3.5 text-rose-400" />
                  <span>Add / Manage Photos ({photos.length})</span>
                </button>
              </div>
            ) : (
              /* Romantic Keepsake Frame when photos are waiting to be added */
              <div className="flex flex-col items-center justify-center max-w-md my-auto">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose-950/80 border border-rose-700/50 text-rose-300 mb-4 shadow-xl glow-romantic">
                  <Heart className="h-7 w-7 fill-rose-500/60" />
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-rose-400 font-medium">
                  September 12, 2026
                </span>
                <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100 mt-1">
                  Our September 12 Pictures ❤️
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                  All the memories and beautiful pictures we took together when we reunited on September 12, 2026.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-rose-800 to-amber-700 hover:from-rose-700 hover:to-amber-600 text-white text-xs font-semibold shadow-lg transition-all cursor-pointer"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    <span>Upload Our September 12 Pictures</span>
                  </button>
                </div>
                <p className="mt-2 text-[11px] text-stone-500">
                  (You can select multiple photos at once from your phone or PC)
                </p>
              </div>
            )}
          </div>

          <div className="p-3 text-center">
            <p className="text-xs text-stone-400 italic font-serif-romantic">
              {heroImageCaption}
            </p>
          </div>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.a
          href="#counter"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 inline-flex flex-col items-center gap-2 text-stone-400 hover:text-rose-300 transition-colors cursor-pointer group"
        >
          <span className="text-xs tracking-wider uppercase font-medium text-stone-400 group-hover:text-rose-300 transition-colors">
            {scrollIndicatorText}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-4 w-4 text-rose-400/80" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
};
