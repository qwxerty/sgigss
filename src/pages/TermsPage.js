// frontend/src/pages/TermsPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const TermsPage = ({ navigateTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-green-950 text-white font-sans"
    >
      <Navbar navigateTo={navigateTo} />
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold"
        >
          REGULAMIN
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-green-900/50 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-800/30 mb-12"
        >
          <h3 className="text-xl text-green-300 mb-4 font-semibold">1. Postanowienia ogólne</h3>
          <p className="text-gray-400 mb-4">Wszystkie transakcje są ostateczne. Konta są dostarczane po potwierdzeniu płatności.</p>
          <h3 className="text-xl text-green-300 mb-4 font-semibold">2. Obowiązki użytkownika</h3>
          <p className="text-gray-400 mb-4">Użytkownik musi podać prawidłowy email do otrzymania konta.</p>
          <h3 className="text-xl text-green-300 mb-4 font-semibold">3. Wsparcie</h3>
          <p className="text-gray-400">W razie problemów kontakt: <span className="text-green-400">kontakt@minecraftelite.pl</span>.</p>
        </motion.div>
      </section>
      {/* Footer można dodać tutaj, jeśli jest komponentem */}
    </motion.div>
  );
};

export default TermsPage;