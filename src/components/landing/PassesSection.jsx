"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Ticket } from "lucide-react";

const passes = [
  {
    name: "Bronze Pass",
    title: "1 Day Event Access",
    price: "7,999",
    link: "https://rzp.io/rzp/IohtS4L",
    color: "from-amber-900 via-amber-700 to-amber-900",
    benefits: [
      "5 Days Online Learning",
      "Physical Live Event Pass (1-Day)",
      "Networking Opportunity",
      "Welcome Pack (notebook, pen, gifts)",
      "Lunch",
      "2 Tea Breaks"
    ]
  },
  {
    name: "Silver Pass",
    title: "2 Day Event + Blueprint Access",
    price: "12,999",
    link: "https://rzp.io/rzp/LLxl4uX",
    color: "from-slate-400 via-slate-200 to-slate-400",
    badge: "Save ₹9,999",
    benefits: [
      "All Bronze Pass Benefits (Both Days)",
      "Global CXO Blueprint Course",
      "8 Live Sessions (LinkedIn, Resume, Interviews, Neuroscience of success, CXO skills, Career Planning)",
      "10 Video Courses (Leadership, Executive Presence, Personal Branding, Politics, Promotions, Meditations etc)",
      "Lifetime access to Blueprint course and CXO community"
    ]
  },
  {
    name: "Gold Pass",
    title: "2 Day Event + Additional Access",
    price: "18,999",
    link: "https://rzp.io/rzp/7JhGFhwt",
    color: "from-amber-600 via-amber-300 to-amber-600",
    benefits: [
      "All Silver Pass Benefits",
      "Session Recordings",
      "Private Lunch With Event Speakers",
      "Photograph With Event Speakers",
      "Photograph With Mudit Saxena",
      "10 Books (CXO quiz, 7 secrets to become CXO, How to become a CXO, Promotion etc)",
      "One 45-Minute Coaching Call With Mudit Saxena"
    ]
  },
  {
    name: "Diamond Pass",
    title: "2 Day Event + Extended Program",
    price: "24,999",
    link: "https://rzp.io/rzp/gpzDxM5",
    color: "from-orange-600 via-red-500 to-orange-600",
    benefits: [
      "All Gold Pass Benefits",
      "1 Month Advanced Group Coaching Certification Program",
      "4 Live Sessions"
    ]
  }
];

export default function PassesSection() {
  return (
    <section id="tickets" className="py-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-normal text-white tracking-tight uppercase">
            Choose Your <span className="text-amber-500 italic">Access Level</span>
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Select the pass that fits your career goals. Each level offers deeper immersion and more direct access to global leadership architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {passes.map((pass, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative group hover:scale-[1.02] transition-all duration-500"
            >
              {/* Header Gradient */}
              <div className={`h-4 bg-gradient-to-r ${pass.color}`} />

              <div className="p-8 flex-grow flex flex-col">
                <div className="text-center mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 block mb-2">Access Level</span>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                    {pass.name}
                  </h3>
                </div>

                <div className="text-center mb-8 min-h-[4rem] flex items-center justify-center">
                  <h4 className="text-lg font-medium text-blue-600 leading-tight bg-blue-50 px-4 py-2 rounded-xl">
                    {pass.title}
                  </h4>
                </div>

                <div className="h-px w-full bg-slate-100 mb-8" />

                <ul className="space-y-4 mb-8 flex-grow">
                  {pass.benefits.map((benefit, i) => (
                    <li key={i} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                      <div className="mt-1 shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {pass.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-orange-500 text-white rounded-full w-14 h-14 flex flex-col items-center justify-center text-[10px] font-bold shadow-xl rotate-12 group-hover:rotate-0 transition-transform border-4 border-white">
                      <span>Save</span>
                      <span className="text-xs">₹10K</span>
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-8 border-t border-slate-100">
                  <div className="text-center mb-6">
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-1">Investment</div>
                    <div className="text-4xl font-bold text-slate-900">
                      ₹{pass.price}
                      <span className="text-sm font-light text-slate-400 ml-1">+ GST</span>
                    </div>
                  </div>

                  <button
                    onClick={() => window.open(pass.link, '_blank')}
                    className="w-full py-4 rounded-2xl bg-slate-950 text-white font-bold text-base hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group/btn shadow-xl shadow-slate-950/20"
                  >
                    GET TICKET
                    <Ticket className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
