import React from 'react';

export const FilmList = ({ nameList }) => {
  const { name, films } = nameList;
  if (name !== undefined) {
    console.log(name);
    console.log(films);
  }
  return (
    <div className="text-yellow-500 font-bold">
      <h2> Personaje: {name}</h2>
      <h2>Peliculas en las que participa:</h2>
      <ul></ul>
    </div>
  );
};
