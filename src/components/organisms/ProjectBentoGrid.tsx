// using framer-motion for smooth entry
import { motion } from 'framer-motion';
import { Project } from '@/types/projects';
import Link from 'next/link';
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
                // Determine classes based on gridSize
                const sizeClasses = {
                    small: 'col-span-1 row-span-1',
                    medium: 'col-span-1 row-span-1', // customize if needed
                    large: 'md:col-span-2 md:row-span-2',
                    tall: 'md:col-span-1 md:row-span-2',
                    wide: 'md:col-span-2 md:row-span-1'
                }[project.gridSize || 'small'];

                return (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        className={`${sizeClasses}`}
                    >
                        <Link
                            href={`/catalogo/${project.slug}`}
                            className="group block w-full h-full relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all duration-500 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:-translate-y-1 active:duration-200 active:border-brand-cyan active:shadow-[0_0_30px_rgba(56,189,248,0.4)] active:scale-95"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-neutral-900">
                                <Image
                                    src={project.coverImage}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 group-hover:brightness-110 transition-all duration-700 group-active:duration-200 group-active:scale-115 group-active:brightness-125"
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
                                        {project.artistOrClient} • {project.year}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                );
            })}
        </div>
    );
}
