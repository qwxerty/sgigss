import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-dark-800 border border-dark-700 rounded-lg shadow-md mb-4 overflow-hidden"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left p-6 flex justify-between items-center text-dark-100 font-semibold text-lg hover:bg-dark-700 transition-colors duration-200"
            >
                {question}
                {isOpen ? (
                    <ChevronUpIcon className="h-6 w-6 text-accentGreen-400" />
                ) : (
                    <ChevronDownIcon className="h-6 w-6 text-accentGreen-400" />
                )}
            </button>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="p-6 pt-0 text-dark-300 border-t border-dark-700"
                >
                    {answer}
                </motion.div>
            )}
        </motion.div>
    );
};

const FaqPage = () => {
    const faqData = [
        {
            question: "Jak długo trwa dostawa konta po zakupie?",
            answer: "Dane do konta są wysyłane automatycznie na podany adres e-mail niemal natychmiast po potwierdzeniu płatności przez Stripe. Zazwyczaj trwa to kilka sekund do maksymalnie kilku minut."
        },
        {
            question: "Czy konta są legalne i bezpieczne?",
            answer: "Tak, wszystkie konta oferowane w naszym sklepie są legalne i pochodzą z zaufanych źródeł. Dbamy o bezpieczeństwo transakcji i ochronę danych klientów."
        },
        {
            question: "Co zrobić, jeśli nie otrzymałem e-maila z danymi konta?",
            answer: "Najpierw sprawdź folder SPAM/Junk w swojej skrzynce pocztowej. Jeśli e-maila nadal nie ma, skontaktuj się z naszym wsparciem technicznym podając swój adres e-mail z zakupu oraz ID transakcji Stripe (jeśli posiadasz)."
        },
        {
            question: "Czy mogę zwrócić zakupione konto?",
            answer: "Ze względu na specyfikę produktów cyfrowych (kont), zwroty nie są standardowo oferowane po wysłaniu danych dostępowych. Prosimy o zapoznanie się z naszym regulaminem przed zakupem."
        },
        {
            question: "Czy oferujecie wsparcie techniczne po zakupie?",
            answer: "Tak, oferujemy wsparcie techniczne dla naszych klientów w przypadku problemów z dostępem do konta lub innych pytań związanych z zakupionym produktem. Skontaktuj się z nami przez formularz kontaktowy lub e-mail."
        }
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
                    Często Zadawane Pytania (FAQ)
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    {faqData.map((item, index) => (
                        <FaqItem key={index} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default FaqPage;