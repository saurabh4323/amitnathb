"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Target, BookOpen } from "lucide-react";

const features = [
    {
        icon: <BookOpen className="w-6 h-6 text-amber-500" />,
        title: "5 Days of Virtual Mastery",
        description: "Deep-dive sessions on Strategic Leadership & Digital Transformation."
    },
    {
        icon: <Calendar className="w-6 h-6 text-amber-500" />,
        title: "2 Days Live in Bengaluru",
        description: "High-impact, in-person workshops at The Chancery Pavilion."
    },
    {
        icon: <Users className="w-6 h-6 text-amber-500" />,
        title: "The CXO Networking Lunch",
        description: "A seat at the table with Global Leaders from the US, Indian CEOs, GCC Heads and HR Leaders."
    },
    {
        icon: <Target className="w-6 h-6 text-amber-500" />,
        title: "The Roadmap",
        description: "A personalized CXO blueprint signed off by industry veterans."
    }
];

export default function InvestmentSection() {
    return (
        <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header (Image 2 Bottom) */}
                <div className="max-w-4xl mx-auto text-center mb-8 space-y-3">
                    <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight leading-tight">
                        Why The Gold Pass Is Your Best Career Investment.
                    </h2>
                    <p className="text-lg text-slate-400 font-light">
                        The 18K Gold Pass isn’t just a ticket; it’s a <strong className="text-white font-normal">7-day immersion</strong>.
                    </p>
                </div>

                {/* Grid (Image 2 Bottom) */}
                <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex gap-6 hover:border-amber-500/20 transition-all hover:bg-white/[0.04] group backdrop-blur-sm"
                        >
                            <div className="w-14 h-14 shrink-0 rounded-2xl bg-amber-500/10 border border-amber-500/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                                {item.icon}
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-lg font-normal text-white group-hover:text-amber-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
