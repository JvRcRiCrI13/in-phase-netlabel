import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types/projects';
import Image from 'next/image';

interface ProjectKineticListProps {
    projects: Project[];
}

export default function ProjectKineticList({ projects }: ProjectKineticListProps) {
    const [hoveredProject, setHoveredProject] = useState<string | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    if (projects.length === 0) {
        return <p className="text-gray-500">No hay proyectos en esta categoría.</p>;
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        // Calculate relative position within the container or window if needed
        // For simplicity, we'll just track global mouse or relative to list
        // Updating state on every move might be expensive, so we scope it or debounce if needed
        // But for this effect, raw mouse event is properly performant in React 18+ usually
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    return (
        <div className="relative" onMouseMove={handleMouseMove}>
            <ul className="flex flex-col space-y-0">
                {projects.map((project) => (
                    <li
                        key={project.id}
                        onMouseEnter={() => setHoveredProject(project.id)}
                        onMouseLeave={() => setHoveredProject(null)}
                        className={`
                            border-b border-white/10 py-8 px-4 flex justify-between items-center 
                            cursor-pointer transition-all duration-300
                            ${hoveredProject && hoveredProject !== project.id ? 'opacity-30 blur-[1px]' : 'opacity-100'}
                            hover:pl-8 hover:bg-white/5
                        `}
                    >
                        <span className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
                            {project.title}
                        </span>
                        <div className="text-right flex flex-col items-end">
                            <span className="text-sm font-mono text-brand-cyan mb-1">{project.category}</span>
                            <span className="text-sm text-gray-400">{project.client_or_artist}</span>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Hover Reveal Image - Fixed/Following Cursor */}
            <AnimatePresence>
                {hoveredProject && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0, transition: { delay: 0.2, duration: 0.3 } }}
                        exit={{ opacity: 0, scale: 0.8, rotate: 5, transition: { delay: 0, duration: 0.2 } }}
                        className="hidden lg:block pointer-events-none fixed z-50 w-[300px] h-[200px] rounded-lg overflow-hidden border border-white/20 shadow-2xl"
                        style={{
                            top: mousePos.y + 20, // Offset from cursor
                            left: mousePos.x + 20,
                        }}
                    >
                        {projects.find(p => p.id === hoveredProject)?.coverImage && (
                            <Image
                                src={projects.find(p => p.id === hoveredProject)!.coverImage}
                                alt="Preview"
                                fill
                                className="object-cover"
                            />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
