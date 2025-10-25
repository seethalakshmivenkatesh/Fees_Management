import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [loginOpen, setLoginOpen] = useState(false);

  const loginOptions = ["Admin", "Staff", "Student"];
  const navigate = useNavigate();

  const handleLoginClick = (role) => {
    navigate("/login", { state: { role } });
    setLoginOpen(false);
  };

  return (
    <header className="bg-[#0D1B2A] w-full shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 h-24">
        <div className="flex items-center">
          <img
            src="./logo5.png"
            alt="FeeHive Logo"
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

        <nav className="flex flex-row items-center gap-8 text-white font-serif cursor-pointer relative">
          <Link to={"/"} className="hover:text-[#4FC3F7]">
            HOME
          </Link>
          <Link to={"/"} className="hover:text-[#4FC3F7]">
            ABOUT
          </Link>
          <Link to={"/"} className="hover:text-[#4FC3F7]">
            SERVICES
          </Link>
          <Link to={"/"} className="hover:text-[#4FC3F7]">
            PRICING
          </Link>
          <Link to={"/"} className="hover:text-[#4FC3F7]">
            CONTACT
          </Link>

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
      </div>
    </header>
  );
}

export default Header;
