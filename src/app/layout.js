import './globals.css'
import { Inter } from 'next/font/google'
import { PlayerProvider } from '@/context/PlayerContext'
import Player from '@/components/Player'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Record Label',
    description: 'Minimalist Record Label Site',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`${inter.className} antialiased`}>
                <PlayerProvider>
                    <div className="flex min-h-screen flex-col">
                        <Navbar />
                        <main className="flex-1 pt-20 pb-24">
                            {children}
                        </main>
                        <Player />
                    </div>
                </PlayerProvider>
            </body>
        </html>
    )
}
