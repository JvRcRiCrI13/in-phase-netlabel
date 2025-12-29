"use client";

import { usePlayer } from "@/context/PlayerContext";

export default function TrackList({ tracks }) {
    const { playTrack, currentTrack, isPlaying } = usePlayer();

    return (
        <ul className="space-y-3">
            {tracks.map((track, index) => {
                const isCurrentTrack = currentTrack?.id === track.id;
                const isTrackPlaying = isCurrentTrack && isPlaying;

                return (
                    <li
                        key={track.id}
                        className={`group flex items-center justify-between rounded-lg border p-4 transition-all duration-300 ${isCurrentTrack
                            ? "bg-brand-violet/20 border-brand-violet/50 shadow-[0_0_15px_rgba(129,140,248,0.2)]"
                            : "bg-white/5 border-white/5 hover:bg-white/10 hover:border-brand-violet/30 hover:shadow-[0_0_15px_rgba(129,140,248,0.1)]"
                            }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className={`font-mono text-sm ${isCurrentTrack ? "text-brand-cyan" : "text-brand-violet"}`}>
                                {(index + 1).toString().padStart(2, "0")}
                            </span>
                            <span className={`font-medium transition-colors ${isCurrentTrack ? "text-brand-cyan" : "text-gray-200 group-hover:text-white"}`}>
                                {track.title}
                            </span>
                        </div>
                        <button
                            onClick={() => playTrack(track, tracks)}
                            className={`rounded-full p-3 text-white transition-all duration-300 shadow-lg ${isCurrentTrack
                                ? "bg-brand-cyan shadow-brand-cyan/30 scale-100 opacity-100"
                                : "bg-brand-magenta shadow-brand-magenta/30 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-fuchsia-500"
                                }`}
                        >
                            {isTrackPlaying ? (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
