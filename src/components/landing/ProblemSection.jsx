"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Users, Zap } from "lucide-react";
import Image from "next/image";

const problems = [
    {
        icon: <Zap className="w-5 h-5 text-amber-500" />,
        title: "Execution vs. Strategy",
        description: "You are seen as the \"doer,\" not the \"visionary.\"",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Users className="w-5 h-5 text-amber-500" />,
        title: "The Network Gap",
        description: "You don't have access to the rooms where decisions are made.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800"
    },
    {
        icon: <Target className="w-5 h-5 text-amber-500" />,
        title: "Soft Power Deficit",
        description: "Your technical skills are a 10/10, but your \"Executive Presence\" is missing.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    }
];

export default function ProblemSection() {
    return (
        <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-8 space-y-3">
                    <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight">
                        The "Mid-Career Trap" Is Real.
                    </h2>
                    <p className="text-base text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
                        You've spent 10+ years becoming a subject matter expert. Yet, when the CXO/C-suite roles open up, they look past you. <span className="text-white font-normal">Why?</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm group hover:border-amber-500/30 transition-all shadow-xl"
                        >
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-amber-500/90 border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <CheckCircle2 className="w-5 h-5 text-slate-950" />
                                </div>
                            </div>

                            <div className="p-6 text-left">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed font-light">
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

