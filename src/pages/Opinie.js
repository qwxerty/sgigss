import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Navbar from '../components/Navbar';
import OpinionCard from '../components/OpinionCard';

const Opinie = () => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOpinions = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/reviews');
        const fetchedOpinions = response.data.map((opinion, index) => ({
          id: index + 1,
          avatar: opinion.avatar,
          username: opinion.username,
          content: opinion.content,
          date: opinion.date,
        }));
        setOpinions(fetchedOpinions);
        setLoading(false);
      } catch (err) {
        setError('Nie udało się pobrać opinii. Spróbuj ponownie później.');
        setLoading(false);
      }
    };

    fetchOpinions();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-green-950 text-white font-sans"
    >
      <Navbar />
      <section className="py-20 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl text-center text-green-400 mb-12 font-bold tracking-tight"
        >
          NASZE OPINIE
        </motion.h2>
        {loading && <p className="text-center text-gray-400">Ładowanie opinii...</p>}
        {error && <p className="text-center text-red-400">{error}</p>}
        {!loading && !error && opinions.length === 0 && (
          <p className="text-center text-gray-400">Brak opinii do wyświetlenia.</p>
        )}
        {!loading && !error && opinions.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {opinions.map((opinion) => (
              <OpinionCard
                key={opinion.id}
                id={opinion.id}
                avatar={opinion.avatar}
                username={opinion.username}
                content={opinion.content}
                date={opinion.date}
              />
            ))}
          </div>
        )}
      </section>
      <footer className="bg-green-900 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl text-green-300 font-semibold mb-4">Minecraft Elite</h3>
            <p className="text-gray-400 text-sm">Najlepsze konta Minecraft dla elitarnych graczy.</p>
          </div>
          {/* <div>
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
          </div> */}
        </div>
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2025 Minecraft Elite. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </motion.div>
  );
};

export default Opinie;