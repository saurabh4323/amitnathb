"use client";

import { motion } from "framer-motion";
import { Monitor, MapPin } from "lucide-react";

const days = [
  { day: "Day 1-2", type: "Virtual", title: "The Authority Transition", desc: "Shift from 'Manager' to 'Leader' mindset and audit your professional blindspots." },
  { day: "Day 3-4", type: "Virtual", title: "Global GCC & Tech Mastery", desc: "Decoding the blueprint of high-performance Global Competency Centers and BFSI dynamics." },
  { day: "Day 5", type: "Virtual", title: "The Visibility Architecture", desc: "Setting up your digital authority and LinkedIn presence to attract C-suite opportunities." },
  { day: "Day 6-7", type: "Live", title: "The Bengaluru Summit", desc: "Intensive workshops at The Chancery Pavilion, final blueprint signing, and networking lunch." }
];

export default function AgendaSection() {
  return (
    <section className="pt-4 pb-12 bg-slate-900/30 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-8 space-y-2">
          <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">The 7-Day Immersion Blueprint</h2>
          <p className="text-slate-400 text-base font-light">From baseline to C-suite in one intensive week.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {days.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-amber-500/30 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-normal text-amber-500 uppercase tracking-widest">{item.day}</span>
                {item.type === "Virtual" ? (
                  <Monitor className="w-4 h-4 text-slate-500 group-hover:text-amber-500 transition-colors" />
                ) : (
                  <MapPin className="w-4 h-4 text-amber-500 animate-pulse" />
                )}
              </div>
              <h3 className="text-sm font-normal text-white mb-2 group-hover:text-amber-400 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
