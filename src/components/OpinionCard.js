import React from 'react';
import { motion } from 'framer-motion';

const OpinionCard = ({ id, avatar, username, content, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: id * 0.2 }}
      className="relative bg-green-900/60 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-green-800/40 group"
    >
      <div className="absolute inset-0 bg-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      <div className="flex items-center mb-4">
        <img src={avatar} alt={username} className="w-14 h-14 rounded-full mr-4 border-2 border-green-400 transform group-hover:scale-105 transition-transform duration-300" />
        <div>
          <h4 className="text-lg text-green-300 font-medium">{username}</h4>
          <p className="text-gray-500 text-sm">{date}</p>
        </div>
      </div>
      <p className="text-gray-300 text-sm">{content}</p>
    </motion.div>
  );
};

export default OpinionCard;