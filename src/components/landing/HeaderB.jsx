"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderB() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    {/* Logo */}
                    <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                            src="https://globalcxoaccelerator.com/wp-content/uploads/2025/01/2-4.jpg"
                            alt="Global CXO Accelerator"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <span className="font-semibold text-lg tracking-tight text-white">
                        Global CXO Accelerator
                    </span>
                </div>

                <div className="hidden md:flex items-center">
                    <span className="text-xs font-bold text-amber-500 uppercase tracking-widest">
                        Exclusive Leadership Briefing Series
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <Link
                        href="#register"
                        className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
                    >
                        Register Series
                    </Link>
                </div>
            </div>
        </header>
    );
}
