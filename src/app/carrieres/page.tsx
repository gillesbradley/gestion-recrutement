"use client"; // Indiquer que ce composant est un Client Component

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const offres = [
  { id: 1, title: 'Développeur Full Stack', description: 'Développement de projets web et mobile.', location: 'Douala', date: '2024-08-01' },
  { id: 2, title: 'Designer UX/UI', description: 'Création d\'interfaces utilisateur attractives.', location: 'Yaoundé', date: '2024-07-25' },
  { id: 3, title: 'Rédactrice Web', description: 'Rédaction d\articles de blog', location: 'Online', date: '2024-09-13' },
  { id: 4, title: 'Graphiste', description: 'Création de logos attractifs.', location: 'Edea', date: '2024-07-24' },
  // Ajoutez d'autres offres ici...
];

const Carrières = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ city: '', date: '' });
  const [filteredOffers, setFilteredOffers] = useState(offres);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    filterOffers(e.target.value, filters);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
    filterOffers(searchTerm, { ...filters, [name]: value });
  };

  const filterOffers = (search: string, filters: { city: string, date: string }) => {
    let result = offres.filter(offre => 
      offre.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filters.city) {
      result = result.filter(offre => offre.location === filters.city);
    }

    if (filters.date) {
      result = result.filter(offre => offre.date === filters.date);
    }

    setFilteredOffers(result);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="bg-white border-b border-black">
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href="https://beta.agyl.tech">
            <Image src="/logo.png" alt="AGYL TECH" width={60} height={20} />
          </Link>
          <nav className="space-x-4">
            <Link href="/carrières" className="text-black">Carrières</Link>
            <Link href="http://localhost:3000" className="text-black">Espace Recruteur</Link>
            <Link href="mailto:contact@agyl.tech" className="text-black">Nous contacter</Link>
          </nav>
        </div>
      </header>
      
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Offres d'emploi</h1>
        
        <div className="flex items-center mb-6">
          <input 
            type="text" 
            placeholder="Rechercher une offre d'emploi..." 
            className="flex-1 p-2 border border-gray-300 rounded mr-4"
            value={searchTerm}
            onChange={handleSearch}
          />
          <select 
            name="city" 
            className="p-2 border border-gray-300 rounded mr-4" 
            onChange={handleFilterChange}
            value={filters.city}
          >
            <option value="">Toutes les villes</option>
            <option value="Douala">Douala</option>
            <option value="Yaoundé">Yaoundé</option>
            {/* Ajoutez d'autres villes ici */}
          </select>
          <select 
            name="date" 
            className="p-2 border border-gray-300 rounded" 
            onChange={handleFilterChange}
            value={filters.date}
          >
            <option value="">Toutes les dates</option>
            <option value="2024-08-01">1 août 2024</option>
            <option value="2024-07-25">25 juillet 2024</option>
            {/* Ajoutez d'autres dates ici */}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map(offre => (
            <div key={offre.id} className="bg-white p-6 border rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{offre.title}</h2>
              <p className="mb-4">{offre.description}</p>
              <p className="mb-4"><strong>Lieu:</strong> {offre.location}</p>
              <p className="mb-4"><strong>Date:</strong> {offre.date}</p>
              <button 
                onClick={() => console.log(`Postuler pour l'offre ${offre.id}`)} 
                className="bg-[#141c5b] text-white py-2 px-4 rounded"
              >
                Postuler
              </button>
            </div>
          ))}
        </div>
      </main>
      
      <footer className="bg-white border-t border-black mt-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          <div>
            <h4 className="font-bold mb-2">A propos</h4>
            <ul>
              <li><Link href="https://agyl.tech" className="text-black">Accueil</Link></li>
              <li><Link href="https://agyl.tech/blog" className="text-black">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Services</h4>
            <ul>
              <li><Link href="https://agyl.tech/applications" className="text-black">Applications</Link></li>
              <li><Link href="https://agyl.tech/renfort-tech" className="text-black">Renfort Tech</Link></li>
              <li><Link href="https://agyl.tech/vitrine-sites" className="text-black">Site Vitrine</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Nous contacter</h4>
            <ul>
              <li><Link href="mailto:contact@agyl.tech" className="text-black">Prendre rendez-vous</Link></li>
              <li><Link href="https://fr.linkedin.com/company/agyl-tech" className="text-black">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Carrières;
