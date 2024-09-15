// src/App.js

import React from 'react';
// komponenty oddzielne
import Header from './components/Header'; 
import Hero from './components/Hero'; 
import Trailer from './components/Trailer'; 
import Plot from './components/Plot'; 
import PictureFromMovie from './components/PictureFromMovie'; 
import FilmingLocation from './components/FilmingLocation'; 
import Footer from './components/Footer'; 
import './styles.css';

import CustomScript from './components/customScript'; // Upewnij się, że nazwa jest zgodna

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Trailer />
      <Plot />
      <PictureFromMovie />
      <FilmingLocation />
      <Footer />
      <CustomScript /> {/* Dodaj CustomScript na końcu */}
    </div>
  );
}

export default App;
