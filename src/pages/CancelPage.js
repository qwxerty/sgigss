import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const CancelPage = () => {
    return (
        <div className="min-h-screen bg-dark-950 text-dark-100 flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
                <div className="bg-dark-800 border-2 border-red-500 rounded-lg shadow-xl p-8 max-w-md text-center animate-fade-in">
                    <svg className="mx-auto h-24 w-24 text-red-400 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <h1 className="text-4xl font-extrabold text-dark-100 mb-4">Płatność Anulowana</h1>
                    <p className="text-lg text-dark-200 mb-6">
                        Twoja płatność została anulowana. Możesz spróbować ponownie lub skontaktować się z nami w przypadku problemów.
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

export default CancelPage;