import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MinecraftCard = ({ id, title, image, description, price, perks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: id * 0.2 }}
      className="relative bg-green-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-800/40 group"
    >
      <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <img src={image} alt={title} className="w-full h-56 object-cover rounded-lg mb-4 transform group-hover:scale-105 transition-transform duration-500" />
      <h3 className="text-2xl font-semibold text-green-300 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{description}</p>
      <ul className="text-gray-300 mb-4 space-y-2">
        {perks.map((perk, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center text-sm"
          >
            <span className="text-green-400 mr-2">✔</span> {perk}
          </motion.li>
        ))}
      </ul>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={openModal}
        className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300 w-full shadow-lg"
      >
        Kup za {price} PLN
      </motion.button>

      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-green-900/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-green-800/50"
          >
            <h3 className="text-2xl text-green-300 mb-4 font-semibold">Finalizacja zakupu</h3>
            <p className="text-gray-400 mb-6 text-sm">Podaj dane, aby otrzymać konto.</p>
            <input
              type="email"
              placeholder="Twój email"
              className="w-full p-3 mb-4 bg-green-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Potwierdź email"
              className="w-full p-3 mb-4 bg-green-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Kod promocyjny (opcjonalnie)"
              className="w-full p-3 mb-4 bg-green-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
            />
            <label className="flex items-center mb-6">
              <input type="checkbox" className="mr-2 accent-green-400" />
              <span className="text-gray-300 text-sm">Akceptuję <Link to="/regulamin" className="text-green-400 hover:underline">regulamin</Link></span>
            </label>
            <div className="flex justify-between gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeModal}
                className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-all duration-300"
              >
                Anuluj
              </motion.button>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300"
                >
                  PaySafeCard
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition-all duration-300"
                >
                  BLIK/Przelew
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MinecraftCard;