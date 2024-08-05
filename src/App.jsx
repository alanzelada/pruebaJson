import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Info from './components/Info/Info.jsx'
import Filas from './components/Filas/Filas.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <Filas/>
      <Body/>
    </div>
  );
}

export default App;
