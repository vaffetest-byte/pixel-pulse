import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const ParticleNetwork = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleCount = 30;

  // Initialize particles
  useEffect(() => {
    const initialParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }
    setParticles(initialParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newVx = p.vx;
          let newVy = p.vy;

          // Bounce off edges
          if (newX < 0 || newX > 100) newVx = -newVx;
          if (newY < 0 || newY > 100) newVy = -newVy;

          return {
            ...p,
            x: Math.max(0, Math.min(100, newX)),
            y: Math.max(0, Math.min(100, newY)),
            vx: newVx,
            vy: newVy,
          };
        })
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Calculate connections between nearby particles
  const connections = useMemo(() => {
    const lines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];
    const maxDistance = 25;

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          lines.push({
            x1: particles[i].x,
            y1: particles[i].y,
            x2: particles[j].x,
            y2: particles[j].y,
            opacity: 1 - distance / maxDistance,
          });
        }
      }
    }

    return lines;
  }, [particles]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="particleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(190 100% 50%)" />
          </linearGradient>
        </defs>

        {/* Connection lines */}
        {connections.map((line, index) => (
          <motion.line
            key={index}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x2}%`}
            y2={`${line.y2}%`}
            stroke="url(#particleGradient)"
            strokeWidth="0.5"
            initial={{ opacity: 0 }}
            animate={{ opacity: line.opacity * 0.3 }}
            transition={{ duration: 0.3 }}
          />
        ))}

        {/* Particles */}
        {particles.map((particle) => (
          <motion.circle
            key={particle.id}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r="2"
            fill="url(#particleGradient)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.4, 0.8, 0.4],
              scale: 1 
            }}
            transition={{ 
              opacity: { duration: 2, repeat: Infinity, delay: particle.id * 0.1 },
              scale: { duration: 0.5 }
            }}
            style={{
              filter: "drop-shadow(0 0 3px hsl(var(--primary)))",
            }}
          />
        ))}

        {/* Glowing nodes at random positions */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={`glow-${i}`}
            cx={`${15 + i * 20}%`}
            cy={`${30 + (i % 2) * 40}%`}
            r="4"
            fill="hsl(var(--primary))"
            animate={{
              opacity: [0.2, 0.6, 0.2],
              r: [4, 6, 4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              filter: "drop-shadow(0 0 10px hsl(var(--primary)))",
            }}
          />
        ))}
      </svg>
    </div>
  );
};
