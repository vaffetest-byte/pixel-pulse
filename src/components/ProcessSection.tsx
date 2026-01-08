import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, PenTool, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Strategy",
    description: "We dive deep into your business goals, audience, and competition to craft a conversion-focused strategy.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Design",
    description: "Premium UI/UX design with purposeful animations and interactions that captivate and convert.",
  },
  {
    icon: Code,
    number: "03",
    title: "Build",
    description: "Clean, performant code built with modern technologies. Speed and scalability are non-negotiable.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Optimize",
    description: "We launch, monitor, and continuously optimize based on real data to maximize your ROI.",
  },
];

export const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-dark py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-bg w-[600px] h-[600px] top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            How we deliver results
          </h2>
          <p className="text-lg text-muted-foreground">
            A proven process refined over 50+ successful projects.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="card-dark rounded-2xl p-8 relative z-10 h-full hover:border-primary/30 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-muted/50">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
