import React, { useState } from "react";
import { PowerIcon, CartIcon } from "./Icons";
import image from "../images/Copy_of_23_page-0001-removebg-preview-removebg-preview.png";

// const Header: React.FC = () => {
//   const [isLightOn, setIsLightOn] = useState(true);

//   const toggleLight = () => {
//     setIsLightOn((prevState) => !prevState);
//   };

interface HeaderProps {
    cartItemCount: number;
    onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
    const [isLightOn, setIsLightOn] = useState(true);

    const toggleLight = () => {
        setIsLightOn(prevState => !prevState);
    };
  return (
    <header className="relative text-center pt-12 pb-4 flex flex-col items-center justify-center">
      {/* Street Light Effect */}
      <div className="absolute top-0 inset-x-0 h-48 flex flex-col items-center">
        {/* Light Source */}
        <div
          className={`w-1.5 h-12 rounded-b-md transition-colors duration-500 ${
            isLightOn ? "bg-warm-gold/50" : "bg-gray-700/50"
          }`}
        ></div>
        <div
          className={`relative w-8 h-4 rounded-t-full transition-colors duration-500 ${
            isLightOn ? "bg-warm-gold/80" : "bg-gray-600"
          }`}
        >
          {/* Toggle Button */}
          <button
            onClick={toggleLight}
            className="absolute -top-8 left-1/2 -translate-x-1/2 p-2 rounded-full bg-surface/50 hover:bg-primary transition-colors text-text-secondary hover:text-white"
            aria-label="Toggle spotlight"
          >
            <PowerIcon isOn={isLightOn} />
          </button>
        </div>

        {/* Light Beam */}
        {/* <div 
                    className={`absolute top-16 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light-beam/90 to-transparent to-70% transition-opacity duration-700 ${isLightOn ? 'opacity-100 animate-subtle-glow' : 'opacity-0'}`}
                ></div> */}
        <div className="absolute top-16">
          <div
            className={`w-[420px] h-[320px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light-beam/90 via-light-beam/60 to-transparent to-90% blur-xl transition-opacity duration-700 ${
              isLightOn ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Cart Button */}
      <button
        onClick={onCartClick}
        className="absolute top-6 right-6 z-20 p-3 rounded-full bg-surface/80 hover:bg-primary transition-colors text-text-primary"
        aria-label={`View cart with ${cartItemCount} items`}
      >
        <CartIcon />
        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-warm-gold text-surface text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      <div className="relative z-10 mt-6">
        <img
          src={image}
          alt="Waffle N' Vibe Cafe Logo"
          className="w-64 h-auto mx-auto drop-shadow-2xl"
        />
      </div>
    </header>
  );
};

export default Header;
