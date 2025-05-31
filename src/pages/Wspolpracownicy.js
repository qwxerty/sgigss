import React from 'react';
import Navbar from '../components/Navbar';
import CollaboratorList from '../components/CollaboratorList';

const Wspolpracownicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-pixel">
      <Navbar cartCount={0} />
      <section className="py-16 px-4">
        <CollaboratorList />
      </section>
    </div>
  );
};

export default Wspolpracownicy;