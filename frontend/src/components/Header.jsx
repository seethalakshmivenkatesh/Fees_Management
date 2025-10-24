import React from "react";

function Header() {
  return (
    <header className="bg-[#0D1B2A] w-full h-24 flex items-center justify-between px-8 shadow-md">
      <div className="flex items-center">
        <img
          src="./logo5.png"
          alt="FeeHive Logo"
          className="w-20 h-20 object-contain"
        />
      </div>

      <nav className="flex items-center gap-8 text-white font-serif cursor-pointer">
        <h3 className="hover:text-[#4FC3F7] transition duration-300">HOME</h3>
        <h3 className="hover:text-[#4FC3F7] transition duration-300">ABOUT</h3>
        <h3 className="hover:text-[#4FC3F7] transition duration-300">
          SERVICES
        </h3>
        <h3 className="hover:text-[#4FC3F7] transition duration-300">
          PRICING
        </h3>
        <h3 className="hover:text-[#4FC3F7] transition duration-300">
          CONTACT
        </h3>

        <button className="bg-[#4FC3F7] text-[#0D1B2A] font-semibold rounded-lg w-20 h-9 hover:bg-[#0288D1] hover:text-white transition duration-300">
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
