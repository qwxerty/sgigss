import React from 'react';

const CollaboratorList = () => {
  const collaborators = [
    { name: 'PixelMaster', code: 'PIXEL' },
    { name: 'BlockKing', code: 'BLOCK' },
    { name: 'CraftHero', code: 'CRAFT' },
  ];

  return (
    <section className="py-16 px-4 bg-gray-900">
      <h2 className="text-4xl text-center text-neon-blue-500 mb-10 font-bold">NASI WSPÓŁPRACOWNICY</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <div className="w-16 h-16 mx-auto bg-neon-green-400 rounded-full mb-2 animate-pulse"></div>
            <h4 className="text-lg font-medium text-neon-blue-400">{collaborator.name}</h4>
            <p className="text-sm text-gray-500">Kod: {collaborator.code}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaboratorList;