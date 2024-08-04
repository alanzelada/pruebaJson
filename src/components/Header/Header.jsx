import React from 'react'
import '../Header/Header.css'
import Logo from '../../assets/img/logo.png'


const Header = () => {
  return (
    <div className='homeContainer'>       
        
    <header>
        <img src={Logo} alt="" />

        <div className="tabs">
            <div className="tabStyle" id='tabFilas'>
                <p>Filas</p>

                <svg width="30" height="25.56" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="27" y2="1.5" stroke="white" stroke-width="2"/>
                <line y1="11.5" x2="27" y2="11.5" stroke="white" stroke-width="2"/>
                <line y1="21.5" x2="27" y2="21.5" stroke="white" stroke-width="2"/>
                </svg>
            </div>
            <div className="tabStyle" id='tabPastillas'>
                <p>Pastillas</p>

                <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 26.25V3.75C0 1.44111 4.68361 0 10.5 0C16.3164 0 21 1.44111 21 3.75V26.25C21 28.5589 16.3164 30 10.5 30C4.68361 30 0 28.5589 0 26.25ZM1.5 24.2093C3.33438 23.1243 6.67184 22.5 10.5 22.5C14.3282 22.5 17.6656 23.1243 19.5 24.2093V5.79066C17.6656 6.87573 14.3282 7.5 10.5 7.5C6.67184 7.5 3.33438 6.87573 1.5 5.79066V24.2093ZM10.5 6C15.4532 6 19.5 4.75482 19.5 3.75C19.5 2.74518 15.4532 1.5 10.5 1.5C5.54684 1.5 1.5 2.74518 1.5 3.75C1.5 4.75482 5.54684 6 10.5 6ZM10.5 28.5C15.4532 28.5 19.5 27.2548 19.5 26.25C19.5 25.2452 15.4532 24 10.5 24C5.54684 24 1.5 25.2452 1.5 26.25C1.5 27.2548 5.54684 28.5 10.5 28.5Z" fill="white"/>
                </svg>
            </div>
            <div className="tabStyle" id='tabMapa'>
                <p>Mapa</p>

                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1" width="28" height="28" rx="2" stroke="white" stroke-width="2"/>
                <line x1="1.5" y1="9" x2="29.5" y2="9" stroke="white" stroke-width="2"/>
                <line x1="1.5" y1="19" x2="29.5" y2="19" stroke="white" stroke-width="2"/>
                <line x1="11.5" y1="1" x2="11.5" y2="29" stroke="white" stroke-width="2"/>
                <line x1="20.5" y1="1" x2="20.5" y2="29" stroke="white" stroke-width="2"/>
                </svg>
            </div>
        </div>
    </header>

    
    </div>
  )
}

export default Header