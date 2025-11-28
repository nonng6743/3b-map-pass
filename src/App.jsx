import React, { useState } from 'react';
import Scene from './components/3d/Scene';
import RouteSelector from './components/ui/RouteSelector';
import { findPath } from './utils/pathfinding';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [startId, setStartId] = useState('');
  const [endId, setEndId] = useState('');
  const [path, setPath] = useState([]);
  const [activePass, setActivePass] = useState('hokuriku'); // 'hokuriku' or 'jr'
  const [searchTerm, setSearchTerm] = useState('');

  const passes = [
    {
      id: 'hokuriku',
      name: 'Hokuriku Arch Pass',
      color: 'bg-blue-600',
      url: 'https://japanallpass.com/products/jr-hokuriku-arch-pass-7-days-%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-jr-hokuriku-arch-pass-7-%E0%B8%A7%E0%B8%B1%E0%B8%99'
    },
    {
      id: 'jr',
      name: 'Japan Rail Pass',
      color: 'bg-green-600',
      url: 'https://japanallpass.com/products/japan-rail-pass-%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-jr-pass-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B9%83%E0%B8%99%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99'
    },
    {
      id: 'kansai',
      name: 'Kansai Wide Area Pass',
      color: 'bg-cyan-600',
      url: 'https://japanallpass.com/products/kansai-wide-area-pass-5-days-%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-jr-pass-%E0%B8%AA%E0%B8%B3%E0%B8%AB%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%84%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%8B'
    },
    { id: 'none', name: 'None', color: 'bg-red-600' },
  ];

  const filteredPasses = passes.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedPassData = passes.find(p => p.id === activePass);

  const handleFindRoute = () => {
    const calculatedPath = findPath(startId, endId);
    setPath(calculatedPath);
    console.log("Path found:", calculatedPath);
  };

  return (
    <ErrorBoundary>
      <div className="w-full h-screen relative">
        <Scene
          selectedStation={{ id: startId }} // Just for highlighting start
          highlightedPath={path}
          activePass={activePass}
        />

        {/* Pass Selector UI */}
        <div className="absolute top-4 right-4 z-10 bg-black/70 p-4 rounded-lg text-white backdrop-blur-md w-64">
          <h2 className="text-sm font-bold mb-2 text-gray-300">Select Rail Pass</h2>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search pass..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 mb-3 bg-gray-800 border border-gray-600 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
          />

          <div className="flex flex-col space-y-2 max-h-60 overflow-y-auto mb-3">
            {filteredPasses.map(pass => (
              <button
                key={pass.id}
                onClick={() => setActivePass(pass.id)}
                className={`px-4 py-2 rounded text-sm font-medium transition-colors text-left ${activePass === pass.id
                  ? `${pass.color} text-white`
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
              >
                {pass.name}
              </button>
            ))}

            {filteredPasses.length === 0 && (
              <p className="text-xs text-gray-500 text-center py-2">No passes found</p>
            )}
          </div>

          {/* Buy Button */}
          {selectedPassData && selectedPassData.url && (
            <a
              href={selectedPassData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded text-sm transition-colors"
            >
              Buy {selectedPassData.name}
            </a>
          )}
        </div>

        {/* UI Overlay - Hidden for City View */}
        {/* <div className="absolute top-4 left-4 z-10">
          <div className="bg-black/70 p-4 rounded-lg text-white backdrop-blur-md max-w-sm mb-4">
            <h1 className="text-xl font-bold mb-2">JR East-South Hokkaido Rail Pass</h1>
            <p className="text-sm text-gray-300">
              Select stations to find the best route.
            </p>
          </div>

          <RouteSelector
            startId={startId}
            endId={endId}
            onStartChange={setStartId}
            onEndChange={setEndId}
            onFindRoute={handleFindRoute}
          />
        </div> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
