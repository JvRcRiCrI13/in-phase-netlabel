import Link from 'next/link';
import { Home, AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">

            {/* Background Glitch Elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-magenta/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Content Container */}
            <div className="relative z-10 max-w-lg w-full border border-white/10 bg-white/5 backdrop-blur-sm p-12 rounded-2xl shadow-2xl">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 animate-bounce">
                        <AlertTriangle className="w-12 h-12" />
                    </div>
                </div>

                {/* Glitch Title */}
                <h1 className="text-8xl font-black text-white mb-2 tracking-tighter relative inline-block glitch-text">
                    404
                </h1>

                <h2 className="text-2xl font-mono text-brand-cyan mb-6 tracking-widest">
                    ERROR // SIGNAL_LOST
                </h2>

                <p className="text-gray-400 mb-10 leading-relaxed font-light">
                    The requested frequency could not be found. The page might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                {/* Action Button */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                >
                    <Home className="w-5 h-5" />
                    RETURN TO BASE
                </Link>

            </div>

            {/* Scanline Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] opacity-20"></div>
        </div>
    );
}
