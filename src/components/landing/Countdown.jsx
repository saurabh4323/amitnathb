"use client";

import { useState, useEffect } from 'react';

export default function Countdown() {
  const targetDate = new Date('2026-02-20T00:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    let timeLeft = null;

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return (
    <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
      Event Live Now
    </span>
  );

  return (
    <div className="flex items-center gap-2">
      <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest hidden lg:inline">
        Launch in:
      </span>
      <div className="flex items-center gap-1.5 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
        <div className="flex items-baseline gap-0.5">
          <span className="text-xs font-bold text-white tabular-nums">{timeLeft.days}</span>
          <span className="text-[8px] font-bold text-amber-500 uppercase">d</span>
        </div>
        <div className="w-[1px] h-2 bg-white/10" />
        <div className="flex items-baseline gap-0.5">
          <span className="text-xs font-bold text-white tabular-nums">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[8px] font-bold text-amber-500 uppercase">h</span>
        </div>
        <div className="w-[1px] h-2 bg-white/10" />
        <div className="flex items-baseline gap-0.5">
          <span className="text-xs font-bold text-white tabular-nums">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[8px] font-bold text-amber-500 uppercase">m</span>
        </div>
        <div className="w-[1px] h-2 bg-white/10" />
        <div className="flex items-baseline gap-0.5">
          <span className="text-xs font-bold text-white tabular-nums">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[8px] font-bold text-amber-500 uppercase">s</span>
        </div>
      </div>
    </div>
  );
}
