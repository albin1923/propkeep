"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isDreamkey = pathname === "/dreamkey-builders";

  return (
    <html lang="en">
      <head>
        <title>Prop Keep - Premium Property Management</title>
        <meta name="description" content="Prop Keep - The Kerala Homeowner's Essential Property Management" />
      </head>
      <body className={`${inter.className} bg-stone-50 text-stone-900 min-h-screen flex flex-col`}>
        <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-stone-800 tracking-tight z-50 relative" onClick={closeMenu}>
              PROP<span className="text-amber-600">KEEP</span>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-8 text-sm font-semibold text-stone-600 uppercase tracking-wide">
              <Link href="/" className="hover:text-amber-600 transition">Home</Link>
              <Link href="/about" className="hover:text-amber-600 transition">About</Link>
              <Link href="/services" className="hover:text-amber-600 transition">Services</Link>
              <Link href="/contact" className="hover:text-amber-600 transition">Contact</Link>
              <Link href="/dreamkey-builders" className="hover:text-amber-600 transition">Dreamkey Builders</Link>
            </nav>
            
            <div className="hidden lg:flex items-center gap-4">
              <a href="https://wa.me/YOUR_NUMBER" className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2.5 rounded-full transition shadow-md font-medium text-sm lg:whitespace-nowrap">
                Book Inspection
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden z-50 relative p-2 -mr-2 text-stone-800"
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

            {/* Mobile Menu Overlay */}
            <div 
              className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 lg:hidden ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <nav className="flex flex-col space-y-6 text-xl font-bold text-stone-800 mt-8">
                <Link href="/" className="pb-4 border-b border-stone-100" onClick={closeMenu}>Home</Link>
                <Link href="/about" className="pb-4 border-b border-stone-100" onClick={closeMenu}>About Us</Link>
                <Link href="/services" className="pb-4 border-b border-stone-100" onClick={closeMenu}>Our Services</Link>
                <Link href="/contact" className="pb-4 border-b border-stone-100" onClick={closeMenu}>Contact Us</Link>
                <Link href="/dreamkey-builders" className="text-amber-600 pb-4" onClick={closeMenu}>Dreamkey Builders</Link>
              </nav>
              <a href="https://wa.me/YOUR_NUMBER" className="mt-12 bg-amber-600 text-white text-center py-4 rounded-xl font-bold uppercase tracking-wider text-sm w-full" onClick={closeMenu}>
                Book Inspection Now
              </a>
            </div>
          </div>
        </header>
        
        <main className="flex-grow pt-[72px] overflow-hidden">
          {children}
        </main>
        
        <footer className="bg-stone-900 text-stone-400 py-12 text-center border-t border-stone-800">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-stone-200 mb-4">PROP<span className="text-amber-500">KEEP</span></h3>
            <p className="mb-8 max-w-md mx-auto leading-relaxed">Premium property maintenance and inspection services across Kerala. Ensuring your home is safe, clean, and completely ready.</p>
            <div className="flex justify-center gap-6 mb-8 text-sm uppercase tracking-widest font-semibold text-stone-500">
              <Link href="/services" className="hover:text-amber-500 transition">Services</Link>
              <Link href="/about" className="hover:text-amber-500 transition">Company</Link>
              <Link href="/contact" className="hover:text-amber-500 transition">Support</Link>
            </div>
            <p className="text-sm border-t border-stone-800 pt-8 opacity-70">&copy; {new Date().getFullYear()} Prop Keep. All rights reserved. A subsidiary of <Link href="/dreamkey-builders" className="text-amber-600">Dreamkey Builders</Link>.</p>
          </div>
        </footer>

        {/* Floating Actions (Hidden on scroll on mobile, always bottom right on desktop) */}
        <div className="fixed bottom-6 right-4 lg:right-8 z-50 flex flex-col gap-3">
          <a title="Call Us" href="tel:+910000000000" className="bg-stone-800 text-white p-3.5 lg:p-4 rounded-full shadow-xl hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center border border-stone-700/50">
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
          <a title="WhatsApp Us" href="https://wa.me/YOUR_NUMBER" className="bg-green-600 text-white p-3.5 lg:p-4 rounded-full shadow-[0_10px_30px_rgba(22,163,74,0.3)] hover:-translate-y-1 transition-transform duration-300 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
        </div>
      </body>
    </html>
  );
}
