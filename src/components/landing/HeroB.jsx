"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Countdown from "./Countdown";

export default function HeroB({ onRegister }) {
    return (
        <section className="relative min-h-0 flex items-center pt-24 pb-4 overflow-hidden bg-slate-950">
            {/* Theme Background from Version A */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-slate-800/20 via-slate-950 to-slate-950" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/10 blur-[120px] rounded-full opacity-60 pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left Column: Text Content (55%) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-[55%] space-y-6 text-left"
                    >
                        {/* Image 0 Badge */}
                        <div className="mb-2">
                            <Countdown />
                        </div>

                        {/* Image 0 Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-normal tracking-tight text-white leading-[1.1]">
                            Shatter The ₹30L+ Ceiling: <br />
                            Master The <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 drop-shadow-sm italic">Visibility Architecture</span> Of Global CXOs.
                        </h1>

                        {/* Image 0 Subtext */}
                        <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-light">
                            Don’t just <strong className="text-white font-normal">"work hard"</strong>—learn to lead. Join <span className="text-amber-400 font-normal">Mudit Saxena</span> and a cohort of Global leaders to bridge the gap between where you are and the <span className="text-amber-400 font-normal italic">1Cr + Global CXO role</span> you deserve.
                        </p>

                        {/* Main CTA (from Image 0) */}
                        <div className="flex flex-col items-start gap-4 pt-4">
                            <button
                                onClick={onRegister}
                                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-lg font-normal px-8 py-3 rounded-lg shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95 uppercase"
                            >
                                GET MY GOLD PASS – ₹18,000
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <p className="text-[10px] font-normal text-slate-500 uppercase tracking-[0.2em]">
                                Only 40 Seats Remaining For The Bengaluru Live Experience.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: Video (45%) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-[45%]"
                    >
                        <div className="relative w-full mx-auto">
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500/30 to-amber-600/10 rounded-2xl blur-lg opacity-40"></div>
                            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur-3xl">
                                {/* Overlay to block branding clicks */}
                                <div className="absolute top-0 left-0 w-full h-16 z-10 pointer-events-auto" />

                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/jgIwaK_1h88?si=X5iTiZpIiKPZozav&autoplay=0&modestbranding=1&rel=0"
                                    title="Education 2.0 - Outstanding Leadership Award"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
