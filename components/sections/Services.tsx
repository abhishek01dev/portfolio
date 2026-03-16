"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { CheckCircle2, Globe } from "lucide-react";

export function Services() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-neutral-950 relative border-t border-neutral-800 scroll-mt-24" id="services">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 rounded-full mb-4">
            <Globe aria-hidden="true" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Domain Expertise & Services
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Delivering robust end-to-end solutions tailored to specific industry requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Domains */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-1 border-r border-neutral-800 pr-0 lg:pr-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Industries</h3>
            <ul className="flex flex-wrap gap-3">
              {portfolio.domainExpertise.map((domain, index) => (
                <li 
                  key={index} 
                  className="px-4 py-2 bg-gradient-to-br from-neutral-900 to-neutral-800 border border-neutral-700 text-neutral-200 rounded-full text-sm font-medium shadow-sm hover:border-blue-500/50 transition-colors"
                >
                  {domain}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services List */}
          <motion.ul 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {portfolio.services.map((service) => (
              <motion.li 
                key={service.id} 
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:bg-neutral-800/60 transition-colors"
              >
                <div className="mt-1">
                  <CheckCircle2 aria-hidden="true" size={20} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{service.title}</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
