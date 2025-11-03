import React from 'react';
import { WaffleIcon, CoffeeBeanIcon, CoffeeCupIcon } from './Icons'; // Maan kar chal rahe hain ki yeh import sahi hai

// Responsive decorations array
const decorations = [
  {
    Icon: WaffleIcon,
    // Mobile: w-8, Tablet: w-12, Laptop: w-16
    className: 'absolute top-[10%] left-[5%] w-8 h-8 sm:w-12 lg:w-16 text-primary/10 animate-float',
  },
  {
    Icon: CoffeeBeanIcon,
    // Mobile par hidden, Tablet (sm) se dikhega
    className: 'hidden sm:block absolute top-[20%] right-[10%] w-12 h-12 text-primary/10 animate-float animation-delay-3000',
  },
  {
    Icon: CoffeeCupIcon,
    // Mobile: w-12, Tablet: w-16, Laptop: w-20
    className: 'absolute top-[70%] left-[15%] w-12 h-12 sm:w-16 lg:w-20 text-primary/10 animate-float animation-delay-5000',
  },
  {
    Icon: WaffleIcon,
    // Mobile: w-16 (sabse bada), Tablet: w-20, Laptop: w-24
    className: 'absolute bottom-[10%] right-[5%] w-16 h-16 sm:w-20 lg:w-24 text-primary/10 animate-float animation-delay-2000',
  },
  {
    Icon: CoffeeBeanIcon,
    // Mobile: w-8, Tablet se thoda bada (w-10)
    className: 'absolute bottom-[40%] left-[2%] w-8 h-8 sm:w-10 sm:h-10 text-primary/10 animate-float animation-delay-4000',
  },
  {
    Icon: CoffeeCupIcon,
    // Mobile aur Tablet par hidden, Medium screen (md) se dikhega
    className: 'hidden md:block absolute top-[50%] right-[20%] w-16 h-16 text-primary/10 animate-float animation-delay-1000',
  },
  {
    Icon: WaffleIcon,
    // Sirf Large screen (lg) par dikhega
    className: 'hidden lg:block absolute top-[80%] right-[30%] w-12 h-12 text-primary/10 animate-float animation-delay-3000',
  },
  {
    Icon: CoffeeBeanIcon,
    // Hamesha chhota rahega
    className: 'absolute top-[5%] left-[30%] w-8 h-8 text-primary/10 animate-float animation-delay-1000',
  },
];

const AestheticBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-background">
      {/* RESPONSIVE CHANGE:
        Grid size mobile par 2.5rem aur tablet (sm) se upar 4rem hai
      */}
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] sm:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {decorations.map(({ Icon, className }, index) => (
        <div
          key={index}
          className={className}
          // Yeh logic aacha hai, isse alag-alag duration milta rahega
          style={{ animationDuration: `${12 + index * 2.5}s` }}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default AestheticBackground;