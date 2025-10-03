'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Pre-generate consistent values for SSR compatibility
const particleConfigs = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  top: `${(i * 7) % 100}%`,
  left: `${(i * 13) % 100}%`,
  width: `${(i % 3) * 5 + 5}px`,
  height: `${(i % 4) * 5 + 5}px`,
  duration: (i % 5) * 2 + 10,
  yDistance: (i % 2 === 0 ? 1 : -1) * ((i % 3) * 20 + 30),
  xDistance: (i % 2 === 0 ? 1 : -1) * ((i % 4) * 15 + 20),
}));

const AnimatedBackground = () => {
  return (
    <>
      {/* Floating particles */}
      {particleConfigs.map((config) => (
        <motion.div
          key={config.id}
          className="absolute rounded-full bg-green-500/10"
          style={{
            top: config.top,
            left: config.left,
            width: config.width,
            height: config.height,
          }}
          animate={{
            y: [0, config.yDistance],
            x: [0, config.xDistance],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      
      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;