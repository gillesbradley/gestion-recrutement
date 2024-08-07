"use client"; // Indiquer que ce composant est un Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../../../../components/Sidebar'; // Assurez-vous que le chemin est correct

// Types pour les offres et les candidatures
type Offre = {
  id: number;
  title: string;
};

type Candidature = {
  id: number;
  candidateName: string;
};

const offresInitiales: Offre[] = [
  { id: 1, title: 'Développeur Full Stack' },
  { id: 2, title: 'Designer UX/UI' },
  // Ajoutez d'autres offres ici...
];

const candidaturesInitiales: Candidature[] = [
  { id: 1, candidateName: 'John Doe' },
  { id: 2, candidateName: 'Jane Smith' },
  // Ajoutez d'autres candidatures ici...
];

const PlanifierEntretien = () => {
  const [selectedOffre, setSelectedOffre] = useState('');
  const [selectedCandidature, setSelectedCandidature] = useState('');
  const [format, setFormat] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Entretien planifié :', { selectedOffre, selectedCandidature, format, date, time, location });
    // Ajouter la logique pour sauvegarder l'entretien planifié
    router.push('/dashboard/entretiens');
  };

  return (
    <div className="flex min-h-screen">
    
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-medium mb-8">Planifier un entretien</h1>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectedOffre">
              Offre concernée
            </label>
            <select
              id="selectedOffre"
              value={selectedOffre}
              onChange={(e) => setSelectedOffre(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Sélectionner une offre</option>
              {offresInitiales.map((offre) => (
                <option key={offre.id} value={offre.id}>
                  {offre.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="selectedCandidature">
              Candidature concernée
            </label>
            <select
              id="selectedCandidature"
              value={selectedCandidature}
              onChange={(e) => setSelectedCandidature(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Sélectionner une candidature</option>
              {candidaturesInitiales.map((candidature) => (
                <option key={candidature.id} value={candidature.id}>
                  {candidature.candidateName}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="format">
              Format
            </label>
            <select
              id="format"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Sélectionner un format</option>
              <option value="Présentiel">Présentiel</option>
              <option value="En ligne">En ligne</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
              Date de l'entretien
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
              Heure de l'entretien
            </label>
            <input
              id="time"
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
              Lieu de l'entretien
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Lieu de l'entretien ou lien de réunion en ligne"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#141c5b] text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Planifier l'entretien
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PlanifierEntretien;
