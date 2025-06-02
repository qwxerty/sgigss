// frontend/src/pages/HomePage.js
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard'; 
import PurchaseModal from '../components/PurchaseModal'; 
import { createCheckoutSession } from '../api'; 
import { loadStripe } from '@stripe/stripe-js'; 

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHable_KEY);


const HomePage = ({ navigateTo }) => { 
    const [currentYear] = useState(new Date().getFullYear());
    const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null); 

    const openPurchaseModal = (product) => {
        setSelectedProduct(product);
        setIsPurchaseModalOpen(true);
        console.log("Modal otwarty dla produktu:", product); 
    };

    const closePurchaseModal = () => {
        setIsPurchaseModalOpen(false);
        setSelectedProduct(null); 
        console.log("Modal zamknięty."); 
    };

    const handlePurchaseConfirmation = async (purchaseData) => {
        console.log("Dane zakupu z modala:", purchaseData);

        try {
            const session = await createCheckoutSession(purchaseData);
            console.log("Sesja Stripe utworzona:", session);

            if (session.url) { 
                window.location.href = session.url; 
            } else if (session.id) { 
                const stripe = await stripePromise;
                const { error: stripeError } = await stripe.redirectToCheckout({ sessionId: session.id });
                if (stripeError) {
                    throw new Error(stripeError.message);
                }
            } else {
                throw new Error("Brak URL sesji Stripe.");
            }
            
            closePurchaseModal(); 

        } catch (error) {
            console.error("Błąd zakupu:", error);
            alert(`Błąd zakupu: ${error.message}`); 
        }
    };


    const minecraftOffers = [
        { id: 1, title: 'Konto Elite MC', image: 'https://images.unsplash.com/photo-1622396481328-6c0d2f99e5e1?q=80&w=400&auto=format&fit=crop', description: 'Ekskluzywne konto z unikalnymi bonusami i statusem VIP.', price: 129, perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Ekskluzywna skórka', 'Status VIP', 'Specjalny badge'], },
        { id: 2, title: 'Konto Pro MC', image: 'https://images.unsplash.com/photo-1619204715997-1367fe5812f1?q=80&w=400&auto=format&fit=crop', description: 'Zaawansowane konto dla doświadczonych graczy.', price: 89, perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Własna skórka', 'Dodatkowe sloty'], },
        { id: 3, title: 'Konto Start MC', image: 'https://images.unsplash.com/photo-1600585154347-be6161a56a0c?q=80&w=400&auto=format&fit=crop', description: 'Idealne konto na początek przygody.', price: 59, perks: ['Pełny dostęp', 'Podstawowa pomoc', 'Standardowe funkcje'], },
    ];

    const whyUs = [
        { title: 'Szybka dostawa', description: 'Otrzymasz konto w ciągu kilku minut.', icon: '🚀' },
        { title: 'Gwarancja jakości', description: 'Tylko oryginalne i działające konta.', icon: '✔️' },
        { title: 'Wsparcie 24/7', description: 'Jesteśmy tu, aby pomóc o każdej porze.', icon: '📞' },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.2, },
        }),
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-green-950 text-white font-sans overflow-hidden" 
        >
            <Navbar navigateTo={navigateTo} /> 
            <Header />

            {/* Sekcja OFERTY */}
            <section id="offers" className="py-20 px-4">
                <motion.h2
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold tracking-tight"
                >
                    NASZE OFERTY
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {minecraftOffers.map((offer, index) => (
                        <motion.div
                            key={offer.id}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true, amount: 0.3 }}
                            className="w-full"
                        >
                            <ProductCard
                                product={offer} 
                                onOpenModal={openPurchaseModal}
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Sekcja DLACZEGO MY? (bez zmian) */}
            <section className="py-20 px-4 bg-gradient-to-b from-green-950 to-green-900">
                <motion.h2
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold tracking-tight"
                >
                    DLACZEGO MY?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {whyUs.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            custom={index}
                            viewport={{ once: true, amount: 0.3 }}
                            className="bg-green-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-800/40 text-center hover:shadow-2xl hover:border-green-700 transition-shadow duration-300"
                        >
                            <motion.div
                                whileHover={{ scale: 1.2, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl mb-4"
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-xl text-green-300 mb-2 font-semibold">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Stopka (bez zmian) */}
            <footer className="bg-green-900 py-12 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h3 className="text-xl text-green-300 font-semibold mb-4">Minecraft Elite</h3>
                        <p className="text-gray-400 text-sm">Najlepsze konta Minecraft dla elitarnych graczy.</p>
                    </div>
                    <div>
                        <h3 className="text-xl text-green-300 font-semibold mb-4">Linki</h3>
                        <ul className="space-y-2">
                            <li><button onClick={() => navigateTo('home')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Strona główna</button></li>
                            <li><button onClick={() => navigateTo('opinie')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Opinie</button></li>
                            <li><button onClick={() => navigateTo('regulamin')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Regulamin</button></li>
                            <li><button onClick={() => navigateTo('faq')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">FAQ</button></li>
                            <li><button onClick={() => navigateTo('kontakt')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Kontakt</button></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl text-green-300 font-semibold mb-4">Kontakt</h3>
                        <p className="text-gray-400 text-sm">Email: <span className="text-green-400">kontakt@minecraftelite.pl</span></p>
                        <p className="text-gray-400 text-sm mt-2">Discord: <a href="#" className="text-green-400 hover:underline">Dołącz do nas!</a></p>
                    </div>
                </div>
                <div className="text-center text-gray-500 text-sm mt-8 px-4 sm:px-6 lg:px-8">
                    © {currentYear} Minecraft Elite. Wszystkie prawa zastrzeżone.
                </div>
            </footer>

            {/* Renderowanie modala poza główną strukturą strony */}
            <AnimatePresence>
                {isPurchaseModalOpen && selectedProduct && (
                    <PurchaseModal
                        isOpen={isPurchaseModalOpen}
                        onClose={closePurchaseModal}
                        product={selectedProduct}
                        onPurchaseConfirm={handlePurchaseConfirmation}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default HomePage;