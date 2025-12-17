'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, ProjectCategory } from '@/types/projects';
import ProjectBentoGrid from '@/components/projects/ProjectBentoGrid';
import ProjectKineticList from '@/components/projects/ProjectKineticList';
import ProjectFilter from '@/components/projects/ProjectFilter';
import ViewToggle from '@/components/projects/ViewToggle';

// Simple context not strictly needed for this localized state but good for scalability if filters grew complex
import { createContext } from 'react';
// Define context before component to avoid TDZ
const ProjectFilterContext = createContext<{ activeCategory: ProjectCategory | 'All' }>({ activeCategory: 'All' });

// Mock Data
const MOCK_PROJECTS: Project[] = [
    {
        id: '1',
        title: 'Neon Horizon',
        client_or_artist: 'Artist One',
        year: '2024',
        category: 'Audio',
        coverImage: 'https://picsum.photos/seed/neon/800/600',
        slug: 'neon-horizon'
    },
    {
        id: '2',
        title: 'Cyber Structures',
        client_or_artist: 'Studio Bit',
        year: '2023',
        category: 'Visual Art',
        coverImage: 'https://picsum.photos/seed/cyber/800/800',
        slug: 'cyber-structures'
    },
    {
        id: '3',
        title: 'Platform V2',
        client_or_artist: 'In Phase',
        year: '2024',
        category: 'Dev',
        coverImage: 'https://picsum.photos/seed/platform/800/600',
        slug: 'platform-v2'
    },
    {
        id: '4',
        title: 'Identity System',
        client_or_artist: 'Brand Co.',
        year: '2023',
        category: 'Design',
        coverImage: 'https://picsum.photos/seed/identity/800/800',
        slug: 'identity-system'
    },
    {
        id: '5',
        title: 'Deep Signals',
        client_or_artist: 'Artist Two',
        year: '2024',
        category: 'Audio',
        coverImage: 'https://picsum.photos/seed/signals/800/400',
        slug: 'deep-signals'
    },
];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'All'>('All');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const filteredProjects = activeCategory === 'All'
        ? MOCK_PROJECTS
        : MOCK_PROJECTS.filter(p => p.category === activeCategory);

    return (
        <main className="min-h-screen bg-black text-white pt-24 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6 border-b border-white/10 pb-6 text-center md:text-left">
                    <div>
                        <h1 className="text-5xl font-bold tracking-tighter mb-2">PROYECTOS</h1>
                        <p className="text-gray-400 max-w-md">Explora nuestro archivo de trabajos creativos.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 items-center w-full md:w-auto">
                        <ProjectFilter
                            activeCategory={activeCategory}
                            onSelectCategory={setActiveCategory}
                        />
                        <ViewToggle
                            viewMode={viewMode}
                            onToggle={setViewMode}
                        />
                    </div>
                </div>

                {/* Content Area with Animation */}
                <ProjectFilterContext.Provider value={{ activeCategory }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={viewMode}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {viewMode === 'grid' ? (
                                <ProjectBentoGrid projects={filteredProjects} />
                            ) : (
                                <ProjectKineticList projects={filteredProjects} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </ProjectFilterContext.Provider>
            </div>
        </main>
    );
}


