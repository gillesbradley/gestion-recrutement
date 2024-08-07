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
      <nav className="flex-1 px-2 mt-8 space-y-2">
        <Link href="/dashboard/accueil" legacyBehavior>
          <a
            className={`flex items-center px-4 py-2 rounded ${
              pathname === '/dashboard/accueil' ? 'bg-white text-[#666666]' : 'hover:text-[#ffffff]'
            }`}
          >
            <Image
              src="/icons/accueil.svg"
              alt="Home Icon"
              width={20}
              height={20}
              className={`mr-2 ${pathname === '/dashboard/accueil' ? 'filter invert' : ''}`}
            />
            Accueil
          </a>
        </Link>
        <Link href="/dashboard/offres" legacyBehavior>
          <a
            className={`flex items-center px-4 py-2 rounded ${
              pathname === '/dashboard/offres' ? 'bg-white text-[#666666]' : 'hover:text-[#ffffff]'
            }`}
          >
            <Image
              src="/icons/candidatures.svg"
              alt="Briefcase Icon"
              width={20}
              height={20}
              className={`mr-2 ${pathname === '/dashboard/offres' ? 'filter invert' : ''}`}
            />
            Offres
          </a>
        </Link>
        <Link href="/dashboard/candidatures" legacyBehavior>
          <a
            className={`flex items-center px-4 py-2 rounded ${
              pathname === '/dashboard/candidatures' ? 'bg-white text-[#666666]' : 'hover:text-[#ffffff]'
            }`}
          >
            <Image
              src="/icons/candidatures.svg"
              alt="Document Text Icon"
              width={20}
              height={20}
              className={`mr-2 ${pathname === '/dashboard/candidatures' ? 'filter invert' : ''}`}
            />
            Candidatures reçues
          </a>
        </Link>
        <Link href="/dashboard/entretiens" legacyBehavior>
          <a
            className={`flex items-center px-4 py-2 rounded ${
              pathname === '/dashboard/entretiens' ? 'bg-white text-[#666666]' : 'hover:text-[#ffffff]'
            }`}
          >
            <Image
              src="/icons/entretiens.svg"
              alt="Chat Icon"
              width={20}
              height={20}
              className={`mr-2 ${pathname === '/dashboard/entretiens' ? 'filter invert' : ''}`}
            />
            Entretiens
          </a>
        </Link>
        <Link href="/dashboard/parametres" legacyBehavior>
          <a
            className={`flex items-center px-4 py-2 rounded ${
              pathname === '/dashboard/parametres' ? 'bg-white text-[#666666]' : 'hover:text-[#ffffff]'
            }`}
          >
            <Image
              src="/icons/parametres.svg"
              alt="Cog Icon"
              width={20}
              height={20}
              className={`mr-2 ${pathname === '/dashboard/parametres' ? 'filter invert' : ''}`}
            />
            Paramètres
          </a>
        </Link>
        <div className="absolute bottom-4 px-2">
          <Link href="/dashboard/deconnexion" legacyBehavior>
            <a className="flex items-center px-4 py-2 rounded text-[#dbdbdb] hover:text-[#ffffff]">
              <Image
                src="/icons/deconnexion.svg"
                alt="Logout Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              Déconnexion
            </a>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;

