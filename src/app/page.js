export default function Home() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 overflow-hidden bg-black">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 py-12 relative z-10">
                <section className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-6xl font-bold tracking-tighter sm:text-7xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-cyan to-brand-violet animate-pulse-slow">
                        SONIDOS DEL FUTURO
                    </h1>
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
    )
}
