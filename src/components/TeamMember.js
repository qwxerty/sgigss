import React from 'react';

const TeamMember = ({ name, role }) => {
  return (
    <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
      <div className="w-16 h-16 mx-auto bg-neon-green-400 rounded-full mb-2"></div>
      <h4 className="text-lg font-medium text-neon-blue-400">{name}</h4>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default TeamMember;