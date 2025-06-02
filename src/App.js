import React, { useState } from 'react'; // Dodaj useState
import { Routes, Route, useLocation } from 'react-router-dom'; // Dodaj useLocation
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import OpinionsPage from './pages/OpinionsPage';
import TermsPage from './pages/TermsPage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';
import PartnersPage from './pages/PartnersPage';
import PurchaseModal from './components/PurchaseModal'; // Importuj modal

function App() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [selectedProductForPurchase, setSelectedProductForPurchase] = useState(null);
  const location = useLocation(); // Używamy useLocation, aby resetować stan modala przy zmianie ścieżki

  // Funkcja do otwierania modala z danym produktem
  const openPurchaseModal = (product) => {
    setSelectedProductForPurchase(product);
    setIsPurchaseModalOpen(true);
  };

  // Funkcja do zamykania modala
  const closePurchaseModal = () => {
    setIsPurchaseModalOpen(false);
    setSelectedProductForPurchase(null);
  };

  // Efekt do zamykania modala przy zmianie trasy (np. po przejściu na success/cancel)
  // lub jeśli użytkownik wciśnie Back
  React.useEffect(() => {
    closePurchaseModal();
  }, [location.pathname]); // Zamykaj modal, gdy zmienia się ścieżka URL

  return (
    <>
      <Routes>
        {/* Przekazujemy funkcję openPurchaseModal do HomePage */}
        <Route path="/" element={<HomePage onOpenPurchaseModal={openPurchaseModal} />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/opinie" element={<OpinionsPage />} />
        <Route path="/regulamin" element={<TermsPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/cancel" element={<CancelPage />} />
      </Routes>

      {/* Modal jest renderowany globalnie, poza <Routes> */}
      <PurchaseModal
        product={selectedProductForPurchase}
        isOpen={isPurchaseModalOpen}
        onClose={closePurchaseModal}
        // onPurchaseSuccess nie jest już potrzebne tutaj, obsługa jest w modal
      />
    </>
  );
}

export default App;