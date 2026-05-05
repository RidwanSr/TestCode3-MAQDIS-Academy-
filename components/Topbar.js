import Icon from './Icon';

export default function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 md:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50 md:hidden"
          aria-label="Buka menu"
        >
          <span className="h-0.5 w-5 rounded bg-current before:block before:h-0.5 before:w-5 before:-translate-y-2 before:rounded before:bg-current after:block after:h-0.5 after:w-5 after:translate-y-1.5 after:rounded after:bg-current" />
        </button>
        <p className="truncate text-sm font-semibold text-slate-900">Hafalan</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-xs font-bold text-slate-900">Assalamu'alaikum Satu Titik</p>
          <p className="text-[11px] font-medium text-slate-400">Yuk dihafal, yuk lancarkan bacaan</p>
        </div>
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200"
          aria-label="Notifikasi"
        >
          <Icon name="spark" className="h-4 w-4" />
        </button>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-sm font-black text-white">
          S
        </div>
      </div>
    </header>
  );
}
