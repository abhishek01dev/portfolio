"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Badge } from "@/components/ui/Badge";
import { Briefcase } from "lucide-react";

export function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 bg-neutral-950 relative scroll-mt-24" id="experience">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
        </motion.div>

        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative border-l border-neutral-800 ml-4 md:ml-0"
        >
          {portfolio.experience.map((exp) => (
            <motion.li key={exp.id} variants={itemVariants} className="mb-12 ml-8 md:ml-12 relative group">
              {/* Timeline dot */}
              <div className="absolute -left-10 md:-left-[3.25rem] w-8 h-8 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:border-blue-500 group-hover:text-blue-400 transition-colors">
                <Briefcase aria-hidden="true" size={14} className="text-neutral-400 group-hover:text-blue-400 transition-colors" />
              </div>

              {/* Content Card */}
              <div className="bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors border border-neutral-800 hover:border-neutral-700 p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-blue-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 text-sm w-fit border border-neutral-700">
                    <span className="sr-only">Period: </span>{exp.period}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-neutral-300 text-sm leading-relaxed">
                      <span className="text-blue-500 mr-2 mt-1" aria-hidden="true">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.techUsed.map((tech, i) => (
                    <Badge key={i} variant="tech">{tech}</Badge>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
