// src/components/Filas/Filas.jsx
import React from 'react';
import '../Filas/Filas.css';
import getPastillasData from '../../hooks/usePastillasData';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Filas = () => {
  const { images, resultados, est_bandeja, est_lote, error } = getPastillasData();

  if (error) {
    return <div>{error}</div>;
  }

  const data = [
    { name: "Group A", value: est_bandeja[0] },
    { name: "Group B", value: 100 - est_bandeja[0] }
  ];

  const COLORS = ['#FFFFFF', '#FFFFFF33'];

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
        <div className="statsBandeja">
          <h2 className='tituloBandeja'>ESTADÍSTICA BANDEJA</h2>

          <div className="bandeja1">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>

                <Pie 
                  data={data} 
                  dataKey="value" 
                  outerRadius={40}
                  innerRadius={30}
                  fill="#8884d8"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_bandeja[0]}</p>
            <p>END-CAPPING</p>
          </div>

          <div className="bandeja2">
            <p>{est_bandeja[1]}</p>
            <p>DESP-LATERAL</p>
          </div>

          <div className="bandeja3">
            <p>{est_bandeja[2]}</p>
            <p>DESP-SUPERFICIAL</p>
          </div>

          <div className="bandeja4">
            <p>{est_bandeja[3]}</p>
            <p>DEFECTUOSAS</p>
          </div>
        </div>

        <div className="statsLote">
          <h2 className='tituloLote'>ESTADÍSTICA LOTE</h2>

          <div className="lote1">
            <p>{est_lote[0]}</p>
            <p>END-CAPPING</p>
          </div>

          <div className="lote2">
            <p>{est_lote[1]}</p>
            <p>DESP-LATERAL</p>
          </div>

          <div className="lote3">
            <p>{est_lote[2]}</p>
            <p>DESP-SUPERFICIAL</p>
          </div>

          <div className="lote4">
            <p>{est_lote[3]}</p>
            <p>DEFECTUOSAS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filas;
