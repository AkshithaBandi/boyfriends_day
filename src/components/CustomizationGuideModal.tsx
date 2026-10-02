import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, FileCode, Image, Music, Video, Heart, CheckCircle2 } from 'lucide-react';

interface CustomizationGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomizationGuideModal: React.FC<CustomizationGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl max-h-[90vh] w-full overflow-y-auto rounded-3xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 shadow-2xl text-left"
        >
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-rose-950/70 border border-rose-800 text-rose-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif-romantic text-2xl text-stone-100 font-normal">
                  How to Personalize This Website
                </h3>
                <p className="text-xs text-stone-400">
                  Quick reference guide for editing your memories, photos, and music.
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-900 text-stone-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 space-y-6 text-sm text-stone-300">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-rose-300 font-semibold mb-2">
                <FileCode className="h-4 w-4 text-rose-400" />
                <span>1. Edit the Central Configuration File</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Everything on the website is configured in one single file:
              </p>
              <code className="block bg-zinc-950 p-2.5 rounded-lg font-mono text-xs text-rose-300 border border-zinc-800">
                src/data/relationshipData.ts
              </code>
              <ul className="mt-3 space-y-1.5 text-xs text-stone-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span><strong>boyfriendName & myName:</strong> Change "Alex" and "Maya" to your real names.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span><strong>relationshipStartDate:</strong> Set your exact anniversary date (e.g., <code className="font-mono text-rose-300">"2023-10-03T19:00:00"</code>).</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span><strong>loveLetter:</strong> Customize the heartfelt paragraphs and postscript.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span><strong>quiz:</strong> Customize your 5 relationship quiz questions and inside jokes.</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-amber-300 font-semibold mb-2">
                <Image className="h-4 w-4 text-amber-400" />
                <span>2. Adding Your Own Photos</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-2">
                Drop your photo files into:
              </p>
              <code className="block bg-zinc-950 p-2 rounded-lg font-mono text-xs text-amber-300 border border-zinc-800 mb-2">
                /public/images/photo1.jpg, photo2.jpg, ...
              </code>
              <p className="text-xs text-stone-400 leading-relaxed">
                Then in <code className="font-mono text-rose-300">relationshipData.ts</code>, set the <code className="font-mono text-stone-200">url: "/images/photo1.jpg"</code> inside the <code className="font-mono text-stone-200">photos</code> array.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-pink-300 font-semibold mb-2">
                <Music className="h-4 w-4 text-pink-400" />
                <span>3. Adding Your Special Song</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed mb-2">
                The website already includes a built-in romantic ambient chime synthesizer that plays out-of-the-box!
                To use your own MP3, place it at:
              </p>
              <code className="block bg-zinc-950 p-2 rounded-lg font-mono text-xs text-pink-300 border border-zinc-800 mb-2">
                /public/audio/our-song.mp3
              </code>
              <p className="text-xs text-stone-400">
                And set <code className="font-mono text-stone-200">audioUrl: "/audio/our-song.mp3"</code> in <code className="font-mono text-rose-300">relationshipData.ts</code>.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
              <div className="flex items-center gap-2 text-indigo-300 font-semibold mb-2">
                <Video className="h-4 w-4 text-indigo-400" />
                <span>4. Optional Video Memory</span>
              </div>
              <p className="text-xs text-stone-400 leading-relaxed">
                Add an MP4 to <code className="font-mono text-stone-200">/public/video/our-clip.mp4</code> and set <code className="font-mono text-stone-200">videoUrl: "/video/our-clip.mp4"</code> in the <code className="font-mono text-stone-200">videoMemory</code> config section, or set <code className="font-mono text-stone-200">isEnabled: false</code> to hide it.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-rose-900 hover:bg-rose-800 text-white text-xs font-medium transition-colors"
            >
              Got it, thank you! ❤️
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
