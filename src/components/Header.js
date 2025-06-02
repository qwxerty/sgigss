import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark-900 text-white shadow-xl py-5 border-b border-dark-700 relative"
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Eleganckie Logo/Nazwa sklepu */}
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text
                           bg-gradient-to-r from-accentGreen-300 to-accentGreen-500
                           relative inline-block
                           animate-shine-text
                           "
                    style={{ backgroundSize: '200% auto' }}
                >
                    SGIGSS
                    {/* Subtelny cień/rozmycie dla efektu głębi */}
                    <span className="absolute inset-0 bg-gradient-to-r from-accentGreen-400 to-accentGreen-600 opacity-10 filter blur-sm" aria-hidden="true"></span>
                </h1>

                {/* Ikony społecznościowe */}
                <nav className="flex space-x-5">
                    <a
                        href="[https://discord.gg/your-discord-invite](https://discord.gg/your-discord-invite)" // Zmień na swój link Discord
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-200 hover:text-accentGreen-400 transition-colors duration-300 transform hover:scale-110"
                        aria-label="Discord"
                    >
                        <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
                    </a>
                    <a
                        href="[https://twitter.com/your-twitter-handle](https://twitter.com/your-twitter-handle)" // Zmień na swój link Twitter (X)
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-200 hover:text-accentGreen-400 transition-colors duration-300 transform hover:scale-110"
                        aria-label="Twitter (X)"
                    >
                        <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
                    </a>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;