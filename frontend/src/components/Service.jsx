import React from "react";

const Service = () => {
  const services = [
    {
      title: "Student Records",
      description:
        "Add, edit, and manage student information efficiently, including personal and fee details.",
      icon: "🎓",
    },
    {
      title: "Fee Management",
      description:
        "Track payments in real-time, generate receipts, and handle pending fees smoothly.",
      icon: "💳",
    },
    {
      title: "Admin Dashboard",
      description:
        "Admins can monitor all operations, assign staff roles, and oversee overall fee management.",
      icon: "📊",
    },
    {
      title: "Email Notifications",
      description:
        "Automatically notify students about pending fees and important updates via email.",
      icon: "✉️",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#EDE7F6] via-[#F3E5F5] to-[#EDE7F6] px-4 md:px-20 py-16 md:py-20 font-serif">
      <div className="text-center mb-10 md:mb-14">
        <h2 className="text-3xl md:text-5xl font-serif text-[#4A148C] mb-4">
          Our Services
        </h2>
        <p className="text-[#2C2C2C] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          FeeHive provides a complete set of tools that help colleges simplify
          fee management, automate administrative work, and improve accuracy in
          every financial operation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-[#E4DAF8] rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#4A148C] mb-2 md:mb-3">
              {service.title}
            </h3>
            <p className="text-sm md:text-base text-[#5A5A5A] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
