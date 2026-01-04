
import React from 'react';
import { getProjectBySlug } from '@/data/mockProjects';
import Link from 'next/link';
import ProjectDetailClient from '@/components/templates/ProjectDetailClient';

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black">
                <h1 className="text-4xl mb-4">Proyecto no encontrado</h1>
                <Link href="/catalogo" className="text-brand-cyan hover:underline">
                    Volver al Catálogo
                </Link>
            </div>
        );
    }

    return <ProjectDetailClient project={project} />;
}
