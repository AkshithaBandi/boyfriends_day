import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Music, VolumeX, Sparkles, BookOpen } from 'lucide-react';
import { romanticAudio } from '@/src/utils/audioSynth';

interface NavigationProps {
  boyfriendName: string;
  myName: string;
  onOpenSecret: () => void;
  onOpenGuide: () => void;
  onTriggerSurprise: () => void;
  audioUrl?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  boyfriendName,
  myName,
  onOpenSecret,
  onOpenGuide,
  onTriggerSurprise,
  audioUrl,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heartClicks, setHeartClicks] = useState(0);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const unsubscribe = romanticAudio.subscribe((playing) => {
      setIsPlayingMusic(playing);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      unsubscribe();
    };
  }, []);

  const handleHeartClick = () => {
    const newCount = heartClicks + 1;
    setHeartClicks(newCount);
    if (newCount >= 5) {
      setHeartClicks(0);
      onOpenSecret();
    }
  };

  const toggleMusic = async () => {
    await romanticAudio.togglePlay(audioUrl);
  };

  const navLinks = [
    { label: 'Story', href: '#story' },
    { label: 'Moments', href: '#gallery' },
    { label: 'Things I Love', href: '#things-i-love' },
    { label: 'Letter', href: '#letter' },
    { label: 'Quiz', href: '#quiz' },
    { label: 'Reasons', href: '#reasons' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl transition-all duration-300 rounded-full px-5 py-2.5 sm:py-3 ${
          isScrolled
            ? 'bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 shadow-2xl shadow-black/60'
            : 'bg-zinc-950/40 backdrop-blur-sm border border-white/5'
        }`}
      >
        {/* Zone 1: Single text element wordmark + secret click */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleHeartClick}
            title={heartClicks > 0 ? `${5 - heartClicks} taps left to secret...` : 'Maya & Alex'}
            className="group flex items-center gap-2 text-stone-100 hover:text-rose-300 transition-colors focus:outline-none"
          >
            <span className="relative flex items-center justify-center">
              <Heart
                className={`h-4 w-4 transition-transform duration-300 ${
                  heartClicks > 0 ? 'scale-125 fill-rose-500 text-rose-500' : 'fill-rose-500/70 text-rose-400 group-hover:scale-110'
                }`}
              />
              {heartClicks > 0 && (
                <span className="absolute -top-2 -right-2 text-[10px] font-mono text-rose-400 font-bold">
                  {heartClicks}
                </span>
              )}
            </span>
            <span className="font-serif-romantic text-lg sm:text-xl tracking-wide font-medium">
              {myName} & {boyfriendName}
            </span>
          </button>
        </div>

        {/* Zone 2: Clean 4-6 text navigation links (desktop) */}
        <nav className="hidden md:flex items-center gap-6 text-xs lg:text-sm font-medium text-stone-300">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="hover:text-rose-300 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions (Music toggle + Final Surprise trigger + Mobile menu) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Visualizer Button */}
          <button
            onClick={toggleMusic}
            title={isPlayingMusic ? 'Pause Music' : 'Play Romantic Music'}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isPlayingMusic
                ? 'bg-rose-950/80 border border-rose-700/60 text-rose-200'
                : 'bg-zinc-900 border border-zinc-800 text-stone-400 hover:text-stone-200'
            }`}
          >
            {isPlayingMusic ? (
              <>
                <Music className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
                <span className="flex items-center gap-0.5 h-3">
                  <span className="w-0.5 bg-rose-400 h-2 animate-bounce" />
                  <span className="w-0.5 bg-rose-300 h-3 animate-bounce [animation-delay:0.15s]" />
                  <span className="w-0.5 bg-rose-400 h-1.5 animate-bounce [animation-delay:0.3s]" />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Play</span>
              </>
            )}
          </button>

          {/* Quick Guide Button */}
          <button
            onClick={onOpenGuide}
            title="How to personalize website"
            className="p-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-stone-400 hover:text-amber-300 hover:border-amber-900/50 transition-colors"
          >
            <BookOpen className="h-3.5 w-3.5" />
          </button>

          {/* Surprise CTA button */}
          <button
            onClick={onTriggerSurprise}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-900/90 to-burgundy-900/90 border border-rose-700/40 text-xs font-medium text-rose-100 hover:from-rose-800 hover:to-burgundy-800 transition-colors cursor-pointer"
          >
            <Sparkles className="h-3 w-3 text-amber-300" />
            <span>Surprise</span>
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-stone-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-18 z-50 rounded-2xl bg-zinc-950/95 border border-zinc-800/90 p-5 shadow-2xl backdrop-blur-xl md:hidden animate-in fade-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between py-2 text-left text-sm font-medium text-stone-200 border-b border-zinc-800/60 hover:text-rose-400 transition-colors"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600">→</span>
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTriggerSurprise();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-rose-700 to-amber-700 text-white text-xs font-semibold shadow-lg"
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-200" />
                <span>One Last Thing... (Surprise)</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuide();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-stone-300 text-xs"
              >
                <BookOpen className="h-3.5 w-3.5 text-amber-400" />
                <span>How to Personalize This Site</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
