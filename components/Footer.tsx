import Image from "next/image";
import Logo from "./Logo";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-15 mt-5">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col items-center text-center">

          <Image
            src="/logo.png"
            alt="Hyre Edge"
            width={70}
            height={70}
            className="mb-4"
          />

          <h3 className="text-2xl font-bold text-white">
            <span className="text-blue-500">Hyre</span> Edge
          </h3>

          <p className="text-slate-400 mt-2">
            Workforce • Technology • Growth
          </p>

          <div className="w-full max-w-md border-t border-slate-800 my-6"></div>

          <div className="flex items-center gap-6 my-6">

  <a
    href="https://linkedin.com/in/YOUR-LINKEDIN"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-blue-400 text-2xl transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/YOUR-GITHUB"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-white text-2xl transition"
  >
    <FaGithub />
  </a>

  <a
    href="mailto:contact@hyreedge.com"
    className="text-slate-400 hover:text-red-400 text-2xl transition"
  >
    <MdEmail />
  </a>

  <a
    href="https://wa.me/91XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-400 hover:text-green-400 text-2xl transition"
  >
    <FaWhatsapp />
  </a>

</div>

          <p className="text-slate-500 text-sm">
            © 2026 Hyre Edge. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-sm mt-2">
            Designed & Developed by{" "}
            <span className="text-blue-400 font-medium">
             <a
  href="https://www.linkedin.com/in/abhishek-shukla093/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 hover:text-blue-300"
>
  Abhishek Shukla
</a>
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}