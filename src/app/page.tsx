"use client";

import ServicesList from "@/components/ServicesList";
import ContactForm from "@/components/organisms/ContactForm";
import FestivalCaseStudy from "@/components/FestivalCaseStudy";

export default function Home() {

    return (
        <main className="min-h-screen bg-black text-white relative flex flex-col items-center pt-24 pb-32 px-4 selection:bg-brand-cyan selection:text-black overflow-x-hidden">

            {/* --- LEGACY BACKGROUND RESTORATION --- */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Hero Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/images/hero_background.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay - increased for better text contrast */}
                </div>

                {/* Background Gradient Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-violet/20 rounded-full blur-[100px] z-0 mix-blend-screen" />
            </div>

            <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
                {/* Header / Hero Text - LEGACY STYLE */}
                <header className="mb-12 w-full text-center flex flex-col items-center justify-center pt-24 px-2">
                    <h1 className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl mb-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-cyan to-brand-violet animate-pulse-slow leading-none">
                        IN-PHASE
                    </h1>
                    <h2 className="text-3xl font-bold tracking-[0.2em] sm:text-5xl md:text-6xl mb-6 text-white/90 leading-none -mt-2 sm:-mt-3 md:-mt-5 animate-pulse-slow">
                        NETLABEL
                    </h2>
                    <p className="max-w-4xl text-sm sm:text-lg md:text-xl font-bold mb-6 tracking-[0.1em] sm:tracking-[0.3em] md:tracking-[0.5em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-white animate-pulse text-center">
                        Plataforma de Vanguardia
                    </p>
                </header>

                {/* Animated Scroll Indicator */}
                <div className="flex flex-col items-center justify-center opacity-60 mt-12 mb-20 animate-bounce">
                    <span className="text-[10px] font-mono tracking-widest text-brand-cyan mb-2">SCROLL</span>
                    <div className="w-[3px] h-14 bg-gradient-to-b from-brand-cyan to-transparent rounded-full" />
                </div>

                <div className="w-full mt-24 md:mt-48 mb-24 relative z-20">
                    <ServicesList />
                </div>

                {/* Festival Case Study Section */}
                <FestivalCaseStudy />

                {/* --- RESTORED SECTIONS --- */}
                {/* About Us Section */}
                <section className="w-full flex flex-col items-center text-center mt-12 mb-24 relative z-10 border-t border-white/5 pt-20">
                    <h2 className="text-4xl font-bold tracking-[0.2em] text-white/90 sm:text-5xl mb-6">
                        EQUIPO IN-PHASE
                    </h2>

                    <div className="w-full flex flex-row flex-wrap justify-center gap-16 md:gap-32 mt-8 mb-16">
                        {[
                            { id: 1, role: 'PRODUCERS', image: '/images/producer_concept.png' },
                            { id: 2, role: 'DESIGN TEAM', image: '/images/design_concept.png' }
                        ].map((member) => (
                            <div key={member.id} className="group relative w-[200px] h-[200px] md:w-[240px] md:h-[240px] overflow-hidden rounded-full bg-neutral-900 border border-white/10 shrink-0">
                                <img
                                    src={member.image}
                                    alt={member.role}
                                    className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                                    <p className="text-brand-cyan font-bold tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl mb-6">Quiénes somos</h3>
                    <div className="max-w-3xl text-lg text-white/70 tracking-wide font-light leading-relaxed space-y-4">
                        <p>
                            <strong className="text-white font-bold">IN-PHASE</strong> es un sello discográfico y estudio creativo nacido desde la escena musical independiente. Fusionamos producción sonora, diseño visual y estrategia digital para construir proyectos con identidad propia.
                        </p>
                        <p>
                            Trabajamos con artistas, sellos y marcas que buscan ir más allá de lo convencional — desde la grabación y masterización de un single, hasta la dirección creativa e identidad gráfica de un evento o festival completo.
                        </p>
                        <p>
                            No somos una agencia tradicional. Somos músicos, diseñadores y estrategas que entienden la cultura desde adentro.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contacto" className="w-full flex flex-col items-center mt-12 mb-32 relative z-10 border-t border-white/5 pt-20">
                    <h2 className="text-4xl font-bold tracking-[0.2em] text-white/90 sm:text-5xl mb-12">
                        CONTACTO
                    </h2>
                    <div className="w-full max-w-3xl">
                        <ContactForm />
                    </div>
                </section>

            </div>
        </main>
    );
}
