"use client";

import { motion } from "framer-motion";
import { festivalProject } from "@/lib/content/projects";

export default function FestivalCaseStudy() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-24 mb-32 border-t border-white/5 relative z-10">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-20">
                <span className="text-brand-cyan tracking-[0.3em] text-sm font-bold mb-4 uppercase">Caso de Estudio Destacado</span>
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">{festivalProject.title}</h2>
                <p className="text-xl text-white/70 font-light max-w-3xl">{festivalProject.description}</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

                {/* Left Side: Info & Services */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-4 flex flex-col space-y-12"
                >
                    {/* Project Meta */}
                    <div className="flex flex-wrap gap-x-12 gap-y-6">
                        <div>
                            <h4 className="text-brand-cyan/60 text-xs font-mono tracking-widest mb-2 font-bold uppercase">Cliente</h4>
                            <p className="text-white font-bold">{festivalProject.client}</p>
                        </div>
                        <div>
                            <h4 className="text-brand-cyan/60 text-xs font-mono tracking-widest mb-2 font-bold uppercase">Año</h4>
                            <p className="text-white font-bold">{festivalProject.year}</p>
                        </div>
                        <div className="w-full">
                            <h4 className="text-brand-cyan/60 text-xs font-mono tracking-widest mb-2 font-bold uppercase">Categoría</h4>
                            <p className="text-white font-bold">{festivalProject.category}</p>
                        </div>
                    </div>

                    {/* Services Performed */}
                    <div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 backdrop-blur-md">
                        <h3 className="text-xl text-white font-bold mb-6 tracking-wide">Servicios Ejecutados:</h3>
                        <ul className="space-y-4">
                            {festivalProject.services.map((service, idx) => (
                                <li key={idx} className="flex flex-row items-start gap-3">
                                    <svg className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-white/80 leading-relaxed text-sm md:text-base">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Right Side: Imagery */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-8 flex flex-col space-y-8"
                >
                    {/* Main Hero Image */}
                    <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group relative bg-neutral-900 border border-white/5">
                        <div className="absolute inset-0 bg-brand-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay z-10 pointer-events-none" />
                        <img
                            src={festivalProject.mainImage}
                            alt="Main festival shot"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                        />
                    </div>

                    {/* 3-Column Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {festivalProject.gallery.map((img, idx) => (
                            <div key={idx} className="w-full h-[250px] md:h-[200px] rounded-xl overflow-hidden group cursor-pointer bg-neutral-900 border border-white/5">
                                <img
                                    src={img}
                                    alt={`Festival detail ${idx + 1}`}
                                    className="w-full h-full object-cover scale-100 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
