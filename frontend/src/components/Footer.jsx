import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white font-serif px-4 md:px-20 py-10">
      <div className="text-center md:text-left text-lg mb-8">
        <p>About Us | Academics | Support | Contact</p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20">
        <div className="flex-1 text-center md:text-left">
          <p>
            FeeHive is a unified digital fee management platform designed for
            colleges and universities — simplifying payments, receipts, and
            reports across all departments.
          </p>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Academics</h1>
          <ul className="space-y-1">
            <li>• Engineering College </li>
            <li>• Pharmacy College </li>
            <li>• Nursing College </li>
            <li>• Allied Health Sciences </li>
            <li>• Health Inspector Training </li>
          </ul>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Support</h1>
          <ul className="space-y-1">
            <li>• Help Center </li>
            <li>• FAQs </li>
            <li>• Payment Policies </li>
            <li>• Privacy & Terms </li>
          </ul>
        </div>

        <div className="flex-1 text-center md:text-left space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Contact</h1>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <LocationOnIcon className="text-[#4FC3F7] text-4xl md:text-6xl" />
            <span>Chennai, Tamil Nadu, India</span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <PhoneIcon className="text-[#4FC3F7] text-4xl md:text-6xl" />
            <span className="font-mono text-base md:text-xl">
              +91-98765 43210
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <EmailIcon className="text-[#4FC3F7] text-4xl md:text-6xl" />
            <span>support@feehive.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
