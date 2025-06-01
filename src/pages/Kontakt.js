// src/pages/Kontakt.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

// Komponent Footer (bez zmian)
const Footer = () => (
  <footer className="bg-green-900 py-16 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="text-2xl text-green-300 font-semibold mb-6">Minecraft Elite</h3>
        <p className="text-gray-400 text-base leading-relaxed">
          Najlepsze konta Minecraft dla elitarnych graczy. Dołącz do naszej społeczności!
        </p>
      </div>
      <div>
        <h3 className="text-2xl text-green-300 font-semibold mb-6">Linki</h3>
        <ul className="space-y-4">
          {['Strona główna', 'Opinie', 'Regulamin', 'FAQ', 'Kontakt'].map((link, index) => (
            <li key={index}>
              <Link
                to={`/${link.toLowerCase().replace(' ', '')}`}
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 text-base"
                aria-label={link}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-2xl text-green-300 font-semibold mb-6">Kontakt</h3>
        <p className="text-gray-400 text-base leading-relaxed">
          Email: <span className="text-green-400 font-medium">kontakt@minecraftelite.pl</span>
        </p>
        <p className="text-gray-400 text-base leading-relaxed mt-4">
          Discord: <a href="#" className="text-green-400 hover:underline">Dołącz do nas!</a>
        </p>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-12">
      © {new Date().getFullYear()} Minecraft Elite. Wszystkie prawa zastrzeżone.
    </div>
  </footer>
);


const Kontakt = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white font-sans overflow-hidden"
    >
      <Navbar />
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl text-green-400 mb-8 font-extrabold tracking-tight"
        >
          KONTAKT
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mb-10 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Masz pytania lub potrzebujesz wsparcia? Jesteśmy tutaj, aby pomóc!
        </motion.p>

        {/* GŁÓWNY KONTENER DLA DWÓCH BLOKÓW KONTAKTOWYCH */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          // Zmiany tutaj: zwiększono max-w, używamy flexbox dla centrowania na mniejszych ekranach
          // Zmieniono z max-w-5xl na max-w-6xl
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 mx-auto max-w-6xl px-4 sm:px-0" // Zmieniono max-w na 6xl, poprawiono gap
        >
          {/* BLOK DLA E-MAILA */}
          <div className="bg-green-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-green-800/50 flex flex-col justify-between"> {/* Zmniejszono padding na mniejszych */}
            <div className="mb-6">
              <FontAwesomeIcon icon={faEnvelope} size="4x" className="mx-auto text-orange-400 mb-4" />
              <h3 className="text-3xl text-orange-400 font-bold mb-2">
                WSPARCIE MAILOWE
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 flex-grow">
              W przypadku jakichkolwiek pytań lub problemów, prosimy o kontakt mailowy. Nasz zespół odpowie tak szybko, jak to możliwe.
            </p>

            <div className="bg-green-950 p-4 md:p-6 rounded-xl border border-green-800/70"> {/* Zmniejszono padding wewn. bloku */}
              <p className="text-lg md:text-xl text-orange-400 font-semibold break-words"> {/* Zmniejszono font size na md:text-xl */}
                <a href="mailto:kontakt@minecraftelite.pl" className="hover:underline">kontakt@minecraftelite.pl</a>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Dostępność: Pon.-Pt., 9:00-17:00 (CET)
              </p>
            </div>
          </div>

          {/* BLOK DLA DISCORDA */}
          <div className="bg-green-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-green-800/50 flex flex-col justify-between"> {/* Zmniejszono padding na mniejszych */}
            <div className="mb-6">
              <FontAwesomeIcon icon={faDiscord} size="4x" className="mx-auto text-blue-400 mb-4" />
              <h3 className="text-3xl text-blue-400 font-bold mb-2">
                WSPARCIE DISCORD
              </h3>
            </div>

            <p className="text-gray-300 text-lg mb-6 flex-grow">
              Dołącz do naszej społeczności na Discordzie, aby uzyskać szybką pomoc i być na bieżąco z nowościami!
            </p>

            <div className="bg-green-950 p-4 md:p-6 rounded-xl border border-green-800/70"> {/* Zmniejszono padding wewn. bloku */}
              <p className="text-lg md:text-xl text-blue-400 font-semibold break-words"> {/* Zmniejszono font size na md:text-xl */}
                <a href="#" className="hover:underline">Dołącz do nas na Discordzie!</a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Informacja o podawaniu danych, przeniesiona na koniec sekcji */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-sm mt-12 max-w-2xl mx-auto"
        >
          Prosimy o podanie wszystkich niezbędnych informacji w wiadomości, abyśmy mogli szybko rozwiązać Twój problem.
        </motion.p>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Kontakt;