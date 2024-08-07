// src/components/Header/Header.jsx
import React from 'react';
import '../Header/Header.css';
import Logo from '../../assets/img/logo.png';

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <div className='homeContainer'>
      <header>
        <img src={Logo} alt="" />

        <div className="tabs">
          <div 
            className={`tabStyle ${activeTab === 'Filas' ? 'activeTab' : ''}`} 
            id='tabFilas' 
            onClick={() => setActiveTab('Filas')}
          >
            <p>Filas</p>
            <svg width="30" height="25.56" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line y1="1.5" x2="27" y2="1.5" stroke="white" strokeWidth="2"/>
              <line y1="11.5" x2="27" y2="11.5" stroke="white" strokeWidth="2"/>
              <line y1="21.5" x2="27" y2="21.5" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          <div 
            className={`tabStyle ${activeTab === 'Pastillas' ? 'activeTab' : ''}`} 
            id='tabPastillas' 
            onClick={() => setActiveTab('Pastillas')}
          >
            <p>Pastillas</p>
            <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 26.25V3.75C0 1.44111 4.68361 0 10.5 0C16.3164 0 21 1.44111 21 3.75V26.25C21 28.5589 16.3164 30 10.5 30C4.68361 30 0 28.5589 0 26.25ZM1.5 24.2093C3.33438 23.1243 6.67184 22.5 10.5 22.5C14.3282 22.5 17.6656 23.1243 19.5 24.2093V5.79066C17.6656 6.87573 14.3282 7.5 10.5 7.5C6.67184 7.5 3.33438 6.87573 1.5 5.79066V24.2093ZM10.5 6C15.4532 6 19.5 4.75482 19.5 3.75C19.5 2.74518 15.4532 1.5 10.5 1.5C5.54684 1.5 1.5 2.74518 1.5 3.75C1.5 4.75482 5.54684 6 10.5 6ZM10.5 28.5C15.4532 28.5 19.5 27.2548 19.5 26.25C19.5 25.2452 15.4532 24 10.5 24C5.54684 24 1.5 25.2452 1.5 26.25C1.5 27.2548 5.54684 28.5 10.5 28.5Z" fill="white"/>
            </svg>
          </div>
          <div 
            className={`tabStyle ${activeTab === 'Mapa' ? 'activeTab' : ''}`} 
            id='tabMapa' 
            onClick={() => setActiveTab('Mapa')}
          >
            <p>Mapa</p>
            <svg width="30" height="31" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-grid-3x3">
            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13zM1.5 1a.5.5 0 0 0-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4h4V6H6v4zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5v-4zm1 0v4h4v-4H6zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11v4zm-1 0V1H6v4h4z"/>
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
