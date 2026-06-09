export default function Clients() {
  const clients = [
    "Microsoft",
    "AWS",
    "Google Cloud",
    "Databricks",
    "Salesforce",
    "SAP",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">

      <p className="text-center text-slate-500 mb-8 uppercase tracking-widest">
        Technologies & Platforms We Support
      </p>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">

        {clients.map((client) => (
          <div
            key={client}
            className="bg-slate-900 border border-slate-800 rounded-xl py-5 text-center text-slate-300 hover:border-blue-500 transition"
          >
            {client}
          </div>
        ))}

      </div>

    </section>
  );
}