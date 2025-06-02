// frontend/src/components/OpinionCard.js
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// Font Awesome dla gwiazdek
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const OpinionCard = ({ id, avatar, username, content, rating, date, delay }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);
  const MAX_LINES_COLLAPSED = 4; // Maksymalna liczba linii przed skróceniem
  const LINE_HEIGHT_PX = 24; // Przybliżona wysokość linii dla text-base leading-relaxed

  // Sprawdź, czy tekst wykracza poza wysokość
  useEffect(() => {
    if (contentRef.current) {
      const collapsedHeight = MAX_LINES_COLLAPSED * LINE_HEIGHT_PX;
      setIsOverflowing(contentRef.current.scrollHeight > collapsedHeight);
    }
    setIsExpanded(false); 
  }, [content]);

  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStarSolid} className="text-yellow-400" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStarRegular} className="text-gray-500" />);
      }
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: delay }} 
      className={`relative bg-green-900/60 backdrop-blur-lg p-7 rounded-2xl shadow-xl border border-green-800/40 group flex flex-col transition-all duration-300 ease-in-out
        ${isExpanded ? 'min-h-[250px] sm:min-h-[280px]' : 'min-h-[250px] sm:min-h-[280px] max-h-[400px] sm:max-h-[350px] md:max-h-[300px] overflow-hidden'}
        hover:shadow-2xl hover:border-green-700
      `}
    >
      {/* Warstwa efektu hover - poniżej treści, ale nad tłem */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-700/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      {/* Kontener na całą zawartość karty */}
      <div className="relative z-10 flex flex-col flex-grow">
        {/* Sekcja nagłówka karty (avatar, nazwa użytkownika, data, GWIAZDKI) */}
        <div className="flex items-center mb-4">
          <img
            src={avatar}
            alt={`Awatar ${username}`}
            className="w-16 h-16 rounded-full mr-4 border-3 border-green-400 shadow-md transform group-hover:scale-105 transition-transform duration-300 object-cover"
            onError={(e) => { 
              e.target.onerror = null; 
              e.target.src = 'https://placehold.co/128x128/34D399/10B981?text=?'; 
            }}
          />
          <div className="flex-grow"> 
            <h4 className="text-xl text-green-300 font-bold leading-tight">{username}</h4>
            <p className="text-gray-400 text-sm mt-1">{date}</p>
          </div>
          {/* Wyświetlanie gwiazdek */}
          {rating && (
            <div className="flex text-lg space-x-0.5 ml-auto"> 
              {renderStars(rating)}
            </div>
          )}
        </div>

        {/* Treść opinii - teraz dynamicznie rozwijana */}
        <p 
          ref={contentRef}
          className={`text-gray-300 text-base leading-relaxed break-words transition-all duration-300 ease-in-out ${!isExpanded && isOverflowing ? 'overflow-hidden' : ''}`}
          style={{ 
             maxHeight: !isExpanded && isOverflowing ? `${MAX_LINES_COLLAPSED * LINE_HEIGHT_PX}px` : 'none'
          }}
        >
          {content}
        </p>

        {/* Gradient fade-out na dole, gdy tekst jest ucięty */}
        {!isExpanded && isOverflowing && (
          <div className="absolute bottom-[4.5rem] left-0 right-0 h-16 bg-gradient-to-t from-green-900/90 to-transparent pointer-events-none rounded-b-2xl z-20"></div>
        )}

        {/* Przycisk "Rozwiń opinię" - estetyczny i dynamiczny */}
        {isOverflowing && ( 
          <motion.button
            onClick={handleToggleExpand}
            className="mt-4 px-4 py-2 bg-green-700 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-colors duration-300 self-center z-30 shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Zwiń opinię' : 'Rozwiń opinię'}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default OpinionCard;