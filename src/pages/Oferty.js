import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import OfferCard from '../components/OfferCard';
import Cart from '../components/Cart';

const Oferty = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filter, setFilter] = useState('');

  const offers = [
    {
      title: 'Konto Basic MC',
      price: 50,
      description: 'Podstawowe konto z pełnym dostępem.',
      perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Ekskluzywny status'],
    },
    {
      title: 'Konto Premium MC',
      price: 100,
      description: 'Premium konto z dodatkowymi bonusami.',
      perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Własna skórka'],
    },
    {
      title: 'Konto Ultimate MC',
      price: 150,
      description: 'Najlepsze konto z VIP dostępem.',
      perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Status VIP'],
    },
  ];

  const filteredOffers = offers.filter(offer =>
    offer.title.toLowerCase().includes(filter.toLowerCase())
  );

  const addToCart = (offer) => {
    setCartItems([...cartItems, offer]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-pixel">
      <Navbar cartCount={cartItems.length} />
      <Header />
      <section className="py-16 px-4">
        <h2 className="text-4xl text-center text-neon-purple-500 mb-6 font-bold">NASZE OFERTY</h2>
        <input
          type="text"
          placeholder="Szukaj oferty..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full max-w-md mx-auto p-2 mb-8 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon-blue-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredOffers.map((offer, index) => (
            <OfferCard
              key={index}
              title={offer.title}
              price={offer.price}
              description={offer.description}
              perks={offer.perks}
              onAddToCart={() => addToCart(offer)}
            />
          ))}
        </div>
      </section>
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default Oferty;