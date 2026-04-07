"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled || isMobileMenuOpen 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-stone-200 py-3" 
          : "bg-gradient-to-b from-stone-900/80 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`text-2xl font-extrabold tracking-tight z-50 relative transition-colors duration-300 ${
            scrolled || isMobileMenuOpen ? "text-stone-900" : "text-white"
          }`} 
          onClick={closeMenu}
        >
          PROP<span className="text-amber-500">KEEP</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className={`hidden lg:flex space-x-8 text-sm font-bold uppercase tracking-wide transition-colors duration-300 ${
          scrolled ? "text-stone-600" : "text-stone-200"
        }`}>
          <Link href="/" className={`hover:text-amber-500 transition ${pathname === '/' && scrolled ? 'text-amber-600' : ''}`}>Home</Link>
          <Link href="/about" className={`hover:text-amber-500 transition ${pathname === '/about' && scrolled ? 'text-amber-600' : ''}`}>About</Link>
          <Link href="/services" className={`hover:text-amber-500 transition ${pathname === '/services' && scrolled ? 'text-amber-600' : ''}`}>Services</Link>
          <Link href="/contact" className={`hover:text-amber-500 transition ${pathname === '/contact' && scrolled ? 'text-amber-600' : ''}`}>Contact</Link>
          <Link href="/dreamkey-builders" className={`hover:text-amber-500 transition ${pathname === '/dreamkey-builders' && scrolled ? 'text-amber-600' : ''}`}>Dreamkey Builders</Link>
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
          <a 
            href="https://wa.me/YOUR_NUMBER" 
            className={`px-6 py-2.5 rounded-full transition-all shadow-lg font-bold text-sm lg:whitespace-nowrap transform hover:-translate-y-0.5 ${
              scrolled 
                ? "bg-stone-900 hover:bg-amber-600 text-white" 
                : "bg-amber-600 hover:bg-amber-500 text-white"
            }`}
          >
            Book NRI Audit
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className={`lg:hidden z-50 relative p-2 -mr-2 transition-colors duration-300 ${
            scrolled || isMobileMenuOpen ? "text-stone-800" : "text-white"
          }`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay - Fixed Transparency Issue */}
        <div 
          className={`fixed inset-0 h-[100dvh] w-full bg-white z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col pt-24 px-8 lg:hidden shadow-2xl ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex-grow flex flex-col justify-center pb-20">
            <nav className="flex flex-col space-y-8 text-2xl font-black text-stone-800">
              <Link href="/" className="hover:text-amber-600 transition-colors flex items-center justify-between group" onClick={closeMenu}>
                Home <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
              </Link>
              <Link href="/about" className="hover:text-amber-600 transition-colors flex items-center justify-between group" onClick={closeMenu}>
                About Elite Care <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
              </Link>
              <Link href="/services" className="hover:text-amber-600 transition-colors flex items-center justify-between group" onClick={closeMenu}>
                Property Services <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
              </Link>
              <Link href="/contact" className="hover:text-amber-600 transition-colors flex items-center justify-between group" onClick={closeMenu}>
                Contact <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
              </Link>
              <div className="h-px w-12 bg-stone-200 my-2"></div>
              <Link href="/dreamkey-builders" className="text-stone-500 hover:text-amber-600 transition-colors text-xl flex items-center justify-between group" onClick={closeMenu}>
                Dreamkey Builders <span className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500">→</span>
              </Link>
            </nav>
          </div>
          
          <div className="pb-12 border-t border-stone-100 pt-8">
            <a href="https://wa.me/YOUR_NUMBER" className="bg-stone-900 shadow-[0_10px_30px_rgba(0,0,0,0.15)] text-white text-center py-4 rounded-2xl font-bold uppercase tracking-widest text-sm w-full block active:scale-95 transition-transform" onClick={closeMenu}>
              Book NRI Audit
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
