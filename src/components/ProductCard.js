import React from 'react';

// Odbieramy prop onOpenPurchaseModal
const ProductCard = ({ product, onOpenPurchaseModal }) => {

    const handleBuyClick = () => {
        // Wywołujemy funkcję z App.js, aby otworzyć modal
        onOpenPurchaseModal(product);
    };

    return (
        <div className="bg-dark-800 border border-dark-700 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up group relative overflow-hidden">
            {/* Subtelna obwódka na hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-accentGreen-500 rounded-lg transition-all duration-300 pointer-events-none"></div>

            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4 border border-dark-700 shadow-md transform group-hover:scale-102 transition-transform duration-300" />
            <h3 className="text-2xl font-bold text-dark-100 mb-2">{product.name}</h3>
            <p className="text-dark-300 text-sm mb-4 flex-grow">{product.description}</p>
            <p className="text-accentGreen-400 text-3xl font-extrabold mb-6">{(product.price / 100).toFixed(2)} PLN</p>
            <button
                onClick={handleBuyClick}
                className="w-full bg-accentGreen-500 hover:bg-accentGreen-600 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-pulse-glow-accent"
            >
                Kup Teraz
            </button>

            {/* Modal PurchaseModal ZOSTANIE USUNIĘTY STĄD */}
            {/* <PurchaseModal ... /> */}
        </div>
    );
};

export default ProductCard;