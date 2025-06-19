import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../redux/gamesSlice';
import { Link } from 'react-router-dom';

function Games() {
  const dispatch = useDispatch();
  const { games, loading, error } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Errore: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Giochi Disponibili</h2>
      <ul className="space-y-2">
        {games.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/games/${id}`} className="underline hover:text-blue-400">{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Games;
