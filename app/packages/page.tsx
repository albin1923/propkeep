"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Heart, HeartPulse, Home as HomeIcon, Building2, Phone, ChevronRight } from "lucide-react";

export default function PackagesPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 md:px-8 xl:px-12">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-stone-900 mb-6">Our Packages</h1>
          <p className="text-xl text-stone-600">
            Transparent and comprehensive pricing tailored to ensure your peace of mind and the well-being of your parents.
          </p>
        </div>

        {/* ============ SENIOR CARE PACKAGES ============ */}
        <section id="senior-care-packages" className="mb-24 scroll-mt-32">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">Senior Care Packages</h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -z-10"></div>
            
            <div className="w-full md:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-bold mb-4">
                <Heart className="w-4 h-4" />
                Most Popular
              </div>
              <h3 className="text-3xl font-black text-stone-900 mb-4">Senior Care & Wellness</h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Dedicated caregiver and professional counselor package designed for ultimate care, safety, and health monitoring.
              </p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-stone-100 pb-8">
                <span className="text-4xl md:text-6xl font-black text-amber-600">₹29,000</span>
                <span className="text-stone-500 text-lg">/month</span>
              </div>
              
              <Link
                href="/contact"
                className="w-full block py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold text-center rounded-xl transition-all shadow-lg text-lg"
              >
                Sign Up Now
              </Link>
            </div>
            
            <div className="w-full md:w-1/2 bg-stone-50 p-8 rounded-2xl border border-stone-100 relative z-10">
              <h3 className="text-xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-4">What&apos;s Included:</h3>
              <ul className="space-y-4">
                {[
                  "24/7 Live-in Caretaker Support",
                  "Cooking & Cleaning",
                  "Medication Management & Hygiene",
                  "Routine Health Checkups",
                  "Online Doctor Consultation",
                  "Counselling / Mental Health Support"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-amber-600" />
                    </div>
                    <span className="text-stone-700 font-medium text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Additional Senior Care Plans */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto">
            {[
              { title: "Caring for Senior's Homes", price: "Custom", desc: "Home maintenance, cleaning & daily upkeep for elderly residents" },
              { title: "Legal Help for Seniors", price: "Custom", desc: "Property documentation, will drafting & legal advisory" },
              { title: "24/7 Senior Care Support", price: "₹35,000/mo", desc: "Round-the-clock nursing, post-surgery & palliative care" },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 text-center border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-5">
                  <HeartPulse className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{pkg.title}</h3>
                <p className="text-stone-500 text-sm mb-3 leading-relaxed">{pkg.desc}</p>
                <p className="text-teal-600 font-bold text-lg mb-4">{pkg.price}</p>
                <Link href="/contact" className="text-sm text-stone-500 group-hover:text-teal-600 font-semibold transition-colors flex items-center justify-center gap-1">
                  Get Quote <ChevronRight className="w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ PROPERTY MANAGEMENT PACKAGES ============ */}
        <section id="property-management-packages" className="scroll-mt-32">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-stone-900">Property Management — Yearly Subscriptions</h2>
          </div>

          {/* All Plans Include */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 md:p-8 mb-10 max-w-5xl mx-auto">
            <h3 className="text-lg font-bold text-stone-900 mb-4">All Plans Include Our &quot;Peace of Mind&quot; Basics:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Utility Management: On-time payment of KSEB, Water bill & other utility bills",
                "Tax Compliance: Filing and payment of Municipality/Panchayat Property Tax",
                "Digital Reporting: Professional photo/video reports after every visit",
                "Emergency Response: 24/7 point of contact for property emergencies",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Essential",
                price: "₹18,000",
                period: "/year",
                bestFor: "Locked Plots / Apartments",
                visits: "1 Visit / Month",
                popular: false,
                features: ["50-Point Health Audit", "Bill & Tax Payments", "Monsoon Prep Check", "Interior Airing Out", "Yard/Garden Cleanup (Quarterly)"],
                missing: ["Cobweb Cleanup", "Dust Cleanup / Dry Sweep", "Pest Control Oversight", "Pre-Arrival Cleaning", "Key Holding Service", "Grocery Stocking"],
                color: "border-stone-200",
                bg: "bg-white",
              },
              {
                title: "Premium",
                price: "₹32,000",
                period: "/year",
                bestFor: "Independent Villas",
                visits: "2 Visits / Month",
                popular: true,
                features: ["50-Point Health Audit", "Bill & Tax Payments", "Monsoon Prep Check", "Interior Airing Out", "Cobweb Cleanup (Quarterly)", "Dust Cleanup / Dry Sweep (Quarterly)", "Yard/Garden Cleanup (Monthly)", "Pest Control Oversight", "Pre-Arrival Cleaning (1/Year)", "Key Holding Service"],
                missing: ["Grocery Stocking"],
                color: "border-amber-400 ring-2 ring-amber-400/20",
                bg: "bg-gradient-to-b from-amber-50/50 to-white",
              },
              {
                title: "Concierge",
                price: "₹55,000",
                period: "/year",
                bestFor: "Luxury Estates",
                visits: "4 Visits / Month",
                popular: false,
                features: ["50-Point Health Audit", "Bill & Tax Payments", "Monsoon Prep Check", "Interior Airing Out", "Cobweb Cleanup (Monthly)", "Dust Cleanup / Dry Sweep (Monthly)", "Yard/Garden Cleanup (Monthly)", "Pest Control Oversight", "Pre-Arrival Cleaning (Unlimited)", "Key Holding Service", "Grocery Stocking"],
                missing: [],
                color: "border-teal-300",
                bg: "bg-gradient-to-b from-teal-50/30 to-white",
              },
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-6 border-2 ${pkg.color} ${pkg.bg} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">Most Popular</div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-stone-900 uppercase tracking-wide mb-1">{pkg.title}</h3>
                  <p className="text-stone-500 text-sm">Best For: {pkg.bestFor}</p>
                </div>
                <div className="text-center mb-6 pb-6 border-b border-stone-100">
                  <span className="text-4xl font-black text-stone-900">{pkg.price}</span>
                  <span className="text-stone-500 text-lg"> {pkg.period}</span>
                  <p className="text-teal-600 font-semibold text-sm mt-2">{pkg.visits}</p>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-stone-600">{f}</span>
                    </li>
                  ))}
                  {pkg.missing.map((f, j) => (
                    <li key={`m-${j}`} className="flex items-start gap-2 text-sm opacity-40">
                      <span className="w-4 h-4 flex-shrink-0 mt-0.5 text-center text-stone-400">✕</span>
                      <span className="text-stone-400 line-through">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-3 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg' : 'bg-stone-100 hover:bg-teal-600 hover:text-white text-stone-700'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-stone-400 text-sm text-center mt-6">* Fees are subject to property size (sq. ft.) and location.</p>

          {/* Additional On-Demand Services */}
          <div className="mt-12 max-w-5xl mx-auto bg-stone-900 text-white rounded-2xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-amber-400 mb-3">Additional &quot;On-Demand&quot; Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-stone-300">Renovation / Maintenance Work Supervision — 10% management fee on project cost</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-stone-300">Tenant Sourcing — Comprehensive background checks and agreement drafting</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-20 max-w-4xl mx-auto text-center bg-amber-50 rounded-2xl p-10 border border-amber-100">
          <h3 className="text-2xl font-bold text-stone-900 mb-4">Need Custom Services?</h3>
          <p className="text-stone-700 mb-6">
            We also offer customized Senior Care and Property Management packages depending on your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 text-white font-bold rounded-lg transition-colors hover:bg-stone-800"
          >
            <Phone className="w-4 h-4" />
            Contact Sales
          </Link>
        </div>

      </div>
    </div>
  );
}
