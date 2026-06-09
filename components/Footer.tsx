import Image from "next/image";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

     <div className="flex justify-center mb-4">
  <Image
    src="/logo.png"
    alt="Hyre Edge Logo"
    width={70}
    height={70}
  />
</div>

        <p className="text-slate-400 mb-4">
          Workforce. Technology. Growth.
        </p>

        <p className="text-slate-500">
          © 2026 Hyre Edge. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}