"use client"; // Indiquer que ce composant est un Client Component

import { useState } from 'react';
import Link from 'next/link'; // Importer le composant Link de Next.js
import Sidebar from '../../../components/Sidebar'; // Assurez-vous que le chemin est correct

const DashboardAccueil = () => {
  const [dateFilter, setDateFilter] = useState('aujourd\'hui');

  const handleDateFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDateFilter(event.target.value);
    // Ajouter la logique pour filtrer les statistiques en fonction de la date
  };

  // Les données des statistiques peuvent être remplacées par des données réelles récupérées depuis une API
  const statistiques = {
    offres: {
      creees: 15, // Nombre d'offres créées
    },
    entretiens: {
      prevus: 10, // Nombre d'entretiens prévus
      termines: 5, // Nombre d'entretiens terminés
    },
    candidatures: {
      recues: 50, // Nombre de candidatures reçues
    },
  };

  return (
    <div className="flex min-h-screen">
     
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-medium">Statistiques</h1>
          <select
            value={dateFilter}
            onChange={handleDateFilterChange}
            className="bg-white border border-gray-300 rounded px-4 py-2"
          >
            <option value="aujourd'hui">Aujourd'hui</option>
            <option value="cette semaine">Cette semaine</option>
            <option value="ce mois">Ce mois</option>
            <option value="ce trimestre">Ce trimestre</option>
            <option value="cette année">Cette année</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Card pour les offres */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-medium mb-4">Offres</h2>
            <div className="text-4xl font-bold mb-2">{statistiques.offres.creees}</div>
            <div className="text-gray-600">offres créées</div>
          </div>

          {/* Card pour les entretiens prévus */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-medium mb-4">Entretiens prévus</h2>
            <div className="text-4xl font-bold mb-2">{statistiques.entretiens.prevus}</div>
            <div className="text-gray-600">entretiens prévus</div>
          </div>

          {/* Card pour les entretiens terminés */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-medium mb-4">Entretiens terminés</h2>
            <div className="text-4xl font-bold mb-2">{statistiques.entretiens.termines}</div>
            <div className="text-gray-600">entretiens terminés</div>
          </div>

          {/* Card pour les candidatures reçues */}
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-2xl font-medium mb-4">Candidatures</h2>
            <div className="text-4xl font-bold mb-2">{statistiques.candidatures.recues}</div>
            <div className="text-gray-600">candidatures reçues</div>
          </div>
        </div>

        <h2 className="text-2xl font-medium mb-4">Actions Rapides</h2>
        <div className="flex space-x-4">
          <Link href="/dashboard/offres/creer">
            <button
              className="bg-[#141c5b] text-white px-4 py-2 rounded"
            >
              Créer une offre
            </button>
          </Link>
          <Link href="/dashboard/entretiens/planifier">
            <button
              className="bg-[#141c5b] text-white px-4 py-2 rounded"
            >
              Planifier un entretien
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DashboardAccueil;
