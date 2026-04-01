"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-stone-900 mb-6">About Prop Keep</h1>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-stone-600 leading-relaxed font-light">
            Prop Keep was born out of a simple need: to give NRIs and absentee homeowners in Kerala peace of mind. As a subsidiary of <span className="font-bold text-amber-700">Dreamkey Builders</span>, we understand the local climate, the common structural issues, and exactly what it takes to maintain a premium property.
          </p>
        </motion.div>

        {/* Feature blocks */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-amber-600" />,
              title: "Trust & Security",
              desc: "We treat your property as our own, ensuring absolute security, discretion, and meticulous care during every single audit."
            },
            {
              icon: <Eye className="w-10 h-10 text-amber-600" />,
              title: "100% Transparency",
              desc: "Our reports don't just tell you what's wrong; they show you. We provide high-resolution 'Then vs. Now' photos alongside clear utility expense trackers."
            },
            {
              icon: <Users className="w-10 h-10 text-amber-600" />,
              title: "Local Experts",
              desc: "From dealing with Kerala's intense monsoons to understanding the nuances of local plumbing and electricals, our team is deeply experienced."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="bg-white p-10 rounded-3xl shadow-sm border border-stone-200 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="bg-stone-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
              <p className="text-stone-600 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
