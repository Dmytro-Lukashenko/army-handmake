import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const [showHeaderShadow, setShowHeaderShadow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State is now here

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeaderShadow(true);
      } else {
        setShowHeaderShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      // The header now expands to full height when the menu is open
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out px-4 py-4
        ${showHeaderShadow && !isMenuOpen ? "shadow-md" : ""}
        ${isMenuOpen ? "h-screen bg-white" : "py-4 bg-white/70 backdrop-blur-sm"}
      `}
    >
      <div className="container flex items-center justify-between mx-auto h-16">
        <Logo />
        {/* Pass state and toggle function as props */}
        <Navigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      </div>
    </header>
  );
};

export default Header;