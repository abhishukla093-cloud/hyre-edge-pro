export default function Logo() {
  return (
    <div className="flex items-center gap-3">

      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center font-bold text-xl text-white shadow-lg">
        HE
      </div>

      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">Hyre</span> Edge
        </h1>

        <p className="text-xs text-slate-400 tracking-widest uppercase">
          Workforce • Technology • Growth
        </p>
      </div>

    </div>
  );
}