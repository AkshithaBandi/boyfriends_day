import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Heart, Camera, Upload, X, BookmarkCheck, ChevronLeft, ChevronRight, Trash2, ZoomIn } from 'lucide-react';
import { useSep12Photos } from '@/src/utils/photoStorage';

interface MemoryGalleryProps {
  sep12Info: {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    caption: string;
  };
}

export const MemoryGallery: React.FC<MemoryGalleryProps> = ({ sep12Info }) => {
  const { photos, addPhotos, removePhoto, hasPhotos } = useSep12Photos();
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addPhotos(e.target.files);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! - 1 + photos.length) % photos.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! + 1) % photos.length);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Background glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-rose-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <BookmarkCheck className="h-3.5 w-3.5 text-rose-400" />
          <span>Keepsakes & Memories</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          {sep12Info.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-lg mx-auto">
          {sep12Info.caption}
        </p>

        {/* Add photos action button */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-rose-800 to-amber-700 hover:from-rose-700 hover:to-amber-600 text-white text-xs font-semibold shadow-xl transition-all cursor-pointer glow-romantic"
          >
            <Camera className="h-4 w-4" />
            <span>{hasPhotos ? `Add More Sep 12 Photos (${photos.length} uploaded)` : 'Upload Our September 12 Photos 📸'}</span>
          </button>
        </div>
      </div>

      {/* GALLERY GRID OF SEPTEMBER 12 PICTURES */}
      {hasPhotos ? (
        <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {photos.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800/80 shadow-xl cursor-pointer hover:border-rose-800/60 transition-all"
              onClick={() => setSelectedPhotoIndex(idx)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                <img
                  src={src}
                  alt={`Teja & Achii — September 12, 2026 (${idx + 1})`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <ZoomIn className="h-4 w-4" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
                  <span className="font-serif-romantic italic text-rose-200">
                    September 12, 2026 ❤️
                  </span>
                  <span className="text-[11px] font-mono text-stone-400">
                    #{idx + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Empty Upload Encouragement Card */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => fileInputRef.current?.click()}
          className="mb-20 rounded-3xl border-2 border-dashed border-zinc-800 hover:border-rose-800/60 bg-zinc-900/40 p-10 text-center flex flex-col items-center justify-center cursor-pointer group transition-all"
        >
          <div className="h-16 w-16 rounded-full bg-rose-950/80 border border-rose-700/60 flex items-center justify-center text-rose-400 mb-4 group-hover:scale-110 transition-transform">
            <Upload className="h-8 w-8" />
          </div>
          <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100">
            Upload Your September 12 Pictures Here
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-stone-400 max-w-md">
            Select all the photos you took together on September 12, 2026. You can choose multiple pictures at once!
          </p>
          <span className="mt-5 px-5 py-2 rounded-full bg-rose-900/80 text-white text-xs font-semibold">
            Choose Pictures From Your Device
          </span>
        </motion.div>
      )}

      {/* FULLSCREEN PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
            onClick={() => setSelectedPhotoIndex(null)}
          >
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Previous"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 z-20 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Next"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl"
            >
              <div className="relative max-h-[75vh] w-full flex items-center justify-center bg-black overflow-hidden">
                <img
                  src={photos[selectedPhotoIndex]}
                  alt={`Teja & Achii — September 12, 2026 (${selectedPhotoIndex + 1})`}
                  referrerPolicy="no-referrer"
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />
              </div>

              <div className="w-full p-4 sm:p-5 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                  <span className="font-serif-romantic text-base text-white">
                    Teja & Achii — September 12, 2026
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="font-mono text-stone-400">
                    {selectedPhotoIndex + 1} / {photos.length}
                  </span>
                  <button
                    onClick={() => {
                      removePhoto(selectedPhotoIndex);
                      if (photos.length <= 1) {
                        setSelectedPhotoIndex(null);
                      } else {
                        setSelectedPhotoIndex(Math.max(0, selectedPhotoIndex - 1));
                      }
                    }}
                    className="p-1.5 text-stone-500 hover:text-rose-400 transition-colors"
                    title="Delete this photo"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
