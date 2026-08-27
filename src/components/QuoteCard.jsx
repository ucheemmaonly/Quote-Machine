export default function QuoteCard({ quote, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex min-h-56 w-full flex-col justify-between rounded-2xl p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#29998e]/30 ${
        active ? "bg-[#29998e] text-white" : "bg-white text-[#242424]"
      }`}
    >
      <span
        className={`text-4xl ${active ? "text-white/70" : "text-[#29998e]"}`}
      >
        “
      </span>
      <p className="text-base leading-relaxed">{quote.quote}</p>

      <p
        className={active ? "text-sm text-white/70" : "text-sm text-[#777]"}
      ></p>
    </button>
  );
}
