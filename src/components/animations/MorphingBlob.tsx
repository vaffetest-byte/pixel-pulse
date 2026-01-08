import { motion } from "framer-motion";

export const MorphingBlob = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main morphing blob */}
      <motion.div
        animate={{
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "40% 60% 60% 40% / 60% 40% 60% 40%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-72 h-72 lg:w-96 lg:h-96 bg-gradient-to-br from-primary via-cyan-500 to-blue-600"
        style={{
          boxShadow: `
            0 0 80px hsl(var(--primary) / 0.4),
            0 0 120px hsl(var(--primary) / 0.2),
            inset 0 0 60px rgba(255,255,255,0.1)
          `,
        }}
      />

      {/* Secondary blob - offset */}
      <motion.div
        animate={{
          borderRadius: [
            "40% 60% 60% 40% / 60% 40% 60% 40%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "40% 60% 60% 40% / 60% 40% 60% 40%",
          ],
          scale: [1.1, 1, 1.05, 1.1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-tr from-violet-500/60 via-purple-500/40 to-transparent mix-blend-overlay"
      />

      {/* Third blob - inner glow */}
      <motion.div
        animate={{
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "40% 60% 60% 40% / 60% 40% 60% 40%",
            "60% 40% 40% 60% / 40% 60% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-sm"
      />

      {/* Floating particles around blob */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -30, 0],
            x: [0, Math.sin(i * 45) * 20, 0],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 45}%`,
            left: `${50 + Math.cos(i * 45 * Math.PI / 180) * 45}%`,
            boxShadow: "0 0 15px hsl(var(--primary))",
          }}
        />
      ))}
    </div>
  );
};
