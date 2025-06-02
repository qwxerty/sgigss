import React, { useState, useEffect } from 'react'; // Dodajemy useEffect do śledzenia scrolla
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Dodajemy AnimatePresence
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false); // Nowy stan do śledzenia przewijania
    const location = useLocation();

    const navItems = [
        { name: 'Strona Główna', path: '/' },
        { name: 'Opinie', path: '/opinie' },
        { name: 'FAQ', path: '/faq' },
        { name: 'Regulamin', path: '/regulamin' },
        { name: 'Partnerzy', path: '/partners' }, // Nowy link do nowej strony
    ];

    // Efekt do śledzenia przewijania strony
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) { // Po przewinięciu o 50px
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const itemVariants = {
        hidden: { y: -10, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const mobileMenuVariants = {
        hidden: { opacity: 0, x: "100%" },
        visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
        exit: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeIn" } }
    };

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.05, duration: 0.3 }}
            // Dynamiczne klasy dla tła i cienia w zależności od przewijania
            className={`fixed top-0 left-0 w-full z-40 transition-all duration-300
                       ${isScrolled ? 'bg-dark-900 shadow-xl border-b border-dark-700' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo - pozostaje tu, bo Navbar jest fixed */}
                <Link to="/" className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text
                               bg-gradient-to-r from-accentGreen-300 to-accentGreen-500
                               relative inline-block hover:scale-105 transition-transform duration-300"
                    style={{ backgroundSize: '200% auto' }}
                >
                    SGIGSS
                </Link>

                {/* Desktop Navbar */}
                <ul className="hidden md:flex flex-wrap justify-center space-x-8 text-lg font-medium">
                    {navItems.map((item, index) => (
                        <motion.li
                            key={item.name}
                            variants={itemVariants}
                            transition={{ delay: index * 0.03 }}
                        >
                            <Link
                                to={item.path}
                                // Sprawdzamy, czy link jest aktywny (dla podświetlenia)
                                className={`relative block px-4 py-2 rounded-md transition-all duration-300 ease-in-out group
                                    ${location.pathname === item.path || (item.path === '/#products' && location.pathname === '/')
                                        ? 'text-accentGreen-400 font-semibold' // Aktywny link
                                        : 'text-dark-200 hover:text-accentGreen-300' // Nieaktywny link, hover
                                    }`
                                }
                                onClick={(e) => {
                                    // Obsługa przewijania do sekcji na tej samej stronie
                                    if (item.path.startsWith('/#')) {
                                        e.preventDefault(); // Zapobiegaj domyślnej nawigacji
                                        const id = item.path.split('#')[1];
                                        const element = document.getElementById(id);
                                        if (element) {
                                            element.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }
                                    // Jeśli link nie jest do sekcji, normalna nawigacja zadziała
                                }}
                            >
                                {item.name}
                                {/* Linia podkreślająca aktywny/hover element */}
                                <span className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-accentGreen-500 transition-all duration-300 transform -translate-x-1/2
                                    ${location.pathname === item.path || (item.path === '/#products' && location.pathname === '/') ? 'w-full' : 'group-hover:w-full'}
                                `}></span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Menu Button (Hamburger) */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-dark-100 hover:text-accentGreen-400 transition-colors duration-200 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accentGreen-500"
                        aria-label="Otwórz/zamknij menu mobilne"
                    >
                        {isMobileMenuOpen ? (
                            <XMarkIcon className="h-8 w-8" />
                        ) : (
                            <Bars3Icon className="h-8 w-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={mobileMenuVariants}
                        className="md:hidden fixed inset-0 bg-dark-950 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8 py-10"
                    >
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-6 right-6 text-dark-100 hover:text-accentGreen-400 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-accentGreen-500"
                            aria-label="Zamknij menu mobilne"
                        >
                            <XMarkIcon className="h-10 w-10" />
                        </button>
                        <ul className="flex flex-col space-y-6 text-2xl font-bold">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false); // Zamknij menu po kliknięciu linku
                                            if (item.path.startsWith('/#')) {
                                                const id = item.path.split('#')[1];
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                        }}
                                        className="block text-dark-100 hover:text-accentGreen-400 py-3 transition-colors duration-200"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;