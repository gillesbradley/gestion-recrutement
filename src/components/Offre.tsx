// components/Offre.tsx
import React from 'react';

type OffreProps = {
  title: string;
  description: string;
  location: string;
  postedDate: string;
};

const Offre: React.FC<OffreProps> = ({ title, description, location, postedDate }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-[#141c5b] mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-500 mb-4">Lieu : {location}</p>
      <p className="text-gray-500 mb-4">Date de publication : {postedDate}</p>
      <button className="bg-[#141c5b] hover:bg-[#0e1741] text-white py-2 px-4 rounded">Postuler</button>
    </div>
  );
};

export default Offre;

