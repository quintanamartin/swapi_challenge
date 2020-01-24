import React, { useState } from 'react';

export const FilmList = ({ searchResults }) => {
  const [movies: [], saveMovies] = useState([]);
  const names = searchResults.map(item => item.name);
  const films = searchResults.map(item => item.films);
  let allFilms = Array.from(new Set(films.map(JSON.stringify)), JSON.parse);
  console.log(allFilms);
  allFilms.map(item => {
    item.forEach(async item => {
      let res = await fetch(item);
      let result = await res.json();
      let titles = await result.title;
      return saveMovies(titles);
    });
  });
  return (
    <div className="text-yellow-500 font-bold">
      <h2> Personajes elegidos: </h2>
      <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
      </ul>
      <h2>Peliculas en las que participan juntos:</h2>
      <ul>{movies}</ul>
    </div>
  );
};
