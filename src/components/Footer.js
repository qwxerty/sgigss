import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark-900 text-dark-300 py-8 mt-auto border-t border-dark-700 shadow-inner">
            <div className="container mx-auto px-4 text-center">
                <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
                    <h3 className="text-3xl font-bold text-dark-100">SGIGSS</h3>

                    <nav className="flex space-x-6">
                        <Link to="/regulamin" className="hover:text-accentGreen-300 transition-colors duration-200 text-lg">Regulamin</Link>
                        <Link to="/kontakt" className="hover:text-accentGreen-300 transition-colors duration-200 text-lg">Kontakt</Link>
                        <Link to="/partners" className="hover:text-accentGreen-300 transition-colors duration-200 text-lg">Partnerzy</Link>
                    </nav>

                    <div className="flex space-x-6">
                        <a href="[https://discord.gg/your-discord-invite](https://discord.gg/your-discord-invite)" target="_blank" rel="noopener noreferrer" className="text-dark-200 hover:text-accentGreen-400 transition-colors duration-200" aria-label="Discord">
                            <FontAwesomeIcon icon={faDiscord} className="text-3xl" />
                        </a>
                        <a href="[https://twitter.com/your-twitter-handle](https://twitter.com/your-twitter-handle)" target="_blank" rel="noopener noreferrer" className="text-dark-200 hover:text-accentGreen-400 transition-colors duration-200" aria-label="Twitter (X)">
                            <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
                        </a>
                    </div>
                </div>

                <p className="text-dark-400 text-sm border-t border-dark-800 pt-6">
                    &copy; {new Date().getFullYear()} SGIGSS. Wszelkie prawa zastrzeżone.
                </p>
            </div>
        </footer>
    );
};

export default Footer;