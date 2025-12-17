'use client';

import { ProjectCategory } from '@/types/projects';

interface ProjectFilterProps {
    activeCategory: ProjectCategory | 'All';
    onSelectCategory: (category: ProjectCategory | 'All') => void;
}

export default function ProjectFilter({ activeCategory, onSelectCategory }: ProjectFilterProps) {
    const categories: (ProjectCategory | 'All')[] = ['All', 'Audio', 'Visual Art', 'Dev', 'Design'];

    return (
        <div className="flex gap-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => onSelectCategory(cat)}
                    className={`px-4 py-2 rounded-full border text-sm font-mono transition-all ${activeCategory === cat
                            ? 'bg-white text-black border-white'
                            : 'bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white'
                        }`}
                >
                    {cat.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
