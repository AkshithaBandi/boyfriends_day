import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Heart, Quote, Camera, Sparkles, Upload } from 'lucide-react';
import { TimelineEvent } from '@/src/data/relationshipData';
import { useSep12Photos } from '@/src/utils/photoStorage';

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const { photos, primaryPhoto, addPhotos, hasPhotos } = useSep12Photos();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addPhotos(e.target.files);
    }
  };

  return (
    <section id="story" className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto overflow-hidden">
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
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-rose-950/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-950/15 rounded-full blur-[110px] pointer-events-none" />

      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Heart className="h-3.5 w-3.5 fill-rose-500/60 text-rose-400" />
          <span>Chapter By Chapter</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          Our Story
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          The exact milestones, the silence, the tears, and the miracle reunion that made us who we are today.
        </p>
      </div>

      <div className="relative">
        {/* Center vertical line on desktop, left line on mobile */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-rose-900/60 to-transparent" />

        <div className="space-y-12 sm:space-y-16">
          {events.map((event, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node pin */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-950 border-2 border-rose-500/80 shadow-lg glow-romantic">
                  <div className="h-2 w-2 rounded-full bg-rose-400" />
                </div>

                {/* Content Card container */}
                <div
                  className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                    isEven ? 'md:pl-10' : 'md:pr-10'
                  }`}
                >
                  <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-5 sm:p-6 backdrop-blur-sm shadow-xl hover:border-zinc-700/80 transition-all group">
                    {/* Unboxed metadata row */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-stone-400 mb-2">
                      <span className="flex items-center gap-1 text-rose-300 font-medium">
                        <Calendar className="h-3 w-3 text-rose-400" />
                        <span>{event.date}</span>
                      </span>
                      {event.location && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="flex items-center gap-1 text-stone-400">
                            <MapPin className="h-3 w-3 text-stone-500" />
                            <span>{event.location}</span>
                          </span>
                        </>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-romantic text-2xl text-stone-100 font-normal group-hover:text-rose-200 transition-colors">
                      {event.title}
                    </h3>

                    {/* September 12, 2026 Pictures Spotlight */}
                    {event.isSep12Picture && (
                      <div className="mt-4 relative rounded-xl overflow-hidden bg-zinc-950 border border-amber-500/30 p-3 glow-gold">
                        {hasPhotos ? (
                          <div className="relative aspect-video rounded-lg overflow-hidden">
                            <img
                              src={primaryPhoto!}
                              alt="Our September 12, 2026 Reunion"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs text-rose-200">
                              <span className="font-serif-romantic italic">
                                September 12, 2026 Pictures ({photos.length}) ❤️
                              </span>
                              <button
                                onClick={() => fileInputRef.current?.click()}
                                className="px-2 py-1 rounded bg-black/60 hover:bg-black/90 text-[10px] text-white flex items-center gap-1"
                              >
                                <Camera className="h-3 w-3" />
                                <span>Add more</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="py-6 px-4 text-center flex flex-col items-center">
                            <Sparkles className="h-5 w-5 text-amber-400 mb-2" />
                            <span className="text-xs uppercase tracking-wider text-amber-300 font-semibold">
                              Our September 12 Pictures
                            </span>
                            <p className="text-xs text-stone-400 mt-1 max-w-xs">
                              Tap below to add the pictures we took together on September 12th!
                            </p>
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="mt-3 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-700/80 hover:bg-amber-600 text-white text-xs font-medium transition-colors cursor-pointer"
                            >
                              <Upload className="h-3 w-3" />
                              <span>Select Photos</span>
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="mt-3 text-sm text-stone-300 leading-relaxed font-light">
                      {event.description}
                    </p>

                    {/* Quote if present */}
                    {event.quote && (
                      <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-start gap-2 text-xs italic font-serif-romantic text-rose-200/90">
                        <Quote className="h-3.5 w-3.5 text-rose-400 shrink-0 mt-0.5" />
                        <span>{event.quote}</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
