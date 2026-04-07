"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Home as HomeIcon, Sparkles, CheckCircle2, Search, MapPin, Key, Clock, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const services = [
    {
      title: "Comprehensive Security Checks",
      description: "Routine physical inspections of all entry points, perimeter, and interiors to ensure your property remains untampered.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pest & Termite Control",
      description: "Regular pest treatments to prevent infestations that can ruin woodwork and interiors of closed houses.",
      icon: Search,
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Deep Cleaning & Maintenance",
      description: "Scheduled professional cleaning routines so your house is in pristine condition whenever you arrive.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "50-Point Property Audit",
      description: "Detailed monthly reports covering plumbing, electricals, moisture levels, structural integrity, and more.",
      icon: ShieldCheck,
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const checklist = [
    "Interior & Exterior Inspection",
    "Leak & Moisture Check",
    "Security & Lock Assessment",
    "Pest & Termite Screening",
    "Landscape Maintenance",
    "Appliance Functionality",
    "Electrical System Check"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image - Kerala House & Decorative Components */}
        <div className="absolute inset-0 z-0 bg-stone-950">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.65 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=75"
              alt="Beautiful Kerala architecture home"
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>
          
          {/* Gradients to blend image smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-stone-950/70 z-10"></div>

          {/* Floating animated components */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[25%] left-[5%] xl:left-[10%] z-20 hidden md:flex items-center gap-3 px-5 py-3 bg-stone-900/60 backdrop-blur-md rounded-2xl border border-stone-700/50 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-amber-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-stone-400 font-medium">Property Status</p>
              <p className="text-sm text-stone-200 font-semibold">100% Secured</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-[30%] right-[5%] xl:right-[10%] z-20 hidden md:flex items-center gap-3 px-5 py-3 bg-stone-900/60 backdrop-blur-md rounded-2xl border border-stone-700/50 shadow-2xl"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-stone-400 font-medium">Monthly Audit</p>
              <p className="text-sm text-stone-200 font-semibold">Completed</p>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-stone-700 bg-stone-900/50 backdrop-blur-sm mb-6 text-sm text-stone-300">
              <Key className="w-4 h-4 text-amber-500" />
              <span>Dedicated Property Management for NRIs</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              Your Kerala Home, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Safe & Pristine
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-stone-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Total peace of mind while you are abroad. From comprehensive health audits and pest control to scheduled maintenance, we take absolute care of your vacant property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold rounded-full overflow-hidden transition-all shadow-[0_0_40px_rgba(217,119,6,0.2)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Schedule A Callback
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border border-stone-500 hover:bg-stone-800 text-white font-medium rounded-full transition-all"
              >
                View Management Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="bg-stone-950 py-16 text-stone-300 border-b border-stone-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-stone-800">
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">50+</p>
              <p className="text-sm uppercase tracking-wider font-semibold">Point Audit</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">100%</p>
              <p className="text-sm uppercase tracking-wider font-semibold">NRI Focus</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">24/7</p>
              <p className="text-sm uppercase tracking-wider font-semibold">Surveillance Setup</p>
            </div>
            <div className="text-center px-4">
              <p className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">AAA</p>
              <p className="text-sm uppercase tracking-wider font-semibold">Quality Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-stone-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-amber-600 font-semibold tracking-wide uppercase text-sm mb-3 border-b border-amber-600 inline-block pb-1">Our Core Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Uncompromising Property Care</h3>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Homes left unattended fall prey to pests, dampness, and degradation. Our systematic approach ensures your property retains its value and beauty.
            </p>
          </div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative h-96 rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-stone-950/80 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-90' : 'opacity-70'}`}></div>
                </div>
                
                <div className="relative h-full flex flex-col justify-end p-8 z-10">
                  <div className={`w-12 h-12 rounded-full border border-stone-600 flex items-center justify-center mb-6 transition-colors duration-300 ${hoveredCard === index ? 'bg-amber-600 border-amber-600' : 'bg-transparent'}`}>
                    <service.icon className={`w-5 h-5 ${hoveredCard === index ? 'text-white' : 'text-amber-500'}`} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className={`text-stone-300 text-sm leading-relaxed transition-all duration-300 ${hoveredCard === index ? 'opacity-100 translate-y-0 h-auto' : 'opacity-0 translate-y-4 h-0'}`}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 50-Point Audit Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Property Audit Kerala"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-stone-900/20"></div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-amber-600 p-8 rounded-xl shadow-2xl hidden md:block">
                  <p className="text-5xl font-extrabold mb-1">50+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider">Parameters Checked</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-amber-500 font-semibold tracking-wide uppercase text-sm mb-3">Our Signature Service</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">The Prop Keep Health Audit</h3>
              <p className="text-stone-300 mb-8 leading-relaxed text-lg font-light">
                We don't just "look after" your home. We systematically evaluate its health every month, compiling transparent reports with photographic evidence. From hidden leaks to pest breeding grounds, we spot issues before they become expensive problems.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-semibold uppercase tracking-wider text-sm transition-colors group"
              >
                Explore Full Audit Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Target Audience / Call to Action */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4 text-center">
          <MapPin className="w-12 h-12 mx-auto text-amber-600 mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">Are you an NRI from Kerala?</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Distance shouldn't mean compromise. Entrust your valuable real estate to professionals who treat your property with the same care and respect as you would. Give your home the Prop Keep standard.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-stone-900 hover:bg-stone-800 text-white font-semibold rounded-full overflow-hidden transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Connect With Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
