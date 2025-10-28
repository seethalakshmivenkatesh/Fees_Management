import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const loginOptions = ["Admin", "Staff", "Student"];
  const navigate = useNavigate();

  const handleLoginClick = (role) => {
    navigate("/login", { state: { role } });
    setLoginOpen(false);
    setMenuOpen(false);
  };

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

        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-row items-center gap-8 text-white font-serif cursor-pointer relative">
          <ScrollLink to={"/"} className="hover:text-[#4FC3F7]">
            HOME
          </ScrollLink>
          <ScrollLink to="about" className="hover:text-[#4FC3F7]">
            ABOUT
          </ScrollLink>
          <ScrollLink to="services" className="hover:text-[#4FC3F7]">
            SERVICES
          </ScrollLink>
          <ScrollLink to="pricing" className="hover:text-[#4FC3F7]">
            PRICING
          </ScrollLink>
          <ScrollLink to="contact" className="hover:text-[#4FC3F7]">
            CONTACT
          </ScrollLink>

          {/* Login Dropdown */}
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
                      onClick={() => handleLoginClick(option)}
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? (
              <span className="text-3xl">&#10005;</span> // X icon
            ) : (
              <span className="text-3xl">&#9776;</span> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0D1B2A] text-white px-4 py-4 flex flex-col gap-4">
          <Link
            to={"/"}
            className="hover:text-[#4FC3F7]"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to={"/"}
            className="hover:text-[#4FC3F7]"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to={"/"}
            className="hover:text-[#4FC3F7]"
            onClick={() => setMenuOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            to={"/"}
            className="hover:text-[#4FC3F7]"
            onClick={() => setMenuOpen(false)}
          >
            PRICING
          </Link>
          <Link
            to={"/"}
            className="hover:text-[#4FC3F7]"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>

          {/* Login Dropdown Mobile */}
          <div className="relative">
            <button
              onClick={() => setLoginOpen(!loginOpen)}
              className="bg-[#4FC3F7] text-[#0D1B2A] font-semibold rounded-lg w-full h-10 hover:bg-[#0288D1] hover:text-white transition duration-300"
            >
              Login
            </button>
            {loginOpen && (
              <div className="mt-2 w-full bg-white text-black rounded-lg shadow-lg z-50">
                <ul className="flex flex-col">
                  {loginOptions.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleLoginClick(option)}
                      className="px-4 py-2 hover:bg-[#EDE7F6] cursor-pointer"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
