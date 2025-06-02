// frontend/src/pages/OpinionsPage.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import OpinionCard from '../components/OpinionCard';
import { motion } from 'framer-motion';
import { fetchOpinions } from '../api'; 

const OpinionsPage = ({ navigateTo }) => {
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  useEffect(() => {
    const getOpinions = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetched = await fetchOpinions();
        
        const filteredAndSortedOpinions = fetched
          .filter(opinion => opinion.username && opinion.content && opinion.date && opinion.rating)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((opinion, index) => ({
            id: opinion.id || `${index}-${new Date().getTime()}`, 
            avatar: opinion.avatar,
            username: opinion.username,
            content: opinion.content,
            rating: opinion.rating,
            date: new Date(opinion.date).toLocaleString('pl-PL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }),
          }));
        
        setOpinions(filteredAndSortedOpinions);
        setLoading(false);
      } catch (err) {
        console.error("Błąd podczas pobierania opinii:", err);
        setError('Nie udało się pobrać opinii. Spróbuj ponownie później.');
        setLoading(false);
      }
    };

    getOpinions();
  }, []); 

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-green-950 text-white font-sans overflow-hidden"
    >
      <Navbar navigateTo={navigateTo} />
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
        
        {loading && (
          <p className="text-center text-gray-400 text-lg py-10">Ładowanie opinii...</p>
        )}
        {error && (
          <p className="text-center text-red-400 text-lg py-10">
            {error}
            <br />
            Sprawdź, czy serwer API jest uruchomiony i dostępny.
          </p>
        )}
        
        {!loading && !error && (
          <>
            {opinions.length === 0 ? (
              <p className="text-center text-gray-400 text-lg py-10">
                Brak opinii do wyświetlenia.
                <br />
                (Opinie pojawiają się z kanału Discord #opinie)
              </p>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-stretch"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {opinions.map((opinion, index) => ( 
                  <motion.div key={opinion.id} variants={itemVariants} className="w-full">
                    <OpinionCard
                      id={opinion.id}
                      avatar={opinion.avatar}
                      username={opinion.username}
                      content={opinion.content}
                      rating={opinion.rating} 
                      date={opinion.date}
                      delay={index * 0.1} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </>
        )}
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
              <li><button onClick={() => navigateTo('home')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Strona główna</button></li>
              <li><button onClick={() => navigateTo('opinie')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Opinie</button></li>
              <li><button onClick={() => navigateTo('regulamin')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Regulamin</button></li>
              <li><button onClick={() => navigateTo('faq')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">FAQ</button></li>
              <li><button onClick={() => navigateTo('kontakt')} className="text-gray-400 hover:text-green-400 transition-colors duration-300">Kontakt</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl text-green-300 font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400 text-sm">Email: <span className="text-green-400">kontakt@minecraftelite.pl</span></p>
            <p className="text-gray-400 text-sm mt-2">Discord: <a href="#" className="text-green-400 hover:underline">Dołącz do nas!</a></p>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 px-4 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} Minecraft Elite. Wszystkie prawa zastrzeżone.
        </div>
      </footer>
    </motion.div>
  );
};

export default OpinionsPage;