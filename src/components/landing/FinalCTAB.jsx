"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FinalCTAB({ onRegister }) {
    return (
        <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* Header (Image 4 Top) */}
            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
                <div className="max-w-4xl space-y-4">
                    <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1] uppercase">
                        The CXO/C-Suite <br />
                        <span className="text-amber-500 italic">Won't Wait.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed">
                        The difference between a ₹30L salary and a ₹1Cr+ package isn’t more hard work—it’s <span className="text-amber-400 font-normal border-b-2 border-amber-500/30">Access and Architecture.</span>
                    </p>

                    <p className="text-base text-slate-400 font-normal pt-2 uppercase tracking-[0.2em]">
                        Join us at the <span className="text-white">Global CXO Summit 2026.</span>
                    </p>

                    <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative group">
                        <div className="absolute -inset-px bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-3xl -z-10 group-hover:opacity-100 opacity-60 transition-opacity"></div>
                        <div className="text-white font-normal text-xl mb-2">Price: ₹18,000</div>
                        <div className="text-[10px] font-normal text-slate-500 uppercase tracking-widest font-mono">
                            (Inclusive of 2-Day Live Bengaluru Event & Networking)
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 pt-6">
                        <button
                            onClick={onRegister}
                            className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-lg font-normal px-8 py-3 rounded-lg shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95 uppercase"
                        >
                            CLAIM YOUR GOLD PASS NOW
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <p className="text-[10px] font-normal text-amber-500/60 uppercase tracking-[0.2em]">
                            Secure Your Spot Before The Bengaluru Venue Reaches Capacity.
                        </p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-amber-500/5 blur-[120px] rounded-t-full" />
        </section>
    );
}
