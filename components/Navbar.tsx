
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
      <Link href="/" className="flex items-center gap-3">

  <Image
    src="/logo.png"
    alt="Hyre Edge Logo"
    width={55}
    height={55}
    className="rounded-lg"
  />

  <div>
    <h1 className="text-2xl font-bold text-white">
      Hyre Edge
    </h1>

    <p className="text-xs text-slate-400">
      Workforce • Technology • Growth
    </p>
  </div>

</Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-slate-300">

          <a href="/" className="hover:text-white transition">
            Home
          </a>

          <a href="/about" className="hover:text-white transition">
            About
          </a>

          <a href="/services" className="hover:text-white transition">
            Services
          </a>

          <a href="/technologies" className="hover:text-white transition">
            Technologies
          </a>

          <a href="/careers" className="hover:text-white transition">
            Careers
          </a>

          <a href="/vendor-registration" className="hover:text-white transition">
            Vendor-Registration
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

<button
  onClick={() => setIsOpen(!isOpen)}
  className="md:hidden text-white text-3xl"
>
  ☰
</button>
        {/* Button */}
        <button className="hidden md:block bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl">
  Hire Talent
</button>

      </div>

      {isOpen && (
  <div className="md:hidden bg-slate-900 border-t border-slate-800">
    <div className="flex flex-col p-6 gap-4 text-white">

      <Link href="/" onClick={() => setIsOpen(false)} className="text-white">Home</Link>

      <Link href="/about" onClick={() => setIsOpen(false)} className="text-white">About</Link>

      <Link href="/services" onClick={() => setIsOpen(false)} className="text-white">Services</Link>

      <Link href="/technologies" onClick={() => setIsOpen(false)} className="text-white">Technologies</Link>

      <Link href="/careers" onClick={() => setIsOpen(false)} className="text-white">Careers</Link>

      <Link href="/vendor-registration" onClick={() => setIsOpen(false)} className="text-white">
        Vendor Registration
      </Link>

      <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white">Contact</Link>

      <button className="bg-blue-600 text-white px-5 py-3 rounded-xl mt-3">
        Hire Talent
      </button>

    </div>
  </div>
)}

    </nav>
  );
}