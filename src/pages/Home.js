import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import MinecraftCard from '../components/MinecraftCard';

const Home = () => {
  const minecraftOffers = [
    {
      id: 1,
      title: 'Konto Elite MC',
      image: 'https://images.unsplash.com/photo-1622396481328-6c0d2f99e5e1?w=300',
      description: 'Ekskluzywne konto z unikalnymi bonusami i statusem VIP.',
      price: 129,
      perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Ekskluzywna skórka', 'Status VIP', 'Specjalny badge'],
    },
    {
      id: 2,
      title: 'Konto Pro MC',
      image: 'https://images.unsplash.com/photo-1619204715997-1367fe5812f1?w=300',
      description: 'Zaawansowane konto dla doświadczonych graczy.',
      price: 89,
      perks: ['Pełny dostęp', 'Priorytetowa pomoc', 'Własna skórka', 'Dodatkowe sloty'],
    },
    {
      id: 3,
      title: 'Konto Start MC',
      image: 'https://images.unsplash.com/photo-1600585154347-be6161a56a0c?w=300',
      description: 'Idealne konto na początek przygody.',
      price: 59,
      perks: ['Pełny dostęp', 'Podstawowa pomoc', 'Standardowe funkcje'],
    },
  ];

  const whyUs = [
    { title: 'Szybka dostawa', description: 'Otrzymasz konto w ciągu kilku minut.', icon: '🚀' },
    { title: 'Gwarancja jakości', description: 'Tylko oryginalne i działające konta.', icon: '✔️' },
    { title: 'Wsparcie 24/7', description: 'Jesteśmy tu, aby pomóc o każdej porze.', icon: '📞' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-green-950 text-white font-sans"
    >
      <Navbar />
      <Header />
      <section id="offers" className="py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold tracking-tight"
        >
          NASZE OFERTY
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {minecraftOffers.map((offer) => (
            <MinecraftCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              image={offer.image}
              description={offer.description}
              price={offer.price}
              perks={offer.perks}
            />
          ))}
        </div>
      </section>
      <section className="py-20 px-4 bg-gradient-to-b from-green-950 to-green-900">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold tracking-tight"
        >
          DLACZEGO MY?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-green-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-800/40 text-center"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="text-4xl mb-4"
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl text-green-300 mb-2 font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
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

export default Home;