'use client';

import { usePlayer } from '@/context/PlayerContext';
import { useRef, useState, useEffect } from 'react';

export default function Player() {
    const { isPlaying, currentTrack, togglePlay, playNext, playPrevious, hasNext, hasPrevious } = usePlayer();
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (currentTrack && audioRef.current) {
            // Use a sample URL if the track URL is a placeholder
            const audioUrl = currentTrack.url === '#'
                ? 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
                : currentTrack.url;

            audioRef.current.src = audioUrl;
            console.log("Loading track:", audioUrl);

            if (isPlaying) {
                audioRef.current.play()
                    .then(() => console.log("Playback started"))
                    .catch(e => console.error("Error playing:", e));
            }
        }
    }, [currentTrack]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Error playing:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setProgress(audioRef.current.currentTime);
            setDuration(audioRef.current.duration || 0);
        }
    };

    const handleEnded = () => {
        if (hasNext) {
            playNext();
        } else {
            togglePlay();
        }
    };

    const handleSeek = (e) => {
        if (progressBarRef.current && audioRef.current) {
            const rect = progressBarRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            const percentage = x / width;
            const newTime = percentage * duration;

            audioRef.current.currentTime = newTime;
            setProgress(newTime);
        }
    };

    const handlePrevious = () => {
        if (audioRef.current) {
            // If song has played for more than 2 seconds, restart it
            if (audioRef.current.currentTime > 2) {
                audioRef.current.currentTime = 0;
            } else {
                // Otherwise go to previous track
                playPrevious();
            }
        }
    };

    const formatTime = (time) => {
        if (!time) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    if (!currentTrack) {
        return (
            <div className="fixed bottom-0 z-50 w-full border-t border-neutral-200 bg-white/90 backdrop-blur-lg">
                <div className="mx-auto flex h-20 max-w-7xl items-center justify-center px-6">
                    <span className="text-sm text-neutral-500">Selecciona una canción para reproducir</span>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-0 z-50 w-full border-t border-white/10 bg-black/60 backdrop-blur-xl transition-all duration-500 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            />

            {/* Mobile Progress Bar (Slim Top) */}
            <div
                className="md:hidden absolute top-0 left-0 w-full h-1.5 bg-white/10 cursor-pointer z-50 group"
                onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const width = rect.width;
                    const percentage = x / width;
                    const newTime = percentage * duration;
                    if (audioRef.current) {
                        audioRef.current.currentTime = newTime;
                        setProgress(newTime);
                    }
                }}
            >
                <div
                    className="h-full bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.8)] relative transition-all duration-100 ease-linear"
                    style={{ width: `${(progress / duration) * 100}%` }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg opacity-0 group-active:opacity-100 transition-opacity" />
                </div>
            </div>

            {/* Background Glow Effect */}
            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`} />

            <div className="mx-auto flex flex-col md:flex-row h-auto md:h-20 max-w-7xl items-center justify-between px-6 py-3 md:py-0 relative gap-2 md:gap-0">

                {/* Info de la canción + Visualizer */}
                <div className="flex items-center justify-start md:w-1/4 w-full gap-4 pl-2 md:pl-0">
                    <div className="flex items-center gap-3 w-full md:w-auto overflow-hidden">
                        {/* Fake Waveform Visualizer */}
                        <div className="flex items-end gap-1 h-6 md:h-8 mb-0.5 flex-shrink-0">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-1 rounded-full bg-brand-cyan transition-all duration-500 ${isPlaying ? 'animate-pulse' : 'h-1 opacity-30'}`}
                                    style={{
                                        height: isPlaying ? `${Math.random() * 100}%` : '4px',
                                        animationDelay: `${i * 0.1}s`,
                                        animationDuration: '0.6s'
                                    }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col overflow-hidden">
                            <span className="text-sm font-bold text-white truncate drop-shadow-md">{currentTrack.title}</span>
                            <span className="text-xs text-brand-cyan/80 truncate font-mono">{currentTrack.artist || "Unknown Artist"}</span>
                        </div>
                    </div>
                </div>

                {/* Centro: Botones */}
                <div className="flex items-center justify-center w-full md:w-1/3 gap-8 md:gap-8 pb-1 md:pb-0">
                    <button
                        onClick={handlePrevious}
                        disabled={!hasPrevious && (!audioRef.current || audioRef.current.currentTime <= 2)}
                        className={`text-gray-400 transition-all hover:text-white hover:scale-110 ${(!hasPrevious && (!audioRef.current || audioRef.current.currentTime <= 2)) ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                        </svg>
                    </button>

                    <button
                        onClick={togglePlay}
                        className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={playNext}
                        disabled={!hasNext}
                        className={`text-gray-400 transition-all hover:text-white hover:scale-110 ${!hasNext ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                        </svg>
                    </button>
                </div>

                {/* Derecha: Barra de Progreso Neon */}
                <div className="hidden md:flex w-1/3 items-center justify-end gap-3 pl-4">
                    <span className="text-xs text-gray-500 w-10 text-right font-mono">{formatTime(progress)}</span>
                    <div
                        ref={progressBarRef}
                        onClick={handleSeek}
                        className="h-1.5 w-32 lg:w-48 overflow-hidden rounded-full bg-white/10 cursor-pointer group hover:h-2 transition-all"
                    >
                        <div
                            className="h-full bg-brand-cyan shadow-[0_0_15px_rgba(34,211,238,0.6)] relative"
                            style={{ width: `${(progress / duration) * 100}%` }}
                        >
                            <div className="absolute right-0 top-0 bottom-0 w-2 bg-white blur-[2px]" />
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 w-10 font-mono">{formatTime(duration)}</span>
                </div>

            </div>
        </div>
    );
}
