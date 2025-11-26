import React, { useEffect, useState } from "react";

// ✅ Load all images from /assets/gallery using Vite import.meta.glob
const galleryImport = import.meta.glob(
  "../images/*.{png,jpg,jpeg,webp}",
  { eager: true }
);

const galleryImages: string[] = Object.values(galleryImport).map(
  (img: any) => img.default
);

export default function MiniGallery() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  useEffect(() => {
    // Shuffle & get 4 random images
    const random4 = [...galleryImages]
      .sort(() => Math.random() - 0.5)
      .slice(0, 4);

    setSelectedImages(random4);
  }, []);

  return (
    <div className="mt-16">
      <h2 className="text-center text-2xl font-bold text-warm-gold mb-6">
        Follow Us On Instagram ✨
      </h2>

      {/* ✅ Auto-carousel on mobile + grid on desktop */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-4 
        gap-3 sm:gap-4
        overflow-hidden relative
        auto-gallery
      "
      >
        {selectedImages.map((src, i) => (
          <div
            key={i}
            className="relative w-full h-32 sm:h-40 overflow-hidden rounded-xl group"
          >
            <img
              src={src}
              className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              alt="Gallery"
            />

            {/* Hover overlay */}
            <div
              className="
              absolute inset-0 bg-black/25 opacity-0
              group-hover:opacity-100 transition-all duration-300
            "
            ></div>
          </div>
        ))}
      </div>

      {/* ✅ Carousel scroll only on mobile */}
      <style>
        {`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-25%); }
          }
          .auto-gallery {
            animation: scrollX 12s linear infinite alternate;
          }
          @media (min-width: 640px) {
            .auto-gallery {
              animation: none;
            }
          }
        `}
      </style>
    </div>
  );
}
