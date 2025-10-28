import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CreditCard, BarChart3, Mail } from "lucide-react"; // ✅ icons

const Service = () => {
  const services = [
    {
      title: "Student Records",
      description:
        "Add, edit, and manage student information efficiently, including personal and fee details.",
      icon: <GraduationCap className="w-12 h-12 text-[#6A1B9A]" />,
    },
    {
      title: "Fee Management",
      description:
        "Track payments in real-time, generate receipts, and handle pending fees smoothly.",
      icon: <CreditCard className="w-12 h-12 text-[#6A1B9A]" />,
    },
    {
      title: "Admin Dashboard",
      description:
        "Admins can monitor all operations, assign staff roles, and oversee overall fee management.",
      icon: <BarChart3 className="w-12 h-12 text-[#6A1B9A]" />,
    },
    {
      title: "Email Notifications",
      description:
        "Automatically notify students about pending fees and important updates via email.",
      icon: <Mail className="w-12 h-12 text-[#6A1B9A]" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#EDE7F6] via-[#F3E5F5] to-[#EDE7F6] min-h-screen flex flex-col justify-center px-4 md:px-20 py-16 md:py-20 font-serif overflow-hidden">
      {/* Section Title */}
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-serif text-[#4A148C] mb-4">
          Our Services
        </h2>
        <p className="text-[#2C2C2C] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          FeeHive provides a complete set of tools that help colleges simplify
          fee management, automate administrative work, and improve accuracy in
          every financial operation.
        </p>
      </motion.div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white border border-[#E4DAF8] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-[#F8F3FB] transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex justify-center md:justify-start mb-4"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {service.icon}
            </motion.div>

            <h3 className="text-xl md:text-2xl font-semibold text-[#4A148C] mb-2 md:mb-3 text-center md:text-left">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed text-center md:text-left">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
