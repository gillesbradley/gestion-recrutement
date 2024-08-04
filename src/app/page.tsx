"use client"; // Indiquer que ce composant est un Client Component

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for useRouter in Next.js 13

export default function Home() {
  // État pour les valeurs du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/dashboard/accueil');
  };

  return (
    <main className="flex min-h-screen">
      {/* Section de l'image */}
      <div className="w-1/2 relative">
        <Image
          src="/images/imagelogin.png" // Chemin vers l'image dans le répertoire public
          alt="Image d'accueil"
          layout="fill" // Remplit l'espace disponible
          objectFit="cover" // Couvrir l'espace tout en conservant les proportions
        />
      </div>

      {/* Section de la connexion */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        {/* Marge ajoutée pour monter le titre */}
        <h1 className="text-3xl font-medium mb-8 text-black">Connexion</h1> {/* Augmenter la marge inférieure */}

        {/* Bloc pour séparer le titre du formulaire */}
        <div className="w-full mb-8 h-6"></div> {/* Espace vide pour séparation */}

        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md flex flex-col items-center">
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Identifiant ou Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>
          
          <div className="w-full mt-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de Passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              required
            />
          </div>

          {/* Lien pour mot de passe oublié */}
          <a href="/forgot-password" className="text-gray-700 text-sm mt-2 self-start underline">Mot de passe oublié ?</a> {/* Souligner le texte */}

          <button
            type="submit"
            className="mt-6 py-3 px-12 bg-[#141c5b] text-white font-medium rounded-md hover:bg-[#0d1a43]" // Réajuster la longueur du bouton
          >
            Connexion
          </button>
        </form>

        {/* Texte des droits réservés */}
        <footer className="mt-8 text-sm text-gray-500">
          <p>Tous droits réservés AGYL TECH 2024</p>
        </footer>
      </div>
    </main>
  );
}

