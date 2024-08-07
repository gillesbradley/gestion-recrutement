"use client"; // Indiquer que ce composant est un Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../../components/Sidebar'; // Assurez-vous que le chemin est correct

type Entretien = {
  id: number;
  candidateName: string;
  position: string;
  interviewDate: string;
  status: string;
};

const entretiensInitiales: Entretien[] = [
  { id: 1, candidateName: 'John Doe', position: 'Développeur Full Stack', interviewDate: '2024-08-10', status: 'Prévu' },
  { id: 2, candidateName: 'Jane Smith', position: 'Designer UX/UI', interviewDate: '2024-08-15', status: 'Terminé' },
  // Ajoutez d'autres entretiens ici...
];

const Entretiens = () => {
  const [entretiens, setEntretiens] = useState<Entretien[]>(entretiensInitiales);
  const [showMenu, setShowMenu] = useState<number | null>(null);

  useEffect(() => {
    // Ici, vous pouvez ajouter du code pour récupérer les entretiens depuis une API
  }, []);

  const handleMenuToggle = (id: number) => {
    setShowMenu(showMenu === id ? null : id);
  };

  const handleConsult = (id: number) => {
    console.log(`Consulter l'entretien ${id}`);
    // Ajoutez la logique pour consulter l'entretien
  };

  const handleEdit = (id: number) => {
    console.log(`Modifier l'entretien ${id}`);
    // Ajoutez la logique pour modifier l'entretien
  };

  const handleShare = (id: number) => {
    console.log(`Partager l'entretien ${id}`);
    // Ajoutez la logique pour partager l'entretien
  };

  const handleDelete = (id: number) => {
    console.log(`Supprimer l'entretien ${id}`);
    // Ajoutez la logique pour supprimer l'entretien
  };

  return (
    <div className="flex min-h-screen">
      
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Entretiens</h1>
          <Link href="/dashboard/entretiens/planifier" className="bg-[#141c5b] text-white py-2 px-4 rounded">
            Planifier un entretien
          </Link>
        </div>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Nom du candidat</th>
              <th className="px-4 py-2">Poste</th>
              <th className="px-4 py-2">Date de l'entretien</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[#6d6d6d]">
            {entretiens.map((entretien) => (
              <tr key={entretien.id} className="border-b">
                <td className="px-4 py-2">{entretien.candidateName}</td>
                <td className="px-4 py-2">{entretien.position}</td>
                <td className="px-4 py-2">{entretien.interviewDate}</td>
                <td className="px-4 py-2">{entretien.status}</td>
                <td className="px-4 py-2 relative">
                  <button onClick={() => handleMenuToggle(entretien.id)}>
                    <Image src="/icons/three-dots.svg" alt="Actions" width={20} height={20} />
                  </button>
                  {showMenu === entretien.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleConsult(entretien.id)}>
                        Consulter
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleEdit(entretien.id)}>
                        Modifier
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleShare(entretien.id)}>
                        Partager
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleDelete(entretien.id)}>
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
};

export default Entretiens;
