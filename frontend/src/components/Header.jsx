import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];

  return (
    <header className="bg-[#0D1B2A] w-full shadow-md">
      <div className="flex items-center justify-between px-4 md:px-8 h-24">
        <div className="flex items-center">
          <img
            src="./logo5.png"
            alt="FeeHive Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8 text-white font-serif cursor-pointer">
          {menuItems.map((item) => (
            <h3
              key={item}
              className="hover:text-[#4FC3F7] transition duration-300"
            >
              {item}
            </h3>
          ))}
          <button className="bg-[#4FC3F7] text-[#0D1B2A] font-semibold rounded-lg w-20 h-9 hover:bg-[#0288D1] hover:text-white transition duration-300">
            Login
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none"
          >
            {/* Hamburger / Close lines */}
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1B2A] px-4 py-4 flex flex-col gap-4 text-white font-serif">
          {menuItems.map((item) => (
            <h3
              key={item}
              className="hover:text-[#4FC3F7] transition duration-300"
            >
              {item}
            </h3>
          ))}
          <button className="bg-[#4FC3F7] text-[#0D1B2A] font-semibold rounded-lg w-full py-2 hover:bg-[#0288D1] hover:text-white transition duration-300">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
