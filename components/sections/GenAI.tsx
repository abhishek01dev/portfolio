"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Sparkles, BrainCircuit, BotMessageSquare } from "lucide-react";

export function GenAI() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-neutral-900 border-y border-neutral-800 scroll-mt-24" id="genai">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
           variants={containerVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, margin: "-100px" }}
           className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              <Sparkles aria-hidden="true" size={16} />
              AI Engineering Focus
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-heading font-bold text-white leading-tight">
              {portfolio.genAiFocus.heading}
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-lg text-neutral-400 leading-relaxed">
              {portfolio.genAiFocus.description}
            </motion.p>
          </div>

          {/* Cards / Visuals */}
          <ul className="lg:col-span-7 grid gap-4 shrink-0">
            {portfolio.genAiFocus.keyPoints.map((point, i) => (
              <motion.li 
                key={i} 
                variants={itemVariants}
                className="group flex gap-4 p-5 rounded-xl bg-neutral-950/50 border border-neutral-800 hover:border-purple-500/50 hover:bg-neutral-800/80 transition-all"
              >
                <div className="mt-1 shrink-0">
                  {i % 2 === 0 ? (
                    <BrainCircuit aria-hidden="true" size={20} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
                  ) : (
                    <BotMessageSquare aria-hidden="true" size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                  )}
                </div>
                <p className="text-neutral-300 group-hover:text-white transition-colors">{point}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
