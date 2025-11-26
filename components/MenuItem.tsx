import React from "react";
import { MenuItem as MenuItemType } from "../types";
import { PlusIcon } from "./Icons";

interface Props {
  item: MenuItemType;
  onAddToCart: (item: MenuItemType) => void;
}

const MenuItem: React.FC<Props> = ({ item, onAddToCart }) => {
  return (
    <div
      className="
        group
        relative
        bg-white/5 
        backdrop-blur 
        border border-white/10 
        rounded-xl 
        p-3 
        flex 
        gap-4 
        items-start
        transition-all 
        duration-300
        hover:scale-[1.02]
        hover:shadow-[0_0_25px_rgba(255,255,255,0.05)]
        hover:rotate-[0.5deg]
        active:scale-95
        overflow-hidden
      "
    >
      {/* ✅ Shine Effect */}
      <div
        className="
          absolute inset-0 
          bg-gradient-to-r 
          from-transparent via-white/20 to-transparent 
          opacity-0 
          group-hover:opacity-100 
          translate-x-[-100%] 
          group-hover:translate-x-[100%] 
          transition-all duration-700
        "
      ></div>

      {/* ✅ IMAGE */}
      <img
        src={item.imageUrl}
        alt={item.name}
        className="
          w-16 h-16 
          sm:w-20 sm:h-20 
          rounded-lg 
          object-cover
          shadow-md
          group-hover:scale-105 
          transition-all
          duration-300
          flex-shrink-0
        "
      />

      <div className="flex-1 min-w-0 relative">
        
        {/* ✅ Best Seller Badge */}
        {item.bestSeller && (
          <span
            className="
              absolute -top-2 left-0
              bg-yellow-400 text-black text-[10px] font-bold 
              px-2 py-[2px] rounded-full 
              shadow-md 
            "
          >
            ⭐ Best Seller
          </span>
        )}

        {/* ✅ Title + Price */}
        <div className="flex justify-between items-start">
          <h3 className="text-white font-semibold text-sm sm:text-base pr-2">
            {item.name}
          </h3>

          <span
            className="
              bg-warm-gold/20 
              text-warm-gold 
              font-bold 
              px-2 py-[2px] 
              text-xs 
              rounded-full 
              shadow-sm
            "
          >
            ₹{item.price}
          </span>
        </div>

        {/* ✅ Description */}
        {item.description && (
          <p className="text-gray-300 text-xs sm:text-sm line-clamp-2 mt-1">
            {item.description}
          </p>
        )}
      </div>

      {/* ✅ ADD BUTTON with Bounce Animation */}
      <button
        onClick={() => onAddToCart(item)}
        className="
          bg-warm-gold 
          text-black 
          p-2 
          rounded-full 
          hover:scale-110 
          active:scale-90 
          transition-all 
          shadow-md
        "
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default MenuItem;





// import React from 'react';
// import { MenuItem as MenuItemType } from '../types';
// import { PlusIcon } from './Icons';

// interface MenuItemProps {
//     item: MenuItemType;
//     onAddToCart: (item: MenuItemType) => void;
// }

// const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
//     const { name, price, description, bestSeller, imageUrl } = item;
//     const canAddToCart = typeof price === 'number' || /^\d+$/.test(String(price));
    
//     return (
//         <div className="py-3 flex items-center gap-4 border-b border-dashed border-primary/20 last:border-none">
//             {imageUrl && (
//                  <div className="w-16 h-16 flex-shrink-0 group relative overflow-hidden rounded-md">
//                     <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
//                  </div>
//             )}
//             <div className="flex-grow">
//                 <div className="flex justify-between items-start gap-2">
//                     <div className="flex items-center gap-2">
//                         <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
//                         {bestSeller && <span className="text-yellow-400 text-sm" title="Best Seller">★</span>}
//                     </div>
//                     <p className="text-lg font-bold text-text-primary whitespace-nowrap">₹{String(price)}</p>
//                 </div>
//                 {description && (
//                     <p className="text-sm text-text-secondary mt-1 italic">{description}</p>
//                 )}
//             </div>
//             {canAddToCart && (
//                 <button 
//                     onClick={() => onAddToCart(item)}
//                     className="ml-4 bg-warm-gold/20 text-warm-gold rounded-full p-2 hover:bg-warm-gold hover:text-surface transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                     aria-label={`Add ${name} to cart`}
//                     disabled={!canAddToCart}
//                 >
//                     <PlusIcon />
//                 </button>
//             )}
//         </div>
//     );
// };

// export default MenuItem;