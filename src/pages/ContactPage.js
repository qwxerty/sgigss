// frontend/src/pages/ContactPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const ContactPage = ({ navigateTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-950 to-green-900 text-white font-sans overflow-hidden"
    >
      <Navbar navigateTo={navigateTo} />
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mx-auto max-w-5xl px-4 sm:px-0" 
        >
          {/* BLOK DLA E-MAILA */}
          <div className="bg-green-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-green-800/50 flex flex-col justify-between">
            <div className="mb-6">
              <FontAwesomeIcon icon={faEnvelope} size="4x" className="mx-auto text-orange-400 mb-4" />
              <h3 className="text-3xl text-orange-400 font-bold mb-2">
                WSPARCIE MAILOWE
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg mb-6 flex-grow">
              W przypadku jakichkolwiek pytań lub problemów, prosimy o kontakt mailowy. Nasz zespół odpowie tak szybko, jak to możliwe.
            </p>

            <div className="bg-green-950 p-4 md:p-6 rounded-xl border border-green-800/70">
              <p className="text-lg md:text-xl text-orange-400 font-semibold break-words">
                <a href="mailto:kontakt@minecraftelite.pl" className="hover:underline">kontakt@minecraftelite.pl</a>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Dostępność: Pon.-Pt., 9:00-17:00 (CET)
              </p>
            </div>
          </div>

          {/* BLOK DLA DISCORDA */}
          <div className="bg-green-900/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-green-800/50 flex flex-col justify-between">
            <div className="mb-6">
              <FontAwesomeIcon icon={faDiscord} size="4x" className="mx-auto text-blue-400 mb-4" />
              <h3 className="text-3xl text-blue-400 font-bold mb-2">
                WSPARCIE DISCORD
              </h3>
            </div>

            <p className="text-gray-300 text-lg mb-6 flex-grow">
              Dołącz do naszej społeczności na Discordzie, aby uzyskać szybką pomoc i być na bieżąco z nowościami!
            </p>

            <div className="bg-green-950 p-4 md:p-6 rounded-xl border border-green-800/70">
              <p className="text-lg md:text-xl text-blue-400 font-semibold break-words">
                <a href="#" className="hover:underline">Dołącz do nas na Discordzie!</a>
              </p>
            </div>
          </div>
        </motion.div>

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
      {/* Footer można dodać tutaj, jeśli jest komponentem */}
    </motion.div>
  );
};

export default ContactPage;