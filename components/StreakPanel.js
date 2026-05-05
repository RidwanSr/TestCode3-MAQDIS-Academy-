import { rewardBadges, streaks } from '../data/learning';
import Icon from './Icon';

export default function StreakPanel() {
  return (
    <section className="panel-in rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-bold text-slate-900">Runtutan Kamu</h2>
        <div className="flex flex-wrap gap-2">
          {rewardBadges.map((badge) => (
            <span
              key={badge.label}
              className="rounded-md bg-orange-50 px-2.5 py-1 text-[11px] font-bold text-orange-500"
            >
              🔥 {badge.label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
        {streaks.map((item) => (
          <div key={item.day} className="flex flex-col items-center gap-1">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full ${
                item.done ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-400'
              }`}
            >
              <Icon name="flame" className="h-5 w-5" />
            </div>
            <span className={`text-[10px] font-bold ${item.done ? 'text-orange-500' : 'text-slate-400'}`}>
              {item.day}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
