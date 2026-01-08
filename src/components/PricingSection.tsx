import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$3,500",
    description: "Perfect for landing pages and simple websites",
    features: [
      "1 custom landing page",
      "Mobile-responsive design",
      "Basic animations",
      "Contact form integration",
      "2 revision rounds",
      "2-week delivery",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: "$8,500",
    description: "Full website with advanced features and animations",
    features: [
      "Up to 5 custom pages",
      "Advanced animations & interactions",
      "CMS integration",
      "SEO optimization",
      "Analytics setup",
      "3 revision rounds",
      "4-week delivery",
      "1 month support",
    ],
    popular: true,
  },
  {
    name: "Custom",
    price: "From $15k",
    description: "Enterprise solutions and web applications",
    features: [
      "Unlimited pages",
      "Custom web application",
      "Premium animations",
      "API integrations",
      "Database setup",
      "Unlimited revisions",
      "Priority support",
      "Ongoing maintenance",
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="section-light py-24 lg:py-32">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground-light mb-6 tracking-tight">
            Investment in growth
          </h2>
          <p className="text-lg text-muted-light-foreground">
            Transparent pricing for premium results. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-foreground-light text-background-light scale-105 shadow-xl"
                  : "card-light"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? "text-background-light" : "text-foreground-light"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-background-light/70" : "text-muted-light-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.popular ? "text-background-light" : "text-foreground-light"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.popular ? "text-background-light/70" : "text-muted-light-foreground"}`}>
                  {" "}/ project
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    <span className={`text-sm ${plan.popular ? "text-background-light/90" : "text-muted-light-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "glow" : "lightOutline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
