"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardDescription } from "@/components/ui/Card";

const categories = ["All", "Fintech", "E-commerce", "HealthTech", "Real Estate", "EdTech", "SaaS"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = portfolio.projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section className="py-24 relative scroll-mt-24" id="projects">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 rounded-full mb-4">
            <FolderGit2 className="text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A selection of complex applications I&apos;ve built, emphasizing scalable architecture and elegant user experiences.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  : "bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-600 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-blue-500/50 transition-all duration-300">
                  <div className="h-48 rounded-t-xl bg-neutral-900 border-b border-neutral-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-neutral-950 via-transparent to-transparent">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-purple-400 mt-1">{project.category}</p>
                    </div>
                  </div>
                  
                  <CardHeader className="pt-4 pb-2">
                    <CardDescription className="text-neutral-300">
                      {project.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-grow pb-2">
                    <div className="mb-4">
                      <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">Challenge</p>
                      <p className="text-sm text-neutral-400 line-clamp-2">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold mb-2">Tech Stack</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 border-t border-neutral-800 flex justify-between">
                    <div className="flex gap-3">
                      <button className="text-neutral-400 hover:text-white transition-colors" title="View Github (Placeholder)" aria-label="View Github source code">
                        <Github size={18} />
                      </button>
                      <button className="text-neutral-400 hover:text-white transition-colors" title="View Live (Placeholder)" aria-label="View live project">
                        <ExternalLink size={18} />
                      </button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
