import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Sparkles, MailOpen, Gift } from 'lucide-react';
import { OpenWhenMessage } from '@/src/data/relationshipData';

interface OpenWhenProps {
  messages: OpenWhenMessage[];
}

export const OpenWhen: React.FC<OpenWhenProps> = ({ messages }) => {
  const [selectedMessage, setSelectedMessage] = useState<OpenWhenMessage | null>(null);

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-rose-950/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <MailOpen className="h-3.5 w-3.5 text-rose-400" />
          <span>Emergency Comfort</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          Open When...
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-lg mx-auto">
          Little emotional envelopes you can unseal whenever you need a piece of my heart.
        </p>
      </div>

      {/* Grid of Open When envelopes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {messages.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedMessage(item)}
            className="group relative rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 backdrop-blur-sm shadow-xl hover:border-rose-800/60 transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl select-none">{item.emoji}</span>
                <span className="text-[11px] uppercase tracking-wider text-rose-400/80 font-medium flex items-center gap-1">
                  <span>Open note</span>
                  <Sparkles className="h-3 w-3" />
                </span>
              </div>

              <h3 className="font-serif-romantic text-2xl text-stone-100 font-normal group-hover:text-rose-200 transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-stone-400 font-light">
                {item.subtitle}
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-xs text-stone-500">
              <span>A note just for you</span>
              <Heart className="h-3 w-3 fill-rose-500/40 text-rose-500 group-hover:fill-rose-500 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {selectedMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
            onClick={() => setSelectedMessage(null)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.93, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-3xl bg-zinc-950 border border-rose-900/50 p-6 sm:p-8 shadow-2xl overflow-hidden glow-romantic"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMessage(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-stone-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedMessage.emoji}</span>
                <div>
                  <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100">
                    {selectedMessage.title}
                  </h3>
                  <p className="text-xs text-rose-400">{selectedMessage.subtitle}</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="mt-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 p-5 sm:p-6 text-stone-200 text-sm sm:text-base font-light leading-relaxed whitespace-pre-line max-h-[60vh] overflow-y-auto">
                {selectedMessage.message}
              </div>

              {/* Advice */}
              {selectedMessage.advice && (
                <div className="mt-4 p-4 rounded-xl bg-rose-950/30 border border-rose-900/40 text-xs text-rose-200">
                  <strong className="block font-semibold mb-1 text-rose-300">My Little Request:</strong>
                  {selectedMessage.advice}
                </div>
              )}

              {/* Virtual Gift */}
              {selectedMessage.virtualGift && (
                <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-200">
                  <Gift className="h-4 w-4 text-amber-400 shrink-0" />
                  <span>{selectedMessage.virtualGift}</span>
                </div>
              )}

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedMessage(null)}
                  className="px-6 py-2 rounded-full bg-rose-900/80 hover:bg-rose-800 text-white text-xs font-medium transition-colors"
                >
                  I'm holding onto this ❤️
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
