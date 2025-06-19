import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function GameDetail() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await fetch(`https://api.example.com/games/${id}`);
        const data = await res.json();
        setGame(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [id]);

  if (loading) return <p className="text-center">Caricamento...</p>;
  if (!game) return <p className="text-center text-red-500">Gioco non trovato</p>;

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">{game.title}</h2>
      <p className="text-gray-300">{game.description}</p>
    </div>
  );
}

export default GameDetail;