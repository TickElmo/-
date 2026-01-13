
import React, { useEffect, useState } from 'react';

const MagicParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; duration: string; size: string; delay: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${15 + Math.random() * 20}s`,
      size: `${2 + Math.random() * 4}px`,
      delay: `-${Math.random() * 20}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute bg-blue-200/40"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            top: '100%',
          }}
        />
      ))}
    </div>
  );
};

export default MagicParticles;
