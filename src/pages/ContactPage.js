import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-dark-950 text-dark-100 flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-dark-100 text-center mb-10 mt-8"
                >
                    Skontaktuj się z Nami
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-dark-900 border border-dark-700 rounded-lg shadow-xl p-8 max-w-2xl mx-auto text-center"
                >
                    <p className="text-xl text-dark-200 mb-8">
                        Masz pytania, potrzebujesz pomocy lub chcesz zgłosić problem? Skontaktuj się z nami!
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
                        <a
                            href="mailto:kontakt@sgigss.com"
                            className="flex flex-col items-center group p-4 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-dark-700 w-full md:w-auto"
                        >
                            <EnvelopeIcon className="h-16 w-16 text-accentGreen-400 mb-3 group-hover:text-accentGreen-300 transition-colors duration-200" />
                            <span className="text-2xl font-semibold text-dark-100 group-hover:text-accentGreen-100 transition-colors duration-200">E-mail</span>
                            <span className="text-dark-300 text-sm mt-1">kontakt@sgigss.com</span>
                        </a>

                        <a
                            href="[https://discord.gg/your-discord-invite](https://discord.gg/your-discord-invite)" // Zmień na swój link Discord!
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center group p-4 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg border border-dark-700 w-full md:w-auto"
                        >
                            <FontAwesomeIcon icon={faDiscord} className="h-16 w-16 text-accentGreen-400 mb-3 group-hover:text-accentGreen-300 transition-colors duration-200" />
                            <span className="text-2xl font-semibold text-dark-100 group-hover:text-accentGreen-100 transition-colors duration-200">Discord</span>
                            <span className="text-dark-300 text-sm mt-1">Dołącz do naszej społeczności!</span>
                        </a>
                    </div>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;