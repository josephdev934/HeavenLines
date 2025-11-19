import React from "react";
import Logo from "../assets/logo.png"; // make sure path & case are correct

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <img src={Logo} alt="Havenline Interiors" className="w-40 h-40 animate-pulse" />
    </div>
  );
};

export default SplashScreen;
