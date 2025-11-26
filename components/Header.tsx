import React, { useState } from "react";
import { CartIcon } from "./Icons";
import image from "../images/light.png";
import logo from "../images/Copy_of_23_page-0001-removebg-preview-removebg-preview.png";
import { Power } from "lucide-react";
import Steam from "./Steam";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [isLightOn, setIsLightOn] = useState(true);

  return (
    <header className="relative flex flex-col items-center justify-start pt-safe pb-4">

      {/* Rope + Switch */}
      <div className="absolute top-0 flex flex-col items-center z-40">
        <img src={image} alt="Light" className="w-8 sm:w-9 lg:w-11 h-auto" />

        <button
          onClick={() => setIsLightOn(!isLightOn)}
          className="absolute -top-8 sm:-top-8 left-1/2 -translate-x-1/2 p-2 rounded-full bg-black/80 hover:bg-white text-white hover:text-black transition shadow-lg"
        >
          <Power size={18} />
        </button>
      </div>

      {/* Light Glow */}
      <div className="absolute top-24 sm:top-36 z-10">
        <div className={`w-[70vw] max-w-[420px] h-[40vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light-beam/90 via-light-beam/60 to-transparent blur-xl transition-opacity duration-700 ${isLightOn ? "opacity-100 animate-flicker" : "opacity-0"}`} />
      </div>

      {/* Logo + Steam */}
      <div className="relative z-30 mt-28 sm:mt-32 lg:mt-40">
        <img src={logo} className="w-40 sm:w-56 lg:w-64 mx-auto drop-shadow-2xl" />
        <Steam />
      </div>

      {/* Floating Cart btn */}
      {cartItemCount > 0 && (
        <button
          onClick={onCartClick}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-surface/80 hover:bg-primary transition text-text-primary animate-bounce"
        >
          <CartIcon />
          <span className="absolute -top-1 -right-1 bg-warm-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartItemCount}
          </span>
        </button>
      )}
      {/* Cart Button */}
{cartItemCount > 0 && (
  <button
    id="cart-fab"                 // ← add this
    onClick={onCartClick}
    className="fixed bottom-6 right-6 z-20 p-3 rounded-full bg-surface/80 hover:bg-primary transition-colors text-text-primary animate-bounce"
    aria-label={`View cart with ${cartItemCount} items`}
  >
    <CartIcon />
    <span className="absolute -top-1 -right-1 bg-warm-gold text-surface text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
      {cartItemCount}
    </span>
  </button>
)}

    </header>
  );
};

export default Header;




// import React, { useState } from "react";
// import { CartIcon } from "./Icons";
// import image from '../images/light.png';
// import logo from "../images/Copy_of_23_page-0001-removebg-preview-removebg-preview.png";
// import { Power } from "lucide-react";

// interface HeaderProps {
//   cartItemCount: number;
//   onCartClick: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
//   const [isLightOn, setIsLightOn] = useState(true);

//   const toggleLight = () => {
//     setIsLightOn(prevState => !prevState);
//   };

//   return (
//     <header className="relative flex flex-col items-center justify-start pt-0 ">

//       {/* ✅ Rope Touching Top (no space) */}
//       <div className="absolute top-0 flex flex-col items-center z-30">

//         {/* ✅ Rope light */}
//         <img src={image} alt="Light" className="w-9 h-auto " />

//         {/* ✅ Power icon above bulb */}
//         <button
//           onClick={toggleLight}
//           className="absolute -top-7 left-1/2 -translate-x-1/2 p-2 rounded-full bg-black/80 hover:bg-white/90 text-white hover:text-black shadow-lg transition"
//           aria-label="Toggle Light"
//         >
//           <Power size={18} />
//         </button>
//       </div>

//       {/* ✅ Light beam */}
//       <div className="absolute top-28 z-10">
//         <div
//           className={`w-[420px] h-[320px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
//             from-light-beam/90 via-light-beam/60 to-transparent blur-xl 
//             transition-opacity duration-700 
//             ${isLightOn ? "opacity-100" : "opacity-0"}`}
//         ></div>
//       </div>

//       {/* ✅ LOGO directly under light */}
//       <div className="relative z-20 mt-32">
//         <img
//           src={logo}
//           className="w-64 mx-auto drop-shadow-2xl"
//           alt="Cafe Logo"
//         />
//       </div>

//       {/* Cart Button */}
//       {cartItemCount > 0 && (
//         <button
//           onClick={onCartClick}
//           className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-surface/80 
//           hover:bg-primary transition-colors text-text-primary animate-bounce"
//         >
//           <CartIcon />
//           <span className="absolute -top-1 -right-1 bg-warm-gold text-surface text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//             {cartItemCount}
//           </span>
//         </button>
//       )}
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from "react";
// import { PowerIcon, CartIcon } from "./Icons";
// import image from "../images/Copy_of_23_page-0001-removebg-preview-removebg-preview.png";

// // const Header: React.FC = () => {
// //   const [isLightOn, setIsLightOn] = useState(true);

// //   const toggleLight = () => {
// //     setIsLightOn((prevState) => !prevState);
// //   };

// interface HeaderProps {
//     cartItemCount: number;
//     onCartClick: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
//     const [isLightOn, setIsLightOn] = useState(true);

//     const toggleLight = () => {
//         setIsLightOn(prevState => !prevState);
//     };
//   return (
//     <header className="relative text-center pt-12 pb-4 flex flex-col items-center justify-center">
//       {/* Street Light Effect */}
//       <div className="absolute top-0 inset-x-0 h-48 flex flex-col items-center">
//         {/* Light Source */}
//         <div
//           className={`w-1.5 h-12 rounded-b-md transition-colors duration-500 ${
//             isLightOn ? "bg-warm-gold/50" : "bg-gray-700/50"
//           }`}
//         ></div>
//         <div
//           className={`relative w-8 h-4 rounded-t-full transition-colors duration-500 ${
//             isLightOn ? "bg-warm-gold/80" : "bg-gray-600"
//           }`}
//         >
//           {/* Toggle Button */}
//           <button
//             onClick={toggleLight}
//             className="absolute -top-8 left-1/2 -translate-x-1/2 p-2 rounded-full bg-surface/50 hover:bg-primary transition-colors text-text-secondary hover:text-white"
//             aria-label="Toggle spotlight"
//           >
//             <PowerIcon isOn={isLightOn} />
//           </button>
//         </div>

//         {/* Light Beam */}
//         {/* <div 
//                     className={`absolute top-16 w-[400px] h-[300px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light-beam/90 to-transparent to-70% transition-opacity duration-700 ${isLightOn ? 'opacity-100 animate-subtle-glow' : 'opacity-0'}`}
//                 ></div> */}
//         <div className="absolute top-16">
//           <div
//             className={`w-[420px] h-[320px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-light-beam/90 via-light-beam/60 to-transparent to-90% blur-xl transition-opacity duration-700 ${
//               isLightOn ? "opacity-100" : "opacity-0"
//             }`}
//           ></div>
//         </div>
//       </div>

//       {/* Cart Button */}
//       {cartItemCount > 0 && (
//         <button
//           onClick={onCartClick}
//           className="fixed bottom-6 right-6 z-20 p-3 rounded-full bg-surface/80 hover:bg-primary transition-colors text-text-primary animate-bounce"
//           aria-label={`View cart with ${cartItemCount} items`}
//         >
//           <CartIcon />
//           <span className="absolute -top-1 -right-1 bg-warm-gold text-surface text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//             {cartItemCount}
//           </span>
//         </button>
//       )}

//       <div className="relative z-10 mt-6">
//         <img
//           src={image}
//           alt="Waffle N' Vibe Cafe Logo"
//           className="w-64 h-auto mx-auto drop-shadow-2xl"
//         />
//       </div>
//     </header>
//   );
// };

// export default Header;
