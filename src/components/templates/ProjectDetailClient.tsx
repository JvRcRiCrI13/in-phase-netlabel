'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Project } from '@/types/projects';

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    // Pre-defined gallery images (simulating a real DB relation)
    const detailImages = [
        { src: '/images/details/vinyl-back.png', alt: 'Vinyl Details' },
        { src: '/images/details/event-atmosphere.png', alt: 'Event Atmosphere' },
        { src: '/images/details/code-macro.png', alt: 'Development Process' },
        { src: project.coverImage, alt: 'Cover Art' }
    ];

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Navigation Breadcrumb */}
                <Link href="/catalogo" className="text-sm text-gray-500 hover:text-white transition-colors mb-8 inline-block">
                    ← VOLVER AL CATÁLOGO
                </Link>

                {/* Project Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-brand-cyan font-mono text-sm mb-4 border border-brand-cyan/30 px-3 py-1 rounded-full w-fit">
                            {project.category.toUpperCase()}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-none">
                            {project.title}
                        </h1>
                        <div className="flex flex-col gap-2 text-xl text-gray-400 font-light mb-8">
                            <p><span className="text-white font-medium">Cliente/Artista:</span> {project.artistOrClient}</p>
                            <p><span className="text-white font-medium">Año:</span> {project.year}</p>
                            <p><span className="text-white font-medium">Rol:</span> {project.role}</p>
                        </div>
                        <p className="text-lg leading-relaxed text-gray-300 max-w-md">
                            {project.description} Este proyecto representa la fusión entre diseño sonoro y estética visual, explorando los límites de la tecnología y el arte generativo.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
                    >
                        <Image
                            src={project.coverImage}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

                {/* Image Gallery */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 border-b border-white/10 pb-4">GALERÍA DEL PROYECTO</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {detailImages.map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative h-[400px] rounded-lg overflow-hidden group"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-mono text-sm">{img.alt}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
