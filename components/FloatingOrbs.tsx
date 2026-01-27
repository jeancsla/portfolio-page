import React from 'react';
import { motion } from 'framer-motion';

interface FloatingOrbProps {
  delay: number;
  duration: number;
  size: string;
  color: string;
  top: string;
  left: string;
}

const FloatingOrb: React.FC<FloatingOrbProps> = ({ delay, duration, size, color, top, left }) => (
  <motion.div
    className={`absolute ${size} rounded-full blur-3xl opacity-20 pointer-events-none`}
    style={{
      background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
      top,
      left,
    }}
    animate={{
      x: [0, 100, -50, 0],
      y: [0, -80, 30, 0],
      scale: [1, 1.2, 0.9, 1],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
);

const FloatingOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <FloatingOrb
        delay={0}
        duration={20}
        size="w-96 h-96"
        color="rgba(139, 92, 246, 0.4)"
        top="10%"
        left="-10%"
      />
      <FloatingOrb
        delay={2}
        duration={25}
        size="w-80 h-80"
        color="rgba(99, 102, 241, 0.3)"
        top="60%"
        left="80%"
      />
      <FloatingOrb
        delay={4}
        duration={22}
        size="w-72 h-72"
        color="rgba(168, 85, 247, 0.25)"
        top="50%"
        left="20%"
      />
    </div>
  );
};

export default FloatingOrbs;
