"use client"; // Indiquer que ce composant est un Client Component

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Sidebar from '../../../components/Sidebar'; // Assurez-vous que le chemin est correct

type Candidature = {
  id: number;
  candidateName: string;
  position: string;
  submissionDate: string;
  status: string;
};

const candidaturesInitiales: Candidature[] = [
  { id: 1, candidateName: 'John Doe', position: 'Développeur Full Stack', submissionDate: '2024-07-25', status: 'En attente' },
  { id: 2, candidateName: 'Jane Smith', position: 'Designer UX/UI', submissionDate: '2024-07-28', status: 'En attente' },
  // Ajoutez d'autres candidatures ici...
];

const Candidatures = () => {
  const [candidatures, setCandidatures] = useState<Candidature[]>(candidaturesInitiales);
  const [showMenu, setShowMenu] = useState<number | null>(null);

  useEffect(() => {
    // Ici, vous pouvez ajouter du code pour récupérer les candidatures depuis une API
  }, []);

  const handleMenuToggle = (id: number) => {
    setShowMenu(showMenu === id ? null : id);
  };

  const handleConsult = (id: number) => {
    console.log(`Consulter la candidature ${id}`);
    // Ajoutez la logique pour consulter la candidature
  };

  const handleReject = (id: number) => {
    console.log(`Rejeter la candidature ${id}`);
    // Ajoutez la logique pour rejeter la candidature
  };

  const handleScheduleInterview = (id: number) => {
    console.log(`Planifier un entretien pour la candidature ${id}`);
    // Ajoutez la logique pour planifier un entretien
  };

  const handleDelete = (id: number) => {
    console.log(`Supprimer la candidature ${id}`);
    // Ajoutez la logique pour supprimer la candidature
  };

  return (
    <div className="flex min-h-screen">
     
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Candidatures reçues</h1>
        </div>
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Nom du candidat</th>
              <th className="px-4 py-2">Poste</th>
              <th className="px-4 py-2">Date de soumission</th>
              <th className="px-4 py-2">Statut</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-[#6d6d6d]">
            {candidatures.map((candidature) => (
              <tr key={candidature.id} className="border-b">
                <td className="px-4 py-2">{candidature.candidateName}</td>
                <td className="px-4 py-2">{candidature.position}</td>
                <td className="px-4 py-2">{candidature.submissionDate}</td>
                <td className="px-4 py-2">{candidature.status}</td>
                <td className="px-4 py-2 relative">
                  <button onClick={() => handleMenuToggle(candidature.id)}>
                    <Image src="/icons/three-dots.svg" alt="Actions" width={20} height={20} />
                  </button>
                  {showMenu === candidature.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleConsult(candidature.id)}>
                        Consulter
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleReject(candidature.id)}>
                        Rejeter
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleScheduleInterview(candidature.id)}>
                        Planifier un entretien
                      </button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100" onClick={() => handleDelete(candidature.id)}>
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

export default Candidatures;