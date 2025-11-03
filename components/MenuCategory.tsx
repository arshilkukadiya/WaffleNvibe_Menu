import React, { useState, useEffect, useRef } from 'react';
import { MenuCategory as MenuCategoryType, MenuItem as MenuItemType } from '../types';
import MenuItem from './MenuItem';
import { CoffeeCupIcon, MojitoIcon, WaffleIcon, TeaIcon, RamenIcon, CheesecakeIcon, BrownieIcon } from './Icons';

interface MenuCategoryProps {
    category: MenuCategoryType;
    onAddToCart: (item: MenuItemType) => void;
}

const getCategoryIcon = (title: string): React.FC => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes('coffee')) return CoffeeCupIcon;
    if (lowerTitle.includes('waffle')) return WaffleIcon;
    if (lowerTitle.includes('mojito')) return MojitoIcon;
    if (lowerTitle.includes('tea')) return TeaIcon;
    if (lowerTitle.includes('ramen')) return RamenIcon;
    if (lowerTitle.includes('cheese cake')) return CheesecakeIcon;
    if (lowerTitle.includes('brownie')) return BrownieIcon;
    return CoffeeCupIcon; // Default icon
};


const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onAddToCart }) => {
    const { id, title, items, note, image, gridCols } = category;
    const CategoryIcon = getCategoryIcon(title);
    
    const ref = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section 
            ref={ref}
            id={id} 
            className={`mb-16 scroll-mt-24 p-6 bg-surface/50 backdrop-blur-md rounded-2xl border border-primary/30 shadow-2xl shadow-black/30 transition-all duration-300 hover:border-primary/60 scroll-animate ${isVisible ? 'is-visible' : ''}`}
        >
            <div className={`grid gap-8 ${image ? 'md:grid-cols-3' : 'md:grid-cols-1'}`}>
                {image && (
                    <div className="md:col-span-1 group overflow-hidden rounded-xl">
                        <img 
                            src={image} 
                            alt={title} 
                            className="rounded-xl shadow-lg object-cover w-full h-full aspect-square transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                )}
                <div className={image ? 'md:col-span-2' : 'md:col-span-1'}>
                    <h2 className="text-4xl font-display mb-6 text-text-primary border-b-2 border-primary/50 pb-3 flex items-center gap-4">
                        <span className="text-warm-gold/80"><CategoryIcon /></span>
                        {title}
                    </h2>
                    <div className={`grid gap-x-8 gap-y-2 ${gridCols === 1 ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
                        {items.map((item) => (
                            <MenuItem key={item.id} item={item} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                    {note && (
                        <p className="text-sm text-text-secondary mt-6 italic bg-primary/20 p-2 rounded-md inline-block">{note}</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MenuCategory;