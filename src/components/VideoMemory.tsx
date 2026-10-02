import React, { useState, useRef } from 'react';
import { Play, Pause, Maximize, Film, Volume2, VolumeX } from 'lucide-react';

interface VideoMemoryProps {
  video: {
    isEnabled: boolean;
    title: string;
    subtitle: string;
    videoUrl?: string;
    posterUrl: string;
    caption: string;
    quote: string;
  };
}

export const VideoMemory: React.FC<VideoMemoryProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if (!video.isEnabled) return null;

  const togglePlay = () => {
    if (!videoRef.current) {
      setIsPlaying(!isPlaying);
      return;
    }

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <Film className="h-3.5 w-3.5 text-rose-400" />
          <span>Motion Keepsake</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          {video.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          {video.subtitle}
        </p>
      </div>

      <div className="relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl glow-romantic">
        <div className="relative aspect-video w-full bg-black flex items-center justify-center group">
          {video.videoUrl ? (
            <video
              ref={videoRef}
              src={video.videoUrl}
              poster={video.posterUrl}
              className="w-full h-full object-cover"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
          ) : (
            /* Elegant cinematic animated poster placeholder */
            <div className="relative w-full h-full">
              <img
                src={video.posterUrl}
                alt="Video memory placeholder"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

              {/* Simulation note if no custom mp4 is provided */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={togglePlay}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-rose-600/90 hover:bg-rose-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all glow-romantic cursor-pointer mb-4"
                  aria-label="Play video memory"
                >
                  {isPlaying ? (
                    <Pause className="h-8 w-8 fill-white" />
                  ) : (
                    <Play className="h-8 w-8 fill-white translate-x-1" />
                  )}
                </button>
                <p className="font-serif-romantic text-lg sm:text-xl text-stone-100 italic">
                  {isPlaying ? "Reliving this moment in our hearts..." : video.caption}
                </p>
              </div>
            </div>
          )}

          {/* Video bottom control bar */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-stone-300">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 fill-white" />}
              </button>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <span className="font-serif-romantic italic text-stone-200 hidden sm:inline">
                {video.quote}
              </span>
            </div>

            <button
              onClick={handleFullscreen}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors"
              title="Fullscreen"
            >
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
