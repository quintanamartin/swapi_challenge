import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header/header';
import { Search } from './components/Search/search';
import { FilmList } from './components/List/film-list';

function App() {
  //Set State
  const [searchResults, setSearchResults] = useState([]);

  //API CALL
  const fetchData = url => {
    return fetch(url)
      .then(res => res.json())
      .then(json => json.results[0])
      .catch(error => console.error('Error:', error));
  };

  const handleSearch = (firstUrl, secondUrl) => {
    processData(firstUrl, secondUrl);
  };

  const processData = async (firstUrl, secondUrl) => {
    const firstSearch = await fetchData(firstUrl);
    const secondSearch = await fetchData(secondUrl);
    setSearchResults([firstSearch, secondSearch]);
  };

  return (
    <div className="text-center container">
      <Header />
      <Search handleSearch={handleSearch} />
      <FilmList searchResults={searchResults} />
    </div>
  );
}

export default App;
