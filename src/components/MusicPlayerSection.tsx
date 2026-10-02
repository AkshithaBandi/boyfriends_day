import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Play, Pause, Disc, Volume2, VolumeX, Sparkles, Heart } from 'lucide-react';
import { romanticAudio } from '@/src/utils/audioSynth';

interface MusicPlayerSectionProps {
  song: {
    title: string;
    artist: string;
    album: string;
    albumArt?: string;
    audioUrl?: string;
    durationSeconds: number;
    favoriteLyric: string;
  };
}

export const MusicPlayerSection: React.FC<MusicPlayerSectionProps> = ({ song }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(song.durationSeconds || 261);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const unsub = romanticAudio.subscribe((playing, current, dur) => {
      setIsPlaying(playing);
      setCurrentTime(current);
      if (dur && !isNaN(dur) && dur > 0) {
        setDuration(dur);
      }
    });
    return unsub;
  }, []);

  const handleToggle = async () => {
    await romanticAudio.togglePlay(song.audioUrl);
  };

  const handleMuteToggle = () => {
    if (isMuted) {
      romanticAudio.setVolume(0.4);
      setIsMuted(false);
    } else {
      romanticAudio.setVolume(0);
      setIsMuted(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetSeconds = ratio * duration;
    romanticAudio.seek(targetSeconds);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Disc className="h-3.5 w-3.5 text-rose-400" />
          <span>Our Soundtrack</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          This One Reminds Me of You
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          Every note takes me right back to riding shotgun with you and watching the world roll by.
        </p>
      </div>

      {/* Modern Vinyl & Music Player Card */}
      <div className="relative rounded-3xl bg-zinc-900/60 border border-zinc-800/80 p-6 sm:p-10 backdrop-blur-md shadow-2xl overflow-hidden glow-romantic">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Spinning Vinyl & Album Art */}
          <div className="relative shrink-0">
            {/* Vinyl record disc peeking behind album art */}
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute -right-6 -top-2 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-zinc-950 border-4 border-zinc-800 shadow-2xl flex items-center justify-center pointer-events-none opacity-90 hidden sm:flex"
            >
              {/* Grooves */}
              <div className="w-36 h-36 rounded-full border border-zinc-800/70 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-zinc-800/60 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-rose-900 border-2 border-rose-500/80 flex items-center justify-center">
                    <Heart className="h-4 w-4 fill-white text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Album Cover */}
            <div className="relative z-10 w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shadow-2xl border border-zinc-700/60 bg-gradient-to-br from-cyan-950 via-zinc-950 to-blue-950 flex flex-col items-center justify-center p-6 text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400/90 font-mono select-none tracking-tighter">
                ÷
              </div>
              <span className="font-serif-romantic text-base sm:text-lg text-white font-medium mt-2">
                PERFECT
              </span>
              <span className="text-[11px] text-cyan-300/80 uppercase tracking-widest mt-0.5">
                Ed Sheeran
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Song Details & Controls */}
          <div className="flex-1 w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-between text-xs text-rose-400 font-medium mb-1">
              <span>{song.album}</span>
              <span className="hidden md:inline-flex items-center gap-1 text-stone-500">
                <Sparkles className="h-3 w-3 text-amber-400" />
                <span>On Repeat</span>
              </span>
            </div>

            <h3 className="font-serif-romantic text-3xl sm:text-4xl text-stone-100 font-normal">
              {song.title}
            </h3>
            <p className="text-base text-stone-400 mt-1 font-light">
              {song.artist}
            </p>

            {/* Lyric Quote */}
            <blockquote className="mt-5 p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-xs sm:text-sm italic font-serif-romantic text-stone-300 text-balance">
              {song.favoriteLyric}
            </blockquote>

            {/* Progress & Waveform */}
            <div className="mt-6">
              {/* Animated Waveform equalizer bars when playing */}
              <div className="flex items-center justify-center md:justify-start gap-1 h-6 mb-2">
                {[12, 24, 18, 28, 16, 22, 10, 26, 14, 20, 30, 18, 12, 24].map((h, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      height: isPlaying ? [6, h, 8, h * 0.8, 6] : 4,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.9 + (i % 3) * 0.2,
                      ease: 'easeInOut',
                    }}
                    className={`w-1 rounded-full ${
                      isPlaying ? 'bg-rose-500' : 'bg-zinc-800'
                    }`}
                  />
                ))}
              </div>

              {/* Progress bar */}
              <div
                onClick={handleSeek}
                className="relative h-2 w-full rounded-full bg-zinc-800 cursor-pointer overflow-hidden group"
              >
                <div
                  className="h-full bg-gradient-to-r from-rose-600 to-amber-500 rounded-full transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              <div className="flex justify-between text-[11px] text-stone-500 mt-1 font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Main Play / Pause Controls */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-6">
              <button
                onClick={handleToggle}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-rose-700 to-rose-500 text-white shadow-xl hover:scale-105 active:scale-95 transition-all glow-romantic cursor-pointer focus:outline-none"
                aria-label={isPlaying ? 'Pause song' : 'Play song'}
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 fill-white" />
                ) : (
                  <Play className="h-6 w-6 fill-white translate-x-0.5" />
                )}
              </button>

              <button
                onClick={handleMuteToggle}
                className="p-3 rounded-full bg-zinc-950 border border-zinc-800 text-stone-400 hover:text-stone-200 transition-colors"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>

              <div className="text-xs text-stone-500 font-light hidden sm:block">
                {isPlaying ? "Playing melody..." : "Click to start our song"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
