export default function WhyChoose() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">
        <p className="text-blue-400 mb-3">
          WHY CHOOSE US
        </p>

        <h2 className="text-5xl font-bold">
          Why Businesses Trust Hyre Edge
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Fast Hiring
          </h3>

          <p className="text-slate-400">
            Access pre-screened talent and reduce hiring time significantly.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Strong Vendor Network
          </h3>

          <p className="text-slate-400">
            Partner ecosystem covering multiple technologies and domains.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-4">
            Payroll Expertise
          </h3>

          <p className="text-slate-400">
            End-to-end payroll, compliance and workforce management support.
          </p>
        </div>

      </div>

    </section>
  );
}