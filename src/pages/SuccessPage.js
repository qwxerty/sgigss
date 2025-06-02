import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { fetchStripeCheckoutSession } from '../api'; 
import { useLocation } from 'react-router-dom'; // Import useLocation

const SuccessPage = ({ navigateTo }) => { 
  const [orderInfo, setOrderInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation(); 

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search); 
    const sessionId = urlParams.get('session_id');

    if (sessionId) {
      const getSessionDetails = async () => {
        try {
          setLoading(true);
          const sessionDetails = await fetchStripeCheckoutSession(sessionId);
          setOrderInfo(sessionDetails);
        } catch (err) {
          console.error("Błąd pobierania sesji Stripe:", err);
          setError('Nie udało się potwierdzić statusu zamówienia. Sprawdź swoją skrzynkę odbiorczą lub skontaktuj się z nami.');
        } finally {
          setLoading(false);
        }
      };
      getSessionDetails();
    } else {
      setError('Brak ID sesji płatności.');
      setLoading(false);
    }
  }, [location.search]); 

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
        {loading && (
          <h2 className="text-4xl text-green-400 mb-6">Potwierdzanie zamówienia...</h2>
        )}
        {error && (
          <h2 className="text-4xl text-red-400 mb-6">{error}</h2>
        )}
        {orderInfo && !loading && !error && (
          <>
            <h2 className="text-5xl md:text-6xl text-green-400 mb-8 font-extrabold tracking-tight">
              Dziękujemy za zakup!
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              Twoje zamówienie na **{orderInfo.productTitle}** zostało pomyślnie złożone.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Dane do konta Minecraft oraz unikalny kod do aktywacji roli Klient na Discordzie zostały wysłane na adres e-mail: **{orderInfo.customerEmail}**.
            </p>
            <p className="text-gray-400 text-sm">
              Jeśli masz pytania, skontaktuj się z nami!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigateTo('home')}
              className="mt-10 bg-green-600 text-white py-3 px-8 rounded-full hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              Wróć do strony głównej
            </motion.button>
          </>
        )}
      </section>
      {/* Footer można dodać tutaj, jeśli jest komponentem */}
    </motion.div>
  );
};

export default SuccessPage;