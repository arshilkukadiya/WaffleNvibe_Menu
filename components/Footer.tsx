import React from "react";
import {
  InstagramIcon,
  WhatsAppIcon,
  FacebookIcon,
  GmailIcon,
  MapPinIcon,
  PhoneIcon,
  CoffeePulseIcon
} from "./Icons";
import MiniGallery from "./MiniGallery";

export default function Footer() {
  return (
    <footer className="mt-20">

      {/* ✅ Mini Gallery Above Footer */}
      <MiniGallery />

      {/* ✅ Social Icons Row */}
      <div className="mt-16 flex flex-col sm:flex-row justify-between items-center px-6 py-6 border-t border-gray-600">

        {/* Left: Social Row */}
        <div className="flex items-center gap-6 mb-6 sm:mb-0">

          <a href="https://instagram.com/wafflenvibe_" target="_blank">
            <InstagramIcon />
          </a>

          <a href="https://wa.me/9099271047" target="_blank">
            <WhatsAppIcon />
          </a>

          <a href="https://maps.app.goo.gl/yourlink" target="_blank">
            <MapPinIcon />
          </a>

          <a href="tel:+919099271047">
            <PhoneIcon />
          </a>

          <a href="mailto:wafflenvibe@gmail.com">
            <GmailIcon />
          </a>

          <a href="https://facebook.com/" target="_blank">
            <FacebookIcon />
          </a>

        </div>

        {/* Right: Coffee Icon */}
        <div>
          <CoffeePulseIcon />
        </div>

      </div>

      {/* ✅ Bottom text */}
      <p className="text-center text-gray-400 text-sm mt-4 pb-6">
        © {new Date().getFullYear()} Waffle N’ Vibe. All Rights Reserved.
      </p>
    </footer>
  );
}



// import React from "react";
// import {
//   InstagramIcon,
//   CoffeePulseIcon,
//   WhatsAppIcon,
//   MapPinIcon,
//   PhoneIcon,
// } from "./Icons";

// const galleryImages = [
//   "../images/coffemainnn.png",
//   "../images/coffemainnn.png",
//   "../images/coffemainnn.png",
//   "../images/coffemainnn.png",
//   "../images/coffemainnn.png",
//   "../images/coffemainnn.png",
//   "../images/coffemainnn.png",
// ];

// const Footer: React.FC = () => {
//   return (
//     <footer className="mt-20 py-10 border-t border-gray-700 px-4 text-[#C9ADA7]">

//       {/* ✅ Mini Gallery */}
//       <h3 className="text-center text-lg font-semibold mb-4 text-warm-gold">
//         Our Gallery ✨
//       </h3>

//       <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-10">
//         {galleryImages.map((src, i) => (
//           <div
//             key={i}
//             className="overflow-hidden rounded-lg border border-gray-700"
//           >
//             <img
//               src={src}
//               alt="gallery"
//               className="w-full h-20 sm:h-24 object-cover hover:scale-110 transition-transform duration-300"
//             />
//           </div>
//         ))}
//       </div>

//       {/* ✅ Social Icons — Round Buttons */}
//       <div className="flex justify-center gap-4 mb-8">

//         {/* Instagram */}
//         <a
//           href="https://www.instagram.com/wafflenvibe__/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-12 h-12 bg-[#ffffff15] border border-gray-600 rounded-full 
//           flex items-center justify-center hover:bg-warm-gold hover:text-black transition"
//         >
//           <InstagramIcon />
//         </a>

//         {/* WhatsApp */}
//         <a
//           href="https://wa.me/919099271047"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-12 h-12 bg-[#ffffff15] border border-gray-600 rounded-full 
//           flex items-center justify-center hover:bg-green-500 transition"
//         >
//           <WhatsAppIcon />
//         </a>

//         {/* Google Maps */}
//         <a
//           href="https://maps.app.goo.gl/Kgz231FEn1ChqGi47"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="w-12 h-12 bg-[#ffffff15] border border-gray-600 rounded-full 
//           flex items-center justify-center hover:bg-blue-500 transition"
//         >
//           <MapPinIcon />
//         </a>

//         {/* Phone */}
//         <a
//           href="tel:+919099271047"
//           className="w-12 h-12 bg-[#ffffff15] border border-gray-600 rounded-full 
//           flex items-center justify-center hover:bg-red-500 transition"
//         >
//           <PhoneIcon />
//         </a>
//       </div>

//       {/* ✅ Center Logo Pulse */}
//       <div className="flex justify-center mb-6">
//         <CoffeePulseIcon />
//       </div>

//       {/* ✅ Copyright */}
//       <p className="text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} Waffle N' Vibe • Crafted with ❤️ & Vibes
//       </p>
//     </footer>
//   );
// };

// export default Footer;





// import React from 'react';
// import { InstagramIcon, CoffeePulseIcon } from './Icons';

// const Footer: React.FC = () => {
//   return (
//     <footer className="mt-12 sm:mt-16 py-6 sm:py-8 border-t border-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-[#C9ADA7] px-4">
//       <div className="flex items-center gap-3">
//         <InstagramIcon />
//         <div>
//           <p className="text-xs sm:text-sm">mention us @</p>
//           <p className="font-semibold text-sm sm:text-lg">wafflenvibe_</p>
//         </div>
//       </div>
//       <div><CoffeePulseIcon /></div>
//     </footer>
//   );
// };
// export default Footer;




// import React from 'react';
// import { InstagramIcon, CoffeePulseIcon } from './Icons';

// const Footer: React.FC = () => {
//     return (
//         <footer className="mt-16 py-8 border-t-2 border-gray-500 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-[#C9ADA7]">
//             <div className="flex items-center space-x-3">
//                 <InstagramIcon />
//                 <div>
//                     <p className="text-sm">mention us @</p>
//                     <p className="font-semibold text-lg">wafflenvibe_</p>
//                 </div>
//             </div>
//             <div className="flex items-center">
//                 <CoffeePulseIcon />
//             </div>
//         </footer>
//     );
// };

// export default Footer;
