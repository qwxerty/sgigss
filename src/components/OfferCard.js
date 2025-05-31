import React from 'react';

const OfferCard = ({ title, price, description, perks, onAddToCart }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-neon hover:shadow-neon-lg transform hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-2xl font-semibold text-neon-blue-400 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="text-gray-300 mb-4 space-y-2">
        {perks.map((perk, index) => (
          <li key={index} className="flex items-center">
            <span className="text-neon-green-400 mr-2">✔</span> {perk}
          </li>
        ))}
      </ul>
      <button
        onClick={onAddToCart}
        className="bg-neon-purple-600 text-white py-3 px-6 rounded-full hover:bg-neon-purple-500 transition"
      >
        Dodaj do koszyka - {price} PLN
      </button>
    </div>
  );
};

export default OfferCard;