"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Layers } from "lucide-react";

export function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 relative overflow-hidden scroll-mt-24" id="skills">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 rounded-full mb-4">
            <Layers className="text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Technical Arsenal
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I leverage to build highly scalable, production-grade applications.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {portfolio.skills.map((category, index) => (
            <motion.li 
              key={index} 
              variants={itemVariants}
              className="bg-neutral-900/40 border border-neutral-800/60 rounded-2xl p-6 hover:border-neutral-700 transition-colors backdrop-blur-sm group"
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 group-hover:shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-all" aria-hidden="true"></span>
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <li 
                    key={i} 
                    className="px-3 py-1.5 text-xs font-medium bg-neutral-950 border border-neutral-800 text-neutral-300 rounded-lg hover:text-white hover:border-neutral-600 transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
