import { navItems } from '../data/learning';
import Icon from './Icon';

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/35 transition-opacity md:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:static md:z-auto md:w-64 md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-3 border-b border-slate-200 px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400 text-xs font-black text-white">
            ح
          </div>
          <p className="font-bold text-slate-900">Hamim</p>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto rounded-full p-1 text-slate-400 transition hover:bg-slate-100 md:hidden"
            aria-label="Tutup menu"
          >
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-5">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
                item.active
                  ? 'bg-orange-50 text-orange-500'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-md ${
                  item.active ? 'bg-orange-100 text-orange-500' : 'bg-slate-100 text-slate-500'
                }`}
              >
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-slate-100 p-4">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-rose-100">
              <Icon name="logout" className="h-4 w-4" />
            </span>
            Keluar
          </button>
        </div>
      </aside>
    </>
  );
}
