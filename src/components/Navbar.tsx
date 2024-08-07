// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-[#141c5b] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="https://beta.agyl.tech">
            AGYL TECH
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/carrieres">
            Carrières
          </Link>
          <Link href="http://localhost:3000">
            Espace Recruteur
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

