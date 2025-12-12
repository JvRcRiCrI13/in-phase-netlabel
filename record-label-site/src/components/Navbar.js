"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Artistas", path: "/artistas" },
        { name: "Lanzamientos", path: "/lanzamientos" },
        { name: "Merch", path: "/merch" }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-2 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-0 group">
                    <Logo className="w-60 h-60 -mr-3 text-white group-hover:text-brand-cyan transition-colors duration-300" />
                </Link>

                <div className="flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium tracking-wide transition-all duration-300 hover:text-brand-cyan ${isActive
                                    ? "text-brand-cyan drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                                    : "text-gray-400"
                                    }`}
                            >
                                {item.name.toUpperCase()}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
