"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ChevronDown, Download, Mail } from "lucide-react";

export function Hero() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMGg0MHY0MEgwaHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] -z-10 opacity-50" />

      <div className="container px-6 max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center space-y-8"
        >
          {/* Status badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
            role="status"
            aria-label="Available for new opportunities"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight text-white leading-tight">
              Building Scalable Software <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                & Intelligent Systems.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mt-6">
              {portfolio.profile.subTagline}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 group" asChild>
              <a href="#contact">
                <Mail size={18} />
                Contact Me
              </a>
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:w-auto gap-2" asChild>
              <a href={portfolio.profile.resumeUrl} download="Abhishek Kumar Singh.pdf" target="_blank" rel="noopener noreferrer">
                <Download size={18} />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats quick view */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-12 md:pt-16 w-full max-w-3xl"
          >
            {[
              { label: "Years Experience", value: "4+" },
              { label: "Successful Projects", value: "10+" },
              { label: "Domain Industries", value: "5+" },
              { label: "GenAI Architectures", value: "Scalable" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-1 p-4 rounded-2xl bg-neutral-900/40 border border-white/5 backdrop-blur-sm">
                <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-xs md:text-sm text-neutral-400 text-center">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group"
      >
        <span className="text-xs text-neutral-400 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-neutral-800 relative overflow-hidden">
          <motion.div 
            animate={{ top: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute left-0 w-full h-1/2 bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
}
