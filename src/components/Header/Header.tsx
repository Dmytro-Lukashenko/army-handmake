import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";
const Header = () => {
   const [showHeaderShaddow, setShowHeadeShaddow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {     
      if (window.scrollY > 50) {
        setShowHeadeShaddow(true);
      } else {
        setShowHeadeShaddow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white/70 backdrop-blur-sm transition-shadow duration-300 ${
        showHeaderShaddow ? "shadow-md" : ""
      } px-18 py-4 z-50`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
