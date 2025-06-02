import React, { useState, useEffect } from 'react';
// import Header from '../components/Header'; // Usuniemy ten import, ponieważ Header.js zostanie usunięty/zmieniony
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import OpinionCard from '../components/OpinionCard';
// import CollaboratorList from '../components/CollaboratorList'; // Już usunięty, jest na osobnej stronie
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom'; // Import Link

// Odbieramy prop onOpenPurchaseModal z App.js
const HomePage = ({ onOpenPurchaseModal }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/products`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                console.error("Could not fetch products:", err);
                setError("Nie udało się załadować produktów. Spróbuj ponownie później.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const opinions = [
        { id: 1, author: "GraczXYZ", text: "Mega szybka dostawa i konto działa idealnie! Polecam!", rating: 5 },
        { id: 2, author: "MagicznyKowal", text: "Świetna obsługa klienta. Artefakt działa jak należy.", rating: 4 },
        { id: 3, author: "CyberPunk_2077", text: "Zestaw survivalowy uratował mi życie w grze. Top!", rating: 5 },
    ];

    return (
        <div className="min-h-screen bg-dark-950 text-dark-100 flex flex-col font-sans">
            {/* Navbar jest zawsze na górze */}
            <Navbar />

            {/* Nowa Sekcja Powitalna (Hero Section) */}
            <section
                className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden"
                style={{
                    // Użyj atrakcyjnego zdjęcia w tle (umieść je w public/images/hero-bg.jpg)
                    backgroundImage: 'url("/images/hero-bg.jpg")', // Zastąp to ścieżką do Twojego zdjęcia
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // Efekt parallax
                }}
            >
                {/* Overlay dla lepszej czytelności tekstu i zielonego akcentu */}
                <div className="absolute inset-0 bg-dark-950 opacity-80 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent opacity-60"></div>


                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative z-10 p-6 max-w-4xl mx-auto"
                >
                    {/* Logo sklepu (można użyć obrazka lub tekstowego) */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text
                               bg-gradient-to-r from-accentGreen-300 to-accentGreen-500 mb-6
                               animate-shine-text
                               "
                        style={{ backgroundSize: '200% auto' }}
                    >
                        SGIGSS
                    </motion.h1>

                    {/* Nagłówek główny */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="text-2xl md:text-4xl font-semibold text-dark-100 mb-8 drop-shadow-lg"
                    >
                        Twoje konto do gry w najlepszej cenie!
                    </motion.p>

                    {/* Przyciski */}
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <motion.a
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            href="https://discord.gg/your-discord-invite" // Zmień na swój link Discord
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accentGreen-500 hover:bg-accentGreen-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 animate-pulse-glow-accent flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faDiscord} className="mr-3 text-2xl" />
                            Dołącz do Discorda
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                            href="/#products" // Przewiń do sekcji produktów
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-dark-700 hover:bg-dark-600 text-accentGreen-300 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 border border-accentGreen-700"
                        >
                            Sprawdź Ofertę
                        </motion.a>
                    </div>
                </motion.div>
            </section>

            <main className="flex-grow container mx-auto px-4 py-8">
                {/* Sekcja Produktów */}
                <section id="products" className="mb-16 pt-16"> {/* Dodano pt-16 dla odstępu od hero section */}
                    <h2 className="text-4xl font-extrabold text-dark-100 text-center mb-10 mt-8 animate-fade-in-up">
                        Nasze Produkty
                    </h2>
                    {loading && <p className="text-center text-accentGreen-400 text-lg animate-pulse">Ładowanie produktów...</p>}
                    {error && <p className="text-center text-red-500 text-lg">{error}</p>}
                    {!loading && !error && products.length === 0 && (
                        <p className="text-center text-dark-300 text-lg">Brak dostępnych produktów.</p>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {products.map(product => (
                            // Przekazujemy onOpenPurchaseModal do ProductCard
                            <ProductCard key={product.id} product={product} onOpenPurchaseModal={onOpenPurchaseModal} />
                        ))}
                    </div>
                </section>

                {/* Sekcja Opinii */}
                <section id="opinions" className="mb-16 bg-dark-900 rounded-lg p-8 shadow-xl border border-dark-700">
                    <h2 className="text-4xl font-extrabold text-dark-100 text-center mb-10 mt-8 animate-fade-in-up">
                        Co mówią nasi klienci
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {opinions.map(opinion => (
                            <OpinionCard key={opinion.id} opinion={opinion} />
                        ))}
                    </div>
                </section>

                {/* Sekcja Współpracowników (już usunięta z HomePage) */}
            </main>

            <Footer />
        </div>
    );
};

export default HomePage;