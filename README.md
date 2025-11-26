🧇 Waffle N Vibe 🍹
A Modern React + Vite Café Menu Web App with PWA, Reviews, and WhatsApp Ordering

A fully responsive, installable, and offline-ready digital café menu for Waffle N Vibe, built with React + Tailwind + Vite.
Customers can browse, search, order via WhatsApp, view reviews, and even install it as an app on Android or iPhone.

🚀 Features
🌐 Core Features

📋 Dynamic menu categories & items

🧁 Add to cart with smooth animations

💬 WhatsApp order integration

🔍 Smart search (items + categories)

🏷️ Auto “Best Seller” badges

🌈 Confetti & shine effects

📱 Responsive Design

Fully optimized for mobile, tablet, laptop, and wide screens

Adaptive layouts with flexible grid and auto-resizing images

Smooth hover transitions & floating add buttons

💾 PWA (Progressive Web App)

🪄 “Add to Home Screen” support for Android & iOS

⚡ Offline Mode (Works even without internet)

🔁 Auto-update when new version is available

📱 Standalone full-screen app experience

🔒 Smart caching for assets & images

💚 Extra Goodies

⭐ Live Google reviews section with carousel

📍 Google Maps location embed

📷 Mini Instagram gallery in footer

🌟 Social media icons with real logo hover effects

🎇 Confetti animation when order placed

🛒 Sticky floating cart for mobile

🛠️ Tech Stack
Category	Technology
Frontend	React.js (Vite)
Styling	Tailwind CSS
State Management	React Hooks
Offline Support	Vite PWA Plugin
Deployment	Vercel / Netlify / Firebase
Other	WhatsApp Web API Integration, Google Maps Embed
⚙️ Installation
# Clone the repo
git clone https://github.com/arshilkukadiya/WaffleNvibe_Menu.git

# Go into the project
cd WaffleNvibe_Menu

# Install dependencies
npm install

# Start the local server
npm run dev


App will run on ➡️ http://localhost:3000

🌐 Build for Production
npm run build
npm run preview

📲 PWA Setup (already included)

This app is PWA-ready.
When users open it on a mobile browser, they’ll see an “Install App” prompt.
Once installed, it runs offline, like a native app.

📦 Folder Structure
src/
 ├── components/
 │   ├── Header.tsx
 │   ├── Footer.tsx
 │   ├── Cart.tsx
 │   ├── MenuCategory.tsx
 │   ├── MenuItem.tsx
 │   ├── Reviews/
 │   ├── SearchBar.tsx
 │   └── AestheticBackground.tsx
 │
 ├── data/
 │   ├── menuData.ts
 │   └── reviews.ts
 │
 ├── App.tsx
 ├── index.tsx
 └── vite.config.ts

💬 WhatsApp Order Flow

1️⃣ Customer selects items →
2️⃣ Opens cart →
3️⃣ Enters name →
4️⃣ Clicks “Send Direct on WhatsApp ✅”
5️⃣ Redirects to WhatsApp with full order details ready to send.

📷 Screenshots
Menu Page	Cart	Reviews	Footer

	
	
	
👨‍💻 Developed By

👑 Arshil Kukadiya
🧠 Full Stack Developer | React & Java Enthusiast
📍 Surat, India


⭐ Future Enhancements

🧾 Invoice / Bill download

🔔 Push notifications (PWA)

🗃️ Local DB sync for offline orders

🧠 AI-powered menu recommendations

💳 Online payment integration

🩵 License

MIT License © 2025 Arshil Kukadiya
