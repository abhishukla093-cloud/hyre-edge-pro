export default function VendorRegistrationPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <p className="text-blue-400 mb-3">
          VENDOR PARTNERSHIP
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Become A Vendor Partner
        </h1>

        <p className="text-slate-400 text-xl">
          Join our growing network of staffing and technology partners.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10">

          <input
            type="text"
            placeholder="Company Name"
            className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
          />

<form
  action="https://formspree.io/f/xnjyvdzy"
  method="POST"
>

  <input
    type="text"
    name="companyName"
    placeholder="Company Name"
    required
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="text"
    name="contactPerson"
    placeholder="Contact Person"
    required
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="email"
    name="email"
    placeholder="Business Email"
    required
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="text"
    name="technologies"
    placeholder="Technologies (Azure, AWS, SAP, Salesforce...)"
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <input
    type="number"
    name="resources"
    placeholder="Available Resources"
    className="w-full mb-4 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <textarea
    name="message"
    rows={5}
    placeholder="Tell us about your company and expertise"
    className="w-full mb-6 bg-slate-950 border border-slate-700 rounded-xl p-4"
  />

  <button
    type="submit"
    className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-medium"
  >
    Register Vendor
  </button>

</form>



        </div>

      </section>

    </main>
  );
}