import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Crown, Building2, School } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "₹999 / month",
      description:
        "Perfect for small institutions managing up to 100 students.",
      features: ["Manage Students & Fees", "Generate Reports", "Email Support"],
      icon: <School className="w-10 h-10 text-[#6A1B9A]" />,
      button: "Get Started",
    },
    {
      title: "Professional Plan",
      price: "₹2,499 / month",
      description: "Ideal for colleges or multi-department institutions.",
      features: [
        "All Basic Features",
        "Multi-College Management",
        "Advanced Analytics",
        "Priority Support",
      ],
      icon: <Crown className="w-10 h-10 text-[#6A1B9A]" />,
      button: "Upgrade Now",
      highlight: true,
    },
    {
      title: "Enterprise Plan",
      price: "₹4,999 / month",
      description: "For large universities and education groups.",
      features: [
        "Unlimited Students",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Premium Support",
      ],
      icon: <Building2 className="w-10 h-10 text-[#6A1B9A]" />,
      button: "Contact Sales",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#F3E5F5] via-[#EDE7F6] to-[#F3E5F5] min-h-screen flex flex-col justify-center px-6 md:px-20 py-16 font-serif overflow-hidden">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#4A148C] mb-4">
          Simple & Transparent Pricing
        </h2>
        <p className="text-[#2C2C2C] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Choose a plan that fits your institution’s needs and scale your fee
          management system effortlessly.
        </p>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative rounded-3xl border-2 ${
              plan.highlight
                ? "border-[#6A1B9A] bg-[#F8F3FB] shadow-2xl scale-105"
                : "border-[#E4DAF8] bg-white shadow-md"
            } p-8 md:p-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Floating Icon */}
            <motion.div
              className="flex justify-center mb-4"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {plan.icon}
            </motion.div>

            <h3 className="text-2xl md:text-3xl font-semibold text-[#4A148C] mb-2">
              {plan.title}
            </h3>
            <p className="text-3xl font-bold text-[#6A1B9A] mb-3">
              {plan.price}
            </p>
            <p className="text-gray-700 mb-6">{plan.description}</p>

            <ul className="mb-8 space-y-3 text-gray-700 text-left">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#6A1B9A]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              className={`w-full py-3 rounded-xl font-semibold transition duration-300 ${
                plan.highlight
                  ? "bg-[#6A1B9A] text-white hover:bg-[#4A148C]"
                  : "bg-gray-100 text-[#4A148C] hover:bg-[#EDE7F6]"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {plan.button}
            </motion.button>

            {/* Highlight Glow */}
            {plan.highlight && (
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-[#B388EB] opacity-30 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
