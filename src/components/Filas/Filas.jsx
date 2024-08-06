// src/components/Filas/Filas.jsx
import React from 'react';
import '../Filas/Filas.css';
import getPastillasData from '../../hooks/usePastillasData';

const Filas = () => {
  const { images, resultados, error } = getPastillasData();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='filasContainer'>
      <div className="pastillasGroup">
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            alt={`pastilla-${index}`} 
            className={`pastillas ${resultados[index] === false ? 'bordeRojo' : 'bordeVerde'}`}
          />
        ))}
      </div>

      <div className="stats">
        <div className="statsBandeja"></div>
        <div className="statsLote"></div>
      </div>
    </div>
  );
}

export default Filas;
