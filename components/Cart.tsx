import React, { useMemo } from "react";
import { CartItem } from "../types";
import { MinusIcon, PlusIcon, TrashIcon } from "./Icons";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onRemoveItem: (itemId: string) => void;
}

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(String(item.price));
      return total + price * item.quantity;
    }, 0);
  }, [cartItems]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      {/* *
       * YAHAN CHANGE KIYA GAYA HAI:
       * 1. 'bottom-0 w-full sm:max-w-sm' (Responsive width/height)
       * 2. 'overflow-hidden' (Aapke suggestion ke mutabik horizontal scroll ko hide karne ke liye)
       *
       */}
      {/* <aside className={`fixed top-0 right-0 bottom-0 w-full sm:max-w-sm bg-surface text-text-primary shadow-2xl z-50 flex flex-col cart-sidebar overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
       */}
      <aside
        className={`fixed top-1/2 right-12 transform -translate-y-1/2 bg-surface text-text-primary shadow-2xl z-50 flex flex-col overflow-hidden transition-transform duration-300 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } rounded-2xl w-80 max-h-[90vh]`}
      >
        <header className="flex items-center justify-between p-4 border-b border-primary/50">
          <h2 className="text-xl font-display">Your Vibe Cart</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-primary transition-colors"
          >
            &times;
          </button>
        </header>

        <div className="p-4 overflow-y-auto scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-text-secondary text-lg">Your cart is empty.</p>
              <p className="text-sm text-primary">
                Add some vibes from the menu!
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 bg-primary/20 p-2 rounded-lg"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-14 h-14 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-text-secondary">₹{item.price}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 rounded-full bg-secondary/50 hover:bg-secondary"
                      >
                        <MinusIcon />
                      </button>
                      <span className="w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 rounded-full bg-secondary/50 hover:bg-secondary"
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="font-bold">
                      ₹{parseFloat(String(item.price)) * item.quantity}
                    </p>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-secondary hover:text-red-400 transition-colors"
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className="p-4 border-t border-primary/50 bg-primary/20">
            <div className="flex justify-between items-center text-lg mb-3">
              <span className="font-display">Subtotal</span>
              <span className="font-bold">₹{subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-warm-gold text-surface py-2 rounded-lg font-bold text-base hover:opacity-90 transition-opacity">
              Proceed to Checkout
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default Cart;

// import React, { useMemo } from 'react';
// import { CartItem } from '../types';
// import { MinusIcon, PlusIcon, TrashIcon } from './Icons';

// interface CartProps {
// isOpen: boolean;
// onClose: () => void;
// cartItems: CartItem[];
// onUpdateQuantity: (itemId: string, newQuantity: number) => void;
// onRemoveItem: (itemId: string) => void;
// }

// const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
// const subtotal = useMemo(() => {
// return cartItems.reduce((total, item) => {
// const price = parseFloat(String(item.price));
// return total + price * item.quantity;
// }, 0);
// }, [cartItems]);
// return (
//     <>
//         {/* Overlay */}
//         <div
//             className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
//                 isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
//             }`}
//             onClick={onClose}
//         ></div>

//         {/* CART CONTAINER */}
//         <aside
//             className={`fixed bg-surface text-text-primary shadow-2xl z-50 flex flex-col transition-all duration-300 ${
//                 isOpen
//                     ? 'opacity-100 scale-100 translate-y-0'
//                     : 'opacity-0 scale-95 translate-y-5 pointer-events-none'
//             }
//             /* Desktop view */
//             sm:top-0 sm:right-0 sm:w-[380px] sm:h-screen sm:rounded-l-xl
//             /* Mobile view - centered modal */
//             top-1/2 left-1/2 w-[92%] max-w-[370px] rounded-2xl transform -translate-x-1/2 -translate-y-1/2 sm:translate-x-0 sm:translate-y-0`}
//             style={{
//                 height: cartItems.length === 0 ? '60vh' : 'auto',
//                 maxHeight: '85vh',
//             }}
//         >
//             {/* Header */}
//             <header className="flex items-center justify-between p-4 border-b border-primary/50">
//                 <h2 className="text-lg sm:text-2xl font-display">Your Vibe Cart</h2>
//                 <button
//                     onClick={onClose}
//                     className="p-2 rounded-full hover:bg-primary transition-colors text-2xl leading-none"
//                 >
//                     &times;
//                 </button>
//             </header>

//             {/* Cart Items */}
//             <div className="flex-grow p-4 overflow-y-auto">
//                 {cartItems.length === 0 ? (
//                     <div className="text-center h-full flex flex-col justify-center items-center">
//                         <p className="text-text-secondary text-base sm:text-lg">Your cart is empty.</p>
//                         <p className="text-sm text-primary mt-1">Add some vibes from the menu!</p>
//                     </div>
//                 ) : (
//                     <ul className="space-y-3">
//                         {cartItems.map(item => (
//                             <li
//                                 key={item.id}
//                                 className="flex items-center gap-3 bg-primary/20 p-3 rounded-lg"
//                             >
//                                 <img
//                                     src={item.imageUrl}
//                                     alt={item.name}
//                                     className="w-14 h-14 object-cover rounded-md flex-shrink-0"
//                                 />
//                                 <div className="flex-grow">
//                                     <h3 className="font-semibold text-sm">{item.name}</h3>
//                                     <p className="text-xs text-text-secondary">₹{item.price}</p>
//                                     <div className="flex items-center gap-2 mt-2">
//                                         <button
//                                             onClick={() =>
//                                                 onUpdateQuantity(item.id, item.quantity - 1)
//                                             }
//                                             className="p-1 rounded-full bg-secondary/50 hover:bg-secondary"
//                                         >
//                                             <MinusIcon />
//                                         </button>
//                                         <span className="w-6 text-center text-sm">
//                                             {item.quantity}
//                                         </span>
//                                         <button
//                                             onClick={() =>
//                                                 onUpdateQuantity(item.id, item.quantity + 1)
//                                             }
//                                             className="p-1 rounded-full bg-secondary/50 hover:bg-secondary"
//                                         >
//                                             <PlusIcon />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col items-end gap-1">
//                                     <p className="font-bold text-sm">
//                                         ₹{(parseFloat(String(item.price)) * item.quantity).toFixed(2)}
//                                     </p>
//                                     <button
//                                         onClick={() => onRemoveItem(item.id)}
//                                         className="text-secondary hover:text-red-400 transition-colors"
//                                         aria-label={`Remove ${item.name} from cart`}
//                                     >
//                                         <TrashIcon />
//                                     </button>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 )}
//             </div>

//             {/* Footer */}
//             {cartItems.length > 0 && (
//                 <footer className="p-4 border-t border-primary/50 bg-primary/20 rounded-b-2xl sm:rounded-b-none">
//                     <div className="flex justify-between items-center text-base mb-3">
//                         <span className="font-display">Subtotal</span>
//                         <span className="font-bold">₹{subtotal.toFixed(2)}</span>
//                     </div>
//                     <button className="w-full bg-warm-gold text-surface py-2 rounded-lg font-bold text-base hover:opacity-90 transition-opacity">
//                         Proceed to Checkout
//                     </button>
//                 </footer>
//             )}
//         </aside>
//     </>
// );
// };

// export default Cart;
