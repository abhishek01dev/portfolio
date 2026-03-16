"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Button } from "@/components/ui/Button";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section className="py-24 relative scroll-mt-24" id="contact">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-3 bg-neutral-900 border border-neutral-800 rounded-full mb-4">
            <Mail className="text-blue-400" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's talk about your project</h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities as a Software Development Engineer. 
                My inbox is always open for freelance inquiries, consulting, or full-time roles.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-medium">Email</p>
                  <a href={`mailto:${portfolio.profile.contact.email}`} aria-label={`Send an email to ${portfolio.profile.contact.email}`} className="text-white hover:text-blue-400 transition-colors font-medium">
                    {portfolio.profile.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-medium">Phone</p>
                  <a href={`tel:${portfolio.profile.contact.phone.replace(/\s+/g, '')}`} aria-label={`Call me at ${portfolio.profile.contact.phone}`} className="text-white hover:text-purple-400 transition-colors font-medium">
                    {portfolio.profile.contact.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20 text-green-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-neutral-400 font-medium">Location</p>
                  <p className="text-white font-medium">{portfolio.profile.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 space-y-6 backdrop-blur-sm relative overflow-hidden">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-300">Name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-300">Email</label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-neutral-300">Subject</label>
                <input
                  id="subject"
                  required
                  type="text"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-300">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button type="submit" className="w-full gap-2 py-6" disabled={isSubmitting || isSuccess}>
                {isSubmitting ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : isSuccess ? (
                  <CheckCircle2 size={18} className="text-green-300" />
                ) : (
                  <Send size={18} />
                )}
                <span>
                  {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                </span>
              </Button>

              {/* Success Overlay */}
              {isSuccess && (
                <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-sm z-10 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
                  <p className="text-neutral-300">Your message has been successfully sent. I will get back to you soon.</p>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
