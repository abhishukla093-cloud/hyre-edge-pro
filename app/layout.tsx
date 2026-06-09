

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

      </body>
    </html>
  );
}