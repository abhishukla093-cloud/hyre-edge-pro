export default function ServicesPage() {
  const services = [
    {
      title: "IT Staffing",
      desc: "Highly skilled professionals for short and long-term engagements.",
    },
    {
      title: "Contract Staffing",
      desc: "Flexible staffing models to meet dynamic project requirements.",
    },
    {
      title: "Permanent Hiring",
      desc: "End-to-end recruitment for full-time positions.",
    },
    {
      title: "Payroll Management",
      desc: "Complete payroll processing and compliance management.",
    },
    {
      title: "Vendor Management",
      desc: "Strong ecosystem of staffing and technology partners.",
    },
    {
      title: "Technology Consulting",
      desc: "Cloud, Data, AI and Digital Transformation consulting.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-blue-400 mb-3">
          OUR SERVICES
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Workforce Solutions Built For Growth
        </h1>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}