// src/data/mockProjects.ts
import { Project } from '@/types/projects';

export const projects: Project[] = [
  {
    id: '1',
    title: 'VOID RESONANCE',
    artistOrClient: 'Unknown Artist',
    year: '2024',
    category: 'Audio',
    coverImage: '/images/releases/void-cover.png',
    // videoPreview: '/videos/void-loop.webm',
    gridSize: 'large',
    role: 'Full Production',
    description: 'Un viaje sonoro a través de frecuencias sub-graves y texturas granulares.',
    slug: 'void-resonance',
  },
  {
    id: '2',
    title: 'NEON SYSTEMS',
    artistOrClient: 'Tech Festival 2023',
    year: '2023',
    category: 'Design',
    coverImage: '/images/portfolio/neon-sys.png',
    gridSize: 'tall',
    role: 'Identity & Web Design',
    description: 'Sistema de identidad visual reactiva para el festival de tecnología.',
    slug: 'neon-systems',
  },
  {
    id: '3',
    title: 'GLITCH SERIES 01',
    artistOrClient: 'In-Phase Collective',
    year: '2024',
    category: 'Visual Art',
    coverImage: '/images/art/glitch-01.png',
    gridSize: 'small',
    role: '3D Motion',
    description: 'Exploración de geometría digital corrupta.',
    slug: 'glitch-series-01',
  },
  {
    id: '4',
    title: 'ECHO CHAMBER',
    artistOrClient: 'Lunar Tapes',
    year: '2022',
    category: 'Audio',
    coverImage: '/images/releases/echo.png',
    gridSize: 'wide',
    role: 'Mastering',
    description: 'Restauración y masterización de cintas analógicas.',
    slug: 'echo-chamber',
  },
  {
    id: '5',
    title: 'IN-PHASE PLATFORM',
    artistOrClient: 'Internal',
    year: '2025',
    category: 'Dev',
    coverImage: '/images/dev/platform-ui.png',
    gridSize: 'medium',
    role: 'Full Stack Dev',
    description: 'La plataforma inmersiva que estás navegando ahora mismo.',
    slug: 'in-phase-platform',
  },
];

export async function getProjects(): Promise<Project[]> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return projects;
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return projects.find((p) => p.slug === slug);
}