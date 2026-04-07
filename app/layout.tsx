import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <body className={`${jakarta.className} bg-[#fdfcfb] text-stone-900 min-h-screen flex flex-col antialiased relative`}>
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-[-1] pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <Navigation />
        
        <main className="flex-grow overflow-hidden">
          {children}
        </main>
        
        <footer className="bg-stone-900 text-stone-400 py-16 text-center border-t border-stone-800">
          <div className="container mx-auto px-4">
            <Link href="/" className="inline-block">
              <h3 className="text-3xl font-extrabold text-stone-200 mb-6 drop-shadow-sm">PROP<span className="text-amber-500">KEEP</span></h3>
            </Link>
            <p className="mb-8 max-w-lg mx-auto leading-relaxed text-stone-300 font-light">
              Exclusive property maintenance and inspection services across Kerala. Expert care specifically designed for NRIs to ensure your home remains safe, pristine, and completely protected while you are abroad.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 text-sm uppercase tracking-widest font-semibold text-stone-500">
              <Link href="/services" className="hover:text-amber-500 transition-colors">Audit Solutions</Link>
              <Link href="/about" className="hover:text-amber-500 transition-colors">Our Standard</Link>
              <Link href="/contact" className="hover:text-amber-500 transition-colors">Schedule Call</Link>
            </div>
            
            <div className="border-t border-stone-800/80 pt-8 flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto gap-4">
              <p className="text-sm opacity-70 border-l-4 border-amber-600 pl-3 text-left">
                A proud subsidiary of <br />
                <Link href="/dreamkey-builders" className="text-amber-500 font-bold hover:text-amber-400 transition-colors">Dreamkey Builders</Link>
              </p>
              <p className="text-sm opacity-60">
                &copy; {new Date().getFullYear()} Prop Keep.<br className="md:hidden" /> All rights reserved.
              </p>
            </div>
          </div>
        </footer>

        {/* Floating Actions */}
        <div className="fixed bottom-6 right-4 lg:right-8 z-50 flex flex-col gap-4">
          <a title="Call Our Expert" href="tel:+910000000000" className="bg-stone-900 text-white p-3.5 lg:p-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 flex items-center justify-center border border-stone-800">
            <Phone className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
          <a title="WhatsApp Support" href="https://wa.me/YOUR_NUMBER" className="bg-gradient-to-tr from-green-600 to-emerald-500 text-white p-3.5 lg:p-4 rounded-full shadow-[0_10px_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6" />
          </a>
        </div>
      </body>
    </html>
  );
}
