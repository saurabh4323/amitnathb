import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md mb-12">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-amber-400 tracking-[0.2em] uppercase">
                        Exclusive Leadership Briefing Series
                    </span>
                </div>

                {/* Headlines */}
                <div className="space-y-8 mb-12 max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] tracking-tight text-white">
                        Shatter the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 italic">₹50L+</span> <br />
                        <span className="text-white">Ceiling.</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-slate-300 font-light leading-tight max-w-2xl mx-auto">
                        Master the <span className="text-white font-medium">Visibility Architecture</span> of Global CXOs.
                    </h2>
                </div>

                {/* Description */}
                <p className="max-w-2xl text-xl md:text-2xl text-slate-400 leading-relaxed font-light mb-12">
                    Don’t just <span className="text-slate-200">"work hard"</span>—learn to lead. Join <span className="text-white font-medium underline decoration-amber-500/50 underline-offset-4">Mudit Saxena</span> and a cohort of Global leaders to bridge the gap and secure the <span className="text-amber-400 font-medium">1Cr + Global CXO role</span> you deserve.
                </p>

                {/* CTA Area */}
                <div className="flex flex-col items-center gap-6 mb-20 w-full max-w-md">
                    <button className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-xl font-bold px-12 py-5 rounded-xl shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] w-full uppercase">
                        GET MY GOLD PASS – ₹18,000
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-background bg-slate-800" />
                            ))}
                        </div>
                        <p className="text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                            Only 40 seats remaining
                        </p>
                    </div>
                </div>

                {/* Video Player - Centered below text */}
                <div className="relative w-full max-w-4xl mx-auto">
                    <div className="absolute -inset-10 bg-amber-500/10 rounded-full blur-[120px] opacity-50" />
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/50 to-amber-600/50 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                        <div className="relative glass-card overflow-hidden rounded-3xl aspect-video flex items-center justify-center border border-white/10 shadow-3xl bg-black/40">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                            <div className="z-10 w-24 h-24 bg-white/10 p-1 rounded-full border border-white/20 backdrop-blur-2xl cursor-pointer hover:scale-110 transition duration-500 shadow-3xl">
                                <div className="w-full h-full bg-amber-500 rounded-full flex items-center justify-center">
                                    <Play size={32} className="text-white fill-current ml-1" />
                                </div>
                            </div>

                            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                <div className="space-y-2 text-left">
                                    <div className="bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase inline-block">Bengaluru Live</div>
                                    <div className="text-white font-bold text-sm">Experience the Summit Sync</div>
                                </div>
                                <div className="text-right glass-card p-3 border-white/10 rounded-xl bg-white/5 backdrop-blur-md">
                                    <div className="text-[10px] text-amber-500 font-bold uppercase tracking-tighter">Feb 21-22</div>
                                    <div className="text-2xl font-bold text-white leading-none">2026</div>
                                </div>
                            </div>
                        </div>

                        {/* Float Element */}
                        <div className="absolute -top-12 -right-6 w-36 h-36 glass-card rounded-full flex flex-col items-center justify-center shadow-3xl animate-float border-amber-500/20 backdrop-blur-3xl z-20 bg-slate-900/80">
                            <span className="text-[10px] font-bold text-amber-500 uppercase">Limited</span>
                            <span className="text-4xl font-bold text-white">40</span>
                            <span className="text-[10px] font-bold text-slate-400 uppercase">Seats</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Background Elements */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[150px] mix-blend-screen -z-10" />
        </section>
    );
}
