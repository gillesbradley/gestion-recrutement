"use client"; // Indiquer que ce composant est un Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Mise à jour pour éviter l'erreur de montage de NextRouter

type Offre = {
  id: number;
  title: string;
  description: string;
  location: string;
  postedDate: string;
};

const offresInitiales: Offre[] = [
  { id: 1, title: 'Développeur Full Stack', description: 'Développement de projets web et mobile.', location: 'Douala', postedDate: '2024-08-01' },
  { id: 2, title: 'Designer UX/UI', description: 'Création d\'interfaces utilisateur attractives.', location: 'Yaoundé', postedDate: '2024-07-28' },
  // Ajoutez d'autres offres ici...
];

const Offres = () => {
  const [offres, setOffres] = useState<Offre[]>(offresInitiales);

  useEffect(() => {
    // Ici, vous pouvez ajouter du code pour récupérer les offres depuis une API
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* Main content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-medium mb-8">Offres d'emploi</h1>
        <div className="space-y-4">
          {offres.map((offre) => (
            <div key={offre.id} className="border p-4 rounded-md shadow-sm">
              <h2 className="text-2xl font-semibold">{offre.title}</h2>
              <p className="text-gray-700">{offre.description}</p>
              <p className="text-gray-500">Lieu : {offre.location}</p>
              <p className="text-gray-400">Posté le : {offre.postedDate}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Offres;