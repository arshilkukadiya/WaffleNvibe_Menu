import { googleReviews } from "../../data/reviews";

export default function CustomReviews() {
  return (
    <div className="space-y-4">
      {googleReviews.map((r, i) => (
        <div key={i} className="bg-[#2a2b3e]/80 p-4 rounded-xl border border-gray-700 shadow-lg hover:scale-[1.02] transition">
          <p className="font-bold text-lg">{r.name}</p>
          <p className="text-yellow-300 text-base">{"⭐".repeat(Math.floor(r.stars))}</p>
          <p className="text-sm opacity-90 mt-1">{r.review}</p>
        </div>
      ))}
    </div>
  );
}
