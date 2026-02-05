"use client";

import { MapPin, Calendar, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function VenueSection() {
  return (
    <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative group"
            >
              <div className="absolute -inset-4 bg-amber-500/10 rounded-[2rem] blur-2xl group-hover:bg-amber-500/20 transition-all duration-700" />
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/10]">
                <img
                  src="https://chanceryhotels.com/wp-content/uploads/2025/05/landing_slider.jpg"
                  alt="The Chancery Pavilion Bengaluru"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="bg-amber-500 p-2 rounded-lg">
                    <MapPin className="text-slate-950 w-5 h-5" />
                  </div>
                  <div className="text-white">
                    <p className="font-bold text-sm uppercase tracking-widest">Venue Partner</p>
                    <p className="text-xs text-slate-300">The Chancery Pavilion, Bengaluru</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500">
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em]">The Experience</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight tracking-tight uppercase">
                  The Live <br />
                  <span className="text-amber-500 italic">Summit Experience.</span>
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed">
                  Join us in the heart of Bengaluru for an immersive 2rd & 22th February 2026. Network with global leaders, participate in live workshops, and experience the architecture of leadership first-hand.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-500">
                    <Calendar size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Date</span>
                  </div>
                  <p className="text-white text-base">Feb 21-22, 2026</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-500">
                    <Clock size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Time</span>
                  </div>
                  <p className="text-white text-base">9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <p className="text-slate-500 text-sm italic border-l-2 border-amber-500/30 pl-4">
                "A seat at the table in Bengaluru translates to a seat in the global C-Suite."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
