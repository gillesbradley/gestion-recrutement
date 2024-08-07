"use client" ;


const Postuler = () => {
  return (
    <div className="min-h-screen flex flex-col">
     
      <main className="flex-1 p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Postuler à une offre</h1>
        <form className="bg-white p-6 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">Nom</label>
            <input
              id="name"
              type="text"
              className="border rounded px-3 py-2 w-full"
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              className="border rounded px-3 py-2 w-full"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cv" className="block text-sm font-medium mb-1">CV (PDF)</label>
            <input
              id="cv"
              type="file"
              className="border rounded px-3 py-2 w-full"
              accept=".pdf"
              required
            />
          </div>
          <button type="submit" className="bg-[#141c5b] text-white py-2 px-4 rounded hover:bg-[#0f174b]">
            Envoyer la candidature
          </button>
        </form>
      </main>
  
    </div>
  );
};

export default Postuler;
