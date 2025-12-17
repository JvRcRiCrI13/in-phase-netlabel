export default function Home() {
    return (
        <main className="bg-black min-h-screen">
            <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_background.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for text contrast */}
                </div>

                {/* Background Gradient Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[100px] z-0 pointer-events-none mix-blend-screen" />

                <div className="mx-auto max-w-7xl px-6 relative z-10">
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

            <div className="relative z-10 w-full bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <section className="flex flex-col items-start text-left w-full">
                        <h2 className="w-full flex items-center justify-center text-6xl font-bold tracking-tighter text-black sm:text-5xl mb-6 animate-pulse-slow">
                            EQUIPO IN-PHASE
                        </h2>
                        <div className="w-full flex flex-row flex-wrap justify-center gap-32 mt-8 mb-12">
                            {[
                                { id: 1, role: 'PRODUCERS', image: '/images/producer_concept.png' },
                                { id: 2, role: 'DESIGN TEAM', image: '/images/design_concept.png' }
                            ].map((member) => (
                                <div key={member.id} className="group relative w-[240px] h-[240px] overflow-hidden rounded-full bg-neutral-900 border border-white/10 shrink-0">
                                    <img
                                        src={member.image}
                                        alt={member.role}
                                        className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                        <p className="text-brand-cyan font-bold tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h3 className="flex justify-center w-full text-2xl font-bold items-center tracking-tighter text-black sm:text-3xl mb-6 animate-pulse-slow">Quiénes somos</h3>
                        <p className="w-full text-center text-lg text-black tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </section>
                </div>
            </div>

            <div className="relative z-10 w-full py-24 bg-black">
                <div className="mx-auto max-w-3xl px-6">
                    <section className="flex flex-col items-center w-full">
                        <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl mb-12 animate-pulse-slow">
                            CONTACTO
                        </h2>
                        <form className="w-full space-y-6">
                            <div className="group relative">
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-neutral-900 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-brand-cyan/5 opacity-0 pointer-events-none group-focus-within:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="group relative">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-neutral-900 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-lg bg-brand-cyan/5 opacity-0 pointer-events-none group-focus-within:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="group relative">
                                <textarea
                                    placeholder="Mensaje"
                                    rows={4}
                                    className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-neutral-900 transition-all duration-300 resize-none"
                                />
                                <div className="absolute inset-0 rounded-lg bg-brand-cyan/5 opacity-0 pointer-events-none group-focus-within:opacity-100 transition-opacity duration-300" />
                            </div>
                            <button className="w-full py-4 bg-white text-black font-bold tracking-widest hover:bg-brand-cyan hover:text-white transition-colors duration-300 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                                ENVIAR
                            </button>
                        </form>
                    </section>
                </div>
            </div>
        </main>

    )
}
