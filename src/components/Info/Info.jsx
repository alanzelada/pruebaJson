import React from 'react';
import '../Info/Info.css';
import Json from '../../data.json';

const Info = () => {
    return (
        <>
            {Json.map(json => (
                <div className='InfoContainer' key={json.lote}>
                    <h2>LOTE: <span>{json.lote}</span></h2>
                    <h2>FILA: <span>{json.fila}</span></h2>
                    <h2>BANDEJA: <span>{json.bandeja}</span></h2>
                </div>
            ))}
        </>
    );
}

export default Info;
