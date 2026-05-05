export default function ProgressCard() {
  return (
    <section className="panel-in rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 [animation-delay:80ms]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500">Progress Hafalan</p>
          <p className="mt-1 text-sm font-bold text-slate-900">Hari 8 : Ayat 16-20.1 : 16-20.1</p>
        </div>
        <button
          type="button"
          className="self-start rounded-full bg-orange-400 px-5 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-orange-500 sm:self-auto"
        >
          Lanjut
        </button>
      </div>
    </section>
  );
}
