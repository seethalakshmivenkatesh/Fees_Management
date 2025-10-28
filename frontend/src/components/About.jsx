import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CreditCard, BarChart3 } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Student Management",
      desc: "Easily add, update, and maintain detailed student profiles with secure data handling.",
      icon: <GraduationCap className="w-10 h-10 text-[#6A1B9A]" />,
    },
    {
      title: "Smart Fee Tracking",
      desc: "Monitor payments, view dues, and generate instant receipts with one click.",
      icon: <CreditCard className="w-10 h-10 text-[#6A1B9A]" />,
    },
    {
      title: "Admin Dashboard",
      desc: "Empower administrators to oversee all operations with detailed analytics and control.",
      icon: <BarChart3 className="w-10 h-10 text-[#6A1B9A]" />,
    },
  ];

  return (
    <section className="bg-[#F6F2FF] min-h-screen flex flex-col justify-center px-4 md:px-20 py-16 md:py-20 font-serif overflow-hidden">
      {/* Heading Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-serif text-[#4A148C] mb-6">
          Simplifying College Fee Management
        </h2>
        <p className="text-[#2C2C2C] text-base md:text-lg leading-relaxed">
          <span className="text-[#6A1B9A] text-base md:text-lg font-semibold">
            FeeHive
          </span>{" "}
          is a next-generation college fee management system designed to
          streamline administrative work and improve efficiency. With a focus on
          simplicity, FeeHive enables staff to handle student data, fee
          collection, and reporting all in one place with complete accuracy.
        </p>
      </motion.div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Left: Features */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 bg-white p-5 md:p-6 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-[#E4DAF8]"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#4A148C]">
                  {feature.title}
                </h3>
                <p className="text-[#5A5A5A] text-sm md:text-base mt-1">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="./about.png"
            alt="About FeeHive"
            className="w-full max-w-md rounded-3xl shadow-lg object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
