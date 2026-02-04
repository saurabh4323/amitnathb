"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "1. Is the ₹18,000 Gold Pass worth the investment?",
        answer: "Yes. This is not a theoretical webinar. It’s a 7-day immersion including practical frameworks, high-level networking lunch, and a personalized CXO roadmap signed by industry veterans. Most participants consider it a strategic career investment."
    },
    {
        question: "2. Who exactly is this Summit for?",
        answer: "It is specifically designed for mid-career professionals, AVPs, and Directors with 10+ years of experience who are aiming for C-suite roles and want to break through their current growth ceiling."
    },
    {
        question: "3. What makes the \"Live Bengaluru Experience\" different?",
        answer: "Unlike typical conferences, this is an interactive workshop series at The Chancery Pavilion. You get direct access to Global CEOs and GCC heads, high-stakes networking over lunch, and a verified CXO blueprint."
    },
    {
        question: "4. What if I can't make it to all 7 days?",
        answer: "The 5-day virtual mastery sessions are recorded for Gold Pass holders. However, we strongly recommend attending the 2-day live Bengaluru event to get the full networking and blueprinting experience."
    }
];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 bg-slate-900 overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight mb-16 tracking-tight">
                        Frequently Asked <span className="text-amber-500 italic">Questions</span>
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="group">
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className={`w-full flex items-center justify-between p-6 rounded-2xl border transition-all text-left
                                        ${activeIndex === index
                                            ? 'bg-amber-500/10 border-amber-500/30'
                                            : 'bg-white/[0.02] border-white/5 hover:border-white/10'}`}
                                >
                                    <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-amber-400' : 'text-slate-200'}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronRight className={`w-5 h-5 text-amber-500/50 transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 text-slate-400 leading-relaxed font-light text-sm bg-black/20 rounded-b-2xl border-x border-b border-amber-500/10">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
