import { googleReviews } from "../../data/reviews";
import GoogleReviewsEmbed from "./GoogleReviewsEmbed";

export default function Reviews() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-warm-gold">
        Customer Love 💖
      </h2>

      {/* ✅ Glass BG block restored */}
      <div className="
        bg-[#0b2636]/60 
        backdrop-blur-xl 
        border border-warm-gold/30 
        shadow-xl 
        rounded-2xl 
        p-6 
        md:p-10
      ">
        <div className="grid md:grid-cols-[1.1fr_2fr] gap-8">

          {/* ✅ Google Map */}
          <GoogleReviewsEmbed />

          {/* ✅ Reviews Grid (6 cards layout) */}
          <div className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-3
            gap-4 
            max-h-[500px]
            overflow-y-auto 
            pr-2
          ">
            {googleReviews.map((r, i) => (
              <div
                key={i}
                className="
                  bg-[#1f2937]/80 
                  backdrop-blur-lg 
                  border border-gray-700 
                  shadow-md 
                  hover:shadow-xl 
                  transition 
                  rounded-xl 
                  p-4 
                  flex flex-col 
                  h-[240px]
                "
              >
                <p className="font-semibold text-warm-gold truncate">
                  {r.name}
                </p>

                <div className="text-yellow-400 text-sm mb-2">
                  {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                </div>

                <div className="text-sm text-text-secondary flex-1 overflow-y-auto pr-1 review-scroll">
                  {r.review}
                </div>

                <span className="text-xs text-gray-400 mt-2">
                  {r.date}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
