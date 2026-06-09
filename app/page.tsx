import WhyChoose from "../components/WhyChoose";
import Clients from "../components/Clients";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      

      <section className="relative max-w-7xl mx-auto px-6 py-28">
        <div className="absolute top-20 right-10 h-72 w-72 bg-blue-600/20 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 h-72 w-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
        <p className="text-blue-400 mb-4">
          Workforce • Technology • Growth
        </p>

        <h1 className="text-6xl font-bold leading-tight">
          Empowering Businesses Through
          <span className="text-blue-500"> Talent</span>,
          Technology &
          Transformation
        </h1>

        <p className="text-slate-400 text-xl mt-8 max-w-3xl">
          Delivering world-class staffing, consulting,
          payroll management and workforce solutions.
        </p>

        <div className="flex gap-4 mt-10">
          <button className="bg-blue-600 px-8 py-4 rounded-xl">
            Hire Talent
          </button>

          <button className="border border-slate-700 px-8 py-4 rounded-xl">
            Become Partner
          </button>
        </div>
      </section>

      {/* Stats Section */}
<section className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg">
      <h3 className="text-4xl font-bold text-blue-500">500+</h3>
      <p className="text-slate-400 mt-2">Professionals</p>
    </div>

    <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg">
      <h3 className="text-4xl font-bold text-blue-500">100+</h3>
      <p className="text-slate-400 mt-2">Technologies</p>
    </div>

    <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg">
      <h3 className="text-4xl font-bold text-blue-500">50+</h3>
      <p className="text-slate-400 mt-2">Vendor Partners</p>
    </div>

    <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-lg">
      <h3 className="text-4xl font-bold text-blue-500">95%</h3>
      <p className="text-slate-400 mt-2">Client Retention</p>
    </div>

  </div>
</section>

{/* Services Section */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <p className="text-blue-400 mb-3">OUR SERVICES</p>
    <h2 className="text-5xl font-bold">
      End-to-End Workforce Solutions
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-4">
        IT Staffing
      </h3>

      <p className="text-slate-400">
        Skilled professionals for contract,
        contract-to-hire and permanent roles.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Payroll Management
      </h3>

      <p className="text-slate-400">
        End-to-end payroll processing,
        compliance and workforce administration.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Vendor Management
      </h3>

      <p className="text-slate-400">
        Strong network of trusted vendor partners
        to deliver quality talent faster.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Contract Staffing
      </h3>

      <p className="text-slate-400">
        Flexible hiring models for short-term
        and long-term engagements.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Technology Consulting
      </h3>

      <p className="text-slate-400">
        Cloud, Data Engineering, AI, ERP and
        Digital Transformation consulting.
      </p>
    </div>

    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500 transition">
      <h3 className="text-2xl font-semibold mb-4">
        Managed Teams
      </h3>

      <p className="text-slate-400">
        Dedicated teams managed and deployed
        according to business requirements.
      </p>
    </div>

  </div>

</section>
<WhyChoose />
{/* Technologies Section */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <p className="text-blue-400 mb-3">
      TECHNOLOGIES WE SUPPORT
    </p>

    <h2 className="text-5xl font-bold">
      Modern Technology Expertise
    </h2>
  </div>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

    {[
      "Azure",
      "AWS",
      "Databricks",
      "Snowflake",
      "Power Platform",
      "SAP",
      "Salesforce",
      "AI / GenAI",
      "Python",
      "Java",
      "React",
      "DevOps",
    ].map((tech) => (
      <div
        key={tech}
        className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center hover:border-blue-500 transition"
      >
        {tech}
      </div>
    ))}
  </div>

</section>

{/* Industries */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="text-center mb-16">
    <p className="text-blue-400 mb-3">
      INDUSTRIES WE SERVE
    </p>

    <h2 className="text-5xl font-bold">
      Serving Diverse Industries
    </h2>
  </div>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      "Banking & Finance",
      "Healthcare",
      "Retail",
      "Telecom",
      "Manufacturing",
      "Government",
    ].map((item) => (
      <div
        key={item}
        className="bg-slate-900 border border-slate-800 rounded-2xl p-8"
      >
        {item}
      </div>
    ))}
  </div>

</section>
<Testimonials />  
{/* CTA Banner */}
<section className="max-w-7xl mx-auto px-6 py-24">

  <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-16 text-center">

    <h2 className="text-5xl font-bold mb-6">
      Ready To Scale Your Workforce?
    </h2>

    <p className="text-xl mb-8">
      Let's build high-performing teams together.
    </p>

    <button className="bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold">
      Schedule Consultation
    </button>

  </div>

</section>
<Clients />
{/* Footer */}


    </main>
  );
}