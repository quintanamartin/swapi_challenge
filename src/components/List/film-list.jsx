import React, { useState, useEffect } from 'react';

export const FilmList = ({ searchResults }) => {
  const [movies, saveMovies] = useState([]);

  const names = searchResults.map(item => item.name);

  useEffect(() => {
    const films = searchResults.reduce(
      (acc, item) => [...acc, ...item.films],
      []
    );
    const duplicateFilms = films
      .map(film => {
        return {
          count: 1,
          film: film
        };
      })
      .reduce((a, b) => {
        a[b.film] = (a[b.film] || 0) + b.count;
        return a;
      }, {});
    const duplicates = Object.keys(duplicateFilms).filter(
      first => duplicateFilms[first] > 1
    );
    console.log(duplicates);
    const promises = [...duplicates].map(url =>
      fetch(url).then(res => res.json())
    );
    Promise.all(promises).then(results => {
      saveMovies(results.map(r => r.title));
    });
  }, [searchResults]);

  return (
    <div className="text-yellow-500 font-bold">
      <h2> Personajes elegidos: </h2>
      <ul>
        <li>{names[0]}</li>
        <li>{names[1]}</li>
      </ul>
      <h2>Peliculas en las que participan juntos:</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  );
};
