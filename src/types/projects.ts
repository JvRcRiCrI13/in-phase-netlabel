export type ProjectCategory = 'Audio' | 'Visual Art' | 'Dev' | 'Design';

export interface Project {
    id: string;
    title: string;
    client_or_artist: string;
    year: string;
    category: ProjectCategory;
    coverImage: string;
    videoPreview?: string;
    slug: string;
}