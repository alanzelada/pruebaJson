import React from 'react';
import '../Filas/Filas.css'

const requireContext = require.context('../../assets/pastillas', false, /\.(png|jpe?g|svg|bmp)$/);
const images = requireContext.keys().map(requireContext);

const Filas = () => {
  return (
    <div className='filasContainer'>
      <div className="pastillasGroup">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`pastilla-${index}`} className='pastillas'/>
        ))}
      </div>
    </div>
  );
}

export default Filas;
