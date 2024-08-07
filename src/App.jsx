// src/App.js
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Filas from './components/Filas/Filas';
import Pastillas from './components/Pastillas/Pastillas';
import Mapa from './components/Mapa/Mapa';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Filas');

  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Filas' && <Filas />}
      {activeTab === 'Pastillas' && <Pastillas />}
      {activeTab === 'Mapa' && <Mapa />}
    </div>
  );
};

export default App;
