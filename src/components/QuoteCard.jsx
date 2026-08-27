export default function QuoteCard({ quote, active, onClick }) {
  return (
    <button onClick={onClick} className={`group flex min-h-56 w-full flex-col justify-between rounded-3xl border p-6 text-left transition duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-accent/30 ${active ? 'border-accent bg-accent text-white shadow-lg' : 'border-black/5 bg-white text-ink hover:border-accent/30'}`}>
      <span className={`font-display text-4xl leading-none ${active ? 'text-white/60' : 'text-accent'}`}>“</span>
      <p className="line-clamp-5 text-base font-medium leading-relaxed sm:text-[1.05rem]">{quote.quote}</p>
      <p className={`mt-5 text-sm font-semibold ${active ? 'text-white/75' : 'text-slate-500'}`}>— {quote.author}</p>
    </button>
  )
}
