import React from 'react';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';

const Koszyk = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-pixel">
      <Navbar cartCount={cartItems.length} />
      <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
    </div>
  );
};

export default Koszyk;