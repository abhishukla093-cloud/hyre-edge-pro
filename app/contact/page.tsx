export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <p className="text-blue-400 mb-3">
          CONTACT US
        </p>

        <h1 className="text-6xl font-bold mb-8">
          Let's Talk
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl">
          Looking for talent, workforce solutions or technology consulting?
          Get in touch with our team.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <p className="mb-4">
              📧 contact@hyreedge.com
            </p>

            <p className="mb-4">
              📞 +91 7011517964
            </p>

            <p>
              📍 Sector 62, Opposite Noida Electronic City Metro, Noida. 201301
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

  <form
    action="https://formspree.io/f/xrevkqqv"
    method="POST"
  >

    <input
      type="text"
      name="name"
      placeholder="Your Name"
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

    <textarea
      name="message"
      placeholder="Your Message"
      rows={5}
      required
      className="w-full mb-6 bg-slate-950 border border-slate-700 rounded-xl p-4"
    />

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl"
    >
      Send Message
    </button>

  </form>

</div>

        </div>

      </section>

    </main>
  );
}