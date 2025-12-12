export const artists = [
    {
        id: '1',
        name: 'Neon Horizon',
        bio: 'Neon Horizon es un dúo de música electrónica formado en 2024. Su sonido se caracteriza por sintetizadores analógicos y ritmos hipnóticos que evocan paisajes urbanos futuristas. Han colaborado con artistas visuales de renombre para crear experiencias inmersivas en sus presentaciones en vivo.',
        photoUrl: '/images/neon-horizon.png',
        tracks: [
            { id: 't1', title: 'Midnight City', url: '#' },
            { id: 't2', title: 'Cyber Dreams', url: '#' },
            { id: 't3', title: 'Analog Soul', url: '#' },
        ],
    },
    {
        id: '2',
        name: 'Quantum Echo',
        bio: 'Explorando los límites entre el sonido y la ciencia, Quantum Echo utiliza algoritmos generativos para componer piezas únicas en cada actuación. Su enfoque experimental ha sido aclamado por la crítica como "una ventana al futuro de la música".',
        photoUrl: '/images/quantum-echo.png',
        tracks: [
            { id: 't4', title: 'Entanglement', url: '#' },
            { id: 't5', title: 'Wave Function', url: '#' },
        ],
    },
    {
        id: '3',
        name: 'Void Walker',
        bio: 'Void Walker es un proyecto solista que fusiona dark ambient con techno industrial. Sus composiciones son densas y atmosféricas, diseñadas para transportar al oyente a espacios liminales y desconocidos.',
        photoUrl: '/images/void-walker.png',
        tracks: [
            { id: 't6', title: 'Abyss', url: '#' },
            { id: 't7', title: 'Event Horizon', url: '#' },
            { id: 't8', title: 'Singularity', url: '#' },
            { id: 't9', title: 'Dark Matter', url: '#' },
        ],
    },
    {
        id: '4',
        name: 'Solar Flare',
        bio: 'Con una energía explosiva, Solar Flare combina ritmos tribales con texturas electrónicas modernas. Su música es una celebración de la vida y el movimiento, invitando a la audiencia a una danza frenética y liberadora.',
        photoUrl: '/images/solar-flare.png',
        tracks: [
            { id: 't10', title: 'Sunspot', url: '#' },
            { id: 't11', title: 'Coronal Mass', url: '#' },
        ],
    },
];

export async function getArtists() {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return artists;
}

export async function getArtistById(id) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return artists.find((artist) => artist.id === id);
}
