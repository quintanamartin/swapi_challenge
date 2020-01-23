import React from 'react';

export const FilmList = ({ searchResults }) => {
  const names = searchResults.map(item => item.name);
  const films = searchResults.map(item => item.films);

  console.log(films);

  return (
    <div className="text-yellow-500 font-bold">
      <h2> Personajes elegidos: </h2>
      <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
      </ul>
      <h2>Peliculas en las que participa:</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
