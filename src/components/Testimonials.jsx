import { Quote } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="section-padding relative overflow-hidden bg-slate-950 flex flex-col items-center">
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
                <div className="mb-24 space-y-6">
                    <h2 className="text-6xl md:text-8xl font-bold leading-[1] tracking-tight text-white">
                        They Broke the <br /> <span className="text-amber-500 italic">Ceiling.</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">You’re Next.</span>
                    </h2>
                    <div className="h-2 w-32 bg-amber-500/20 mx-auto rounded-full" />
                </div>

                <div className="max-w-5xl mx-auto relative group w-full">
                    <div className="absolute -inset-10 bg-amber-500/5 rounded-full blur-[120px] group-hover:bg-amber-500/10 transition-all duration-700 opacity-50" />
                    <div className="relative glass-card p-12 md:p-32 border-white/5 group-hover:border-amber-500/30 text-center bg-black/40 backdrop-blur-3xl">
                        <Quote className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-amber-500/5" size={300} />
                        <div className="relative z-10 space-y-12">
                            <p className="text-3xl md:text-5xl text-slate-100 font-bold italic leading-[1.3] tracking-tight">
                                “I was stuck at the AVP level for four years. The frameworks I learned here gave me the confidence to pitch for the VP role. <span className="text-amber-500 uppercase not-italic">Three months later, I got it with a 40% hike.</span>”
                            </p>
                            <div className="flex flex-col items-center justify-center space-y-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-transparent border border-amber-500/30 flex items-center justify-center shadow-2xl">
                                    <span className="text-amber-500 font-bold text-xl">PS</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="text-3xl font-bold text-white">— Past Participant</div>
                                    <div className="text-amber-500/80 font-bold uppercase tracking-[0.4em] text-sm">Senior Director at a Top Global GCC</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[150px] -z-10" />
        </section>
    );
}
