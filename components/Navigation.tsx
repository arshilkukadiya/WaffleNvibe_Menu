// import React from 'react';
// import { MenuCategory } from '../types';

// interface NavigationProps {
//     menuData: MenuCategory[];
// }

// const Navigation: React.FC<NavigationProps> = ({ menuData }) => {
//     return (
//         <nav className="mb-4">
//             <div className="overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
//                 {menuData.map(category => (
//                     <a
//                         key={category.id}
//                         href={`#${category.id}`}
//                         className="inline-block bg-[#22223B] text-[#F2E9E4] px-4 py-2 rounded-full mr-3 text-sm font-semibold hover:bg-[#9A8C98] transition-colors duration-200"
//                     >
//                         {category.title}
//                     </a>
//                 ))}
//             </div>
//         </nav>
//     );
// };

// export default Navigation;

import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MenuCategory } from '../types';

interface NavigationProps {
  menuData: MenuCategory[];
}

const Navigation: React.FC<NavigationProps> = ({ menuData }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <nav className="relative mb-8">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#22223B]/70 hover:bg-[#9A8C98]/80 text-white p-2 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable Categories */}
      <div
        ref={scrollRef}
        className="
          flex items-center gap-4 overflow-x-auto whitespace-nowrap
          py-3  px-10 scroll-smooth snap-x snap-mandatory
          scrollbar-hide
        "
      >
        {menuData.map((category) => (
          <a
            key={category.id}
            href={`#${category.id}`}
            onClick={() => setActiveId(category.id)}
            className={`
              inline-block px-6 py-2 rounded-full font-semibold text-sm
              transition-all duration-300 snap-start relative
              ${
                activeId === category.id
                  ? 'bg-[#9A8C98] text-[#F2E9E4] shadow-[0_0_10px_#9A8C98,0_0_20px_#9A8C98]'
                  : 'bg-[#22223B] text-[#F2E9E4] hover:shadow-[0_0_15px_#B3A1B6,0_0_25px_#B3A1B6]'
              }
            `}
          >
            {category.title}
          </a>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#22223B]/70 hover:bg-[#9A8C98]/80 text-white p-2 rounded-full shadow-lg transition"
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default Navigation;
