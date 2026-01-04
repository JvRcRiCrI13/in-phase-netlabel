'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'a37ee629-7fe8-46e8-922e-6a8b709df58b', // Web3Forms Access Key
                    ...formData,
                    subject: `Nuevo mensaje de ${formData.name} - In Phase Web` // Optional subject
                })
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error(data.message || "Hubo un error al enviar el mensaje.");
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage(error.message || "Error de conexión.");
        }
    };

    const closeSuccessModal = () => setStatus('idle');

    return (
        <>
            {/* Success Modal Overlay */}
            {status === 'success' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn p-4">
                    <div className="relative w-full max-w-md p-8 bg-neutral-900 border border-brand-cyan/50 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.2)] text-center transform transition-all scale-100">

                        {/* Close Button (X) */}
                        <button
                            onClick={closeSuccessModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-cyan/20 text-brand-cyan mb-6 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">¡Mensaje Enviado!</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Gracias por contactarnos. Hemos recibido tu mensaje correctamente y te responderemos a la brevedad.
                        </p>

                        <button
                            onClick={closeSuccessModal}
                            className="w-full py-3 bg-white text-black font-bold tracking-widest rounded-lg hover:bg-brand-cyan hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300 uppercase"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="w-full space-y-6">
                <div className="group relative">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-neutral-900 transition-all duration-300 disabled:opacity-50"
                    />
                    <div className="absolute inset-0 rounded-lg bg-brand-cyan/5 opacity-0 pointer-events-none group-focus-within:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="group relative">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-neutral-900 transition-all duration-300 disabled:opacity-50"
                    />
                    <div className="absolute inset-0 rounded-lg bg-brand-cyan/5 opacity-0 pointer-events-none group-focus-within:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="group relative">
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Mensaje"
                        rows={4}
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan/50 focus:bg-neutral-900 transition-all duration-300 resize-none disabled:opacity-50"
                    />
                    <div className="absolute inset-0 rounded-lg bg-brand-cyan/5 opacity-0 pointer-events-none group-focus-within:opacity-100 transition-opacity duration-300" />
                </div>

                {status === 'error' && (
                    <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-200 text-sm">
                        {errorMessage || "Hubo un error al enviar el mensaje. Por favor intenta de nuevo."}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 bg-white text-black font-bold tracking-widest hover:bg-brand-cyan hover:text-white transition-colors duration-300 rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                >
                    {status === 'submitting' ? (
                        <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        'ENVIAR'
                    )}
                </button>
            </form>
        </>
    );
}
