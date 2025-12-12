'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="flex h-[50vh] w-full flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold tracking-tight">Algo salió mal</h2>
            <button
                onClick={() => reset()}
                className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
            >
                Intentar de nuevo
            </button>
        </div>
    )
}
