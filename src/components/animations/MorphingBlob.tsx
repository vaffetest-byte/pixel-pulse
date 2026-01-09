import { motion } from "framer-motion";

export const MorphingBlob = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Main glass sphere */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 30% 20%, hsl(var(--primary) / 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 70% 80%, hsl(var(--primary) / 0.2) 0%, transparent 50%),
            linear-gradient(135deg, hsl(var(--primary) / 0.1) 0%, hsl(var(--primary) / 0.05) 100%)
          `,
          border: "1px solid hsl(var(--primary) / 0.2)",
          boxShadow: `
            0 0 60px hsl(var(--primary) / 0.2),
            inset 0 0 60px hsl(var(--primary) / 0.1)
          `,
        }}
      />

      {/* Inner highlight arc */}
      <motion.div
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-56 h-56 lg:w-72 lg:h-72 rounded-full"
        style={{
          background: `
            conic-gradient(from 180deg, transparent 0deg, hsl(var(--primary) / 0.3) 60deg, transparent 120deg)
          `,
        }}
      />

      {/* Core glow */}
      <motion.div
        animate={{
          opacity: [0.6, 0.8, 0.6],
          scale: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-40 h-40 lg:w-52 lg:h-52 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid overlay for tech feel */}
      <div 
        className="absolute w-64 h-64 lg:w-80 lg:h-80 rounded-full opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 30%, transparent 70%)",
        }}
      />

      {/* Orbital ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-72 h-72 lg:w-96 lg:h-96"
        style={{
          border: "1px solid hsl(var(--primary) / 0.15)",
          borderRadius: "50%",
          transform: "rotateX(70deg)",
        }}
      />

      {/* Single elegant accent dot */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-72 h-72 lg:w-96 lg:h-96"
        style={{
          transform: "rotateX(70deg)",
        }}
      >
        <div 
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            top: "0",
            left: "50%",
            transform: "translateX(-50%)",
            boxShadow: "0 0 10px hsl(var(--primary))",
          }}
        />
      </motion.div>
    </div>
  );
};
