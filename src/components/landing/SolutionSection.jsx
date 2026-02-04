"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const solutions = [
    {
        title: "From Hidden to Highly Visible",
        description: "Learn the Personal Branding Framework used by CEOs to command authority."
    },
    {
        title: "From Local to Global",
        description: "Insights from Global leaders on how to manage global GCCs and BFSI portfolios."
    },
    {
        title: "From Employee to Leader",
        description: "Shift your mindset from \"managing tasks\" to \"driving P&L and Strategy.\""
    }
];

export default function SolutionSection() {
    return (
        <section className="pt-4 pb-12 bg-slate-900/50 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header (Image 2 Top) */}
                    <div className="text-center mb-8 space-y-3">
                        <h2 className="text-3xl md:text-4xl font-normal text-white tracking-tight leading-tight">
                            Turn Your Desires Into Your Daily Reality.
                        </h2>
                        <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto italic">
                            In our pre-event session, we discussed the “Growth Plateau.” Here is how we break it:
                        </p>
                    </div>

                    {/* Box Content (Image 2) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20"
                    >
                        <span className="text-amber-600 font-normal text-base md:text-lg block mb-4 text-center md:text-left leading-tight tracking-tight">
                            This is a Career & Leadership conference that helps you understand:
                        </span>

                        <div className="space-y-4">
                            {solutions.map((item, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="mt-1.5 shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <Check className="w-4 h-4 text-green-500 font-normal" />
                                    </div>
                                    <div className="space-y-1">
                                        <h3 className="text-base font-normal text-slate-900">
                                            <span className="text-amber-600 underline underline-offset-4 decoration-amber-500/20">{item.title}</span>: {item.description}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
}
