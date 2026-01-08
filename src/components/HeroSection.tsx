import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const FloatingShape = ({ 
  className, 
  delay = 0, 
  duration = 4,
  size = 80,
  gradient = "from-primary to-cyan-400"
}: { 
  className?: string; 
  delay?: number; 
  duration?: number;
  size?: number;
  gradient?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: 1, 
      scale: 1,
      y: [0, -20, 0],
      rotate: [0, 180, 360]
    }}
    transition={{ 
      opacity: { duration: 0.5, delay },
      scale: { duration: 0.5, delay },
      y: { duration: duration, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 3, repeat: Infinity, ease: "linear", delay }
    }}
    className={className}
    style={{ width: size, height: size }}
  >
    <div 
      className={`w-full h-full bg-gradient-to-br ${gradient} rounded-lg opacity-80`}
      style={{ 
        boxShadow: `0 0 40px hsl(var(--primary) / 0.4), inset 0 0 20px rgba(255,255,255,0.1)`,
        border: '1px solid hsl(var(--primary) / 0.3)'
      }}
    />
  </motion.div>
);

const GlowingRing = ({ 
  size = 200, 
  delay = 0,
  className 
}: { 
  size?: number; 
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: 1,
      rotate: 360
    }}
    transition={{ 
      opacity: { duration: 3, repeat: Infinity, delay },
      scale: { duration: 0.8, delay },
      rotate: { duration: 20, repeat: Infinity, ease: "linear" }
    }}
    className={className}
    style={{ width: size, height: size }}
  >
    <div 
      className="w-full h-full rounded-full border-2 border-primary/50"
      style={{ 
        boxShadow: `0 0 30px hsl(var(--primary) / 0.3), inset 0 0 30px hsl(var(--primary) / 0.1)`
      }}
    />
  </motion.div>
);

export const HeroSection = () => {
  return (
    <section className="section-dark relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background glow */}
      <div className="glow-bg w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Limited spots available
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
            >
              We build{" "}
              <span className="text-gradient">animated</span>,{" "}
              <br className="hidden sm:block" />
              high-converting{" "}
              <br className="hidden lg:block" />
              websites & apps
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg"
            >
              Turn visitors into customers with premium digital products built 
              for speed, conversion, and scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                Get Free Strategy Call
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                View Our Work
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-12 pt-8 border-t border-border/50"
            >
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold">50+ Projects Delivered</p>
                  <p className="text-xs text-muted-foreground">For startups & enterprises</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual - Animated Geometric Shapes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex items-center justify-center h-[500px]"
          >
            {/* Central diamond */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                rotate: [0, 360]
              }}
              transition={{ 
                opacity: { duration: 0.6, delay: 0.5 },
                scale: { duration: 0.6, delay: 0.5 },
                rotate: { duration: 30, repeat: Infinity, ease: "linear" }
              }}
              className="absolute"
            >
              <div 
                className="w-32 h-32 bg-gradient-to-br from-primary via-cyan-400 to-blue-500 rotate-45"
                style={{ 
                  boxShadow: `0 0 80px hsl(var(--primary) / 0.5), 0 0 120px hsl(var(--primary) / 0.3)`,
                  border: '2px solid hsl(var(--primary) / 0.5)'
                }}
              />
            </motion.div>

            {/* Glowing rings */}
            <GlowingRing size={280} delay={0.3} className="absolute" />
            <GlowingRing size={380} delay={0.5} className="absolute" />

            {/* Floating shapes */}
            <FloatingShape 
              className="absolute -top-4 left-12" 
              delay={0.6} 
              size={60}
              gradient="from-cyan-400 to-teal-500"
            />
            <FloatingShape 
              className="absolute top-20 -right-4" 
              delay={0.8} 
              size={50}
              duration={5}
              gradient="from-violet-500 to-purple-600"
            />
            <FloatingShape 
              className="absolute bottom-20 left-0" 
              delay={1} 
              size={40}
              duration={4.5}
              gradient="from-blue-500 to-indigo-600"
            />
            <FloatingShape 
              className="absolute bottom-8 right-20" 
              delay={1.2} 
              size={55}
              duration={5.5}
              gradient="from-emerald-400 to-cyan-500"
            />
            <FloatingShape 
              className="absolute top-8 right-32" 
              delay={0.7} 
              size={35}
              duration={4}
              gradient="from-primary to-blue-400"
            />

            {/* Small orbiting particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0.3, 0.8, 0.3],
                  rotate: 360
                }}
                transition={{ 
                  opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 },
                  rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" }
                }}
                className="absolute"
                style={{ 
                  width: 200 + i * 30, 
                  height: 200 + i * 30 
                }}
              >
                <motion.div
                  className="absolute w-3 h-3 rounded-full bg-primary"
                  style={{ 
                    top: 0, 
                    left: '50%',
                    boxShadow: '0 0 15px hsl(var(--primary))'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 rounded-full bg-primary" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};