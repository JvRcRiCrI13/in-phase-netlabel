# In Phase Netlabel Platform 🎹⚡

Plataforma web oficial para **In Phase**, un sello discográfico dedicado a la música electrónica experimental y el arte visual. Este proyecto busca crear una experiencia inmersiva que conecte la identidad visual del sello con una reproducción de audio fluida y continua.

🚧 **Estado del proyecto:** En desarrollo (Work in Progress)

## 🌐 Demo en Vivo

¡Explora la experiencia completa y sumérgete en el sonido aquí!
👉 **[in-phase-netlabel.vercel.app](https://in-phase-netlabel.vercel.app/)**

## 🌟 Características Clave

* **Navegación Fluida:** Arquitectura SPA (Single Page Application) utilizando Next.js.
* **Reproductor Persistente:** Sistema de audio global (`PlayerContext`) que mantiene la música sonando ininterrumpidamente mientras el usuario navega entre páginas.
* **Visualizador de Espectro:** Loader personalizado animado que refleja la estética de análisis de frecuencia de audio.
* **Diseño Responsivo:** Interfaz adaptada a móviles y escritorio con estética "Dark Mode" inmersiva.
* **Enrutamiento Dinámico:** Páginas de artistas generadas dinámicamente (`[id]/page.js`) para escalabilidad del catálogo.

## 🛠️ Stack Tecnológico

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
* **Estado Global:** React Context API (para gestión de audio)
* **Iconografía/UI:** React Icons / Componentes SVG personalizados

## 📂 Estructura del Proyecto

* `/app`: Rutas principales (`/`, `/artistas`, `/lanzamientos`).
* `/components`: Componentes reutilizables (`Navbar`, `Player`, `TrackList`, `SpectrumLoader`).
* `/context`: Lógica de estado global (`PlayerContext`).
* `/public`: Assets estáticos e imágenes optimizadas.

## 🚀 Instalación y Uso Local

1.  Clonar el repositorio:
    ```bash
    git clone https://github.com/JvRcRiCrI13/in-phase-netlabel.git```
2.  Instalar dependencias:
    ```bash
    npm install
    # o
    yarn install
    ```
3.  Correr el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4.  Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

---
*Desarrollado con pasión por la música y el código.* 🎛️
