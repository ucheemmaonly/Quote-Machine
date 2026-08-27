import hero from "../assets/hero.png";

function Spinner() {
  return (
    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
  );
}

export default function QuoteDisplay({
  quote,
  loading,
  error,
  onNewQuote,
  onRetry,
}) {
  if (error && !quote) {
    return (
      <section className="mx-auto grid min-h-[500px] max-w-4xl place-items-center rounded-2xl bg-[#242424] p-8 text-center text-white shadow-2xl">
        <div>
          <p className="text-5xl">!</p>
          <h2 className="mt-4 text-2xl font-semibold">
            We could not load a quote
          </h2>
          <p className="mt-2 text-white/60">
            Check your connection and try again.
          </p>

          <button
            onClick={onRetry}
            className="mt-6 rounded-full bg-[#29998e] px-6 py-3 font-semibold hover:brightness-110"
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center gap-8 pt-8 md:flex-row md:items-center md:gap-8 lg:gap-10">
      <div
        className="relative min-h-[500px] w-full overflow-hidden rounded-2xl bg-[#242424] text-white shadow-[0_25px_35px_rgba(0,0,0,0.28)] md:w-[360px] md:shrink-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative flex min-h-[500px] flex-col p-7 sm:p-8">
          <div className="h-6 w-7 border-y border-white/70" />
          <div className="mt-20">
            <span className="text-4xl font-bold leading-none text-[#29998e]">
              “
            </span>

            {loading && !quote ? (
              <div className="mt-4 space-y-3">
                <div className="h-5 w-full animate-pulse rounded bg-white/15" />

                <div className="h-5 w-5/6 animate-pulse rounded bg-white/15" />

                <div className="h-5 w-2/3 animate-pulse rounded bg-white/15" />
              </div>
            ) : (
              <blockquote className="mt-1 text-[25px] font-medium leading-[1.3] sm:text-[28px]">
                {quote?.quote}
              </blockquote>
            )}

            <div className="mt-4">
              <p className="text-base text-[#79c4bc]">
                {quote?.author || "Loading..."}
              </p>

              <p className="mt-1 max-w-[22ch] text-xs text-white/65">
                Writer, thinker and creator
              </p>
            </div>
          </div>
          <div className="mt-auto flex items-center justify-between pt-8">
            <span className="text-3xl font-light">♡</span>

            <button
              onClick={onNewQuote}
              disabled={loading}
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#29998e] text-3xl transition hover:scale-105 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
              aria-label="Get a new quote"
            >
              {loading ? <Spinner /> : "↻"}
            </button>

            <span className="text-2xl">⇧</span>
          </div>

          <p className="mt-4 text-center text-sm text-white/90">View All</p>
        </div>
      </div>

      <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl bg-[#29998e] p-8 text-white shadow-[0_20px_35px_rgba(41,153,142,0.25)] md:w-[340px] md:shrink-0">
        <div className="text-center">
          <div className="text-[10rem] font-bold leading-[0.7] tracking-[-0.12em] sm:text-[11rem]">
            “ ”
          </div>

          <p className="mt-10 text-2xl font-medium sm:text-3xl">
            Quote of the Day
          </p>
        </div>
      </div>
    </section>
  );
}
