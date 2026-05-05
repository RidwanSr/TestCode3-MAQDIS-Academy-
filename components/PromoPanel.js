import Icon from './Icon';

export default function PromoPanel() {
  return (
    <aside className="space-y-4 lg:sticky lg:top-20 lg:self-start">
      <section className="panel-in overflow-hidden rounded-2xl bg-orange-400 p-4 text-white shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white/35">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-orange-400">
              <Icon name="cup" className="h-8 w-8" />
            </div>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-black leading-snug">Take your learning to the next level with Hamim PRO</p>
          </div>
          <button
            type="button"
            className="rounded bg-white px-3 py-2 text-[11px] font-black text-orange-500 transition hover:bg-orange-50"
          >
            Start
          </button>
        </div>
      </section>

      <section className="panel-in overflow-hidden rounded-2xl bg-[#fff4d7] shadow-sm ring-1 ring-orange-100 [animation-delay:100ms]">
        <div className="relative min-h-56 p-5">
          <div className="relative z-10 max-w-[58%]">
            <p className="text-[10px] font-black uppercase tracking-wide text-orange-500">Program Ramadhan</p>
            <h3 className="mt-2 text-xl font-black leading-tight text-slate-900">
              Makin Betah Baca Al-Quran Dengan Irama
            </h3>
            <button
              type="button"
              className="mt-4 rounded-full bg-emerald-600 px-4 py-2 text-xs font-black text-white shadow-sm transition hover:bg-emerald-700"
            >
              Daftar Sekarang
            </button>
          </div>

          <div className="absolute bottom-0 right-0 h-44 w-44 rounded-tl-[4rem] bg-emerald-700" />
          <div className="absolute bottom-5 right-8 h-28 w-20 rounded-t-full bg-white/80" />
          <div className="absolute bottom-8 right-16 h-14 w-14 rounded-full bg-slate-800" />
          <div className="absolute bottom-16 right-5 h-20 w-16 -rotate-12 rounded-xl bg-[#d9b58f]" />
          <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-[10px] font-black text-orange-500">
            HAHMI PRO
          </div>
        </div>
      </section>

      <div className="hidden justify-center gap-2 lg:flex">
        <span className="h-1.5 w-5 rounded-full bg-orange-400" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
      </div>
    </aside>
  );
}
