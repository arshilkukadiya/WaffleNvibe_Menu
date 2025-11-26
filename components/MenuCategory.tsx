// // import React, { useState, useEffect, useRef } from 'react';
// // import { MenuCategory as MenuCategoryType, MenuItem as MenuItemType } from '../types';
// // import MenuItem from './MenuItem';
// // import {
// //   CoffeeCupIcon, MojitoIcon, WaffleIcon, TeaIcon,
// //   RamenIcon, CheesecakeIcon, BrownieIcon
// // } from './Icons';

// // interface MenuCategoryProps {
// //   category: MenuCategoryType;
// //   onAddToCart: (item: MenuItemType) => void;
// // }

// // const getCategoryIcon = (title: string): React.FC => {
// //   const t = title.toLowerCase();
// //   if (t.includes('coffee')) return CoffeeCupIcon;
// //   if (t.includes('waffle')) return WaffleIcon;
// //   if (t.includes('mojito')) return MojitoIcon;
// //   if (t.includes('tea')) return TeaIcon;
// //   if (t.includes('ramen')) return RamenIcon;
// //   if (t.includes('cheese')) return CheesecakeIcon;
// //   if (t.includes('brownie')) return BrownieIcon;
// //   return CoffeeCupIcon;
// // };

// // const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onAddToCart }) => {
// //   const { id, title, items, note, image } = category;
// //   const CategoryIcon = getCategoryIcon(title);

// //   const ref = useRef<HTMLElement>(null);
// //   const [isVisible, setIsVisible] = useState(false);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //           observer.unobserve(entry.target);
// //         }
// //       },
// //       { threshold: 0.15 }
// //     );
// //     if (ref.current) observer.observe(ref.current);
// //     return () => ref.current && observer.unobserve(ref.current);
// //   }, []);

// //   return (
// //     <section
// //       ref={ref}
// //       id={id}
// //       className={`scroll-mt-32 mb-12 sm:mb-16 p-4 sm:p-6 bg-surface/50 backdrop-blur-md rounded-2xl border border-primary/30 shadow-xl transition-all duration-300 scroll-animate
// //         ${isVisible ? 'is-visible' : ''}`}
// //     >

// //       {/* Title */}
// //       <h2 className="text-2xl sm:text-4xl font-display mb-6 text-text-primary border-b pb-3 border-primary/40 flex items-center gap-3">
// //         <span className="text-warm-gold/80">
// //           <CategoryIcon />
// //         </span>
// //         {title}
// //       </h2>

// //       {/* Image + Items grid */}
// //  <div className="flex flex-col md:flex-row gap-6">

// //   {/* Image */}
// //   {image && (
// //     <div className="md:w-1/3">
// //       <img
// //         src={image}
// //         alt={title}
// //         className="rounded-xl object-cover w-full h-52 sm:h-64 md:h-full hover:scale-[1.03] transition-transform duration-300"
// //       />
// //     </div>
// //   )}

// //   {/* Items list */}
// //   <div className={`${image ? "md:w-2/3" : "w-full"}`}>
// //     <div className="flex flex-col gap-4">
// //       {items.map((item) => (
// //         <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
// //       ))}
// //     </div>

// //     {note && (
// //       <p className="text-xs sm:text-sm text-text-secondary mt-4 italic bg-primary/10 p-2 rounded-md inline-block">
// //         {note}
// //       </p>
// //     )}
// //   </div>
// // </div>




// //     </section>
// //   );
// // };

// // export default MenuCategory;




// import React, { useState, useEffect, useRef } from 'react';
// import { MenuCategory as MenuCategoryType, MenuItem as MenuItemType } from '../types';
// import MenuItem from './MenuItem';
// import { CoffeeCupIcon, MojitoIcon, WaffleIcon, TeaIcon, RamenIcon, CheesecakeIcon, BrownieIcon } from './Icons';

// interface MenuCategoryProps {
//     category: MenuCategoryType;
//     onAddToCart: (item: MenuItemType) => void;
// }

// const getCategoryIcon = (title: string): React.FC => {
//     const lowerTitle = title.toLowerCase();
//     if (lowerTitle.includes('coffee')) return CoffeeCupIcon;
//     if (lowerTitle.includes('waffle')) return WaffleIcon;
//     if (lowerTitle.includes('mojito')) return MojitoIcon;
//     if (lowerTitle.includes('tea')) return TeaIcon;
//     if (lowerTitle.includes('ramen')) return RamenIcon;
//     if (lowerTitle.includes('cheese cake')) return CheesecakeIcon;
//     if (lowerTitle.includes('brownie')) return BrownieIcon;
//     return CoffeeCupIcon; // Default icon
// };


// const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onAddToCart }) => {
//     const { id, title, items, note, image, gridCols } = category;
//     const CategoryIcon = getCategoryIcon(title);
    
//     const ref = useRef<HTMLElement>(null);
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.unobserve(entry.target);
//                 }
//             },
//             {
//                 threshold: 0.1,
//             }
//         );

