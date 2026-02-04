"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroB({ onRegister }) {
    return (
        <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-950">
            {/* Theme Background from Version A */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/10 blur-[120px] rounded-full opacity-60 pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-4xl"
                >
                    {/* Image 0 Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        Next Session: Market Awareness Hook
                    </div>

                    {/* Image 0 Headline */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                        Shatter The ₹50L+ Ceiling: <br />
                        Master The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-sm italic">Visibility Architecture</span> Of Global CXOs.
                    </h1>

                    {/* Image 0 Subtext */}
                    <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                        Don’t just <strong className="text-white font-semibold">"work hard"</strong>—learn to lead. Join <span className="text-amber-400 font-medium">Mudit Saxena</span> and a cohort of Global leaders to bridge the gap between where you are and the <span className="text-amber-400 font-medium font-bold italic">1Cr + Global CXO role</span> you deserve.
                    </p>

                    {/* Embedded Video (from Image 0) */}
                    <div className="relative w-full max-w-3xl mx-auto mt-12">
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-600/10 rounded-2xl blur-lg opacity-40"></div>
                        <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-3xl">
                            {/* Overlay to block branding clicks */}
                            <div className="absolute top-0 left-0 w-full h-20 z-10 pointer-events-auto" />

                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/jgIwaK_1h88?si=X5iTiZpIiKPZozav&autoplay=0&modestbranding=1&rel=0"
                                title="Education 2.0 - Outstanding Leadership Award"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                        {/* 40 Seats Float Badge */}
                        <div className="absolute -top-10 -right-6 w-32 h-32 rounded-full border border-white/10 bg-slate-900 backdrop-blur-xl flex flex-col items-center justify-center shadow-2xl z-30">
                            <span className="text-[8px] font-bold text-amber-400 uppercase tracking-widest mb-1">Only</span>
                            <span className="text-5xl font-bold text-white leading-none">40</span>
                            <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest mt-1">Seats Left</span>
                        </div>
                    </div>

                    {/* Main CTA (from Image 0) */}
                    <div className="flex flex-col items-center gap-4 pt-12">
                        <button
                            onClick={onRegister}
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-xl font-bold px-12 py-6 rounded-xl shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95 uppercase"
                        >
                            GET MY GOLD PASS – ₹18,000
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
                            Only 40 Seats Remaining For The Bengaluru Live Experience.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
