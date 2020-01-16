import React from 'react';
import logo from '../src/assets/robot.png';
import './App.css';
import { getFilms, ENDPOINT } from './api';
import { Header } from './components/Header/header';

getFilms(ENDPOINT);

function App() {
  return (
    <div className="text-center container">
      <Header />
      <header className="bg-purple-900 m-6 p-6 rounded shadow-lg">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-white text-3xl">Star Wars API Challenge</h1>
      </header>
      <p className="text-base">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