//         const currentRef = ref.current;
//         if (currentRef) {
//             observer.observe(currentRef);
//         }

//         return () => {
//             if (currentRef) {
//                 observer.unobserve(currentRef);
//             }
//         };
//     }, []);

//     return (
//         <section 
//             ref={ref}
//             id={id} 
//             className={`mb-16 scroll-mt-24 p-6 bg-surface/50 backdrop-blur-md rounded-2xl border border-primary/30 shadow-2xl shadow-black/30 transition-all duration-300 hover:border-primary/60 scroll-animate ${isVisible ? 'is-visible' : ''}`}
//         >
//             {/* <div className={`grid gap-8 ${image ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>
//                 {image && (
//                     <div className="md:col-span-1 group overflow-hidden rounded-xl">
//                         <img 
//                             src={image} 
//                             alt={title} 
//                             className="rounded-xl shadow-lg object-cover w-full h-full aspect-square transition-transform duration-500 group-hover:scale-105"
//                         />
//                     </div>
//                 )}
//                 <div className={image ? 'md:col-span-2' : 'md:col-span-1'}>
//                     <h2 className="text-4xl font-display mb-6 text-text-primary border-b-2 border-primary/50 pb-3 flex items-center gap-4">
//                         <span className="text-warm-gold/80"><CategoryIcon /></span>
//                         {title}
//                     </h2>
//                     <div className={`grid gap-x-8 gap-y-2 ${gridCols === 1 ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
//                         {items.map((item) => (
//                             <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
//                         ))}
//                     </div>
//                     {note && (
//                         <p className="text-sm text-text-secondary mt-6 italic bg-primary/20 p-2 rounded-md inline-block">{note}</p>
//                     )}
//                 </div>
//             </div> */}

//             <div
//   className="
//     grid 
//     gap-6 

//     /* Mobile */
//     grid-cols-1 

//     /* Tablet */
//     sm:grid-cols-1 

//     /* Large tablet */
//     md:grid-cols-2 

//     /* Desktop */
//     lg:grid-cols-3
//   "
// >
//   {image && (
//     <div className="order-first md:order-none">
//       <img
//         src={image}
//         alt={title}
//         className="
//           w-full 
//           h-auto 
//           rounded-2xl 
//           object-cover 
//           max-h-[350px] 
//           sm:max-h-[380px] 
//           md:h-full
//         "
//       />
//     </div>
//   )}

//   <div className={image ? "md:col-span-1 lg:col-span-2" : ""}>
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {items.map((item) => (
//         <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
//       ))}
//     </div>

//     {note && (
//       <p className="text-xs sm:text-sm text-text-secondary mt-4 italic bg-primary/10 p-2 rounded-md inline-block">
//         {note}
//       </p>
//     )}
//   </div>
// </div>

//         </section>
//     );
// };

// export default MenuCategory;




// import React from "react";
// import MenuItem from "./MenuItem";
// import { MenuCategory as MenuCategoryType } from "../types";

// interface Props {
//   category: MenuCategoryType;
//   onAddToCart: (item: any) => void;
// }

// const MenuCategory: React.FC<Props> = ({ category, onAddToCart }) => {
//   return (
//     <section className="border border-primary/20 rounded-xl p-4 sm:p-6 bg-white/5 backdrop-blur-md">

//       {/* ✅ Category Title */}
//       <h2 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">
//         {category.title}
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//         {/* ✅ LEFT SIDE BIG CATEGORY IMAGE */}
//         <div className="md:col-span-1">
//           {category.image && (      // ✅ FIXED HERE
//             <div className="rounded-xl overflow-hidden h-48 sm:h-64">
//               <img
//                 src={category.image}   // ✅ FIXED HERE
//                 alt={category.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           )}
//         </div>

//         {/* ✅ RIGHT SIDE — Small Items List */}
//         <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
//           {category.items.map((item) => (
//             <MenuItem 
//               key={item.id} 
//               item={item} 
//               onAddToCart={onAddToCart} 
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenuCategory;

import React from "react";
import MenuItem from "./MenuItem";
import { MenuCategory as MenuCategoryType } from "../types";

interface Props {
  category: MenuCategoryType;
  onAddToCart: (item: any) => void;
}

const MenuCategory: React.FC<Props> = ({ category, onAddToCart }) => {
  return (
    <section className="border border-primary/20 rounded-xl p-4 sm:p-6 bg-white/5 backdrop-blur-md">

      {/* ✅ Category Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-warm-gold">
        {category.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ✅ LEFT SIDE BIG CATEGORY IMAGE */}
        <div className="md:col-span-1">
          {category.image && (      // ✅ FIXED HERE
            <div className="rounded-xl overflow-hidden h-48 sm:h-64">
              <img
                src={category.image}   // ✅ FIXED HERE
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* ✅ RIGHT SIDE — Small Items List */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {category.items.map((item) => (
            <MenuItem 
              key={item.id} 
              item={item} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;


