import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Zmieniono na XMarkIcon

const PurchaseModal = ({ product, isOpen, onClose }) => { // Usunięto onPurchaseSuccess
    const [email, setEmail] = useState('');
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Resetuj stan modalu, gdy się otworzy
        if (isOpen) {
            setEmail('');
            setAgreedToTerms(false);
            setError('');
            setIsLoading(false);
            // Zablokuj scrollowanie ciała strony, gdy modal jest otwarty
            document.body.style.overflow = 'hidden';
        } else {
            // Przywróć scrollowanie, gdy modal jest zamknięty
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset'; // Upewnij się, że scrollowanie jest przywrócone po odmontowaniu
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email) {
            setError('Proszę podać adres e-mail.');
            return;
        }
        if (!agreedToTerms) {
            setError('Musisz zaakceptować regulamin.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ productId: product.id, customerEmail: email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Wystąpił błąd podczas tworzenia sesji płatności.');
            }

            const session = await response.json();

            // Przekierowanie do Stripe Checkout
            const stripe = window.Stripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            const { error: stripeError } = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (stripeError) {
                throw new Error(stripeError.message);
            }

            // Modal zostanie zamknięty przez przekierowanie na success/cancel page
        } catch (err) {
            console.error('Błąd płatności:', err);
            setError(err.message || 'Nie udało się przetworzyć płatności. Spróbuj ponownie.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleTermsClick = (e) => {
        e.preventDefault();
        onClose(); // Zamknij modal, aby użytkownik mógł przejść do regulaminu
        navigate('/regulamin'); // Przekieruj do strony regulaminu
    };

    return (
        <div className="fixed inset-0 bg-dark-950 bg-opacity-80 flex justify-center items-center z-50 p-4 animate-fade-in">
            <div className="bg-dark-800 border-2 border-accentGreen-700 rounded-xl shadow-2xl p-8 w-full max-w-md relative animate-pop-in">
                {/* Przycisk zamknięcia */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-dark-300 hover:text-accentGreen-500 transition-colors duration-200"
                    aria-label="Zamknij"
                >
                    <XMarkIcon className="h-7 w-7" />
                </button>

                <h2 className="text-3xl font-bold text-dark-100 text-center mb-6">Zakup: {product.name}</h2>
                <p className="text-xl text-accentGreen-400 text-center mb-8 font-semibold">Cena: {(product.price / 100).toFixed(2)} PLN</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-dark-200 text-sm font-medium mb-2">
                            Twój adres e-mail (do wysłania danych konta):
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-md text-white placeholder-dark-400 focus:ring-2 focus:ring-accentGreen-500 focus:border-transparent outline-none transition-colors duration-200"
                            placeholder="wpisz.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            className="h-5 w-5 text-accentGreen-500 bg-dark-700 border-dark-600 rounded focus:ring-2 focus:ring-accentGreen-500 accent-accentGreen-500 cursor-pointer"
                            checked={agreedToTerms}
                            onChange={(e) => setAgreedToTerms(e.target.checked)}
                            required
                        />
                        <label htmlFor="agreeToTerms" className="ml-3 text-dark-200 text-sm">
                            Akceptuję <a href="/regulamin" onClick={handleTermsClick} className="text-accentGreen-400 hover:underline font-semibold">regulamin</a>
                        </label>
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center mt-4 animate-fade-in">{error}</p>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-accentGreen-500 hover:bg-accentGreen-600 text-white font-bold py-3 rounded-md transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-md hover:shadow-lg animate-pulse-glow-accent"
                        disabled={isLoading || !agreedToTerms}
                    >
                        {isLoading ? (
                            <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        ) : 'Przejdź do Płatności'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PurchaseModal;