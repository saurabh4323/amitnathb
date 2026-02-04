import { Zap, TrendingUp, Target } from "lucide-react";

const features = [
    {
        icon: <Zap className="text-amber-500" />,
        title: "The Intel",
        description: "Behind-the-scenes of the Silicon Valley speaker lineup."
    },
    {
        icon: <TrendingUp className="text-amber-500" />,
        title: "The Proof",
        description: "Real-time case studies of past participants' career leaps."
    },
    {
        icon: <Target className="text-amber-500" />,
        title: "The Reality",
        description: "Why the \"Need of the Hour\" demands a new leadership playbook."
    }
];

export default function Concept() {
    return (
        <section className="section-padding grid-bg relative">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                    <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">The Concept</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                    What is a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-500">SummitSync?</span>
                </h2>

                <p className="max-w-3xl mx-auto text-lg text-slate-400 mb-16 font-light">
                    This isn’t a webinar. It’s a <span className="text-amber-400 font-medium">30-minute Live Intel Briefing</span>. We’re pulling back the curtain on the Feb 21–22 Summit in Bengaluru to show you exactly how our participants bridge the gap from Senior Management to Global Leadership.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="glass-card p-10 text-left group hover:border-amber-500/30 transition-all duration-500">
                            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white tracking-tight uppercase">{feature.title}</h3>
                            <p className="text-slate-400 font-light">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-1/2 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
