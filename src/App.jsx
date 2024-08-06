import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Info from './components/Info/Info.jsx'
import Filas from './components/Filas/Filas.jsx'
import Pastillas from './components/Pastillas/Pastillas.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      {/* <Filas/> */}
      <Pastillas/>
      <Body/>
    </div>
  );
}

export default App;
