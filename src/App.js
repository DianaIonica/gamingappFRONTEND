import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Games from './pages/Games';
import GameDetail from './pages/GameDetail';
import GameForm from './pages/GameForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
      <nav className="p-4 bg-gray-800 flex gap-4 shadow-lg">
        <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
        <Link to="/games" className="hover:text-blue-400 transition-colors">Games</Link>
        <Link to="/new" className="hover:text-blue-400 transition-colors">Add Game</Link>
      </nav>
      <main className="p-4 container mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GameDetail />} />
          <Route path="/new" element={<GameForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
