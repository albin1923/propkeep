"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    title: "50-Point Property Audit",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "A thorough top-to-bottom inspection of your property. We cover exterior health, structural dampness, plumbing issues, electrical systems, and pest checks. Includes high-resolution photo logs."
  },
  {
    title: "Deep Cleaning Services",
    img: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Restore the original shine of your home. We use heavy machinery for tile scrubbing, algae removal on exterior walls, and premium dusting that protects your luxury paints."
  },
  {
    title: "Routine Maintenance",
    img: "https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "We handle your KSEB bills, water authority taxes, and regular tap flushes to ensure motors and plumbing don't freeze up while you are away."
  },
  {
    title: "Post-Monsoon Inspections",
    img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    desc: "Kerala rains can be brutal. We actively inspect roofs and gutters to prevent blockages, clear out fallen leaves, and halt inside dampness before it starts."
  }
];

export default function ServicesPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">Our Premium Services</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          <p className="mt-6 text-xl text-stone-500 font-light max-w-2xl mx-auto">Comprehensive property management tailored for NRIs and vacant homeowners in Kerala.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="h-64 sm:h-80 w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${service.img})` }}
              />
              <div className="p-8 relative bg-white">
                <h3 className="text-2xl font-bold text-stone-800 mb-4">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed font-light mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-3 text-stone-500 font-medium"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Premium Quality</li>
                  <li className="flex items-center gap-3 text-stone-500 font-medium"><CheckCircle2 className="w-5 h-5 text-amber-600" /> Transparent Reporting</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
