import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="py-16 px-4 bg-gray-800">
      <h2 className="text-4xl text-center text-neon-purple-500 mb-10 font-bold">TWÓJ KOSZYK</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-300">Koszyk jest pusty.</p>
      ) : (
        <div className="max-w-2xl mx-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 p-4 bg-gray-700 rounded-lg">
              <span>{item.title} - {item.price} PLN</span>
              <button
                onClick={() => onRemoveFromCart(index)}
                className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-500 transition"
              >
                Usuń
              </button>
            </div>
          ))}
          <div className="text-right text-xl text-neon-green-400 mt-4">
            Razem: {total} PLN
          </div>
          <button className="bg-neon-blue-600 text-white py-3 px-6 rounded-full mt-4 hover:bg-neon-blue-500 transition w-full">
            Zamów teraz
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;