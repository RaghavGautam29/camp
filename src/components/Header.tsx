import React, { useState, useEffect } from "react";
import logo4 from "../assets/logo4.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#FFB433] text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-38">
        {/* Logo */}
        <div>
          <img className="w-28 h-29" src={logo4} alt="logo" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-blue-500">About Me</a>
          <a href="#services" className="hover:text-blue-500">Activities</a>
          <a href="#contact" className="hover:text-blue-500">Contact Me</a>
          <a href="#home" className="hover:text-blue-500">Testimonials</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition duration-300 ease-in-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-[#FFFBDE] fixed top-26 left-0 w-full overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-3 text-black">
          <a
            href="#about"
            className="hover:bg-blue-100 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </a>
          <a
            href="#store"
            className="hover:bg-blue-100 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Activities
          </a>
          <a
            href="#contact"
            className="hover:bg-blue-100 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Me
          </a>
          <a
            href="#testimonials"
            className="hover:bg-blue-100 rounded px-3 py-2"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
        </nav>
      </div>
    </header>
  );
}
