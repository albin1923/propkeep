"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="pt-24 min-h-screen container mx-auto px-4 md:px-8 text-stone-900">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-bold mb-6 text-amber-600"
      >
        Our Premium Services
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-12"
      >
        Explore our comprehensive management plans, including our signature 50-point health audits, deep cleaning, security checks, and utility tracking tailored for absentee homeowners.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
        >
          <h2 className="text-2xl font-bold text-stone-800 mb-4">The 50-Point Property Audit</h2>
          <p className="text-stone-600 mb-6">Our flagship service ensures every inch of your property is checked and verified.</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <div><strong>Exterior & Perimeter:</strong> Gate hinges lubricated, yard cleared, boundary walls checked.</div>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <div><strong>Structural & Dampness:</strong> Ceiling leaks checked, humidity monitored, preventive care for monsoons.</div>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <div><strong>Plumbing & Water:</strong> Taps flushed, water meter readings taken, leak detection.</div>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <div><strong>Electrical & Power:</strong> ELCB tested, AC outdoor units checked to prevent motor seizures.</div>
            </li>
            <li className="flex items-start gap-3 text-stone-700">
              <span className="text-amber-500 font-bold">✓</span>
              <div><strong>Pest & Security:</strong> Termite trails checked, CCTV active, gaps sealed.</div>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100"
        >
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl font-bold text-stone-800">Visual Evidence & Tracking</h2>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold">The 6-Photo Rule</span>
          </div>
          <p className="text-stone-600 mb-6">We don't just tell you; we show you. Every visit includes timestamped, high-resolution photos:</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm text-center font-medium text-stone-700">Front View & Gate</div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm text-center font-medium text-stone-700">Backyard & Perimeter</div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm text-center font-medium text-stone-700">Living Spaces (Wide)</div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm text-center font-medium text-stone-700">Master Bedroom</div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm text-center font-medium text-stone-700">Kitchen & Plumbing</div>
            <div className="bg-stone-50 p-3 rounded-lg border border-stone-100 text-sm text-center font-medium text-stone-700">Water & Elect. Meters</div>
          </div>
          <h3 className="font-bold text-stone-800 mb-2">Utility & Expense Manager</h3>
          <p className="text-sm text-stone-600">We handle the hassle of KSEB, Water Authority, and Property Tax payments, ensuring zero defaults and late fees.</p>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-stone-900 text-stone-100 p-8 md:p-12 rounded-3xl mb-16"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">The Kerala Homeowner's Essential Property Health Checklist</h2>
        <p className="text-stone-300 mb-8 max-w-2xl">Is your property protected against the elements? Use this 10-minute audit to find out what our service covers.</p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-stone-800 p-6 rounded-xl">
            <h3 className="text-amber-500 font-bold text-lg mb-2">1. Roof and Gutter Integrity</h3>
            <p className="text-sm text-stone-300"><strong className="text-white">Check:</strong> Cracked tiles or pipe blockages.</p>
            <p className="text-sm text-stone-400 mt-2">A single blocked gutter in Kerala's downpours can lead to severe wall dampness.</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl">
            <h3 className="text-amber-500 font-bold text-lg mb-2">2. The "Cobweb & Dust" Assessment</h3>
            <p className="text-sm text-stone-300"><strong className="text-white">Check:</strong> High corners, fans, behind furniture.</p>
            <p className="text-sm text-stone-400 mt-2">Vacant homes accumulate dust that stains premium paint if not professionally cleaned.</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl">
            <h3 className="text-amber-500 font-bold text-lg mb-2">3. Floor & Tile Vitality</h3>
            <p className="text-sm text-stone-300"><strong className="text-white">Check:</strong> Sticky residue or "clouding" on tiles.</p>
            <p className="text-sm text-stone-400 mt-2">Tropical climates cause salt build-up/fungus. We restore original shine with deep scrubbing.</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl">
            <h3 className="text-amber-500 font-bold text-lg mb-2">4. External Wall Algae</h3>
            <p className="text-sm text-stone-300"><strong className="text-white">Check:</strong> Green/black patches on exteriors.</p>
            <p className="text-sm text-stone-400 mt-2">Post-monsoon algae eats into plaster, leading to expensive repainting.</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl">
            <h3 className="text-amber-500 font-bold text-lg mb-2">5. Electrical & Appliance Health</h3>
            <p className="text-sm text-stone-300"><strong className="text-white">Check:</strong> Sticky switches, faint burnt smells.</p>
            <p className="text-sm text-stone-400 mt-2">Testing ACs and fridges monthly prevents motor seizures from high humidity.</p>
          </div>
          <div className="bg-stone-800 p-6 rounded-xl">
            <h3 className="text-amber-500 font-bold text-lg mb-2">6. Plumbing & Pests</h3>
            <p className="text-sm text-stone-300"><strong className="text-white">Check:</strong> Cabinet rot & termite gaps.</p>
            <p className="text-sm text-stone-400 mt-2">Early leak and termite detection saves lakhs in unexpected furniture and structural damage.</p>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="/contact" className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-4 px-8 rounded-full transition-colors">
            Book a Cleaning Inspection
          </a>
        </div>
      </motion.div>
    </div>
  );
}
