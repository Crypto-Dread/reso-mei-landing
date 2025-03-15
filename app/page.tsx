export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-teal-600 p-4 text-white">
        <img src="/logo.png" alt="Reso-Mei Logo" width={100} />
      </header>
      <main className="flex flex-col items-center justify-center p-6">
        <img src="/sunset.jpg" alt="Sunset Background" className="w-full h-64 object-cover mb-6" />
        <h1 className="text-3xl font-bold mb-4">Reso-Mei Layers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Emotional</h2>
            {/* Add 6 nodes here later */}
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Somatic</h2>
            {/* Add 6 nodes here later */}
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl">Spiritual</h2>
            {/* Add 6 nodes here later */}
          </div>
        </div>
      </main>
    </div>
  );
}