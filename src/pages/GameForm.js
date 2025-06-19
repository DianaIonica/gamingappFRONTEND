import React, { useState } from 'react';

function GameForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError('Compila tutti i campi');
      return;
    }
    setError(null);
    console.log(`Nuovo gioco: ${title}, ${description}`);
    // simulazione invio
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-gray-800 p-6 rounded shadow-lg">
      <div>
        <label className="block mb-1">Titolo</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded text-black w-full"
        />
      </div>
      <div>
        <label className="block mb-1">Descrizione</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 rounded text-black w-full"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white">Aggiungi Gioco</button>
    </form>
  );
}

export default GameForm;
