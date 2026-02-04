export default function Strategy() {
    const shifts = [
        {
            label: "From Hidden to Highly Visible",
            content: "Learn the Personal Branding Framework used by CEOs to command authority."
        },
        {
            label: "From Local to Global",
            content: "Insights from Global leaders on how to manage global GCCs and BFSI portfolios."
        },
        {
            label: "From Employee to Leader",
            content: "Shift your mindset from \"managing tasks\" to \"driving P&L and Strategy.\""
        }
    ];

    return (
        <section className="section-padding relative overflow-hidden grid-bg">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                <div className="mb-24 max-w-5xl">
                    <h2 className="text-5xl md:text-8xl font-bold mb-12 leading-[1.1] tracking-tight text-white">
                        Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">Desires</span> <br />
                        Into Your Daily <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500 italic">Reality.</span>
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-10">
                        <p className="text-xl md:text-3xl text-slate-400 font-light leading-relaxed italic">
                            In our pre-event session, we discussed the <span className="text-white">“Growth Plateau.”</span> Here is how we break it:
                        </p>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-4">
                                <div className="h-px w-8 md:w-16 bg-amber-500/50" />
                                <p className="text-xs md:text-sm text-amber-400 font-bold uppercase tracking-[0.3em]">
                                    The Leadership Framework
                                </p>
                                <div className="h-px w-8 md:w-16 bg-amber-500/50" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full mb-24">
                    {shifts.map((shift, i) => (
                        <div key={i} className="group relative">
                            <div className="absolute -inset-px bg-gradient-to-b from-amber-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative glass-card p-10 md:p-14 h-full flex flex-col items-center border-white/5 group-hover:border-amber-500/20 text-center bg-black/40 backdrop-blur-xl">
                                <div className="space-y-8 flex flex-col items-center">
                                    <div className="text-amber-500 font-bold text-5xl opacity-10">0{i + 1}</div>
                                    <h3 className="text-2xl font-bold text-slate-100 leading-tight group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                                        {shift.label}
                                    </h3>
                                    <div className="h-1.5 w-16 bg-amber-500/20 rounded-full group-hover:w-24 group-hover:bg-amber-500/50 transition-all duration-500" />
                                    <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                                        {shift.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center w-full">
                    <p className="text-sm md:text-xl text-slate-200 font-bold uppercase tracking-widest bg-white/5 py-6 px-12 rounded-full border border-white/10 inline-block shadow-3xl backdrop-blur-2xl">
                        This is a Career & Leadership conference that helps you understand:
                    </p>
                </div>
            </div>

            {/* Decorative Glows */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-500/[0.04] rounded-full blur-[150px] -z-10" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[150px] -z-10" />
        </section>
    );
}
