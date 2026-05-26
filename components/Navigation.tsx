"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const XTwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    dropdown: [
      { label: "Property Management Services", href: "/services#property-management-services" },
      { label: "Senior Care Services", href: "/services#senior-care-services" },
      { label: "On Demand Services", href: "/services#on-demand-services" },
    ],
  },
  {
    label: "Our Packages",
    href: "/packages",
    dropdown: [
      { label: "Senior Care Packages", href: "/packages#senior-care-packages" },
      { label: "Property Management Packages", href: "/packages#property-management-packages" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact Us",
    href: "/contact",
    dropdown: [
      { label: "Join Our Team", href: "/contact" },
    ],
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setExpandedMobile(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar hidden lg:block relative z-[60]">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <span className="opacity-90 tracking-wide">
            Integrated solution for Property & Senior Care in Kerala | Trusted by NRIs worldwide
          </span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
              <XTwitterIcon className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMobileMenuOpen 
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-stone-100 py-2" 
            : "bg-white/90 backdrop-blur-sm border-b border-stone-100 py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="z-50 relative flex items-center gap-3 transition-opacity hover:opacity-90" 
            onClick={closeMenu}
          >
            <Image 
              src="/images/logo.png" 
              alt="Propkeep Kerala Logo" 
              width={160} 
              height={40} 
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-2xl font-extrabold tracking-tight text-stone-900 hidden sm:block">
              PROP<span className="text-teal-600">KEEP</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-stone-600">
            {navItems.map((item) => (
              <div key={item.label} className="nav-item">
                <Link 
                  href={item.href} 
                  className={`flex items-center gap-1 px-4 py-2.5 rounded-lg hover:text-teal-600 hover:bg-teal-50/50 transition-all ${
                    pathname === item.href ? 'text-teal-600 bg-teal-50/50' : ''
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </Link>
                {item.dropdown && (
                  <div className="nav-dropdown">
                    {item.dropdown.map((sub) => (
                      <Link key={sub.label} href={sub.href}>
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+919495959569" 
              className="px-6 py-2.5 rounded-full transition-all shadow-lg font-bold text-sm whitespace-nowrap transform hover:-translate-y-0.5 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden z-50 relative p-2 -mr-2 transition-colors duration-300 text-stone-900"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

          {/* Mobile Menu Overlay */}
          <div 
            className={`fixed inset-0 h-[100dvh] w-full bg-white z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col pt-20 px-6 lg:hidden overflow-y-auto ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex-grow flex flex-col py-6">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between">
                      <Link 
                        href={item.href} 
                        className="text-lg font-bold text-stone-800 hover:text-teal-600 transition-colors py-3 flex-grow" 
                        onClick={!item.dropdown ? closeMenu : undefined}
                      >
                        {item.label}
                      </Link>
                      {item.dropdown && (
                        <button 
                          onClick={() => setExpandedMobile(expandedMobile === item.label ? null : item.label)}
                          className="p-2 text-stone-400 hover:text-teal-600 transition-colors"
                        >
                          <ChevronDown className={`w-5 h-5 transition-transform ${expandedMobile === item.label ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {item.dropdown && expandedMobile === item.label && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link 
                            key={sub.label} 
                            href={sub.href} 
                            className="block py-2.5 text-stone-600 hover:text-teal-600 transition-colors font-medium"
                            onClick={closeMenu}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
            
            <div className="pb-8 border-t border-stone-100 pt-6">
              <a 
                href="tel:+919495959569" 
                className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-center py-4 rounded-xl font-bold text-sm w-full flex items-center justify-center gap-2 shadow-lg" 
                onClick={closeMenu}
              >
                <Phone className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
