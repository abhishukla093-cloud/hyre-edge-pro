export default function TechnologiesPage() {
  const technologies = [
    "Azure",
    "AWS",
    "Google Cloud",
    "Databricks",
    "Snowflake",
    "Power Platform",
    "SAP",
    "Salesforce",
    "Python",
    "Java",
    "React",
    "DevOps",
    "AI / GenAI",
    "Cyber Security",
    "Data Engineering",
    "Machine Learning",
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-blue-400 mb-3">
          TECHNOLOGIES
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Technology Expertise
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl mb-16">
          Delivering talent and consulting services across modern enterprise technologies.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-1 transition-all"
            >
              {tech}
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}