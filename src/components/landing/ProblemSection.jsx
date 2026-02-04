"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const problems = [
    {
        icon: <Zap className="w-5 h-5 text-amber-500" />,
        title: "Execution vs. Strategy",
        description: "You are seen as the \"doer,\" not the \"visionary.\""
    },
    {
        icon: <Users className="w-5 h-5 text-amber-500" />,
        title: "The Network Gap",
        description: "You don't have access to the rooms where decisions are made."
    },
    {
        icon: <Target className="w-5 h-5 text-amber-500" />,
        title: "Soft Power Deficit",
        description: "Your technical skills are a 10/10, but your \"Executive Presence\" is missing."
    }
];

export default function ProblemSection() {
    return (
        <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header (Image 1) */}
                <div className="max-w-3xl mx-auto text-center mb-8 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">
                        The "Mid-Career Trap" Is Real.
                    </h2>
                    <p className="text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                        You've spent 10+ years becoming a subject matter expert. Yet, when the CXO/C-suite roles open up, they look past you. <span className="text-white font-normal">Why?</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm flex flex-col items-center text-center group hover:border-amber-500/30 transition-all shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="w-6 h-6 text-amber-500" />
                            </div>
                            <h3 className="text-base font-normal text-white mb-2 group-hover:text-amber-400 transition-colors">
                                <span className="text-amber-500">{item.title.split(":")[0]}:</span> {item.title.split(":")[1]}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
