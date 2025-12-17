'use client';

interface ViewToggleProps {
    viewMode: 'grid' | 'list';
    onToggle: (mode: 'grid' | 'list') => void;
}

export default function ViewToggle({ viewMode, onToggle }: ViewToggleProps) {
    return (
        <div className="flex gap-2 p-1 bg-white/10 rounded-lg">
            <button
                onClick={() => onToggle('grid')}
                className={`px-4 py-2 rounded text-sm font-bold transition-colors ${viewMode === 'grid' ? 'bg-brand-cyan text-black' : 'text-white hover:text-brand-cyan'
                    }`}
            >
                GRID
            </button>
            <button
                onClick={() => onToggle('list')}
                className={`px-4 py-2 rounded text-sm font-bold transition-colors ${viewMode === 'list' ? 'bg-brand-cyan text-black' : 'text-white hover:text-brand-cyan'
                    }`}
            >
                LIST
            </button>
        </div>
    );
}
