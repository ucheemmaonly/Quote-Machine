import QuoteCard from "./QuoteCard";

export default function QuoteCollection({
  quotes,
  loading,
  activeId,
  onSelect,
}) {
  return (
    <section className="mx-auto mt-20 max-w-5xl">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#29998e]">
          More quotes
        </p>

        <h2 className="mt-2 text-3xl font-semibold">Explore the collection</h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-52 animate-pulse rounded-2xl bg-white shadow-sm"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((item) => (
            <QuoteCard
              key={item.id}
              quote={item}
              active={item.id === activeId}
              onClick={() => onSelect(item)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
