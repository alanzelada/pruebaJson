import React from 'react';
import '../Mapa/Mapa.css';
import dataMapa from '../../data_mapa.json';  // Importar data_mapa.json

const Mapa = () => {
  const resultadosMapa = dataMapa[0]?.array_resultados;

  if (!Array.isArray(resultadosMapa)) {
    return <div>Error al cargar los resultados para Mapa.jsx</div>;
  }

  return (
    <div className='mapaContainer'>

      {resultadosMapa.map((fila, filaIndex) => (
        <div key={filaIndex} className='filaContainer'>
          {fila.map((resultado, index) => (
            <div
              key={index}
              className={`cuadrado ${resultado ? 'verde' : 'rojo'}`}
            ></div>
          ))}
        </div>
      ))}

    </div>
  );
};

export default Mapa;
