function Spinner() { return <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" /> }

export default function QuoteDisplay({ quote, loading, error, onNewQuote, onRetry }) {
  if (error && !quote) {
    return (
      <section className="mx-auto grid min-h-[440px] max-w-4xl place-items-center rounded-[2rem] bg-slate-900 p-8 text-center text-white shadow-card">
        <div><p className="text-5xl">!</p><h2 className="mt-4 font-display text-2xl font-bold">We could not load a quote</h2><p className="mt-2 text-white/60">Check your connection and try again.</p><button onClick={onRetry} className="mt-6 rounded-full bg-accent px-6 py-3 font-semibold transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-accent/40">Try again</button></div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-5xl">
      <div className="grid overflow-hidden rounded-[2rem] bg-slate-900 shadow-card md:grid-cols-[1.15fr_0.85fr]">
        <div className="flex min-h-[430px] flex-col justify-between p-8 text-white sm:p-12 lg:p-16">
          <div>
            <span className="font-display text-6xl leading-none text-accent">“</span>
            {loading && !quote ? (
              <div className="mt-5 space-y-4"><div className="h-6 w-full animate-pulse rounded bg-white/10" /><div className="h-6 w-5/6 animate-pulse rounded bg-white/10" /><div className="h-6 w-2/3 animate-pulse rounded bg-white/10" /></div>
            ) : (
              <blockquote className="mt-3 max-w-[34ch] font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{quote?.quote}</blockquote>
            )}
          </div>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
            <div><p className="text-xs uppercase tracking-[0.2em] text-accent">Words by</p><p className="mt-2 text-lg font-semibold text-white/90">{quote?.author || 'Loading...'}</p></div>
            <button onClick={onNewQuote} disabled={loading} className="inline-flex min-w-40 items-center justify-center gap-3 rounded-full bg-accent px-6 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-55">
              {loading ? <><Spinner /> Loading</> : <><span className="text-xl">↻</span> New quote</>}
            </button>
          </div>
        </div>
        <div className="relative flex min-h-[280px] items-center justify-center bg-accent p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.14),transparent_35%)]" />
          <div className="relative text-center text-white"><div className="font-display text-[9rem] font-extrabold leading-none tracking-tighter text-white/90 sm:text-[12rem]">“”</div><p className="-mt-8 font-display text-xl font-semibold tracking-wide sm:text-2xl">One thought can change your day.</p></div>
        </div>
      </div>
    </section>
  )
}
