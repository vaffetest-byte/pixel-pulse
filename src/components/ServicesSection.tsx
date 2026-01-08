import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Globe, Sparkles, Code2, Palette, ArrowUpRight } from "lucide-react";
import { GlowingCodeEditor } from "./animations/GlowingCodeEditor";

const services = [
  {
    icon: Globe,
    title: "High-Conversion Websites",
    description: "Strategically designed websites that turn visitors into paying customers with proven UX patterns and psychology-driven layouts.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Animated Landing Pages",
    description: "Captivating, motion-rich landing pages that hold attention and guide users seamlessly toward your conversion goals.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Code2,
    title: "Web & App Development",
    description: "Robust, scalable web applications and mobile-first solutions built with modern technologies and clean architecture.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Premium interface design that balances aesthetics with usability, creating memorable experiences that users love.",
    color: "from-orange-500 to-red-500",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            What we build
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium digital products crafted with precision and purpose.
          </p>
        </motion.div>

        {/* Two column layout: Services + Code Editor */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Services Grid */}
          <div className="grid gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative card-light rounded-2xl p-6 lg:p-8 overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <Button variant="outline" size="sm" className="group/btn">
                      Start this project
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Glowing Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center sticky top-32"
          >
            <GlowingCodeEditor />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
