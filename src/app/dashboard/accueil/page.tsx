// src/app/dashboard/accueil/page.tsx
'use client'; // Marquer ce fichier comme un composant côté client

import Sidebar from '@/components/Sidebar';

const AccueilPage = () => {
  return (
    <div className="flex">
    
      <main className="flex-1 p-6 bg-white">
        <h1 className="text-2xl font-semibold">Page d'Accueil</h1>
        {/* Ajoute le contenu principal de la page ici */}
      </main>
    </div>
  );
};

export default AccueilPage;
