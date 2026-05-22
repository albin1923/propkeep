import type { Metadata } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/outfit/900.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/900.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const XTwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
);
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 11-2.88 0 1.441 1.441 0 012.88 0z"/></svg>
);
import Navigation from "@/components/Navigation";



export const metadata: Metadata = {
  title: "Prop Keep | Premium NRI Property Management in Kerala",
  description: "Trusted property management and maintenance services for NRIs in Kerala. We ensure complete property health, pest control, security, and cleaning for abroad owners.",
  keywords: ["NRI property management Kerala", "house maintenance Kerala", "Kerala vacant home care", "Kerala property health audit", "Prop Keep", "Dreamkey Builders", "NRI real estate care"],
  openGraph: {
    title: "Prop Keep | Premium NRI Property Management",
    description: "Expert property care for Non-Resident Indians. We keep your Kerala home safe, pristine, and ready.",
    type: "website",
    locale: "en_IN",
    url: "https://propkeep.com",
    siteName: "Prop Keep",
    images: [{ url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prop Keep | NRI Property Management in Kerala",
    description: "Expert property care for Non-Resident Indians in Kerala.",
  },
  alternates: {
    canonical: "https://propkeep.com",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-white text-stone-900 min-h-screen flex flex-col antialiased relative selection:bg-teal-500/30 selection:text-teal-900">
        {/* Subtle Background Pattern */}
        <div className="complex-bg"></div>
        
        <Navigation />
        
        <main className="flex-grow overflow-hidden">
          {children}
        </main>
        
        {/* Footer — 4 column layout matching TharavadConnect structure */}
        <footer className="footer-gradient text-stone-300">
          <div className="container mx-auto px-4 md:px-8 xl:px-12 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Column 1: About */}
              <div>
                <Link href="/" className="inline-block mb-6">
                  <h3 className="text-2xl font-extrabold text-white">PROP<span className="text-teal-400">KEEP</span> <span className="text-sm font-medium text-stone-400 tracking-widest">KERALA</span></h3>
                </Link>
                <p className="text-stone-400 leading-relaxed mb-6 text-sm">
                  Propkeep Kerala is an integrated solution for Senior Care, Property Management, and Legal Protection, designed specifically for the NRI community.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-700 hover:bg-teal-600 flex items-center justify-center transition-colors">
                    <FacebookIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-700 hover:bg-teal-600 flex items-center justify-center transition-colors">
                    <XTwitterIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-700 hover:bg-teal-600 flex items-center justify-center transition-colors">
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-stone-700 hover:bg-teal-600 flex items-center justify-center transition-colors">
                    <InstagramIcon className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Column 2: Quick Links */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/" className="text-stone-400 hover:text-teal-400 transition-colors">Home</Link></li>
                  <li><Link href="/about" className="text-stone-400 hover:text-teal-400 transition-colors">About Us</Link></li>
                  <li><Link href="/services" className="text-stone-400 hover:text-teal-400 transition-colors">Our Services</Link></li>
                  <li><Link href="/packages" className="text-stone-400 hover:text-teal-400 transition-colors">Pricing Packages</Link></li>
                  <li><Link href="/contact" className="text-stone-400 hover:text-teal-400 transition-colors">Contact Us</Link></li>
                </ul>
              </div>

              {/* Column 3: Our Services */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/services" className="text-stone-400 hover:text-teal-400 transition-colors">Senior Home Care</Link></li>
                  <li><Link href="/services" className="text-stone-400 hover:text-teal-400 transition-colors">Assisted Living</Link></li>
                  <li><Link href="/services" className="text-stone-400 hover:text-teal-400 transition-colors">Property Management</Link></li>
                  <li><Link href="/services" className="text-stone-400 hover:text-teal-400 transition-colors">Legal & Documentation</Link></li>
                  <li><Link href="/services" className="text-stone-400 hover:text-teal-400 transition-colors">Post-Surgery Nursing</Link></li>
                </ul>
              </div>

              {/* Column 4: Contact Info */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <a href="mailto:propkeepkerala@gmail.com" className="text-stone-400 hover:text-teal-400 transition-colors">propkeepkerala@gmail.com</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <a href="tel:+919495959569" className="text-stone-400 hover:text-teal-400 transition-colors">+91 94959 59569</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-400">Kerala, India</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-stone-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-stone-500">
                Copyright &copy; {new Date().getFullYear()} Prop Keep Kerala. All Rights Reserved.
              </p>
              <div className="flex gap-6 text-sm text-stone-500">
                <Link href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-teal-400 transition-colors">Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating Actions */}
        <div className="fixed bottom-6 right-4 lg:right-8 z-40 flex flex-col gap-4">
          <a title="Call Our Expert" href="tel:+919495959569" className="bg-stone-900 text-white p-3.5 lg:p-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center justify-center border border-stone-800">
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
          <a title="WhatsApp Support" href="https://wa.me/919495959569" className="bg-gradient-to-tr from-green-600 to-emerald-500 text-white p-3.5 lg:p-4 rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
        </div>
      </body>
    </html>
  );
}
