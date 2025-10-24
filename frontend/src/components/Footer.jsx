import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function Footer() {
  return (
    <div className="bg-[#0D1B2A] h-100 w-auto font-serif flex flex-col items-center justify-center p-10">
      <div className="text-white gap-10 text-lg">
        <p>About Us | Academics | Support | Contact</p>
      </div>
      <div className="text-white flex flex-row gap-20 mt-10 text-lg">
        <div>
          FeeHive is a unified digital fee management platform designed for
          <br />
          colleges and universities — simplifying payments, receipts, and
          <br />
          reports across all departments.
          <br />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Academics</h1>
          <ul>
            <li>• Engineering College </li>
            <li>• Pharmacy College </li>
            <li>• Nursing College </li>
            <li>• Allied Health Sciences </li>
            <li>• Health Inspector Training </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Support</h1>
          <ul>
            <li>• Help Center </li>
            <li>• FAQs </li>
            <li>• Payment Policies </li>
            <li>• Privacy & Terms </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Contact</h1>

          <p className=" items-center gap-2">
            <LocationOnIcon className="text-[#4FC3F7] text-6xl" /> Chennai,
            Tamil Nadu, India
          </p>

          <p className=" items-center gap-2">
            <PhoneIcon className="text-[#4FC3F7] text-6xl" />
            <span className="font-mono text-xl">+91-98765 43210</span>
          </p>

          <p className="items-center gap-2">
            <EmailIcon className="text-[#4FC3F7] text-6xl" /> support@feehive.in
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
