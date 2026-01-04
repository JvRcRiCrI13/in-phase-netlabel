import Link from 'next/link';
// import { Github, Twitter, Instagram } from 'lucide-react'; // Example imports if using lucide-react, but we'll use SVG for now or check installed icons.
// Checking existing imports suggests we might not have 'lucide-react' installed unless used in Navbar. Navbar uses 'Menu' from 'lucide-react', so it IS installed.

import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black pt-16 pb-32 md:pb-24 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Brand / Copyright */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-xl font-bold tracking-tighter text-white mb-2">IN-PHASE</span>
                    <p className="text-xs text-gray-500 font-mono">
                        © {new Date().getFullYear()} IN-PHASE NETLABEL.
                        <br />
                        ALL RIGHTS RESERVED.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://www.instagram.com/in_phase_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-magenta transition-colors hover:scale-110 duration-300"
                    >
                        <Instagram className="w-6 h-6" />
                        <span className="sr-only">Instagram</span>
                    </a>

                    <a
                        href="mailto:contact@in-phase.cc"
                        className="text-gray-400 hover:text-brand-cyan transition-colors hover:scale-110 duration-300"
                    >
                        <Mail className="w-6 h-6" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>

                {/* Tagline / Decor */}
                <div className="hidden md:block text-right">
                    <p className="text-xs text-brand-cyan/60 font-mono tracking-widest border border-brand-cyan/20 px-3 py-1 rounded-full">
                        AUDIO_VISUAL_RESEARCH
                    </p>
                </div>

            </div>
        </footer>
    );
}
