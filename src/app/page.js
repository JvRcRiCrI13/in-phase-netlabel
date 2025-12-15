export default function Home() {
    return (
        <main className="bg-black min-h-screen">
            <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 overflow-hidden">
                {/* Background Gradient Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <div className="mx-auto max-w-7xl px-6 py-12 relative z-10">
                    <section className="flex flex-col items-center justify-center text-center">
                        <h1 className="text-6xl font-black tracking-tighter sm:text-8xl mb-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-cyan to-brand-violet animate-pulse-slow leading-none">
                            IN-PHASE
                        </h1>
                        <h2 className="text-4xl font-bold tracking-[0.2em] sm:text-5xl mb-6 text-white/90 leading-none -mt-3 sm:-mt-5 animate-pulse-slow">
                            NETLABEL
                        </h2>
                        <p className="max-w-2xl text-xl text-white mb-10 tracking-wide">
                            Un sello discográfico dedicado a la música electrónica experimental y el arte visual.
                            <br />
                            <span className="text-brand-cyan">Explora lo desconocido.</span>
                        </p>
                        <button className="group relative px-8 py-4 bg-brand-magenta text-white font-bold rounded-full shadow-[0_0_20px_rgba(192,38,211,0.5)] hover:shadow-[0_0_30px_rgba(192,38,211,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                            <span className="relative z-10">EXPLORAR CATÁLOGO</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-magenta to-brand-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                    </section>
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 bg-white">
                <section className="flex justify-between flex-col">
                    <h2 className="text-6xl font-bold tracking-tighter text-black sm:text-5xl mb-6animate-pulse-slow">
                        EQUIPO IN-PHASE
                    </h2>
                    <p className="text-sl text-black tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </section>
            </div>
        </main>

    )
}
