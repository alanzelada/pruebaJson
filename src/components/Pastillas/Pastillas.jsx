// src/components/Pastillas/Pastillas.jsx
import React from 'react';
import getPastillasData from '../../hooks/usePastillasData';
import '../Pastillas/Pastillas.css';

const Pastillas = () => {
  const { images, resultados, error } = getPastillasData();

  if (error) {
    return <div>{error}</div>;
  }

  const resultadosConIndices = resultados.map((resultado, index) => ({ resultado, index }));

  const pastillasRojas = resultadosConIndices.filter(item => item.resultado === false);
  const pastillasVerdes = resultadosConIndices.filter(item => item.resultado === true);

  return (
    <div className='pastillasContainer'>
      <div className="pastillasRojas">
        <h1>PASTILLAS DEFECTUOSAS</h1>
        {pastillasRojas.map(({ index }) => (
          <div key={index} className="detallePastilla">
            <img 
              src={images[index]} 
              alt={`pastilla-roja-${index}`} 
              className='pastillas bordeRojo'
            />
            <div className="detalles">
              <h2>N°: {index+1}</h2>
              <h2>DEFECTO: </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="pastillasVerdes">
        <h1>PASTILLAS APROBADAS</h1>
        {pastillasVerdes.map(({ index }) => (
          <div key={index} className="detallePastilla">
            <img 
              src={images[index]} 
              alt={`pastilla-verde-${index}`} 
              className='pastillas bordeVerde'
            />
            <div className="detalles">
              <h2>N°: {index+1}</h2>
              <h2>DEFECTO: </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pastillas;
