import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Gauge, Brain, Diamond, Clock } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Result-Driven Approach",
    description: "Every decision is backed by data and focused on measurable business outcomes.",
  },
  {
    icon: Gauge,
    title: "Performance-First Development",
    description: "Sub-second load times and Core Web Vitals optimization for maximum SEO and conversions.",
  },
  {
    icon: Brain,
    title: "Conversion Psychology",
    description: "We apply proven psychological principles to design experiences that drive action.",
  },
  {
    icon: Diamond,
    title: "Premium Design Standards",
    description: "No templates, no shortcuts. Every project is custom-crafted to stand out.",
  },
  {
    icon: Clock,
    title: "Limited Projects Per Month",
    description: "We take on only 4 projects monthly to ensure exceptional quality and attention.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
              Why choose us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              We don't just build websites.{" "}
              <span className="text-gradient">We build growth engines.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              While others focus on aesthetics alone, we obsess over the metrics 
              that matter: conversion rates, load times, and user engagement.
            </p>
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">
                Only 2 spots left this month
              </span>
            </div>
          </motion.div>

          {/* Right - Reasons */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 p-5 rounded-xl hover:bg-card transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
