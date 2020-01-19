import React from 'react';
import './App.css';
import { CHARACTERS, getCharacters } from './api';
import { Header } from './components/Header/header';
import { Dropdown } from './components/Dropdown/dropdown';
import { FilmList } from './components/List/film-list';

const personajes = getCharacters(CHARACTERS);
console.log(personajes);

function App() {
  return (
    <div className="text-center container">
      <Header />
      <Dropdown />
      <FilmList />
    </div>
  );
}

export default App;
