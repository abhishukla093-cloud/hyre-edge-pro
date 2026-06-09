export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-blue-400 mb-3">
          CAREERS
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Join Our Talent Network
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl">
          Explore exciting opportunities across Cloud,
          Data Engineering, AI, ERP, SAP, Salesforce,
          Power Platform and more.
        </p>

      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">
              Azure Data Engineer
            </h3>

            <p className="text-slate-400 mt-3">
              5+ Years Experience | Remote
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">
              Databricks Developer
            </h3>

            <p className="text-slate-400 mt-3">
              4+ Years Experience | Hybrid
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold">
              Power Platform Engineer
            </h3>

            <p className="text-slate-400 mt-3">
              3+ Years Experience | Remote
            </p>
          </div>

        </div>

      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

        
<form
  action="https://formspree.io/f/xeewkgrg"
  method="POST"
>

  <input
    type="text"
    name="fullName"
    placeholder="Full Name"
    required
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    required
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="text"
    name="experience"
    placeholder="Years of Experience"
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="text"
    name="skills"
    placeholder="Primary Skills (Azure, Databricks, Power Platform...)"
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="url"
    name="resumeLink"
    placeholder="Resume Google Drive / OneDrive Link"
    className="w-full mb-6 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl"
  >
    Submit Application
  </button>

</form>



        </div>

      </section>

    </main>
  );
}