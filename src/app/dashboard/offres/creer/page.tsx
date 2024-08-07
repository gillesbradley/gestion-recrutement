'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

const CreateOffer = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [postedDate, setPostedDate] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Vous pouvez ajouter la logique pour envoyer les données au backend ici
    router.push('/dashboard/offres'); // Redirection après création
  };

  return (
    <div className="flex min-h-screen">
    
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-medium mb-8">Créer une offre</h1>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Titre</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-2 w-full rounded"
              rows={4}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Lieu</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Date de publication</label>
            <input
              type="date"
              value={postedDate}
              onChange={(e) => setPostedDate(e.target.value)}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#141c5b] text-white px-4 py-2 rounded"
          >
            Créer l'offre
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateOffer;
