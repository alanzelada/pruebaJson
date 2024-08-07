// src/components/Mapa/Mapa.jsx
import React from 'react';
import '../Mapa/Mapa.css';
import useResultadosData from '../../hooks/usePastillasData';

const Mapa = () => {
  const { resultados, error } = useResultadosData();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='mapaContainer'>
      {resultados.map((resultado, index) => (
        <div
          key={index}
          className={`cuadrado ${resultado ? 'verde' : 'rojo'}`}
        ></div>
      ))}
    </div>
  );
};

export default Mapa;
