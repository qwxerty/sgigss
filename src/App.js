// frontend/src/App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import SuccessPage from './pages/SuccessPage';
import CancelPage from './pages/CancelPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import OpinionsPage from './pages/OpinionsPage';

function App() {
  const location = useLocation(); 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<SuccessPage />} /> 
        <Route path="/cancel" element={<CancelPage />} />
        <Route path="/regulamin" element={<TermsPage />} /> 
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/opinie" element={<OpinionsPage />} />
        {/* Obsługa 404 - przekierowanie na stronę główną */}
        <Route path="*" element={<HomePage />} /> 
      </Routes>
    </div>
  );
}

export default App;