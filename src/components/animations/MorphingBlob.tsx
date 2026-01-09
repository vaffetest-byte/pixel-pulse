import { motion } from "framer-motion";
import { useMemo } from "react";

export const MorphingBlob = () => {
  // Generate energy particles that rise and converge
  const risingParticles = useMemo(() => 
    [...Array(40)].map((_, i) => ({
      id: i,
      startX: Math.random() * 100,
      startY: 100 + Math.random() * 20,
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 2,
      size: 2 + Math.random() * 4,
    })), []
  );

  // Orbiting energy particles around the sphere
  const orbitParticles = useMemo(() => 
    [...Array(12)].map((_, i) => ({
      id: i,
      angle: (i / 12) * 360,
      radius: 140 + Math.random() * 40,
      duration: 8 + Math.random() * 4,
      size: 3 + Math.random() * 3,
    })), []
  );

  // Lightning arc positions
  const lightningArcs = useMemo(() => 
    [...Array(6)].map((_, i) => ({
      id: i,
      rotation: (i / 6) * 360,
      delay: i * 0.5,
    })), []
  );

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Ambient background glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Rising energy particles from below */}
      {risingParticles.map((particle) => (
        <motion.div
          key={`rise-${particle.id}`}
          initial={{ 
            opacity: 0,
            x: `${particle.startX - 50}%`,
            y: `${particle.startY}%`,
          }}
          animate={{
            opacity: [0, 0.8, 1, 0],
            x: [
              `${particle.startX - 50}%`,
              `${(particle.startX - 50) * 0.3}%`,
              "0%",
            ],
            y: [`${particle.startY}%`, "20%", "0%"],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-primary"
          style={{
            width: particle.size,
            height: particle.size,
            boxShadow: `0 0 ${particle.size * 3}px hsl(var(--primary)), 0 0 ${particle.size * 6}px hsl(var(--primary) / 0.5)`,
          }}
        />
      ))}

      {/* Outer energy ring - pulsing */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 lg:w-80 lg:h-80 rounded-full"
        style={{
          border: "2px solid hsl(var(--primary) / 0.4)",
          boxShadow: `
            0 0 30px hsl(var(--primary) / 0.3),
            inset 0 0 30px hsl(var(--primary) / 0.2)
          `,
        }}
      />

      {/* Main energy sphere - Spirit Bomb core */}
      <motion.div
        animate={{
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-56 h-56 lg:w-64 lg:h-64 rounded-full"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.9) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, hsl(var(--primary) / 0.6) 0%, transparent 40%),
            radial-gradient(circle, hsl(var(--primary) / 0.8) 0%, hsl(var(--primary) / 0.4) 50%, hsl(var(--primary) / 0.2) 100%)
          `,
          boxShadow: `
            0 0 60px hsl(var(--primary) / 0.6),
            0 0 120px hsl(var(--primary) / 0.4),
            0 0 180px hsl(var(--primary) / 0.2),
            inset 0 0 60px hsl(var(--primary) / 0.3)
          `,
        }}
      />

      {/* Swirling energy layer */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-52 h-52 lg:w-60 lg:h-60 rounded-full"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              hsl(var(--primary) / 0.5) 30deg,
              transparent 60deg,
              hsl(var(--primary) / 0.3) 120deg,
              transparent 150deg,
              hsl(var(--primary) / 0.4) 210deg,
              transparent 240deg,
              hsl(var(--primary) / 0.5) 300deg,
              transparent 330deg
            )
          `,
        }}
      />

      {/* Counter-rotating inner swirl */}
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-44 h-44 lg:w-52 lg:h-52 rounded-full"
        style={{
          background: `
            conic-gradient(
              from 45deg,
              transparent 0deg,
              hsl(var(--primary) / 0.4) 40deg,
              transparent 80deg,
              hsl(var(--primary) / 0.3) 160deg,
              transparent 200deg,
              hsl(var(--primary) / 0.5) 280deg,
              transparent 320deg
            )
          `,
        }}
      />

      {/* Core bright center */}
      <motion.div
        animate={{
          opacity: [0.8, 1, 0.8],
          scale: [0.95, 1.05, 0.95],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-20 h-20 lg:w-24 lg:h-24 rounded-full"
        style={{
          background: "radial-gradient(circle, white 0%, hsl(var(--primary)) 40%, transparent 70%)",
          boxShadow: "0 0 40px white, 0 0 80px hsl(var(--primary))",
        }}
      />

      {/* Lightning arcs */}
      {lightningArcs.map((arc) => (
        <motion.div
          key={`arc-${arc.id}`}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: arc.delay,
            repeatDelay: 2,
          }}
          className="absolute w-56 h-56 lg:w-64 lg:h-64"
          style={{
            transform: `rotate(${arc.rotation}deg)`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 w-1 h-28 lg:h-32"
            style={{
              background: "linear-gradient(to top, hsl(var(--primary)) 0%, white 50%, transparent 100%)",
              filter: "blur(1px)",
              transform: "translateX(-50%)",
              boxShadow: "0 0 10px hsl(var(--primary)), 0 0 20px white",
            }}
          />
        </motion.div>
      ))}

      {/* Orbiting energy particles */}
      {orbitParticles.map((particle) => (
        <motion.div
          key={`orbit-${particle.id}`}
          animate={{
            rotate: [particle.angle, particle.angle + 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: particle.radius * 2,
            height: particle.radius * 2,
          }}
        >
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute rounded-full bg-primary"
            style={{
              width: particle.size,
              height: particle.size,
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: `0 0 ${particle.size * 2}px hsl(var(--primary)), 0 0 ${particle.size * 4}px hsl(var(--primary) / 0.5)`,
            }}
          />
        </motion.div>
      ))}

      {/* Energy rays emanating outward */}
      <motion.div
        animate={{
          rotate: [0, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute w-[500px] h-[500px]"
        style={{
          background: `
            repeating-conic-gradient(
              from 0deg,
              transparent 0deg,
              hsl(var(--primary) / 0.1) 2deg,
              transparent 4deg
            )
          `,
          maskImage: "radial-gradient(circle, transparent 30%, black 50%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle, transparent 30%, black 50%, transparent 80%)",
        }}
      />

      {/* Atmospheric distortion rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={`ring-${ring}`}
          animate={{
            scale: [1, 1.5, 2],
            opacity: [0.4, 0.2, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: ring * 1,
            ease: "easeOut",
          }}
          className="absolute rounded-full"
          style={{
            width: 200 + ring * 20,
            height: 200 + ring * 20,
            border: "1px solid hsl(var(--primary) / 0.3)",
          }}
        />
      ))}
    </div>
  );
};
