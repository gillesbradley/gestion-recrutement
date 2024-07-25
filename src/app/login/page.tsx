"use client";

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import Image from 'next/image';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      window.location.href = '/dashboard/accueil'; // Redirection après connexion réussie
    } else {
      console.log('Erreur de connexion');
    }
  };

  return (
    <main className="flex min-h-screen">
      <div className="w-1/2 relative">
        <Image
          src="/images/imagelogin.png"
          alt="Image d'accueil"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-white">
        <h1 className="text-3xl font-medium mb-8 text-black">Connexion</h1>
        <div className="w-full mb-8 h-6"></div>
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
          <a href="/forgot-password" className="text-gray-700 text-sm mt-2 self-start underline">Mot de passe oublié ?</a>
          <button
            type="submit"
            className="mt-6 py-3 px-12 bg-[#141c5b] text-white font-medium rounded-md hover:bg-[#0d1a43]"
          >
            Connexion
          </button>
        </form>
        <footer className="mt-8 text-sm text-gray-500">
          <p>Tous droits réservés AGYL TECH 2024</p>
        </footer>
      </div>
    </main>
  );
}
