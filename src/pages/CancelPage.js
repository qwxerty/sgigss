import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const CancelPage = ({ navigateTo }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-green-950 text-white font-sans flex flex-col items-center justify-center text-center"
    >
      <Navbar navigateTo={navigateTo} />
      <section className="py-20 px-4 max-w-2xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-red-600 mb-8 font-extrabold tracking-tight">
          Płatność anulowana
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Twoja płatność została anulowana lub nie powiodła się.
        </p>
        <p className="text-gray-400 text-sm">
          Jeśli masz pytania lub problem nadal występuje, skontaktuj się z nami.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigateTo('home')}
          className="mt-10 bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg"
        >
          Wróć do strony głównej
        </motion.button>
      </section>
      {/* Footer można dodać tutaj, jeśli jest komponentem */}
    </motion.div>
  );
};

export default CancelPage;