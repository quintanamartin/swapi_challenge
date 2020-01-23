import React from 'react';

export const FilmList = ({ nameList }) => {
  const { name, films = [] } = nameList;

  films.forEach(item => {
    fetch(item)
      .then(res => res.json())
      .then(results => results.title)
      .then(lala => console.log(lala));
  });

  return (
    <div className="text-yellow-500 font-bold">
      <h2> Personaje: {name}</h2>
      <h2>Peliculas en las que participa:</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};
