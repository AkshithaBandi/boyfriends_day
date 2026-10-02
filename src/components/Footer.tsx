import React, { useState } from 'react';
import { Heart, Sparkles, BookOpen, ArrowUp } from 'lucide-react';

interface FooterProps {
  myName: string;
  boyfriendName: string;
  onOpenGuide: () => void;
  onOpenSecret: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  myName,
  boyfriendName,
  onOpenGuide,
  onOpenSecret,
}) => {
  const [starClicks, setStarClicks] = useState(0);

  const handleStarClick = () => {
    const next = starClicks + 1;
    setStarClicks(next);
    if (next >= 3) {
      setStarClicks(0);
      onOpenSecret();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 border-t border-zinc-900 bg-zinc-950/90 text-stone-400 text-xs">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Made with love */}
        <div className="flex items-center gap-2 text-stone-400">
          <span>Made with endless love</span>
          <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500 animate-pulse" />
          <span>by {myName} for {boyfriendName}</span>
        </div>

        {/* Center: Secret star & personalization guide */}
        <div className="flex items-center gap-6">
          <button
            onClick={onOpenGuide}
            className="flex items-center gap-1.5 text-stone-400 hover:text-amber-300 transition-colors"
          >
            <BookOpen className="h-3.5 w-3.5 text-amber-400" />
            <span>Personalization Guide</span>
          </button>

          <button
            onClick={handleStarClick}
            title={starClicks > 0 ? `${3 - starClicks} more clicks...` : 'A hidden sparkle'}
            className="p-1 text-stone-600 hover:text-amber-400 transition-colors focus:outline-none"
          >
            <Sparkles className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Right: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
};
