import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { Search } from './components/Search/search';
import { FilmList } from './components/List/film-list';

function App() {
  const [search, saveSearch] = useState({
    name: ''
  });

  const { name } = search;

  const [input, userInput] = useState(false);
  const [nameList, saveNameList] = useState({});

  useEffect(() => {
    const requestAPI = async () => {
      if (input) {
        const url = `https://swapi.co/api/people/?search=${name}`;
        const res = await fetch(url);
        const response = await res.json();
        const result = await response.results[0];
        saveNameList(result);
      }
    };
    requestAPI();
  }, [input]);

  return (
    <div className="text-center container">
      <Header />
      <Search search={search} saveSearch={saveSearch} userInput={userInput} />
      <FilmList nameList={nameList} />
    </div>
  );
}

export default App;
