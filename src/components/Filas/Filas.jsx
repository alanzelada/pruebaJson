import React from 'react';
import '../Filas/Filas.css';
import data from '../../data.json';

const requireContext = require.context('../../assets/pastillas', false, /\.(png|jpe?g|svg|bmp)$/);
const images = requireContext.keys().map(requireContext);

const Filas = () => {
  const resultados = data[0]?.resultados;

  if (!Array.isArray(resultados)) {
    console.error('resultados no está definido o no es un array');
    return <div>Error al cargar los resultados</div>;
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
