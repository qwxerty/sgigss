import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OpinionCard from '../components/OpinionCard';
import { motion } from 'framer-motion';

const OpinionsPage = () => {
    const opinions = [
        { id: 1, author: "GraczXYZ", text: "Mega szybka dostawa i konto działa idealnie! Polecam ten sklep każdemu. Obsługa klienta na najwyższym poziomie.", rating: 5 },
        { id: 2, author: "MagicznyKowal", text: "Świetna obsługa klienta. Artefakt działa jak należy, byłem zaskoczony jego mocą! Na pewno wrócę po więcej.", rating: 4 },
        { id: 3, author: "CyberPunk_2077", text: "Zestaw survivalowy uratował mi życie w grze. Top! Jakość produktów jest niezrównana, a cena bardzo przystępna.", rating: 5 },
        { id: 4, author: "SekretnyGracz", text: "Księga Zaklęć Starożytnych to złoto! Nigdy nie myślałem, że znajdę coś tak potężnego. Dzięki SGIGSS!", rating: 5 },
        { id: 5, author: "ŁowcaSkarbów", text: "Transakcja przebiegła błyskawicznie, a dane do konta otrzymałem od razu. Wszystko zgodnie z opisem.", rating: 4 },
        { id: 6, author: "WiecznyWędrowiec", text: "Trochę sceptyczny na początku, ale eliksir mocy naprawdę działa! Jestem pod wrażeniem. Strona wygląda nowocześnie.", rating: 4 },
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
                    Opinie Naszych Klientów
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {opinions.map(opinion => (
                        <OpinionCard key={opinion.id} opinion={opinion} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OpinionsPage;