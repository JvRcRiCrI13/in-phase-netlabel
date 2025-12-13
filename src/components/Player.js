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
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Error playing:", e));
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
        <div className="fixed bottom-0 z-50 w-full border-t border-neutral-200 bg-white/90 backdrop-blur-lg transition-all duration-500">
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            />

            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                {/* Info de la canción (Izquierda) */}
                <div className="flex flex-col w-1/3 md:w-1/4">
                    <span className="text-sm font-bold text-neutral-900 truncate">{currentTrack.title}</span>
                    <span className="text-xs text-neutral-500 truncate">{currentTrack.artist || "Unknown Artist"}</span>
                </div>

                {/* Centro: Botones */}
                <div className="flex items-center justify-center w-1/3 gap-6">
                    <button
                        onClick={handlePrevious}
                        disabled={!hasPrevious && (!audioRef.current || audioRef.current.currentTime <= 2)}
                        className={`text-neutral-900 transition-opacity hover:text-brand-magenta ${(!hasPrevious && (!audioRef.current || audioRef.current.currentTime <= 2)) ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={togglePlay}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 active:scale-95 hover:bg-neutral-800"
                    >
                        {isPlaying ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                        )}
                    </button>

                    <button
                        onClick={playNext}
                        disabled={!hasNext}
                        className={`text-neutral-900 transition-opacity hover:text-brand-violet ${!hasNext ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                {/* Derecha: Barra de Progreso */}
                <div className="hidden md:flex w-1/3 items-center justify-end gap-3 pl-4">
                    <span className="text-xs text-neutral-500 w-10 text-right">{formatTime(progress)}</span>
                    <div
                        ref={progressBarRef}
                        onClick={handleSeek}
                        className="h-1 w-32 lg:w-48 overflow-hidden rounded-full bg-neutral-200 cursor-pointer group"
                    >
                        <div
                            className="h-full bg-brand-magenta transition-all duration-100 ease-linear group-hover:bg-fuchsia-600"
                            style={{ width: `${(progress / duration) * 100}%` }}
                        ></div>
                    </div>
                    <span className="text-xs text-neutral-500 w-10">{formatTime(duration)}</span>
                </div>

            </div>
        </div>
    );
}
