// using framer-motion for smooth entry
import { motion } from 'framer-motion';
import { Project } from '@/types/projects';
import Image from 'next/image';

interface ProjectBentoGridProps {
    projects: Project[];
}

export default function ProjectBentoGrid({ projects }: ProjectBentoGridProps) {
    if (projects.length === 0) {
        return <p className="text-gray-500">No hay proyectos en esta categoría.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
            {projects.map((project, i) => {
                // Simple pattern for bento variability
                const isLarge = i === 0 || i === 3;

                return (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className={`
                            relative group overflow-hidden rounded-xl border border-white/10
                            ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}
                        `}
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-neutral-900">
                            <Image
                                src={project.coverImage}
                                alt={project.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        {/* Content Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-2 py-1 mb-2 text-xs font-mono text-brand-cyan border border-brand-cyan/30 rounded backdrop-blur-sm">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {project.client_or_artist} • {project.year}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
