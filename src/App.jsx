import React, { useState } from 'react';
import Header from './components/Header/Header';
import Filas from './components/Filas/Filas';
import Pastillas from './components/Pastillas/Pastillas';
import Mapa from './components/Mapa/Mapa';
import Info from './components/Info/Info.jsx'
import Status from './components/Status/Status.jsx'
import Waves from './components/Waves/Waves.jsx'
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Filas');

  return (
    <div className="App">

      <div className="container">
      <Waves/>
      <Status/>
      <Info/>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Filas' && <Filas />}
      {activeTab === 'Pastillas' && <Pastillas />}
      {activeTab === 'Mapa' && <Mapa />}
      </div>
    </div>

  );
};

export default App;
