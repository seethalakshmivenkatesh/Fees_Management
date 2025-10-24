import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/Images/img1.png";
import img2 from "../assets/Images/img2.png";
import img3 from "../assets/Images/img3.png";
import img4 from "../assets/Images/img4.png";

const slides = [img1, img2, img3, img4];

export default function Carousel() {
  const [Current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden flex m-10 rounded-xs ">
      <img
        src={slides[Current]}
        alt={`Slide ${Current + 1}`}
        className="w-full h-1/4 object-cover"
      />
    </div>
  );
}
