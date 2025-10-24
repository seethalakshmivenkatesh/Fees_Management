import React, { useState, useEffect } from "react";

import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import img4 from "../assets/Images/img4.png";

const slides = [
  {
    image: img1,
    title: "Welcome to Our System",
    subtitle: "Efficient. Simple. Reliable.",
  },
  {
    image: img2,
    title: "Manage Fees Easily",
    subtitle: "Automation for all your institutions.",
  },
  {
    image: img3,
    title: "Track Everything",
    subtitle: "Get real-time insights and analytics.",
  },
  {
    image: img4,
    title: "Secure and Fast",
    subtitle: "Safe transactions with instant updates.",
  },
];

const Carousel = () => {
  const [Current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden flex flex-col items-center m-4 sm:m-6 md:m-10 rounded-lg">
      <div className="relative w-full">
        <img
          src={slides[Current].image}
          alt={`Slide ${Current + 1}`}
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-lg transition-all duration-700"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/30 text-center px-2 sm:px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold drop-shadow-md">
            {slides[Current].title}
          </h2>
          <p className="text-xs sm:text-sm md:text-lg mt-2 drop-shadow-sm">
            {slides[Current].subtitle}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-3 sm:mt-4">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
              index === Current ? "bg-blue-500 scale-125" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
