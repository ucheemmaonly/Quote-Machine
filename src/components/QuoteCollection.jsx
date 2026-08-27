import QuoteCard from './QuoteCard'

export default function QuoteCollection({ quotes, loading, activeId, onSelect }) {
  return (
    <section className="mx-auto mt-16 max-w-6xl sm:mt-20">
      <div className="mb-7 flex items-end justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">Explore more</p><h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight">Quote collection</h2></div><p className="hidden text-sm text-slate-500 sm:block">Select a card to bring it to the top.</p></div>
      {loading ? <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 9 }).map((_, i) => <div key={i} className="h-52 animate-pulse rounded-3xl bg-white/70" />)}</div> : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">{quotes.map(item => <QuoteCard key={item.id} quote={item} active={item.id === activeId} onClick={() => onSelect(item)} />)}</div>
      )}
    </section>
  )
}
