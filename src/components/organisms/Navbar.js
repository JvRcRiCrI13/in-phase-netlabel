"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import Logo from "../atoms/Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Proyectos", path: "/catalogo" },
        { name: "Artistas", path: "/artistas" },
        { name: "Lanzamientos", path: "/lanzamientos" },
        { name: "Merch", path: "/merch" }
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex-shrink-0 flex items-center gap-0 group z-50">
                            <Logo className="w-56 h-56 text-white group-hover:text-brand-cyan transition-colors duration-300" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
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

                        {/* Mobile Menu Button */}
                        <div className="flex md:hidden z-50">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="text-white hover:text-brand-cyan transition-colors p-2"
                                aria-label="Open menu"
                            >
                                <Menu className="h-8 w-8" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <MobileMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
                navItems={navItems}
                pathname={pathname}
            />
        </>
    );
}

