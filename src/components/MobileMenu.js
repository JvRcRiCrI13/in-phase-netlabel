"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { X } from "lucide-react";

export default function MobileMenu({ isOpen, onClose, navItems, pathname }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!mounted) return null;

    return createPortal(
        <div
            className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-[9999] md:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            {/* Close Button Positioned absolutely at top right */}
            <div className="absolute top-5 right-4 z-50">
                <button
                    onClick={onClose}
                    className="text-white hover:text-brand-cyan transition-colors p-2"
                    aria-label="Close menu"
                >
                    <X className="h-8 w-8" />
                </button>
            </div>

            <div className="flex flex-col items-center justify-center h-full w-full p-6 overflow-y-auto">
                <div className="flex flex-col items-center w-full max-w-sm space-y-6">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={onClose}
                                className={`text-2xl font-bold tracking-widest transition-all duration-300 text-center break-words max-w-full group ${isActive
                                        ? "text-brand-cyan scale-110 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]"
                                        : "text-white/70 hover:text-white hover:scale-105"
                                    }`}
                            >
                                <span className="relative z-10">{item.name.toUpperCase()}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>,
        document.body
    );
}
