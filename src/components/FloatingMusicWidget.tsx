import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { romanticAudio } from '@/src/utils/audioSynth';

interface FloatingMusicWidgetProps {
  songTitle: string;
  artist: string;
  audioUrl?: string;
}

export const FloatingMusicWidget: React.FC<FloatingMusicWidgetProps> = ({
  songTitle,
  artist,
  audioUrl,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const unsub = romanticAudio.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsub;
  }, []);

  const handleToggle = async () => {
    await romanticAudio.togglePlay(audioUrl);
  };

  const handleMute = () => {
    if (isMuted) {
      romanticAudio.setVolume(0.4);
      setIsMuted(false);
    } else {
      romanticAudio.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-950/90 border border-zinc-800 backdrop-blur-md shadow-2xl text-xs"
          >
            <div className="flex flex-col text-left">
              <span className="font-serif-romantic text-sm text-stone-100 font-medium leading-none">
                {songTitle}
              </span>
              <span className="text-[10px] text-stone-400 mt-0.5">{artist}</span>
            </div>

            <button
              onClick={handleMute}
              className="p-1 rounded-full text-stone-400 hover:text-white transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.button
        onClick={() => {
          if (!isExpanded) {
            setIsExpanded(true);
          }
          handleToggle();
        }}
        onMouseEnter={() => setIsExpanded(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-2xl transition-all cursor-pointer focus:outline-none ${
          isPlaying
            ? 'bg-rose-900 border-2 border-rose-500 text-rose-100 glow-romantic'
            : 'bg-zinc-900 border border-zinc-800 text-stone-400 hover:text-white'
        }`}
        aria-label={isPlaying ? 'Pause soundtrack' : 'Play soundtrack'}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Pause className="h-5 w-5 fill-white text-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
            </span>
          </div>
        ) : (
          <Music className="h-5 w-5" />
        )}
      </motion.button>
    </div>
  );
};
