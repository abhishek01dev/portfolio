"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Code2, Server, TerminalSquare, Cpu } from "lucide-react";

export function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const features = [
    {
      icon: <Server className="text-blue-400" size={24} />,
      title: "Backend Engineering",
      desc: "Architecting scalable systems, REST/GraphQL APIs, and microservices using Node.js and TypeScript."
    },
    {
      icon: <Code2 className="text-purple-400" size={24} />,
      title: "Frontend Development",
      desc: "Crafting beautiful, responsive, and highly interactive user interfaces with React and Next.js."
    },
    {
      icon: <TerminalSquare className="text-green-400" size={24} />,
      title: "System Performance",
      desc: "Optimizing queries, caching via Redis, and reducing server loads for high-traffic applications."
    },
    {
      icon: <Cpu className="text-orange-400" size={24} />,
      title: "AI Integration",
      desc: "Embedding LLMs and intelligent workflows into production systems using LangChain and prompt engineering."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden scroll-mt-24" id="about">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Engineering with purpose.
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4 text-neutral-300 text-lg leading-relaxed">
              {portfolio.profile.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>
          </div>

          {/* Features Grid */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span aria-hidden="true">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm">{feature.desc}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
