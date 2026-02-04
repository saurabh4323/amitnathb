"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

export default function CoachSection() {
  return (
    <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/20 to-transparent rounded-2xl blur-lg transition group-hover:opacity-100 opacity-60"></div>
              <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/5] bg-slate-900">
                <img
                  src="https://globalcxoaccelerator.com/wp-content/uploads/2025/01/2-4.jpg"
                  alt="Mudit Saxena"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="space-y-2">
              <span className="text-amber-500 text-xs font-normal uppercase tracking-[0.3em]">The Architect</span>
              <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">Meet Mudit Saxena</h2>
            </div>

            <p className="text-slate-400 text-base leading-relaxed font-light">
              With over <span className="text-white font-normal">25+ years of Global Experience</span> across Banking & Financial Services, Mudit has built and led GCCs, managed multibillion-dollar portfolios, and now mentors the next generation of Global CXOs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-4 h-4" />, text: "Outstanding Leadership Award (Education 2.0)" },
                { icon: <Briefcase className="w-4 h-4" />, text: "Ex-Global Business Leader (BFSI & GCC)" },
                { icon: <Users className="w-4 h-4" />, text: "Mentored 1000+ Senior Professionals" },
                { icon: <GraduationCap className="w-4 h-4" />, text: "Visibility Architecture Specialist" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500">
                    {item.icon}
                  </div>
                  <span className="text-xs font-normal tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 italic text-slate-400 text-sm font-light leading-relaxed">
              "I don't teach theory. I teach the unwritten rules of the Global C-suite that I learned over two decades in the room."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
