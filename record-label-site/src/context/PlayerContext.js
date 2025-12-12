'use client'; // 1. "use client" es necesario porque usamos Hooks (useState, useContext)

import { createContext, useContext, useState } from 'react';

// 2. Creamos el Contexto. Imagina esto como una "nube" de datos accesible desde cualquier parte.
const PlayerContext = createContext();

// 3. El Provider es el componente que "envuelve" nuestra app y comparte los datos.
export function PlayerProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);
    const [playlist, setPlaylist] = useState([]);

    // Función para reproducir una canción específica
    const playTrack = (track, tracks = []) => {
        setCurrentTrack(track);
        if (tracks.length > 0) setPlaylist(tracks);
        setIsPlaying(true);
    };

    // Función para pausar/reanudar
    const togglePlay = () => {
        if (currentTrack) {
            setIsPlaying(!isPlaying);
        }
    };

    const playNext = () => {
        if (!currentTrack || playlist.length === 0) return;
        const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
        if (currentIndex < playlist.length - 1) {
            setCurrentTrack(playlist[currentIndex + 1]);
            setIsPlaying(true);
        }
    };

    const playPrevious = () => {
        if (!currentTrack || playlist.length === 0) return;
        const currentIndex = playlist.findIndex(t => t.id === currentTrack.id);
        if (currentIndex > 0) {
            setCurrentTrack(playlist[currentIndex - 1]);
            setIsPlaying(true);
        }
    };

    // 4. El valor que compartimos con toda la app
    const value = {
        isPlaying,
        currentTrack,
        playTrack,
        togglePlay,
        playNext,
        playPrevious,
        hasNext: currentTrack && playlist.length > 0 && playlist.findIndex(t => t.id === currentTrack.id) < playlist.length - 1,
        hasPrevious: currentTrack && playlist.length > 0 && playlist.findIndex(t => t.id === currentTrack.id) > 0,
    };

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    );
}

// 5. Un Hook personalizado para facilitar el uso del contexto
export function usePlayer() {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error('usePlayer debe usarse dentro de un PlayerProvider');
    }
    return context;
}
