import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

const OpinionCard = ({ opinion }) => {
    return (
        <div className="bg-dark-800 border border-dark-700 rounded-lg shadow-md p-6 flex flex-col transition-transform duration-300 hover:scale-105 hover:shadow-xl animate-fade-in-up group relative overflow-hidden">
            {/* Subtelna obwódka na hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accentGreen-500 rounded-lg transition-all duration-300 pointer-events-none"></div>

            <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-accentGreen-500 text-dark-900 font-bold text-lg">
                        {opinion.author.charAt(0)}
                    </span>
                </div>
                <div className="ml-4">
                    <h4 className="text-xl font-semibold text-dark-100">{opinion.author}</h4>
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <StarIcon
                                key={i}
                                className={`h-5 w-5 ${i < opinion.rating ? 'text-yellow-400' : 'text-dark-600'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-dark-300 flex-grow">{opinion.text}</p>
        </div>
    );
};

export default OpinionCard;