"use client";

import { motion } from "framer-motion";

interface ClientToggleProps {
    mode: "artist" | "brand";
    setMode: (mode: "artist" | "brand") => void;
}

export default function ClientToggle({ mode, setMode }: ClientToggleProps) {
    return (
        <div className="flex items-center justify-center p-1 bg-white/5 backdrop-blur-md rounded-full border border-white/10 w-fit mx-auto mb-12">
            <button
                onClick={() => setMode("artist")}
                className={`relative px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-colors duration-300 ${mode === "artist" ? "text-black" : "text-white/60 hover:text-white"
                    }`}
            >
                {mode === "artist" && (
                    <motion.div
                        layoutId="toggle-bg"
                        className="absolute inset-0 bg-brand-cyan rounded-full mix-blend-screen"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                )}
                <span className="relative z-10">PARA ARTISTAS</span>
            </button>

            <button
                onClick={() => setMode("brand")}
                className={`relative px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-colors duration-300 ${mode === "brand" ? "text-black" : "text-white/60 hover:text-white"
                    }`}
            >
                {mode === "brand" && (
                    <motion.div
                        layoutId="toggle-bg"
                        className="absolute inset-0 bg-brand-magenta rounded-full mix-blend-screen"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                )}
                <span className="relative z-10">PARA MARCAS</span>
            </button>
        </div>
    );
}
