export default function Header() {
  return (
    <header className="mb-10 flex items-center justify-between sm:mb-14">
      <div>
        <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-accent">Daily perspective</p>
        <h1 className="mt-2 font-display text-2xl font-extrabold tracking-tight sm:text-3xl text-white">Quote of the Day</h1>
      </div>
      <span className="hidden rounded-full border border-black/10 bg-white/60 px-4 py-2 text-sm text-slate-500 sm:block">Pause. Read. Reflect.</span>
    </header>
  )
}
