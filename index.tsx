
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const rootElement = document.getElementById('root');
// if (!rootElement) {
//   throw new Error("Could not find root element to mount to");
// }

// const root = ReactDOM.createRoot(rootElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ PWA registration
import { registerSW } from "virtual:pwa-register";

// ✅ Auto update + offline support enable
registerSW({
  immediate: true,
});

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
