import React from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void; 
  closeMenu: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isMenuOpen, toggleMenu, closeMenu }) => {
  const navLinks = [
    { name: "Загальна інформація", href: "#general-info" },
    { name: "Структура", href: "#structure" },
    { name: "Спеціалісти", href: "#specialists" },
    { name: "Історії пацієнтів", href: "#histories" },
    { name: "Допомогти", href: "#help" },
    { name: "Контакти", href: "#contacts" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-black font-semibold hover:text-gray-600 transition-colors duration-200"
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button (Hamburger/X) */}
      <div className="md:hidden z-[60]">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-around w-6 h-6 relative bg-transparent border-none cursor-pointer p-0 focus:outline-none"
        >
          {/* Top line */}
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-[10.5px]" : ""
            }`}
          ></span>
          {/* Middle line */}
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-opacity duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          {/* Bottom line */}
          <span
            className={`block w-6 h-0.5 bg-gray-800 rounded transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 h-[calc(100vh-64px)] overflow-y-auto transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col items-center justify-start space-y-6 pt-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;