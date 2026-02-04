import { ShieldAlert, Users, Zap } from "lucide-react";

export default function Problem() {
    const painPoints = [
        {
            icon: <Zap size={24} className="text-amber-500" />,
            title: "Execution vs. Strategy",
            desc: "You are seen as the \"doer,\" not the \"visionary.\""
        },
        {
            icon: <Users size={24} className="text-amber-500" />,
            title: "The Network Gap",
            desc: "You don’t have access to the rooms where decisions are made."
        },
        {
            icon: <ShieldAlert size={24} className="text-amber-500" />,
            title: "Soft Power Deficit",
            desc: "Your technical skills are a 10/10, but your \"Executive Presence\" is missing."
        }
    ];

    return (
        <section className="section-padding relative overflow-hidden text-center flex flex-col items-center">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-4xl mx-auto space-y-12 mb-20">
                    <div className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[11px] font-bold uppercase tracking-widest border border-amber-500/20">
                        The Critical Shift
                    </div>
                    <h2 className="text-5xl md:text-8xl font-bold leading-[1] tracking-tight">
                        The <span className="text-amber-500 italic">"Mid-Career</span> <br />
                        <span className="text-amber-500">Trap"</span> <span className="gradient-text">is Real.</span>
                    </h2>
                    <p className="text-xl md:text-3xl text-slate-400 leading-relaxed font-light">
                        You’ve spent <span className="text-white font-medium underline decoration-amber-500/30 underline-offset-8">10+ years</span> becoming a subject matter expert. <br className="hidden md:block" />
                        Yet, when the CXO/C-suite roles open up, <span className="text-slate-200">they look past you.</span>
                    </p>
                    <div className="pt-4">
                        <span className="text-5xl font-bold italic text-amber-600/20 uppercase tracking-tight">Why?</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                    {painPoints.map((point, i) => (
                        <div key={i} className="glass-card p-10 flex flex-col gap-8 items-center group hover:border-amber-500/30 transition-all duration-500 text-center">
                            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                {point.icon}
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">{point.title}</h4>
                                <p className="text-slate-400 text-lg leading-relaxed font-light">{point.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/[0.03] rounded-full blur-[150px] -z-10" />
        </section>
    );
}
