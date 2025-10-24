import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const menuItems = ["HOME", "ABOUT", "SERVICES", "PRICING", "CONTACT"];
  const loginOptions = ["Admin", "Staff", "Student"];

  return (
    <header className="bg-[#0D1B2A] w-full shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 h-24">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./logo5.png"
            alt="FeeHive Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-serif cursor-pointer relative">
          {menuItems.map((item) => (
            <h3
              key={item}
              className="hover:text-[#4FC3F7] transition duration-300"
            >
              {item}
            </h3>
          ))}

          {/* Login with Click Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="bg-[#4FC3F7] text-[#0D1B2A] font-semibold rounded-lg w-20 h-9 hover:bg-[#0288D1] hover:text-white transition duration-300"
            >
              Login
            </button>

            {loginOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded-lg shadow-lg z-50">
                <ul className="flex flex-col">
                  {loginOptions.map((option) => (
                    <li
                      key={option}
                      className="px-4 py-2 hover:bg-[#EDE7F6] cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-between w-6 h-6 focus:outline-none"
          >
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

          {/* Mobile Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="bg-[#4FC3F7] text-[#0D1B2A] font-semibold rounded-lg w-full py-2 hover:bg-[#0288D1] hover:text-white transition duration-300"
            >
              Login
            </button>

            {loginOpen && (
              <ul className="flex flex-col bg-white text-black rounded-lg mt-2 shadow-lg">
                {loginOptions.map((option) => (
                  <li
                    key={option}
                    className="px-4 py-2 hover:bg-[#EDE7F6] cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
