import Icon from './Icon';

export default function CourseCard({ title, progress, active, delay = 0 }) {
  return (
    <article
      className={`panel-in relative overflow-hidden rounded-2xl p-5 shadow-sm ${
        active ? 'bg-orange-400 text-white' : 'bg-slate-300 text-white'
      }`}
      style={{ animationDelay: `${delay + 140}ms` }}
    >
      <div className="relative z-10 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/55">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-sm font-black">
            <span className={active ? 'text-orange-400' : 'text-slate-400'}>{progress}%</span>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-lg font-black sm:text-xl">
            {title} <span className="text-sm">⊙</span>
          </h3>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 opacity-45">
        {Array.from({ length: 18 }).map((_, index) => (
          <Icon
            key={index}
            name="star"
            className="absolute h-3 w-3 text-white"
            style={{
              top: `${8 + (index % 6) * 16}%`,
              right: `${8 + Math.floor(index / 6) * 22}px`,
            }}
          />
        ))}
      </div>
    </article>
  );
}
