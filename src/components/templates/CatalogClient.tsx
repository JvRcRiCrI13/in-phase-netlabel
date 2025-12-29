'use client';

import React, { useState, useMemo } from 'react';
import ProjectBentoGrid from '@/components/organisms/ProjectBentoGrid';
import ProjectKineticList from '@/components/organisms/ProjectKineticList';
import ProjectFilter from '@/components/molecules/ProjectFilter';
import ViewToggle from '@/components/molecules/ViewToggle';
import { ProjectCategory, Project } from '@/types/projects';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectFilterContext = React.createContext<{
    selectedCategory: ProjectCategory | 'All';
    setSelectedCategory: (category: ProjectCategory | 'All') => void;
}>({
    selectedCategory: 'All',
    setSelectedCategory: () => { },
});

interface CatalogClientProps {
    initialProjects: Project[];
}

export default function CatalogClient({ initialProjects }: CatalogClientProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');

    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'All') return initialProjects;
        return initialProjects.filter((project) => project.category === selectedCategory);
    }, [selectedCategory, initialProjects]);

    return (
        <ProjectFilterContext.Provider value={{ selectedCategory, setSelectedCategory }}>
            <div className="min-h-screen bg-black text-white pt-24 pb-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                        <div>
                            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
                                CATÁLOGO
                            </h1>
                            <ProjectFilter />
                        </div>
                        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
                    </div>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={viewMode}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {viewMode === 'grid' ? (
                                <ProjectBentoGrid projects={filteredProjects} />
                            ) : (
                                <ProjectKineticList projects={filteredProjects} />
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </ProjectFilterContext.Provider>
    );
}
