import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  const navVariants = {
    hover: { scale: 1.1, color: '#34D399', transition: { duration: 0.3 } },
    active: { color: '#34D399', borderBottom: '2px solid #34D399' },
  };

  return (
    <nav className="bg-green-950/90 backdrop-blur-lg p-4 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white tracking-wide"
        >
          <Link to="/">
            <span className="text-green-400">Mine</span><span className="text-green-300">Craft</span> Elite
          </Link>
        </motion.div>
        <div className="flex space-x-8">
          {['Strona główna', 'Opinie', 'Regulamin', 'Faq', 'Kontakt'].map((item, index) => (
            <motion.div
              key={item}
              variants={navVariants}
              whileHover="hover"
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: 1,
                y: 0,
                ...(location.pathname === (item === 'Strona główna' ? '/' : `/${item.toLowerCase()}`) ? navVariants.active : {}),
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={item === 'Strona główna' ? '/' : `/${item.toLowerCase()}`}
                className="text-white text-lg font-medium transition-colors duration-300"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;