"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Target } from "lucide-react";

export function Achievements() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 relative overflow-hidden" id="achievements">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-neutral-950 to-purple-900/10 -z-10" />
      
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 text-purple-400 rounded-full mb-4 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
            <Target aria-hidden="true" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Metrics & Achievements
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Quantifiable results and performance improvements delivered across various production environments.
          </p>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {portfolio.achievements.map((achievement) => (
            <motion.li 
              key={achievement.id}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-neutral-900/50 border border-neutral-800 backdrop-blur-sm shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                {achievement.metric}
              </h3>
              <p className="text-sm md:text-base font-medium text-neutral-400 text-center uppercase tracking-wide">
                {achievement.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
