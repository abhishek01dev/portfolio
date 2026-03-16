"use client";

import React from "react";
import { portfolio } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-neutral-950 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-heading font-bold text-white mb-4 block">
              {portfolio.profile.name}
            </a>
            <p className="text-neutral-400 max-w-sm mb-6">
              {portfolio.profile.tagline}
            </p>
            <div className="flex gap-4">
              <a href={portfolio.profile.contact.github} aria-label="GitHub profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                <Github size={20} />
              </a>
              <a href={portfolio.profile.contact.linkedin} aria-label="LinkedIn profile" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${portfolio.profile.contact.email}`} aria-label="Send email" className="p-2 rounded-full bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-neutral-400 hover:text-blue-400 transition-colors relative group inline-block">About<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#projects" className="text-neutral-400 hover:text-blue-400 transition-colors relative group inline-block">Projects<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#experience" className="text-neutral-400 hover:text-blue-400 transition-colors relative group inline-block">Experience<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span></a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-blue-400 transition-colors relative group inline-block">Contact<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-400 transition-all group-hover:w-full"></span></a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-neutral-400">{portfolio.profile.location}</li>
              <li>
                <a href={`mailto:${portfolio.profile.contact.email}`} className="text-neutral-400 hover:text-white transition-colors">
                  {portfolio.profile.contact.email}
                </a>
              </li>
              <li className="text-neutral-400 mt-4">
                Available for freelance opportunities and full-time roles.
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <p className="text-sm text-neutral-400">
            &copy; {currentYear} {portfolio.profile.name}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group"
          >
            Back to top
            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
