// src/components/MinecraftCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Ten komponent nie będzie już zarządzał stanem modala.
// Będzie przyjmował prop 'onOpenModal' z komponentu nadrzędnego (Home.js).
const MinecraftCard = ({ id, title, image, description, price, perks, onOpenModal }) => {
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
        onClick={() => onOpenModal({ id, title, price })} // Wywołujemy funkcję z Home.js, przekazując dane produktu
        className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300 w-full shadow-lg"
      >
        Kup za {price} PLN
      </motion.button>
    </motion.div>
  );
};

export default MinecraftCard;