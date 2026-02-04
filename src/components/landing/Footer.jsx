import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#02040a] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-amber-500/[0.02] rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20 text-center md:text-left">
                    <div className="lg:col-span-2 space-y-8 flex flex-col items-center md:items-start">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 tracking-tight">GLOBAL CXO ACCELERATOR</div>
                        <p className="text-slate-400 text-lg max-w-sm font-light leading-relaxed">
                            The premier platform for mid-career professionals transitioning into Global CXO roles. Architecture, Network, and Access.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">Event Intel</h4>
                        <ul className="space-y-4 text-slate-400 font-medium text-sm">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                                February 21-22, 2026
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                                The Chancery Pavilion, BLR
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                                Global Live Streams
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs">Connect</h4>
                        <ul className="space-y-4 text-slate-400 font-medium text-sm">
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">support@cxoaccelerator.com</li>
                            <li className="hover:text-amber-500 transition-colors cursor-pointer">LinkedIn: /cxo-accelerator</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-slate-500 text-[10px] uppercase font-bold tracking-[0.3em]">
                        © 2026 Global CXO Accelerator. All Rights Reserved.
                    </div>
                    <div className="flex gap-8">
                        <span className="text-slate-600 text-[10px] uppercase font-bold hover:text-amber-500 transition-colors cursor-pointer tracking-widest">Privacy Policy</span>
                        <span className="text-slate-600 text-[10px] uppercase font-bold hover:text-amber-500 transition-colors cursor-pointer tracking-widest">Terms of Access</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
