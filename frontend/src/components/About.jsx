import React from "react";

const About = () => {
  const features = [
    {
      title: "Student Management",
      desc: "Easily add, update, and maintain detailed student profiles with secure data handling.",
      icon: "🎓",
    },
    {
      title: "Smart Fee Tracking",
      desc: "Monitor payments, view dues, and generate instant receipts with one click.",
      icon: "💳",
    },
    {
      title: "Admin Dashboard",
      desc: "Empower administrators to oversee all operations with detailed analytics and control.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-[#F6F2FF] px-4 md:px-20 py-16 md:py-20 font-serif">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-serif text-[#4A148C] mb-6">
          Simplifying College Fee Management
        </h2>
        <p className="text-[#2C2C2C] text-base md:text-lg leading-relaxed">
          <span className="text-[#6A1B9A] text-base md:text-lg font-serif">
            FeeHive
          </span>{" "}
          is a next-generation college fee management system designed to
          streamline administrative work and improve efficiency. With a focus on
          simplicity, FeeHive enables staff to handle student data, fee
          collection, and reporting all in one place with complete accuracy.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-1/2 space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E4DAF8]"
            >
              <div className="text-2xl md:text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-[#4A148C]">
                  {feature.title}
                </h3>
                <p className="text-[#5A5A5A] text-sm md:text-base mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="./about.png"
            alt="About FeeHive"
            className="w-full max-w-md md:w-full rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
