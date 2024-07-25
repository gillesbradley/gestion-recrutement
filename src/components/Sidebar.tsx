'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname(); // Obtenir le chemin actuel

  return (
    <aside className="w-64 h-full bg-[#141c5b] text-[#dbdbdb] flex flex-col">
      <div className="p-4 flex justify-center">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>
      <nav className="flex-1 px-2 mt-8">
        <div className="space-y-2">
          <Link href="/dashboard/accueil">
            <div
              className={`flex items-center px-4 py-2 rounded ${
                pathname === '/dashboard/accueil' ? 'bg-white text-[#141c5b]' : 'hover:text-[#ffffff]'
              }`}
            >
              <Image src="/icons/accueil.svg" alt="Home Icon" width={20} height={20} className="mr-2" />
              Accueil
            </div>
          </Link>
          <Link href="/dashboard/offres">
            <div
              className={`flex items-center px-4 py-2 rounded ${
                pathname === '/dashboard/offres' ? 'bg-white text-[#141c5b]' : 'hover:text-[#ffffff]'
              }`}
            >
              <Image src="/icons/candidatures.svg" alt="Briefcase Icon" width={20} height={20} className="mr-2" />
              Offres
            </div>
          </Link>
          <Link href="/dashboard/candidatures">
            <div
              className={`flex items-center px-4 py-2 rounded ${
                pathname === '/dashboard/candidatures' ? 'bg-white text-[#141c5b]' : 'hover:text-[#ffffff]'
              }`}
            >
              <Image src="/icons/candidatures.svg" alt="Document Text Icon" width={20} height={20} className="mr-2" />
              Candidatures reçues
            </div>
          </Link>
          <Link href="/dashboard/entretiens">
            <div
              className={`flex items-center px-4 py-2 rounded ${
                pathname === '/dashboard/entretiens' ? 'bg-white text-[#141c5b]' : 'hover:text-[#ffffff]'
              }`}
            >
              <Image src="/icons/entretiens.svg" alt="Chat Icon" width={20} height={20} className="mr-2" />
              Entretiens
            </div>
          </Link>
          <Link href="/dashboard/parametres">
            <div
              className={`flex items-center px-4 py-2 rounded ${
                pathname === '/dashboard/parametres' ? 'bg-white text-[#141c5b]' : 'hover:text-[#ffffff]'
              }`}
            >
              <Image src="/icons/parametres.svg" alt="Cog Icon" width={20} height={20} className="mr-2" />
              Paramètres
            </div>
          </Link>
          <div className="absolute bottom-4 px-2">
            <Link href="/dashboard/deconnexion">
              <div className="flex items-center px-4 py-2 rounded hover:text-[#ffffff]">
                <Image src="/icons/deconnexion.svg" alt="Logout Icon" width={20} height={20} className="mr-2" />
                Déconnexion
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
