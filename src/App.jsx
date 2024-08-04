import React from 'react'
import './App.css';
import Header from './components/Header/Header.jsx'
import Body from './components/Body/Body.jsx'
import Info from './components/Info/Info.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Info/>
      <Body/>
    </div>
  );
}

export default App;
