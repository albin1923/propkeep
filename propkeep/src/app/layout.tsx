import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prop Keep - Premium Property Management",
  description: "Prop Keep - The Kerala Homeowner's Essential Property Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-stone-50 text-stone-900 min-h-screen flex flex-col`}>
        <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-stone-800 tracking-tight">
              PROP<span className="text-amber-700">KEEP</span>
            </Link>
            <nav className="hidden md:flex space-x-8 text-sm font-semibold text-stone-600 uppercase tracking-wide">
              <Link href="/" className="hover:text-amber-700 transition">Home</Link>
              <Link href="/about" className="hover:text-amber-700 transition">About</Link>
              <Link href="/services" className="hover:text-amber-700 transition">Services</Link>
              <Link href="/contact" className="hover:text-amber-700 transition">Contact</Link>
              <Link href="/dreamkey-builders" className="hover:text-amber-700 transition">Dreamkey Builders</Link>
            </nav>
            <a href="https://wa.me/YOUR_NUMBER" className="hidden md:inline-block bg-stone-800 hover:bg-stone-900 text-white px-5 py-2.5 rounded-full transition shadow-md font-medium text-sm">
              Book Inspection
            </a>
          </div>
        </header>
        
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        
        <footer className="bg-stone-900 text-stone-400 py-12 text-center border-t border-stone-800">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-stone-200 mb-4">PROP<span className="text-amber-600">KEEP</span></h3>
            <p className="mb-6 max-w-md mx-auto">Premium property management services across Kerala. Ensuring your home is safe, clean, and ready.</p>
            <p className="text-sm border-t border-stone-800 pt-6">&copy; {new Date().getFullYear()} Prop Keep. All rights reserved. A subsidiary of Dreamkey Builders.</p>
          </div>
        </footer>

        {/* Floating Actions */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a title="Call Us" href="tel:+910000000000" className="bg-stone-800 text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </a>
          <a title="WhatsApp Us" href="https://wa.me/YOUR_NUMBER" className="bg-green-600 text-white p-3.5 rounded-full shadow-xl hover:scale-110 transition flex items-center justify-center">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </body>
    </html>
  );
}
