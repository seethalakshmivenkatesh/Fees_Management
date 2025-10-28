import React from "react";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <section className="bg-[#F3E5F5] flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-20 gap-8 overflow-hidden">
      {/* Animated Image */}
      <motion.img
        src="./banner.png"
        alt="Banner"
        className="w-full md:w-1/2 object-contain"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {/* Animated Text */}
      <motion.div
        className="max-w-lg md:ml-16 text-center md:text-left"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-serif text-[#6A1B9A] mb-4">
          Hi, Welcome to FeeHive!
        </h2>
        <p className="font-serif text-lg md:text-xl text-[#0D1B2A] leading-relaxed">
          A modern college fee management platform designed to simplify fee
          tracking, streamline student records, and automate administrative
          tasks. Manage payments, generate receipts, and stay on top of all
          student fees effortlessly.
        </p>
      </motion.div>
    </section>
  );
};

export default FirstSection;
