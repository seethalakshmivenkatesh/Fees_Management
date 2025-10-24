import React from "react";

const FirstSection = () => {
  return (
    <div className="bg-[#F3E5F5] flex flex-col md:flex-row items-center px-4 md:px-20 py-12 gap-8">
      <img
        src="./banner.png"
        alt="Banner"
        className="w-full md:w-1/2 object-contain"
      />

      <div className="max-w-lg md:ml-16 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-serif text-[#6A1B9A] mb-4">
          Hi, Welcome to FeeHive!
        </h2>
        <p className="font-serif text-lg md:text-xl text-[#0D1B2A] leading-relaxed">
          A modern college fee management platform designed to simplify fee
          tracking, streamline student records, and automate administrative
          tasks. Manage payments, generate receipts, and stay on top of all
          student fees effortlessly.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
