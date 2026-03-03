export type ProjectData = {
    id: string;
    client: string;
    title: string;
    category: string;
    year: string;
    description: string;
    services: string[];
    mainImage: string;
    gallery: string[];
};

export const festivalProject: ProjectData = {
    id: "fest-01",
    client: "Festival Musical (Ejemplo)",
    title: "Gestión Integral de Marketing y Contenido",
    category: "Gestión de Eventos & Marketing",
    year: "2024",
    description: "Gestión completa de marketing publicitario y digital para el festival. Nos encargamos desde la conceptualización gráfica hasta la ejecución física y digital del evento.",
    services: [
        "Creación de piezas gráficas (Posts, Reels, Stories)",
        "Cronograma de contenidos y estrategia de Hashtags",
        "Redacción creativa (Copywriting y bajadas de texto)",
        "Diseño de credenciales, lanyards y gigantografías",
        "Cobertura de prensa y fotografía en vivo"
    ],
    // Placeholders temporales relacionads a festivales/eventos
    mainImage: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    gallery: [
        "https://images.unsplash.com/photo-1540039155732-d67414cc0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    ]
};
