"use client";

import { motion } from "framer-motion";
import { servicesContent } from "@/lib/content/services";

export default function ServicesList() {
    return (
        <div className="w-full max-w-5xl mx-auto px-4">
            <div className="flex flex-col space-y-8">
                {servicesContent.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group relative overflow-hidden bg-neutral-900 border border-white/5 hover:border-brand-cyan/30 rounded-2xl transition-all duration-500 min-h-[400px] flex"
                    >
                        {/* Background Image with Gradient Mask */}
                        {item.image && (
                            <div className="absolute inset-0 z-0">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0 mix-blend-luminosity"
                                />
                                {/* Gradient to protect text reading (darker on left) */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                                {/* Gradient from bottom for mobile */}
                                <div className="absolute inset-0 bg-gradient-to-t md:hidden from-black via-black/90 to-transparent" />
                            </div>
                        )}

                        {/* Subtle Background Glow on Hover */}
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                        {/* Content Container */}
                        <div className="relative z-10 flex flex-col justify-between w-full md:w-2/3 p-8 md:p-12">
                            {/* Number & Title */}
                            <div className="mb-8">
                                <span className="inline-block text-brand-cyan/60 font-mono text-sm tracking-widest mb-3 border border-brand-cyan/20 px-3 py-1 rounded-full">
                                    SERV_0{index + 1}
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-cyan transition-all duration-300">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description & CTA */}
                            <div className="flex flex-col flex-grow justify-end">
                                <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light max-w-xl">
                                    {item.description}
                                </p>

                                <div>
                                    <a
                                        href="#contacto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-bold tracking-widest text-sm rounded-full hover:bg-brand-cyan hover:text-black hover:border-brand-cyan transition-all duration-300"
                                    >
                                        COTIZAR SERVICIO
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
