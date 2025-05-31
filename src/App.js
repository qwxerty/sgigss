import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Opinie from './pages/Opinie';
import Regulamin from './pages/Regulamin';
import Kontakt from './pages/Kontakt';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opinie" element={<Opinie />} />
          <Route path="/regulamin" element={<Regulamin />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;