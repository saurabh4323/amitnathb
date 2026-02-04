"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
    {
        q: "Is the ₹18,000 Gold Pass worth the investment?",
        a: "Absolutely. Most leadership coaching programs cost 10x more. This pass gives you direct access to Global leaders and a personalized roadmap that can lead to salary hikes of 40-100%."
    },
    {
        q: "Who exactly is this Summit for?",
        a: "It's for mid-career professionals (AVP, Director, Senior Director levels) who are stuck at a plateau and want to transition into Global VP/CXO roles."
    },
    {
        q: "What makes the \"Live Bengaluru Experience\" different?",
        a: "It's about the 'Room'. You're not just watching; you're networking with GCC heads, HR Leaders, and US-based executives in an intimate setting at The Chancery Pavilion."
    },
    {
        q: "What if I can’t make it to all 7 days?",
        a: "The virtual sessions are recorded and available for 30 days. However, the 2-day live event in Bengaluru is highly recommended for the networking value."
    },
    {
        q: "Will I get a certificate or tangible roadmap?",
        a: "Yes, you will receive a personalized CXO strategy blueprint signed off by industry veterans that you can use for your next career pitch."
    },
    {
        q: "Are there group discounts for my leadership team?",
        a: "Yes, we offer special rates for cohorts of 3 or more. Please contact our support team for a custom quote."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="section-padding grid-bg relative overflow-hidden flex flex-col items-center">
            <div className="max-w-4xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
                <div className="text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
                        <HelpCircle size={16} className="text-amber-500" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">Common Queries</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
                        Frequently Asked <br /> <span className="text-amber-500 italic">Questions</span>
                    </h2>
                </div>

                <div className="space-y-6 w-full">
                    {faqs.map((faq, i) => (
                        <div key={i} className="group flex flex-col items-center">
                            <div
                                className={`glass-card overflow-hidden transition-all duration-500 w-full ${openIndex === i ? 'border-amber-500/30 bg-white/5 shadow-2xl scale-[1.02]' : 'border-white/5 shadow-xl'}`}
                            >
                                <button
                                    className="w-full p-10 text-center flex flex-col items-center justify-center transition-colors relative"
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                >
                                    <div className="flex flex-col items-center gap-4">
                                        <span className={`text-3xl font-bold transition-colors ${openIndex === i ? 'text-amber-500' : 'text-slate-700'}`}>0{i + 1}</span>
                                        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors px-4 ${openIndex === i ? 'text-white' : 'text-slate-300'}`}>{faq.q}</span>
                                    </div>
                                    <div className={`mt-6 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-500 ${openIndex === i ? 'border-amber-500/30 bg-amber-500/10 rotate-180' : 'border-white/10'}`}>
                                        <ChevronDown className={openIndex === i ? 'text-amber-500' : 'text-slate-600'} size={24} />
                                    </div>
                                </button>
                                <div className={`grid transition-all duration-500 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="p-10 pt-0 text-slate-400 text-lg md:text-xl leading-relaxed font-light text-center max-w-2xl mx-auto">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/10 to-transparent" />
        </section>
    );
}
