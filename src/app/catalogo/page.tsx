
import { getProjects } from '@/data/mockProjects';
import CatalogClient from '@/components/templates/CatalogClient';

export const metadata = {
    title: 'Catálogo | In-Phase Netlabel',
    description: 'Explora nuestros lanzamientos y proyectos.',
};

export default async function CatalogPage() {
    const projects = await getProjects();

    return <CatalogClient initialProjects={projects} />;
}
