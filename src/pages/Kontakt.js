import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Kontakt = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-green-950 text-white font-sans"
    >
      <Navbar />
      <section className="py-20 px-4 max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-green-400 mb-12 font-bold tracking-tight"
        >
          KONTAKT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 mb-6 text-lg"
        >
          Masz pytania? Skontaktuj się z nami!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 mb-6 text-lg"
        >
          Email: <span className="text-green-300 font-medium">kontakt@minecraftelite.pl</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-lg"
        >
          Discord: <a href="#" className="text-green-300 font-medium hover:underline">Dołącz do nas!</a>
        </motion.p>
      </section>
      <footer className="bg-green-900 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl text-green-300 font-semibold mb-4">Minecraft Elite</h3>
            <p className="text-gray-400 text-sm">Najlepsze konta Minecraft dla elitarnych graczy.</p>
          </div>
          <div>
            <h3 className="text-xl text-green-300 font-semibold mb-4">Linki</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Strona główna</Link></li>
              <li><Link to="/opinie" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Opinie</Link></li>
              <li><Link to="/regulamin" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Regulamin</Link></li>
              <li><Link to="/kontakt" className="text-gray-400 hover:text-green-400 transition-colors duration-300">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-green-300 font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400 text-sm">Email: <span className="text-green-400">kontakt@minecraftelite.pl</span></p>
            <p className="text-gray-400 text-sm mt-2">Discord: <a href="#" className="text-green-400 hover:underline">Dołącz do nas!</a></p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Minecraft Elite. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </motion.div>
  );
};

export default Kontakt;