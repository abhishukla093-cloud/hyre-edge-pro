export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <div className="text-center mb-16">
        <p className="text-blue-400 mb-3">
          CLIENT SUCCESS STORIES
        </p>

        <h2 className="text-5xl font-bold">
          Trusted By Growing Businesses
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <p className="text-slate-300 mb-6">
            "Hyre Edge helped us scale our cloud engineering team
            in record time."
          </p>

          <h4 className="font-semibold">
            Technology Director
          </h4>

          <p className="text-slate-500">
            Global IT Company
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <p className="text-slate-300 mb-6">
            "Excellent staffing process and strong vendor network."
          </p>

          <h4 className="font-semibold">
            HR Head
          </h4>

          <p className="text-slate-500">
            Banking Client
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <p className="text-slate-300 mb-6">
            "Reliable payroll and workforce management services."
          </p>

          <h4 className="font-semibold">
            Operations Manager
          </h4>

          <p className="text-slate-500">
            Healthcare Organization
          </p>
        </div>

      </div>

    </section>
  );
}