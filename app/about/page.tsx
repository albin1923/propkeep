"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-4 md:px-8 xl:px-12 bg-stone-50 text-stone-900 z-10 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm mb-2 block">About Propkeep Kerala</span>
        <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 text-stone-900 leading-tight">
          Your Trusted Partner in Kerala
        </h1>
        <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light">
          Propkeep Kerala is an integrated solution to safeguard your most valuable assets: your parents & property. We serve as a point of contact for NRIs offering comprehensive senior care, property management, and legal protection to ensure total peace of mind.
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative z-10"
        >
          <div className="absolute top-0 -left-4 w-24 h-24 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-24 h-24 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <Image 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Beautiful Home in Kerala" 
            width={800} 
            height={600} 
            className="rounded-3xl shadow-2xl relative z-10 object-cover h-[500px]"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl lg:text-4xl font-black mb-6 text-stone-900">Why choose us?</h2>
          <p className="text-stone-600 text-lg mb-8 leading-relaxed">
            Living abroad comes with its challenges, especially when worrying about aging parents and unmonitored properties back home. Our mission is to bridge that gap with reliable, verified, and professional care.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Verified Professionals</h3>
                <p className="text-stone-600">Every staff member, from our property managers to senior caregivers, undergoes rigorous background checks and training.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <HeartPulse className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Empathy at the Core</h3>
                <p className="text-stone-600">Handling senior care isn't just a business for us. Empathy, companionship, and extensive mental wellness check-ins form the core of our daily interactions.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">Transparent Updates</h3>
                <p className="text-stone-600">No more guessing. Receive regular WhatsApp reports, voice notes, and video walkthroughs documenting your property's status or your parent's wellness.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-stone-900 text-white rounded-3xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">Experience True Peace of Mind</h2>
        <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto relative z-10">
          Our team is on standby to support your individual requirements. Connect with us today to find the perfect plan.
        </p>
        
        <Link href="/contact" className="inline-block px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all shadow-lg relative z-10 text-lg">
          Schedule a Consultation
        </Link>
      </div>
      
    </div>
  );
}
