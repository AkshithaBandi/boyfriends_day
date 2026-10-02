import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Heart } from 'lucide-react';

interface LoveCounterProps {
  startDateStr: string;
  patchUpDateStr?: string;
}

interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalDays: number;
}

export const LoveCounter: React.FC<LoveCounterProps> = ({ startDateStr, patchUpDateStr }) => {
  const [activeTab, setActiveTab] = useState<'proposal' | 'patchup'>('proposal');
  const [diff, setDiff] = useState<TimeDifference>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0,
  });

  const targetDateStr = activeTab === 'patchup' && patchUpDateStr ? patchUpDateStr : startDateStr;

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(targetDateStr).getTime();
      const now = Date.now();
      const deltaMs = Math.max(0, now - start);

      const totalDays = Math.floor(deltaMs / (1000 * 60 * 60 * 24));
      
      const startDate = new Date(targetDateStr);
      const currentDate = new Date();

      let years = currentDate.getFullYear() - startDate.getFullYear();
      let months = currentDate.getMonth() - startDate.getMonth();
      let days = currentDate.getDate() - startDate.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += prevMonthDate.getDate();
      }

      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      setDiff({
        years: Math.max(0, years),
        months: Math.max(0, months),
        days: Math.max(0, days),
        hours,
        minutes,
        seconds,
        totalDays,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  const units = [
    { label: 'Years', value: diff.years },
    { label: 'Months', value: diff.months },
    { label: 'Days', value: diff.days },
    { label: 'Hours', value: diff.hours },
    { label: 'Minutes', value: diff.minutes },
    { label: 'Seconds', value: diff.seconds },
  ];

  return (
    <section id="counter" className="relative py-20 px-4 sm:px-6 bg-zinc-950/70 border-y border-zinc-900/80">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section kicker */}
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-rose-400 font-medium mb-3">
          <Clock className="h-3.5 w-3.5 text-rose-400" />
          <span>Every Second Counts</span>
        </div>

        <h2 className="font-serif-romantic text-3xl sm:text-4xl md:text-5xl text-stone-100 font-normal">
          Time Since You Became My Favorite Person
        </h2>

        {/* Tab switcher for Proposal vs Reunion */}
        {patchUpDateStr && (
          <div className="mt-6 inline-flex p-1 bg-zinc-900/80 rounded-xl border border-zinc-800">
            <button
              onClick={() => setActiveTab('proposal')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'proposal'
                  ? 'bg-rose-900 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Since Achii Proposed (June 27, 2023)
            </button>
            <button
              onClick={() => setActiveTab('patchup')}
              className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'patchup'
                  ? 'bg-rose-900 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Since Miracle Patch-Up (Sep 8, 2026)
            </button>
          </div>
        )}

        <p className="mt-4 text-sm sm:text-base text-stone-400 max-w-lg mx-auto">
          {activeTab === 'proposal' ? (
            <>
              Over <span className="font-semibold text-rose-300 font-mono tabular-nums">{diff.totalDays.toLocaleString()} days</span> since the day I proposed and you said yes.
            </>
          ) : (
            <>
              <span className="font-semibold text-rose-300 font-mono tabular-nums">{diff.totalDays.toLocaleString()} days</span> of our second chance, falling in love all over again.
            </>
          )}
        </p>

        {/* Counter Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 max-w-3xl mx-auto">
          {units.map((unit) => (
            <motion.div
              key={unit.label}
              whileHover={{ y: -3 }}
              className="relative p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-sm shadow-xl flex flex-col items-center justify-center group overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-rose-500/40 to-transparent group-hover:via-rose-500 transition-colors" />
              
              <span className="font-serif-romantic text-3xl sm:text-4xl lg:text-5xl text-stone-100 font-semibold tabular-nums tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-400 mt-1 font-medium">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-rose-300/80 italic font-serif-romantic">
          <Heart className="h-3.5 w-3.5 fill-rose-500/70 text-rose-400 animate-pulse" />
          <span>...and counting, through every mile and every tomorrow.</span>
        </div>
      </div>
    </section>
  );
};
