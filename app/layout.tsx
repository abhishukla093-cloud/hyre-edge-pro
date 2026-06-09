
import { GoogleAnalytics } from "@next/third-parties/google";
import { FaWhatsapp } from "react-icons/fa";
import type { Metadata } from "next";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Hyre Edge | Workforce. Technology. Growth.",
  description:
    "IT Staffing, Payroll Management, Vendor Management and Technology Consulting.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white">

        <Navbar />

        {children}

        <Footer />
         <a
    href="https://wa.me/917011517964"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 text-3xl"
  >
    <FaWhatsapp />
  </a>
  <GoogleAnalytics gaId="G-GCZNTG29FF" />
      </body>
    </html>
  );
}