// frontend/src/components/PurchaseModal.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // <--- Zmieniono z powrotem na Link
import validator from 'validator'; 
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const PurchaseModal = ({ isOpen, onClose, product, onPurchaseConfirm }) => {
  const [email1, setEmail1] = useState('');
  const [email2, setEmail2] = useState('');
  const [promoCode, setPromoCode] = useState(''); 
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleFormSubmit = async (paymentMethod) => {
    // 1. Walidacja danych
    if (!validator.isEmail(email1) || !validator.isEmail(email2)) {
      setError('Podaj prawidłowy format adresu e-mail.');
      return;
    }
    if (email1 !== email2) {
      setError('Podane adresy e-mail muszą być identyczne.');
      return;
    }
    if (!acceptTerms) {
      setError('Musisz zaakceptować regulamin i potwierdzić, że to Twój email.');
      return;
    }

    setError(''); 
    setLoading(true);

    // 2. Wywołanie funkcji nadrzędnej z danymi zakupu
    try {
      await onPurchaseConfirm({ 
        productId: product.id,
        productTitle: product.title,
        price: product.price,
        customerEmail: email1,
        promoCode: promoCode,
        paymentMethod: paymentMethod, 
      });
    } catch (err) {
      console.error("Błąd w PurchaseModal handleFormSubmit:", err);
      setError(err.message || "Wystąpił nieznany błąd podczas finalizacji zakupu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" 
          onClick={onClose} 
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()} 
            className="bg-green-900/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-lg border border-green-800/50 relative text-white" 
          >
            {/* Przycisk zamknięcia */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors duration-200 focus:outline-none"
              aria-label="Zamknij"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Nagłówek Modala */}
            <h3 className="text-2xl text-green-300 mb-4 font-semibold">Finalizacja zakupu: {product ? product.title : 'Produkt'}</h3>
            <p className="text-gray-400 mb-6 text-sm">Podaj dane, aby otrzymać konto.</p>
            
            {/* Wyświetlanie Błędów */}
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

            {/* Pola Formularza */}
            <input
              type="email"
              placeholder="Twój email"
              value={email1}
              onChange={(e) => setEmail1(e.target.value)}
              className="w-full p-3 mb-4 bg-green-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Potwierdź email"
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
              className="w-full p-3 mb-4 bg-green-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
              disabled={loading}
            />
            <input
              type="text"
              placeholder="Kod promocyjny (opcjonalnie)"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="w-full p-3 mb-4 bg-green-800/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
              disabled={loading}
            />
            <label className="flex items-center mb-6 cursor-pointer select-none">
              <input 
                type="checkbox" 
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mr-2 accent-green-400 transform scale-125 focus:outline-none focus:ring-2 focus:ring-green-400"
                disabled={loading}
              />
              <span className="text-gray-300 text-sm">Akceptuję <Link to="/regulamin" className="text-green-400 hover:underline">regulamin</Link> i potwierdzam, że podany email jest mój.</span>
            </label>

            {/* Przyciski Akcji */}
            <div className="flex justify-between gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-700 transition-all duration-300 focus:outline-none"
                disabled={loading}
              >
                Anuluj
              </motion.button>
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleFormSubmit('card')} 
                  className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition-all duration-300 focus:outline-none"
                  disabled={loading}
                >
                  {loading ? 'Ładowanie...' : `Zapłać ${product ? product.price : 0} PLN (Karta)`}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseModal;