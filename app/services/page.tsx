"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartPulse, Home as HomeIcon, CheckCircle2, Search, Settings, FileText, UserCheck, Stethoscope, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50 text-stone-800">
      
      {/* Header */}
      <div className="container mx-auto px-4 md:px-8 xl:px-12 mb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-stone-900 mb-6">Our Services</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Professional Property Management and Senior Care services structured specifically for NRIs to safeguard what matters most.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 xl:px-12 space-y-24">
        
        {/* Category 1: Property Management */}
        <section id="property-management-services">
          <div className="flex items-center gap-4 mb-10 border-b border-stone-200 pb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <HomeIcon className="w-6 h-6 text-amber-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">1) Property Management Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all">
              <Settings className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="font-bold text-xl text-stone-900 mb-3">Utility, Tax etc</h3>
              <p className="text-stone-600">Timely payment of all bills, property taxes, and utility maintenance to prevent any disruptions or penalties.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all">
              <Search className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="font-bold text-xl text-stone-900 mb-3">Periodical Inspection & Cleaning</h3>
              <p className="text-stone-600">Regular visits to check property conditions combined with deep cleaning schedules to keep your home pristine.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all">
              <FileText className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="font-bold text-xl text-stone-900 mb-3">Legal & Documentation</h3>
              <p className="text-stone-600">Assistance with legal paperwork, property documentation, and resolving local body disputes.</p>
            </motion.div>
            
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.3 }} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl transition-all">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="font-bold text-xl text-stone-900 mb-3">Property Maintenance & Supervision</h3>
              <p className="text-stone-600">Supervision of repairs, remodeling, plumbing, and electrical works by trusted vendors.</p>
            </motion.div>
          </div>
        </section>

        {/* Category 2: Senior Care Services */}
        <section id="senior-care-services">
          <div className="flex items-center gap-4 mb-10 border-b border-stone-200 pb-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
              <HeartPulse className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">2) Senior Care Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full flex items-start justify-end p-4">
                <UserCheck className="w-10 h-10 text-emerald-500 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">(1) Home Care Taker</h3>
              <div className="w-12 h-1 bg-emerald-500 mb-6"></div>
              <p className="text-stone-600 text-lg leading-relaxed">
                Placement of verified, background-checked & trained caregivers. Providing essential daily assist with physical needs, medication, and hygiene.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-2 text-stone-700 font-medium bg-emerald-50/50 p-2 rounded"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Verified nursing/caregiver staff</li>
                <li className="flex gap-2 text-stone-700 font-medium bg-emerald-50/50 p-2 rounded"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Daily physical assistance</li>
                <li className="flex gap-2 text-stone-700 font-medium bg-emerald-50/50 p-2 rounded"><CheckCircle2 className="w-5 h-5 text-emerald-600" /> Medication & hygiene management</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} initial="initial" whileInView="animate" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-stone-100 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full flex items-start justify-end p-4">
                <Stethoscope className="w-10 h-10 text-blue-500 opacity-50" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">(2) Wellness & Mental Health</h3>
              <div className="w-12 h-1 bg-blue-500 mb-6"></div>
              <p className="text-stone-600 text-lg leading-relaxed">
                Sessions with qualified counselors. Extensive support for depression, loneliness, and cognitive stimulation to keep seniors mentally active and happy.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex gap-2 text-stone-700 font-medium bg-blue-50/50 p-2 rounded"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Professional counseling</li>
                <li className="flex gap-2 text-stone-700 font-medium bg-blue-50/50 p-2 rounded"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Combating depression & loneliness</li>
                <li className="flex gap-2 text-stone-700 font-medium bg-blue-50/50 p-2 rounded"><CheckCircle2 className="w-5 h-5 text-blue-600" /> Cognitive stimulation activities</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Category 3: On Demand  */}
        <section id="on-demand-services">
          <div className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3">Additional</h2>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">On Demand Services</h2>
              <p className="text-stone-300 text-xl max-w-2xl mb-8">
                From finding the right tenant to managing rental agreements, we handle everything locally so you don't have to.
              </p>
              
              <div className="bg-stone-800/80 border border-stone-700 p-6 rounded-2xl inline-block">
                <h3 className="text-2xl font-bold text-amber-500 mb-2">Tenant Sourcing & Rental Management</h3>
                <p className="text-stone-300">Complete end-to-end service addressing rental property concerns.</p>
              </div>
              
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-stone-900 font-bold rounded-lg transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Contact to Learn More
                </Link>
              </div>
            </div>
            
            {/* Background design */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/10 blur-3xl rounded-full -z-10 translate-x-1/2"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 border-[40px] border-stone-800 rounded-full -z-10"></div>
          </div>
        </section>

      </div>
    </div>
  );
}
