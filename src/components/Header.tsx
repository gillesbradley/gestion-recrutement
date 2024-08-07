import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="border-b border-black">
      <nav className="flex justify-between items-center p-4 bg-white">
        <Link href="https://beta.agyl.tech">
          <Image src="/logo.png" alt="AGYL TECH" width={100} height={50} />
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/carrières" className="text-black">Carrières</Link>
          </li>
          <li>
            <Link href="/dashboard" className="text-black">Espace Recruteur</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

