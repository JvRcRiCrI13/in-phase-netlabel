"use client";

import { motion } from "framer-motion";
import { servicesContent } from "@/lib/content/services";

export default function BentoGrid() {
    const content = servicesContent;

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto px-4">
            {content.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`relative group overflow-hidden bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-xl p-6 flex flex-col justify-end min-h-[200px] ${item.colSpan} ${item.rowSpan}`}
                >
                    {/* Background Gradient Hint */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-violet/10 rounded-full blur-[50px] -mr-10 -mt-10 transition-opacity duration-500 group-hover:opacity-40" />

                    {/* Title */}
                    <h3 className="relative z-10 text-2xl font-bold text-white/90 leading-none tracking-tighter mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">
                        {item.title}
                    </h3>

                    {/* Hover Overlay with Description */}
                    <motion.div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                        initial={{ y: "100%" }}
                        whileHover={{ y: 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <p className="text-white font-medium text-lg leading-snug mb-6">
                            {item.description}
                        </p>
                        <a
                            href="#contacto"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-block px-6 py-2 border border-brand-cyan/50 text-brand-cyan font-bold rounded-full hover:bg-brand-cyan hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all duration-300"
                        >
                            COTIZAR SERVICIO
                        </a>
                    </motion.div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-4 right-4 w-2 h-2 bg-brand-cyan/50 rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                </motion.div>
            ))}
        </div>
    );
}
