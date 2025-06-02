import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CollaboratorList from '../components/CollaboratorList';
import { motion } from 'framer-motion';

const PartnersPage = () => {
    // Przykładowe dane partnerów (mogą pochodzić z API w przyszłości)
    const collaborators = [
        { id: 1, name: "YouTube Channel 1", logo: "[https://via.placeholder.com/150x70/1C1C1C/00D140?text=YT+Channel+1](https://via.placeholder.com/150x70/1C1C1C/00D140?text=YT+Channel+1)", link: "#" },
        { id: 2, name: "Twitch Streamer XYZ", logo: "[https://via.placeholder.com/150x70/1C1C1C/00D140?text=Twitch+Streamer](https://via.placeholder.com/150x70/1C1C1C/00D140?text=Twitch+Streamer)", link: "#" },
        { id: 3, name: "Game Blog PL", logo: "[https://via.placeholder.com/150x70/1C1C1C/00D140?text=Game+Blog+PL](https://via.placeholder.com/150x70/1C1C1C/00D140?text=Game+Blog+PL)", link: "#" },
        { id: 4, name: "Forum Graczy", logo: "[https://via.placeholder.com/150x70/1C1C1C/00D140?text=Forum+Graczy](https://via.placeholder.com/150x70/1C1C1C/00D140?text=Forum+Graczy)", link: "#" },
        { id: 5, name: "Esport Team PRO", logo: "[https://via.placeholder.com/150x70/1C1C1C/00D140?text=Esport+Team](https://via.placeholder.com/150x70/1C1C1C/00D140?text=Esport+Team)", link: "#" },
        { id: 6, name: "Discord Community", logo: "[https://via.placeholder.com/150x70/1C1C1C/00D140?text=Discord+Community](https://via.placeholder.com/150x70/1C1C1C/00D140?text=Discord+Community)", link: "#" },
    ];

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
                    Nasi Partnerzy i Współpracownicy
                </motion.h2>

                <p className="text-center text-xl text-dark-200 mb-12 max-w-3xl mx-auto">
                    Jesteśmy dumni z naszej współpracy z wybitnymi twórcami, streamerami i społecznościami gamingowymi. Poznajcie naszych zaufanych partnerów!
                </p>

                <CollaboratorList collaborators={collaborators} />
            </main>

            <Footer />
        </div>
    );
};

export default PartnersPage;