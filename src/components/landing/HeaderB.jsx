"use client";

import Image from "next/image";
import Link from "next/link";
import Countdown from "./Countdown";

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
                    <span className="font-normal text-lg tracking-tight text-white">
                        Global CXO Accelerator
                    </span>
                </div>

                <div className="hidden md:flex items-center">
                    <Countdown />
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hidden sm:flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black px-4 py-1.5 rounded-full text-sm font-normal transition-all hover:scale-105"
                    >
                        Get Ticket
                    </button>
                </div>
            </div>
        </header>
    );
}
