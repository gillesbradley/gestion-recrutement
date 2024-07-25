// src/app/dashboard/layout.tsx
import Sidebar from '@/components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-white"> {/* Assurez-vous que la couleur de fond ici est blanche */}
        <div className="w-full h-full bg-white"> {/* Conteneur principal avec fond blanc */}
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
