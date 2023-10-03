// src/components/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav-bg py-4">
      <div className="container-wrapper mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className=""> <img src="images/logo.png" alt=""  className='w-auto h-14'/></div>

        {/* Mobile Menu Button */}
        <button
          className="text-black  uppercase  font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
          onClick={toggleMobileMenu}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <ul className="nav-bg py-2 px-4 space-y-2 absolute mob-nav">
            <li>
              <a href="#" className="text-black  uppercase  font-medium hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black  uppercase  font-medium hover:text-gray-200">
              whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="text-black  uppercase  font-medium hover:text-gray-200">
               Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="text-black  uppercase  font-medium hover:text-gray-200">
              Tokonomics
              </a>
            </li>
            <li> <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-8 py-3 rounded-full   hover:text-gray-200">
                Launch App
              </a></li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-12">
            <li>
              <a href="#" className="text-black  uppercase font-bold hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black  uppercase  font-medium hover:text-gray-200">
               Whitepaper
              </a>
            </li>
            <li>
              <a href="#" className="text-black  uppercase  font-medium hover:text-gray-200">
               Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="text-black  uppercase  font-medium    hover:text-gray-200">
                Tokonomics
              </a>
            </li>
            <li>
              <a href="#" className="text-white shadow-lg  uppercase font-bold stroke-black  bg-pink px-12 py-3 rounded-full   hover:text-gray-200">
                Launch App
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;