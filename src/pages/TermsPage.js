import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const TermsPage = () => {
    return (
        <div className="min-h-screen bg-dark-950 text-dark-100 flex flex-col font-sans">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-extrabold text-dark-100 text-center mb-10 mt-8"
                >
                    Regulamin Sklepu SGIGSS
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-dark-900 border border-dark-700 rounded-lg shadow-xl p-8 max-w-4xl mx-auto text-dark-200 leading-relaxed text-base md:text-lg"
                >
                    <p className="mb-6 text-dark-300 font-medium">
                        Witamy w sklepie SGIGSS! Poniżej przedstawiamy regulamin, który określa zasady korzystania z naszego serwisu i dokonywania zakupów. Prosimy o dokładne zapoznanie się z jego treścią.
                    </p>

                    <h3 className="text-2xl font-bold text-accentGreen-300 mb-4 border-b border-dark-700 pb-2">1. Postanowienia Ogólne</h3>
                    <p className="mb-4">
                        1.1. Niniejszy Regulamin określa zasady korzystania ze sklepu internetowego SGIGSS, w tym warunki zawierania i rozwiązywania umów sprzedaży, prawa i obowiązki stron, zasady płatności oraz reklamacji.
                    </p>
                    <p className="mb-4">
                        1.2. Właścicielem i operatorem sklepu jest [Twoja Nazwa Firmy/Imię i Nazwisko, NIP/REGON jeśli to działalność, Adres].
                    </p>
                    <p className="mb-4">
                        1.3. Korzystanie ze sklepu internetowego oznacza akceptację niniejszego Regulaminu.
                    </p>

                    <h3 className="text-2xl font-bold text-accentGreen-300 mb-4 border-b border-dark-700 pb-2">2. Zakupy w Sklepie</h3>
                    <p className="mb-4">
                        2.1. Aby dokonać zakupu, Klient musi zaakceptować niniejszy Regulamin oraz podać wymagane dane (adres e-mail) w procesie zamówienia.
                    </p>
                    <p className="mb-4">
                        2.2. Wszystkie ceny podane w sklepie są cenami brutto (zawierają podatek VAT, jeśli dotyczy) i wyrażone są w Polskich Złotych (PLN).
                    </p>
                    <p className="mb-4">
                        2.3. Płatności za zakupione produkty realizowane są za pośrednictwem bezpiecznego systemu płatności Stripe.
                    </p>

                    <h3 className="text-2xl font-bold text-accentGreen-300 mb-4 border-b border-dark-700 pb-2">3. Dostawa Produktów Cyfrowych</h3>
                    <p className="mb-4">
                        3.1. Po pomyślnej weryfikacji płatności przez system Stripe, dane dostępowe do zakupionego konta cyfrowego (login i hasło) są automatycznie wysyłane na adres e-mail podany przez Klient przez podczas zakupu.
                    </p>
                    <p className="mb-4">
                        3.2. Czas dostarczenia e-maila z danymi konta wynosi zazwyczaj od kilku sekund do maksymalnie kilku minut od momentu potwierdzenia płatności.
                    </p>
                    <p className="mb-4">
                        3.3. Klient jest zobowiązany do sprawdzenia folderu SPAM/Junk w swojej skrzynce pocztowej.
                    </p>

                    <h3 className="text-2xl font-bold text-accentGreen-300 mb-4 border-b border-dark-700 pb-2">4. Reklamacje i Zwroty</h3>
                    <p className="mb-4">
                        4.1. Z uwagi na cyfrowy charakter oferowanych produktów, co do zasady nie przewiduje się możliwości zwrotu zakupionych kont po wysłaniu danych dostępowych, zgodnie z art. 38 pkt 13 Ustawy o prawach konsumenta.
                    </p>
                    <p className="mb-4">
                        4.2. W przypadku problemów z działaniem zakupionego konta (np. błędne dane, brak dostępu), Klient ma prawo zgłosić reklamację.
                    </p>
                    <p className="mb-4">
                        4.3. Reklamacje należy zgłaszać poprzez kontakt e-mailowy lub Discord, podając numer zamówienia oraz dokładny opis problemu.
                    </p>
                    <p className="mb-4">
                        4.4. Reklamacje rozpatrywane są w terminie 14 dni od daty ich otrzymania. W przypadku uzasadnionej reklamacji, Klient otrzyma nowe konto lub zwrot środków.
                    </p>

                    <h3 className="text-2xl font-bold text-accentGreen-300 mb-4 border-b border-dark-700 pb-2">5. Ochrona Danych Osobowych</h3>
                    <p className="mb-4">
                        5.1. Dane osobowe Klientów są przetwarzane zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO) oraz polskimi przepisami o ochronie danych osobowych.
                    </p>
                    <p className="mb-4">
                        5.2. Administratorem danych osobowych jest właściciel sklepu SGIGSS.
                    </p>
                    <p className="mb-4">
                        5.3. Dane są przetwarzane w celu realizacji zamówień, obsługi reklamacji oraz w celach marketingowych (za zgodą Klienta).
                    </p>
                    <p className="mb-4">
                        5.4. Klient ma prawo dostępu do swoich danych, ich poprawiania, usunięcia oraz ograniczenia przetwarzania.
                    </p>

                    <h3 className="text-2xl font-bold text-accentGreen-300 mb-4 border-b border-dark-700 pb-2">6. Postanowienia Końcowe</h3>
                    <p className="mb-4">
                        6.1. W sprawach nieuregulowanych niniejszym Regulaminem mają zastosowanie przepisy prawa polskiego.
                    </p>
                    <p className="mb-4">
                        6.2. Sprzedawca zastrzega sobie prawo do zmiany niniejszego Regulaminu. Zmiany wchodzą w życie z dniem ich opublikowania na stronie internetowej sklepu.
                    </p>
                    <p className="mb-4">
                        6.3. Wszelkie spory wynikające z realizacji umów sprzedaży będą rozstrzygane przez sąd właściwy dla siedziby sprzedawcy.
                    </p>

                    <p className="text-dark-300 text-sm mt-8 text-right">
                        Data ostatniej aktualizacji: 02.06.2025
                    </p>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsPage;