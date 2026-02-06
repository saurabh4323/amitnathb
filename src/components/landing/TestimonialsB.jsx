"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";

const testimonials = [
    { id: 1, vimeoId: "1150080294", hash: "7f178e0112", author: "Global Leader 1" },
    { id: 2, vimeoId: "1110911003", hash: "e1edc0e2d7", author: "Global Leader 2" },
    { id: 3, vimeoId: "1112896293", hash: "e9e13f2948", author: "Global Leader 3" },
    { id: 4, vimeoId: "1128125028", hash: "3b1105b35f", author: "Global Leader 4" },
    { id: 5, vimeoId: "1112896293", hash: "e9e13f2948", author: "Global Leader 5" },
    { id: 6, vimeoId: "1110916018", hash: "3a480f3b7c", author: "Global Leader 6" },

];

export default function TestimonialsB() {
    const [activeVideo, setActiveVideo] = useState(null);

    const TestimonialCard = ({ t }) => {
        return (
            <div
                className="aspect-[16/9] relative rounded-xl overflow-hidden border-[3px] border-amber-500/30 bg-slate-900 shadow-2xl group cursor-pointer transition-all hover:scale-[1.01]"
                onClick={() => setActiveVideo(t.id)}
            >
                {activeVideo === t.id ? (
                    <iframe
                        src={`https://player.vimeo.com/video/${t.vimeoId}?h=${t.hash || ''}&autoplay=1&badge=0&autopause=1&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="absolute inset-0 w-full h-full z-20"
                    ></iframe>
                ) : (
                    <>
                        <img
                            src={`https://vumbnail.com/${t.vimeoId}.jpg`}
                            alt={t.author || "Testimonial"}
                            className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.8] group-hover:brightness-100 transition-all duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-14 h-14 rounded-full bg-amber-500/90 flex items-center justify-center shadow-2xl backdrop-blur-sm transition-transform group-hover:scale-110">
                                <Play className="w-6 h-6 text-white fill-current ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500/20 z-10">
                            <div className="h-full w-[40%] bg-amber-500 shadow-[0_0_10px_#f59e0b]" />
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <section className="pt-4 pb-12 bg-slate-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-normal text-white tracking-tight leading-tight uppercase mb-6">
                        They Broke The Ceiling. <br />
                        <span className="text-amber-500 italic">You’re Next.</span>
                    </h2>

                    {/* Featured Quote Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[1.5rem] p-6 md:p-8 shadow-3xl text-slate-900 relative border border-white/20"
                    >
                        <Quote className="w-10 h-10 text-amber-500/20 absolute top-8 left-8" />
                        <div className="space-y-6 relative z-10">
                            <p className="text-base md:text-lg font-normal leading-relaxed">
                                “I was stuck at the AVP level for four years. The frameworks I learned here gave me the confidence to pitch for the VP role. Three months later, I got it with a 40% hike.”
                            </p>
                            <div className="pt-6 border-t border-slate-100">
                                <span className="font-normal text-amber-600 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                                    <div className="w-10 h-px bg-amber-300" />
                                    Past Participant, Senior Director at a Top Global GCC
                                    <div className="w-10 h-px bg-amber-300" />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Grid of 8 Videos */}
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t) => (
                            <div key={t.id} className="w-full">
                                <TestimonialCard t={t} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
