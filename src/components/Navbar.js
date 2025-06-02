import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link

const Navbar = () => { 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Strona główna', path: '/' }, 
    { name: 'Opinie', path: '/opinie' },
    { name: 'Regulamin', path: '/regulamin' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-900/90 backdrop-blur-md shadow-lg py-4 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Nazwa */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-extrabold text-white cursor-pointer"
        >
          <Link to="/" className="text-white no-underline"><span className="text-green-400">Mine</span><span className="text-green-300">Craft</span> Elite</Link> 
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex space-x-6"
        >
          {navItems.map(item => (
            <li key={item.name}>
              <Link 
                to={item.path} 
                className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium text-lg no-underline focus:outline-none"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-green-400 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-green-900/95 backdrop-blur-lg shadow-xl py-4"
          >
            <ul className="flex flex-col space-y-4 items-center">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    onClick={toggleMobileMenu} // Zamknij menu po kliknięciu
                    className="text-white hover:text-green-400 transition-colors duration-300 font-medium text-xl no-underline focus:outline-none"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;