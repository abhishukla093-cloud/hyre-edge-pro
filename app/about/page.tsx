export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-blue-400 mb-3">
          ABOUT HYRE EDGE
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Building High-Performance Teams
        </h1>

        <p className="text-slate-400 text-xl leading-relaxed max-w-4xl">
          Hyre Edge is a technology staffing and consulting company
          helping organizations scale through top talent, vendor
          partnerships, payroll management and workforce solutions.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Mission
            </h3>

            <p className="text-slate-400">
              Deliver exceptional workforce solutions through innovation and expertise.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Vision
            </h3>

            <p className="text-slate-400">
              Become a trusted global staffing and consulting partner.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Values
            </h3>

            <p className="text-slate-400">
              Integrity, transparency, accountability and customer success.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}