// src/components/MinecraftCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; 
import PurchaseModal from './PurchaseModal'; 

const MinecraftCard = ({ id, title, image, description, price, perks, onOpenModal }) => { // Zmieniono na onOpenModal
  // const [isModalOpen, setIsModalOpen] = useState(false); // TE LINIE ZNACIE JAKO USUNIĘTE Z WCZEŚNIEJSZEGO KODU

  // const openModal = () => setIsModalOpen(true); // TE LINIE ZNACIE JAKO USUNIĘTE Z WCZEŚNIEJSZEGO KODU
  // const closeModal = () => setIsModalOpen(false); // TE LINIE ZNACIE JAKO USUNIĘTE Z WCZEŚNIEJSZEGO KODU

  // DODAJ TEN LOG:
  const handleButtonClick = () => {
      console.log(`PRZYCISK KLIKNIĘTY: ${title} (id: ${id})`);
      onOpenModal({ id, title, price }); // Wywołuje funkcję z Home.js
  };

  return (
    <motion.div
      // ... (reszta kodu) ...
    >
      <motion.button
        // ... (reszta kodu) ...
        onClick={handleButtonClick} // Zmieniono na handleButtonClick
        className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-all duration-300 w-full shadow-lg"
      >
        Kup za {price} PLN
      </motion.button>

      {/* AnimatePresence i PurchaseModal jest w Home.js teraz */}
    </motion.div>
  );
};

export default MinecraftCard;