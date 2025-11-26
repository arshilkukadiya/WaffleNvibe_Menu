import React, { useMemo } from "react";
import { CartItem } from "../types";
import { MinusIcon, PlusIcon, TrashIcon } from "./Icons";
import { fireConfetti } from "../utils/confetti";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  customerName: string;
  onCustomerNameChange: (name: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
  onRemoveItem: (id: string) => void;
}

const phone = "**********"; //enter your number here

const Cart: React.FC<CartProps> = ({
  isOpen,
  onClose,
  cartItems,
  customerName,
  onCustomerNameChange,
  onUpdateQuantity,
  onRemoveItem,
}) => {
  const subtotal = useMemo(
    () => cartItems.reduce((total, i) => total + i.price * i.quantity, 0),
    [cartItems]
  );

  // const sendToWhatsApp = () => {
  //   if (!customerName.trim()) return alert("Please enter your name 🙂");

  //   const items = cartItems
  //     .map((i) => `${i.quantity} x ${i.name} = ₹${i.price * i.quantity}`)
  //     .join("%0a");

  //   const message =
  //     `👤 Name: ${customerName}%0a` +
  //     `🧾 Order:%0a${items}%0a%0a` +
  //     `Total: ₹${subtotal}%0a%0a` +
  //     `Thanks! 🙏`;

  //   window.open(`https://wa.me/91${phone}?text=${message}`, "_blank");
  // };


const sendToWhatsApp = () => {
  fireConfetti(); // first run confetti 🎉

  const message = `Hello, my name is ${customerName}.\nI want to place this order 👇\n\n${
    cartItems.map(i => `${i.quantity} x ${i.name} — ₹${i.price * i.quantity}`).join("\n")
  }\n\nTotal: ₹${subtotal}`;

  setTimeout(() => {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
  }, 600); // 600ms so confetti is fully visible
};


  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/60 z-40 transition ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`fixed z-50 bg-surface text-white flex flex-col transition duration-300 rounded-2xl 
        top-1/2 left-1/2 w-[92%] max-w-[380px] max-h-[85vh] 
        transform -translate-x-1/2 -translate-y-1/2 
        ${isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"}
        sm:top-0 sm:right-0 sm:translate-x-0 sm:-translate-y-0 sm:h-screen sm:w-[360px] sm:rounded-none`}
      >
        <header className="flex justify-between p-4 border-b border-gray-600">
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <button onClick={onClose} className="text-xl leading-none">✕</button>
        </header>

        <div className="p-4 overflow-y-auto flex-1 space-y-3">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400 pt-10">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-3 bg-white/5 p-2 rounded-lg">
                {item.imageUrl && (
                  <img src={item.imageUrl} className="w-14 h-14 rounded-md" alt={item.name} />
                )}

                <div className="flex-1">
                  <h3 className="font-semibold text-base">{item.name}</h3>

                  <div className="flex gap-2 mt-1 items-center">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
                      <MinusIcon />
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
                      <PlusIcon />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-bold">₹{item.price * item.quantity}</p>
                  <button onClick={() => onRemoveItem(item.id)}>
                    <TrashIcon />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className="p-4 border-t border-gray-600 bg-white/5">

            <input
              type="text"
              placeholder="Enter your name"
              value={customerName}
              onChange={(e) => onCustomerNameChange(e.target.value)}
              className="w-full mb-3 bg-[#4A4E69] text-white border border-gray-500 rounded-full p-2 px-4"
            />

            <div className="flex justify-between mb-3 text-sm font-medium">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <button
              onClick={sendToWhatsApp}
              className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              Send Direct on WhatsApp ✅
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default Cart;





// import React, { useMemo } from "react";
// import { CartItem } from "../types";
// import { MinusIcon, PlusIcon, TrashIcon } from "./Icons";

// interface CartProps {
//   isOpen: boolean;
//   onClose: () => void;
//   cartItems: CartItem[];
//   onUpdateQuantity: (itemId: string, newQuantity: number) => void;
//   onRemoveItem: (itemId: string) => void;
// }

