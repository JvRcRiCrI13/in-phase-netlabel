import { getArtists } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Artistas | Record Label',
    description: 'Nuestros artistas exclusivos.',
};

export default async function ArtistsPage() {
    const artists = await getArtists();

    return (
        <div className="mx-auto max-w-7xl px-6 py-12 min-h-screen">
            <h1 className="text-4xl font-bold tracking-tighter mb-12 text-white border-l-4 border-brand-cyan pl-4">
                NUESTROS ARTISTAS
            </h1>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {artists.map((artist) => (
                    <Link
                        key={artist.id}
                        href={`/artistas/${artist.id}`}
                        className="group block overflow-hidden rounded-xl bg-white/5 border border-white/10 transition-all duration-700 hover:border-brand-cyan/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:-translate-y-1 active:border-brand-cyan/50 active:shadow-[0_0_20px_rgba(56,189,248,0.2)] active:-translate-y-1"
                    >
                        <div className="relative aspect-[3/2] w-full overflow-hidden">
                            <Image
                                src={artist.photoUrl}
                                alt={artist.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:brightness-110 group-active:scale-110 group-active:brightness-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 group-active:opacity-40 transition-opacity duration-700" />
                        </div>
                        <div className="p-6 relative">
                            <h2 className="text-2xl font-bold tracking-tight mb-2 text-white group-hover:text-brand-cyan group-active:text-brand-cyan transition-colors duration-700">
                                {artist.name}
                            </h2>
                            <p className="text-sm text-gray-400 line-clamp-2 group-hover:text-gray-300 group-active:text-gray-300 transition-colors duration-700">
                                {artist.bio}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
