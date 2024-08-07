"use client"; // Indiquer que ce composant est un Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../../components/Sidebar'; // Assurez-vous que le chemin est correct

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
  const [showMenu, setShowMenu] = useState<number | null>(null);

  useEffect(() => {
    // Ici, vous pouvez ajouter du code pour récupérer les offres depuis une API
  }, []);

  const handleMenuToggle = (id: number) => {
    setShowMenu(showMenu === id ? null : id);
  };

  const handleConsult = (id: number) => {
    console.log(`Consulter les candidatures pour l'offre ${id}`);
    // Ajoutez la logique pour consulter les candidatures
  };

  const handleEdit = (id: number) => {
    console.log(`Modifier l'offre ${id}`);
    // Ajoutez la logique pour modifier l'offre
  };

  const handleShare = (id: number) => {
    console.log(`Partager l'offre ${id}`);
    // Ajoutez la logique pour partager l'offre
  };

  const handleDelete = (id: number) => {
    console.log(`Supprimer l'offre ${id}`);
    // Ajoutez la logique pour supprimer l'offre
  };

  return (
    <div className="flex min-h-screen">
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Offres d'emploi</h1>
          <Link href="/dashboard/offres/creer" className="bg-[#141c5b] text-white py-2 px-4 rounded">
            Créer une offre
          </Link>
        </div>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Titre</th>
              <th className="px-4 py-2">Description</th>
              <th className="px-4 py-2">Lieu</th>
              <th className="px-4 py-2">Date de publication</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[#6d6d6d]">
            {offres.map((offre) => (
              <tr key={offre.id} className="border-b">
                <td className="px-4 py-2">{offre.title}</td>
                <td className="px-4 py-2">{offre.description}</td>
                <td className="px-4 py-2">{offre.location}</td>
                <td className="px-4 py-2">{offre.postedDate}</td>
                <td className="px-4 py-2 relative">
                  <button onClick={() => handleMenuToggle(offre.id)}>
                    <Image src="/icons/three-dots.svg" alt="Actions" width={20} height={20} />
                  </button>
                  {showMenu === offre.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleConsult(offre.id)}>
                        Consulter
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleEdit(offre.id)}>
                        Modifier
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleShare(offre.id)}>
                        Partager
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleDelete(offre.id)}>
                        Supprimer
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default Offres;
