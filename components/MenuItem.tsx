import React from 'react';
import { MenuItem as MenuItemType } from '../types';
import { PlusIcon } from './Icons';

interface MenuItemProps {
    item: MenuItemType;
    onAddToCart: (item: MenuItemType) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, onAddToCart }) => {
    const { name, price, description, bestSeller, imageUrl } = item;
    const canAddToCart = typeof price === 'number' || /^\d+$/.test(String(price));
    
    return (
        <div className="py-3 flex items-center gap-4 border-b border-dashed border-primary/20 last:border-none">
            {imageUrl && (
                 <div className="w-16 h-16 flex-shrink-0 group relative overflow-hidden rounded-md">
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                 </div>
            )}
            <div className="flex-grow">
                <div className="flex justify-between items-start gap-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-text-primary">{name}</h3>
                        {bestSeller && <span className="text-yellow-400 text-sm" title="Best Seller">★</span>}
                    </div>
                    <p className="text-lg font-bold text-text-primary whitespace-nowrap">₹{String(price)}</p>
                </div>
                {description && (
                    <p className="text-sm text-text-secondary mt-1 italic">{description}</p>
                )}
            </div>
            {canAddToCart && (
                <button 
                    onClick={() => onAddToCart(item)}
                    className="ml-4 bg-warm-gold/20 text-warm-gold rounded-full p-2 hover:bg-warm-gold hover:text-surface transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={`Add ${name} to cart`}
                    disabled={!canAddToCart}
                >
                    <PlusIcon />
                </button>
            )}
        </div>
    );
};

export default MenuItem;