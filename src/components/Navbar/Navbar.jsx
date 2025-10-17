import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-[#6246ea] text-[#fffffe] shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">DuncanDev</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer hover:text-[#2b2c34] transition-colors duration-200"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-2 text-lg font-semibold">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer hover:text-[#16161a] transition-colors duration-200"
            >
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
