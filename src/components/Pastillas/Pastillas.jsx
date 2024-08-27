import React from 'react';
import getPastillasData from '../../hooks/usePastillasData';
import '../Pastillas/Pastillas.css';

const Pastillas = () => {
  const { images, resultados, causa_rechazo, error } = getPastillasData();

  if (error) {
    return <div>{error}</div>;
  }

  // Mapeo de los resultados junto con sus índices y causas de rechazo
  const pastillasConDetalles = resultados.map((resultado, index) => ({
    resultado,
    index,
    causa: causa_rechazo[index] || [], // Asociar cada causa de rechazo con su respectivo índice
  }));

  const pastillasRojas = pastillasConDetalles.filter(item => item.resultado === false);
  const pastillasVerdes = pastillasConDetalles.filter(item => item.resultado === true);

  return (
    <div className='pastillasContainer'>
      <div className="pastillasRojas">
        <h1>PASTILLAS DEFECTUOSAS</h1>
        <div className="scrollPastillas">
          {pastillasRojas.map(({ index, causa }) => (
            <div key={index} className="detallePastilla">
              <img 
                src={images[index]} 
                alt={`pastilla-roja-${index}`} 
                className='pastillas bordeRojo'
              />
              <div className="detalles">
                <h2>N°: {index + 1}</h2>
                <div className="bottom">
                <h2>DEFECTO{causa.length > 1 ? 'S' : ''}:</h2>
                
                  {causa.map((defecto, idx) => (
                    <h3 key={idx}>{defecto}</h3>
                  ))}
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pastillasVerdes">
        <h1>PASTILLAS APROBADAS</h1>
        <div className="scrollPastillas">
          {pastillasVerdes.map(({ index, causa }) => (
            <div key={index} className="detallePastilla">
              <img 
                src={images[index]} 
                alt={`pastilla-verde-${index}`} 
                className='pastillas ladoVerde'
              />
              <div className="detalles">
                <h2>N°: {index + 1}</h2>
                {/* <h2>DEFECTO{causa.length > 1 ? 'S' : ''}:</h2>
                <ul>
                  {causa.length > 0 ? (
                    causa.map((defecto, idx) => (
                      <li key={idx}>{defecto}</li>
                    ))
                  ) : (
                    <li>Ninguno</li>
                  )}
                </ul> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pastillas;
