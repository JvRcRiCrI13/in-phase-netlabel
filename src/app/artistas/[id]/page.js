import { getArtistById } from '@/lib/data';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import TrackList from '@/components/organisms/TrackList';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const artist = await getArtistById(id);
    if (!artist) return { title: 'Artista No Encontrado' };

    return {
        title: `${artist.name} | Record Label`,
        description: artist.bio.substring(0, 160),
    };
}

export default async function ArtistDetailPage({ params }) {
    const { id } = await params;
    const artist = await getArtistById(id);

    if (!artist) {
        notFound();
    }

    return (
        <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-12 lg:grid-cols-2 items-start">
                {/* Image Section */}
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(129,140,248,0.15)] lg:aspect-[4/3] group">
                    <Image
                        src={artist.photoUrl}
                        alt={artist.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50" />
                </div>

                {/* Info Section */}
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {artist.name}
                    </h1>
                    <div className="prose prose-invert max-w-none mb-10">
                        <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-brand-violet/50 pl-4">
                            {artist.bio}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold tracking-widest text-brand-cyan uppercase">Tracks Populares</h3>
                        <TrackList tracks={artist.tracks} />
                    </div>
                </div>
            </div>
        </div>
    );
}
