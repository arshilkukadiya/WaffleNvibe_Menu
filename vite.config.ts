import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",

      includeAssets: ["favicon.png", "apple-touch-icon.png"],

      manifest: {
        name: "Waffle N Vibe",
        short_name: "WNV",
        description: "Waffle N Vibe Cafe – Menu, Orders & Reviews",
        theme_color: "#1A1A1A",
        background_color: "#1A1A1A",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: "/pwa-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },

      workbox: {
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            urlPattern: ({ request }) =>
              request.destination === "document" ||
              request.destination === "script" ||
              request.destination === "style",
            handler: "NetworkFirst",
          },
          {
            urlPattern: ({ request }) =>
              request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});


// import path from 'path';
// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig(({ mode }) => {
//     const env = loadEnv(mode, '.', '');
//     return {
//       server: {
//         port: 3000,
//         host: '0.0.0.0',
//       },
//       plugins: [react()],
//       define: {
//         'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
//         'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
//       },
//       resolve: {
//         alias: {
//           '@': path.resolve(__dirname, '.'),
//         }
//       }
//     };
// });
