import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SuccessPage = () => {
    const location = useLocation();

    useEffect(() => {
        const sessionId = new URLSearchParams(location.search).get('session_id');
        if (sessionId) {
            console.log('Płatność zakończona pomyślnie! ID sesji Stripe:', sessionId);
        }
    }, [location]);

    return (
        <div className="min-h-screen bg-dark-950 text-dark-100 flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <div className="bg-dark-800 border-2 border-accentGreen-500 rounded-lg shadow-xl p-8 max-w-md text-center animate-fade-in">
                    <svg className="mx-auto h-24 w-24 text-accentGreen-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h1 className="text-4xl font-extrabold text-dark-100 mb-4">Płatność Zrealizowana Pomyślnie!</h1>
                    <p className="text-lg text-dark-200 mb-6">
                        Dziękujemy za zakup! Dane do Twojego konta zostały wysłane na podany adres e-mail.
                    </p>
                    <p className="text-md text-dark-300">
                        Jeśli nie otrzymasz e-maila w ciągu kilku minut, sprawdź folder SPAM.
                    </p>
                    <a
                        href="/"
                        className="mt-8 inline-block bg-accentGreen-500 hover:bg-accentGreen-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
                    >
                        Wróć do strony głównej
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default SuccessPage;