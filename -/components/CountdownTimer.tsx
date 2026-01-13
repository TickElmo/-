
import React, { useState, useEffect, useCallback } from 'react';
import { TimeLeft } from '../types';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = useCallback((): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-8 w-20 md:w-32 flex justify-center items-center shadow-2xl relative group hover:border-blue-400/50 transition-all duration-300">
        <span className="text-3xl md:text-6xl font-bold font-playfair text-white text-glow">
          {value.toString().padStart(2, '0')}
        </span>
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      </div>
      <span className="mt-2 text-xs md:text-sm uppercase tracking-widest text-blue-200/70 font-bold">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-10 scale-90 md:scale-100">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;
