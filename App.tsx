
import React, { useState, useMemo, useEffect } from 'react';

// Components
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Navigation from './components/Navigation';
import MenuCategory from './components/MenuCategory';
import RulesAndRegulations from './components/RulesAndRegulations';
import Footer from './components/Footer';
import AestheticBackground from './components/AestheticBackground';
import Cart from './components/Cart';

// Data & types
import { menuData } from './data/menuData';
import { MenuCategory as MenuCategoryType, MenuItem as MenuItemType, CartItem } from './types';

// ✅ Reviews Component (next file you will get)
import Reviews from './components/Reviews';

function App() {

  // ✅ States
  const [searchTerm, setSearchTerm] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customerName, setCustomerName] = useState("");

  // ✅ Disable scroll when cart open
  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
  }, [isCartOpen]);

  // ✅ Add item to cart
  const handleAddToCart = (itemToAdd: MenuItemType) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === itemToAdd.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === itemToAdd.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  // ✅ Update quantity
  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty < 1) return handleRemove(id);
    setCart((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i))
    );
  };

  // ✅ Remove item
  const handleRemove = (id: string) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  // ✅ Total count for cart icon
  const cartItemCount = useMemo(
    () => cart.reduce((t, i) => t + i.quantity, 0),
    [cart]
  );

  // ✅ Filter menu for search
  const filteredMenu = useMemo(() => {
    if (!searchTerm.trim()) return menuData;

    const s = searchTerm.toLowerCase();

    const filtered = menuData
      .map((cat) => {
        const items = cat.items.filter(
          (i) =>
            i.name.toLowerCase().includes(s) ||
            i.description?.toLowerCase().includes(s)
        );
        return items.length ? { ...cat, items } : null;
      })
      .filter(Boolean) as MenuCategoryType[];

    const titleMatches = menuData.filter((cat) =>
      cat.title.toLowerCase().includes(s)
    );

    return [...filtered, ...titleMatches.filter((c) => !filtered.includes(c))];
  }, [searchTerm]);

  return (
    <>
      {/* Background Lights/Effects */}
      <AestheticBackground />

      {/* Cart Drawer */}
      {/* <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        customerName={customerName}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemove}
      /> */}

      <Cart
  isOpen={isCartOpen}
  onClose={() => setIsCartOpen(false)}
  cartItems={cart}
  customerName={customerName}
  onCustomerNameChange={setCustomerName}
  onUpdateQuantity={handleUpdateQuantity}
  onRemoveItem={handleRemove}
/>


      <div className="min-h-screen font-sans text-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Header */}
          <Header
            cartItemCount={cartItemCount}
            onCartClick={() => setIsCartOpen(true)}
          />

          {/* Welcome text */}
          <div className="text-center my-6 sm:my-12">
            <p className="font-display text-xl sm:text-2xl text-text-secondary">Welcome to our cozy corner.</p>
            <p className="text-lg text-primary">Explore our vibes, one sip at a time.</p>
          </div>

          {/* ✅ Customer Name Input */}
          {/* <div className="w-full flex justify-center mb-5">
            <input
              type="text"
              placeholder="Enter your name to order..."
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="bg-[#4A4E69] text-white border border-gray-500 
              rounded-full p-3 px-6 w-full max-w-md
              focus:outline-none focus:ring-2 focus:ring-[#9A8C98]"
            />
          </div> */}

          <main>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            <Navigation menuData={menuData} />

            <div className="mt-10 sm:mt-16 space-y-20">
              {filteredMenu.length ? (
                filteredMenu.map((cat) => (
                  <MenuCategory
                    key={cat.id}
                    category={cat}
                    onAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <div className="text-center py-16">
                  <p className="text-2xl text-gray-400">No vibes found for "{searchTerm}"</p>
                </div>
              )}
            </div>

            {/* ✅ Reviews section */}
            <div className="mt-28">
              <Reviews />
            </div>

            {/* Rules & Footer */}
            <div className="mt-24">
              <RulesAndRegulations />
            </div>
          </main>

          <Footer />
        </div>
      </div>

      {/* ✅ Sticky Mini Cart for Mobile */}
      {cartItemCount > 0 && !isCartOpen && (
        <div
          onClick={() => setIsCartOpen(true)}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-green-500 
            text-white px-6 py-2 rounded-full text-sm z-50 shadow-lg cursor-pointer sm:hidden"
        >
          View Cart ({cartItemCount})
        </div>
      )}
    </>
  );
}

export default App;





// import React, { useState, useMemo, useEffect } from 'react';
// import Header from './components/Header';
// import SearchBar from './components/SearchBar';
// import Navigation from './components/Navigation';
// import MenuCategory from './components/MenuCategory';
// import RulesAndRegulations from './components/RulesAndRegulations';
// import Footer from './components/Footer';
// import AestheticBackground from './components/AestheticBackground';
// import Cart from './components/Cart';
// import { menuData } from './data/menuData';
// import { MenuCategory as MenuCategoryType, MenuItem as MenuItemType, CartItem } from './types';

// function App() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [isCartOpen, setIsCartOpen] = useState(false);
//     const [cart, setCart] = useState<CartItem[]>([]);

//     useEffect(() => {
//         if (isCartOpen) {
//             document.body.classList.add('cart-open');
//         } else {
//             document.body.classList.remove('cart-open');
//         }
//     }, [isCartOpen]);

//     const handleAddToCart = (itemToAdd: MenuItemType) => {
//         setCart(prevCart => {
//             const existingItem = prevCart.find(item => item.id === itemToAdd.id);
//             if (existingItem) {
//                 return prevCart.map(item =>
//                     item.id === itemToAdd.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 );
//             }
//             return [...prevCart, { ...itemToAdd, quantity: 1 }];
//         });
//         setIsCartOpen(true);
//     };

//     const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
//         if (newQuantity < 1) {
//             handleRemoveFromCart(itemId);
//             return;
//         }
//         setCart(prevCart =>
//             prevCart.map(item =>
//                 item.id === itemId ? { ...item, quantity: newQuantity } : item
//             )
//         );
//     };

//     const handleRemoveFromCart = (itemId: string) => {
//         setCart(prevCart => prevCart.filter(item => item.id !== itemId));
//     };

//     const cartItemCount = useMemo(() => {
//         return cart.reduce((total, item) => total + item.quantity, 0);
//     }, [cart]);


//     const filteredMenuData = useMemo(() => {
//         if (!searchTerm.trim()) {
//             return menuData;
//         }

//         const lowercasedFilter = searchTerm.toLowerCase();
        
//         const filtered = menuData.map(category => {
//             const filteredItems = category.items.filter(item =>
//                 item.name.toLowerCase().includes(lowercasedFilter) ||
//                 (item.description && item.description.toLowerCase().includes(lowercasedFilter))
//             );

//             if (filteredItems.length > 0) {
//                 return { ...category, items: filteredItems };
//             }
//             return null;
//         }).filter((category): category is MenuCategoryType => category !== null);

//         // Also check category title
//         const categoriesByTitle = menuData.filter(category => 
//             category.title.toLowerCase().includes(lowercasedFilter)
//         );

//         // Combine results and remove duplicates
//         const combined = [...filtered];
//         categoriesByTitle.forEach(cat => {
//             if (!combined.find(c => c.id === cat.id)) {
//                 combined.push(cat);
//             }
//         });
        
//         return combined;

//     }, [searchTerm, menuData]);

//     return (
//         <>
//             <AestheticBackground />
//             <Cart 
//                 isOpen={isCartOpen}
//                 onClose={() => setIsCartOpen(false)}
//                 cartItems={cart}
//                 onUpdateQuantity={handleUpdateQuantity}
//                 onRemoveItem={handleRemoveFromCart}
//             />
//             <div className="min-h-screen font-sans bg-transparent text-gray-100 overflow-x-hidden">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//                     <Header cartItemCount={cartItemCount} onCartClick={() => setIsCartOpen(true)} />
//                     <div className="text-center my-12">
//                         <p className="font-display text-2xl text-text-secondary">Welcome to our cozy corner.</p>
//                         <p className="text-lg text-primary">Explore our vibes, one sip at a time.</p>
//                     </div>
//                     <main>
//                         <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
//                         <Navigation menuData={menuData} />
                        
//                         <div className="mt-12 space-y-20">
//                             {filteredMenuData.length > 0 ? (
//                                 filteredMenuData.map(category => (
//                                     <MenuCategory key={category.id} category={category} onAddToCart={handleAddToCart} />
//                                 ))
//                             ) : (
//                                 <div className="text-center py-16">
//                                     <p className="text-2xl text-gray-400">No vibes found for "{searchTerm}"</p>
//                                     <p className="text-gray-500 mt-2">Try searching for something else!</p>
//                                 </div>
//                             )}
//                         </div>

//                         <div className="mt-24">
//                             <RulesAndRegulations />
//                         </div>
//                     </main>
//                     <Footer />
//                 </div>
//             </div>
//         </>
//     );
// }

// export default App;