// const Cart: React.FC<CartProps> = ({
//   isOpen,
//   onClose,
//   cartItems,
//   onUpdateQuantity,
//   onRemoveItem,
// }) => {
//   const subtotal = useMemo(() => {
//     return cartItems.reduce((total, item) => {
//       const price = parseFloat(String(item.price));
//       return total + price * item.quantity;
//     }, 0);
//   }, [cartItems]);

//   return (
//     <>
//       {/* Overlay */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
//           isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={onClose}
//       ></div>

//       {/* Cart Sidebar */}
//       {/* *
//        * YAHAN CHANGE KIYA GAYA HAI:
//        * 1. 'bottom-0 w-full sm:max-w-sm' (Responsive width/height)
//        * 2. 'overflow-hidden' (Aapke suggestion ke mutabik horizontal scroll ko hide karne ke liye)
//        *
//        */}
//       {/* <aside className={`fixed top-0 right-0 bottom-0 w-full sm:max-w-sm bg-surface text-text-primary shadow-2xl z-50 flex flex-col cart-sidebar overflow-hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//        */}
//       <aside
//         className={`fixed top-1/2 right-12 transform -translate-y-1/2 bg-surface text-text-primary shadow-2xl z-50 flex flex-col overflow-hidden transition-transform duration-300 ${
//           isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//         } rounded-2xl w-80 max-h-[90vh]`}
//       >
//         <header className="flex items-center justify-between p-4 border-b border-primary/50">
//           <h2 className="text-xl font-display">Your Vibe Cart</h2>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-primary transition-colors"
//           >
//             &times;
//           </button>
//         </header>

//         <div className="p-4 overflow-y-auto scrollbar-hide">
//           {cartItems.length === 0 ? (
//             <div className="text-center py-10">
//               <p className="text-text-secondary text-lg">Your cart is empty.</p>
//               <p className="text-sm text-primary">
//                 Add some vibes from the menu!
//               </p>
//             </div>
//           ) : (
//             <ul className="space-y-3">
//               {cartItems.map((item) => (
//                 <li
//                   key={item.id}
//                   className="flex items-center gap-3 bg-primary/20 p-2 rounded-lg"
//                 >
//                   <img
//                     src={item.imageUrl}
//                     alt={item.name}
//                     className="w-14 h-14 object-cover rounded-md flex-shrink-0"
//                   />
//                   <div className="flex-grow">
//                     <h3 className="font-semibold">{item.name}</h3>
//                     <p className="text-sm text-text-secondary">₹{item.price}</p>
//                     <div className="flex items-center gap-2 mt-1">
//                       <button
//                         onClick={() =>
//                           onUpdateQuantity(item.id, item.quantity - 1)
//                         }
//                         className="p-1 rounded-full bg-secondary/50 hover:bg-secondary"
//                       >
//                         <MinusIcon />
//                       </button>
//                       <span className="w-6 text-center">{item.quantity}</span>
//                       <button
//                         onClick={() =>
//                           onUpdateQuantity(item.id, item.quantity + 1)
//                         }
//                         className="p-1 rounded-full bg-secondary/50 hover:bg-secondary"
//                       >
//                         <PlusIcon />
//                       </button>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-end gap-1">
//                     <p className="font-bold">
//                       ₹{parseFloat(String(item.price)) * item.quantity}
//                     </p>
//                     <button
//                       onClick={() => onRemoveItem(item.id)}
//                       className="text-secondary hover:text-red-400 transition-colors"
//                       aria-label={`Remove ${item.name} from cart`}
//                     >
//                       <TrashIcon />
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <footer className="p-4 border-t border-primary/50 bg-primary/20">
//             <div className="flex justify-between items-center text-lg mb-3">
//               <span className="font-display">Subtotal</span>
//               <span className="font-bold">₹{subtotal.toFixed(2)}</span>
//             </div>
//             <button className="w-full bg-warm-gold text-surface py-2 rounded-lg font-bold text-base hover:opacity-90 transition-opacity">
//               Proceed to Checkout
//             </button>
//           </footer>
//         )}
//       </aside>
//     </>
//   );
// };

// export default Cart;





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
