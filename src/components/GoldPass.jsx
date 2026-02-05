import { CheckCircle2, Ticket, Sparkles, ArrowRight } from "lucide-react";

export default function GoldPass() {
    const benefits = [
        {
            title: "5 Days of Virtual Mastery",
            desc: "Deep-dive sessions on Strategic Leadership & Digital Transformation."
        },
        {
            title: "2 Days Live in Bengaluru",
            desc: "High-impact, in-person workshops at The Chancery Pavilion."
        },
        {
            title: "The CXO Networking Lunch",
            desc: "A seat at the table with Global Leaders from US, Indian CEOs, GCC Heads and HR Leaders."
        },
        {
            title: "The Roadmap",
            desc: "A personalized CXO blueprint signed off by industry veterans."
        }
    ];

    return (
        <section id="gold-pass" className="section-padding grid-bg relative overflow-hidden flex flex-col items-center">
            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
                <div className="flex flex-col items-center mb-20 text-center max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 mb-8">
                        <Sparkles size={16} className="animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">The Elite Experience</span>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-bold tracking-tight mb-10 leading-[1] text-white">
                        Why the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 italic">Gold Pass</span> is <br />
                        Your Best <span className="text-white">Career Investment.</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed">
                        The <span className="text-white font-medium">18K Gold Pass</span> isn’t just a ticket; it’s a <span className="text-white font-medium italic border-b-2 border-amber-500/30">7-day immersion</span> into the future of leadership.
                    </p>
                </div>

                <div className="relative group w-full max-w-6xl">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative glass-card p-10 md:p-24 overflow-hidden flex flex-col items-center border-white/10 text-center bg-black/40 backdrop-blur-3xl">
                        {/* Background Icon */}
                        <Ticket size={600} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.01] -rotate-12 pointer-events-none" />

                        <div className="space-y-16 relative z-10 w-full flex flex-col items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 w-full">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="space-y-6 flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-all duration-300">
                                            <CheckCircle2 className="text-amber-500" size={32} />
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight">{benefit.title}</h4>
                                            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light max-w-xs mx-auto">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="h-px w-full bg-white/5" />

                            <div className="flex flex-col items-center space-y-10 w-full max-w-2xl">
                                <div className="space-y-4">
                                    <div className="text-slate-400 font-bold uppercase tracking-[0.3em] text-sm">Total Investment</div>
                                    <div className="text-7xl md:text-9xl font-bold text-white tracking-tighter">₹18,000</div>
                                    <div className="text-amber-500 font-bold uppercase tracking-[0.2em] text-lg flex items-center justify-center gap-3">
                                        <span className="w-3 h-3 rounded-full bg-amber-500 animate-ping" />
                                        Only 40 seats remaining
                                    </div>
                                </div>

                                <button
                                    onClick={() => window.open('https://rzp.io/rzp/7JhGFhwt', '_blank')}
                                    className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-white text-3xl font-bold px-12 py-8 rounded-2xl shadow-[0_0_50px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 active:scale-95 w-full uppercase"
                                >
                                    CLAIM GOLD PASS
                                    <ArrowRight size={36} className="group-hover:translate-x-3 transition-transform" />
                                </button>

                                <p className="text-sm md:text-lg text-slate-500 text-center font-medium leading-relaxed italic max-w-xl">
                                    "Secure your spot before the Bengaluru venue reaches capacity. This is more than an event; it's an architecture for your next decade."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Lights */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-amber-500/[0.02] rounded-full blur-[180px] -z-10" />
        </section>
    );
}
