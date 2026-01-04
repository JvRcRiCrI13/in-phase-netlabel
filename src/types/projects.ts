export type GridSize = 'small' | 'medium' | 'large' | 'tall' | 'wide';
export type ProjectCategory = 'Audio' | 'Design' | 'Visual Art' | 'Dev';

export interface Track {
    id: string;
    title: string;
    url: string;
    artist?: string;
}

export interface Project {
    id: string;
    title: string;
    artistOrClient: string;
    year: string;
    category: string;
    coverImage: string;
    videoPreview?: string;
    gridSize: GridSize;
    role: string;
    description: string;
    slug: string;
    tracks?: Track[];
}