import { motion } from "framer-motion";

export const RotatingCube = () => {
  const cubeSize = 120;
  
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-1000">
      {/* Outer glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-48 h-48 rounded-full blur-3xl bg-primary/30"
      />

      {/* 3D Cube Container */}
      <motion.div
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative"
        style={{
          width: cubeSize,
          height: cubeSize,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front face */}
        <div
          className="absolute w-full h-full border border-primary/50 bg-gradient-to-br from-primary/20 to-transparent backdrop-blur-sm"
          style={{
            transform: `translateZ(${cubeSize / 2}px)`,
            boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">⚡</span>
          </div>
        </div>

        {/* Back face */}
        <div
          className="absolute w-full h-full border border-primary/50 bg-gradient-to-br from-violet-500/20 to-transparent backdrop-blur-sm"
          style={{
            transform: `rotateY(180deg) translateZ(${cubeSize / 2}px)`,
            boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🚀</span>
          </div>
        </div>

        {/* Right face */}
        <div
          className="absolute w-full h-full border border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-transparent backdrop-blur-sm"
          style={{
            transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)`,
            boxShadow: "inset 0 0 30px rgba(34, 211, 238, 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">💎</span>
          </div>
        </div>

        {/* Left face */}
        <div
          className="absolute w-full h-full border border-cyan-500/50 bg-gradient-to-br from-emerald-500/20 to-transparent backdrop-blur-sm"
          style={{
            transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)`,
            boxShadow: "inset 0 0 30px rgba(52, 211, 153, 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">✨</span>
          </div>
        </div>

        {/* Top face */}
        <div
          className="absolute w-full h-full border border-violet-500/50 bg-gradient-to-br from-violet-500/20 to-transparent backdrop-blur-sm"
          style={{
            transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
            boxShadow: "inset 0 0 30px rgba(139, 92, 246, 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🎯</span>
          </div>
        </div>

        {/* Bottom face */}
        <div
          className="absolute w-full h-full border border-violet-500/50 bg-gradient-to-br from-amber-500/20 to-transparent backdrop-blur-sm"
          style={{
            transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
            boxShadow: "inset 0 0 30px rgba(245, 158, 11, 0.3)",
          }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl">🔥</span>
          </div>
        </div>

        {/* Edge glow lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
            }}
            className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              transform: `rotateY(${i * 30}deg) translateZ(${cubeSize / 2 + 5}px)`,
            }}
          />
        ))}
      </motion.div>

      {/* Orbiting particles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute"
          style={{
            width: 180 + i * 30,
            height: 180 + i * 30,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 rounded-full bg-primary"
            style={{
              top: 0,
              left: "50%",
              boxShadow: "0 0 15px hsl(var(--primary))",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};
