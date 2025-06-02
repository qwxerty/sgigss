import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative h-[90vh] bg-gradient-to-b from-green-900 to-green-950 text-center flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1619204715997-1367fe5812f1?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-15 animate-bg-move"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-950/80"></div>
      <div className="relative z-10 p-4"> {/* Dodano padding dla responsywności */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-5xl md:text-8xl font-extrabold text-white mb-4 tracking-tight leading-tight" /* Dodano leading-tight */
        >
          <span className="text-green-400">Mine</span><span className="text-green-300">Craft</span> Elite
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto"
        >
          Dołącz do elity graczy i zdobądź najlepsze konto Minecraft z ekskluzywnymi bonusami!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
          className="mt-8"
        >
          <button 
            onClick={() => document.getElementById('offers').scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg focus:outline-none"
          >
            Zobacz ofertę
          </button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;