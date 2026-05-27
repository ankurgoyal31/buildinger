import React from "react";
import ubLogo from "../../../assets/img/UB-logo.png"; 
import leftLogo from "../../../assets/img/mannatLogo.png"; 
const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center p-6 z-10">
      {/* Left Logo */}
      <img
        src={leftLogo}
        alt="Left Logo"
        className="h-[60px]"
      />

      {/* Right Logo (UB) */}
      <img
        src={ubLogo}
        alt="UB Logo"
        className="h-24"
      />
    </nav>
  );
};

export default Navbar;
