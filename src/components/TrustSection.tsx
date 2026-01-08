import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, BarChart3, Smartphone, Shield } from "lucide-react";

const stats = [
  {
    icon: Zap,
    value: "0.8s",
    label: "Average Load Time",
    description: "Lightning-fast performance",
  },
  {
    icon: BarChart3,
    value: "3.2x",
    label: "Conversion Increase",
    description: "Data-driven optimization",
  },
  {
    icon: Smartphone,
    value: "100%",
    label: "Mobile-First Design",
    description: "Responsive by default",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Enterprise reliability",
  },
];

export const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Why us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Built for speed, conversion & scale
          </h2>
          <p className="text-lg text-muted-foreground">
            Every pixel, every interaction, every line of code is optimized 
            for one thing: growing your business.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-light rounded-2xl p-8 text-center group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
