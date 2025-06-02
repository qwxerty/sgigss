import React from 'react';
import { motion } from 'framer-motion';

const CollaboratorList = ({ collaborators }) => {
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-wrap justify-center items-center gap-8 py-8 bg-dark-900 rounded-lg shadow-xl border border-dark-700"
        >
            {collaborators.map((collab, index) => (
                <motion.a
                    key={collab.id}
                    href={collab.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col items-center p-4 rounded-lg bg-dark-800 hover:bg-dark-700 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg border border-dark-700"
                >
                    <img src={collab.logo} alt={collab.name} className="h-16 object-contain mb-2 filter grayscale hover:grayscale-0 transition-all duration-300" />
                    <span className="text-dark-100 text-sm font-semibold text-center">{collab.name}</span>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default CollaboratorList;