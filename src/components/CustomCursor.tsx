import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch devices to avoid cursor interference on mobile
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.getAttribute('role') === 'button' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.classList.contains('cursor-pointer');
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Primary delicate glowing dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 1.6 : 1})`,
          width: '10px',
          height: '10px',
          backgroundColor: '#f43f5e',
          boxShadow: '0 0 12px 2px rgba(244, 63, 94, 0.7)',
        }}
      />
      {/* Soft trailing romantic halo */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-40 rounded-full transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isPointer ? 2.2 : 1})`,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(251, 113, 133, 0.35)',
          backgroundColor: 'rgba(225, 29, 72, 0.05)',
        }}
      />
    </>
  );
};
