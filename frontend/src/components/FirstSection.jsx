import React from "react";

const FirstSection = () => {
  return (
    <div className="bg-[#F3E5F5] flex items-center px-20 py-12">
      <img src="./banner.png" alt="Banner" className="object-contain" />

      <div className="ml-16 max-w-lg">
        <h2 className="text-3xl font-serif text-[#6A1B9A] mb-4">
          Hi, Welcome to FeeHive!
        </h2>
        <p className="font-serif text-lg text-[#0D1B2A] leading-relaxed">
          A modern college fee management platform designed to simplify fee
          tracking, streamline student records, and automate administrative
          tasks. Manage payments, generate receipts, and stay on top of all
          student fees effortlessly
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
