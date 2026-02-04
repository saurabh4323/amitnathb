import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Play, ChevronLeft, ChevronRight, Volume2, Maximize2 } from "lucide-react";

const testimonials = [
    { id: 1, isIframe: true, vimeoId: "1150080294", hash: "7f178e0112" },
    { id: 2, isBlank: true },
    { id: 3, isBlank: true },
    { id: 4, isBlank: false, title: "1 CR+ PROMOTION", quote: "I would like to pay my gratitude to my Coach Dr. Mudit. I would like to take my learnings.", author: "Rakesh Roshan", role: "IT Leaders", vimeoId: "1089312220", hash: "7e76d30cff", banner: "1 Cr+ Promotion" },
    { id: 5, isBlank: false, title: "NEW JOB : 1 CR SALARY", quote: "Mudit Sir changed my life — his LinkedIn lessons got me noticed by the CEO.", author: "Hemendra K", role: "Financial Services", vimeoId: "1110911003", hash: "e1edc0e2d7", banner: "New Job : 1 Cr Salary" },
    { id: 6, isBlank: false, title: "EXCEEDING EXPECTATIONS", quote: "I highly recommend the program for anyone looking to scale their career.", author: "Ambika J", role: "IT Services", vimeoId: "1150084404", banner: "Highly Recommended" },
    { id: 7, isBlank: false, title: "GLOBAL LEADERSHIP", quote: "This program opened doors I didn't even know existed in the GCC sector.", author: "Arun Uchil", role: "Networking Head", vimeoId: "1150080294", banner: "Global Outreach" },
    { id: 8, isBlank: false, title: "CAREER ACCELERATION", quote: "From AVP to VP in record time. The strategy here is unmatched.", author: "Priya S", role: "Strategic Lead", vimeoId: "1150081368", banner: "Fast Tracked" },
    { id: 9, isBlank: false, title: "MINDSET SHIFT", quote: "The 7-day immersion changed how I approach stakeholder management.", author: "Karan M", role: "Operations VP", vimeoId: "1150084404", banner: "Mindset Pioneer" },
    { id: 10, isBlank: false, title: "VISIBILITY EXPERT", quote: "Mudit's visibility architecture is a game changer for senior professionals.", author: "Neha R", role: "Marketing Director", vimeoId: "1150080294", banner: "Visibility Ace" }
];

export default function TestimonialsB() {
    const [row1Index, setRow1Index] = useState(0);
    const [row2Index, setRow2Index] = useState(0);
    const [activeVideo, setActiveVideo] = useState(null);

    const row1Items = testimonials.slice(0, 5);
    const row2Items = testimonials.slice(5, 10);

    const maxIndex = 2;

    const next1 = () => setRow1Index((prev) => (prev + 1) % (maxIndex + 1));
    const prev1 = () => setRow1Index((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));
    const next2 = () => setRow2Index((prev) => (prev + 1) % (maxIndex + 1));
    const prev2 = () => setRow2Index((prev) => (prev - 1 + (maxIndex + 1)) % (maxIndex + 1));

    const TestimonialCard = ({ t }) => {
        if (t.isIframe) {
            return (
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden bg-black shadow-2xl">
                    <iframe
                        src={`https://player.vimeo.com/video/${t.vimeoId}?h=${t.hash || ''}&autoplay=0&badge=0&autopause=1&player_id=0&app_id=58479`}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        className="absolute inset-0 w-full h-full z-10"
                    ></iframe>
                </div>
            );
        }

        if (t.isBlank) {
            return (
                <div className="aspect-[16/9] relative rounded-xl overflow-hidden border-[3px] border-white/5 bg-slate-900/50 shadow-inner">
                    {/* Blank Card Placeholder */}
                </div>
            );
        }

        return (
            <div
                className="aspect-[16/9] relative rounded-xl overflow-hidden border-[3px] border-[#EB6324] bg-[#0C1B3A] shadow-2xl group cursor-pointer transition-all hover:scale-[1.01]"
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
                            <div className="w-14 h-14 rounded-full bg-[#EB6324]/90 flex items-center justify-center shadow-2xl backdrop-blur-sm transition-transform group-hover:scale-110">
                                <Play className="w-6 h-6 text-white fill-current ml-1" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/10 z-10">
                            <div className="h-full w-[35%] bg-[#EB6324] shadow-[0_0_10px_#EB6324]" />
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight uppercase mb-12">
                        They Broke The Ceiling. <br />
                        <span className="text-amber-500 italic">You’re Next.</span>
                    </h2>

                    {/* Featured Quote Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-[1.5rem] p-8 md:p-12 shadow-3xl text-slate-900 relative border border-white/20"
                    >
                        <Quote className="w-10 h-10 text-amber-500/20 absolute top-8 left-8" />
                        <div className="space-y-6 relative z-10">
                            <p className="text-lg md:text-xl font-bold leading-relaxed">
                                “I was stuck at the AVP level for four years. The frameworks I learned here gave me the confidence to pitch for the VP role. Three months later, I got it with a 40% hike.”
                            </p>
                            <div className="pt-6 border-t border-slate-100">
                                <span className="font-bold text-amber-600 uppercase tracking-widest text-xs flex items-center justify-center gap-3">
                                    <div className="w-10 h-px bg-amber-300" />
                                    Past Participant, Senior Director at a Top Global GCC
                                    <div className="w-10 h-px bg-amber-300" />
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Dual Row Slider Area */}
                <div className="space-y-16 max-w-6xl mx-auto relative px-4">
                    {/* Row 1 */}
                    <div className="relative group">
                        <button onClick={prev1} className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-all z-30">
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button onClick={next1} className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-all z-30">
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="overflow-hidden px-2">
                            <motion.div
                                className="flex gap-6"
                                animate={{ x: `calc(-${row1Index * 33.33}% - ${row1Index * 24}px)` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            >
                                {row1Items.map((t) => (
                                    <div key={t.id} className="w-[calc(33.33%-16px)] shrink-0">
                                        <TestimonialCard t={t} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="relative group">
                        <button onClick={prev2} className="absolute -left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-all z-30">
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button onClick={next2} className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white/50 hover:text-white transition-all z-30">
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <div className="overflow-hidden px-2">
                            <motion.div
                                className="flex gap-6"
                                animate={{ x: `calc(-${row2Index * 33.33}% - ${row2Index * 24}px)` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            >
                                {row2Items.map((t) => (
                                    <div key={t.id} className="w-[calc(33.33%-16px)] shrink-0">
                                        <TestimonialCard t={t} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
