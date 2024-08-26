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


  //datos para los gráficos de las bandejas
  const bandeja1 = [
    { name: "Group A", value: est_bandeja[0] },
    { name: "Group B", value: 100 - est_bandeja[0] }
  ];

  const bandeja2 = [
    { name: "Group A", value: est_bandeja[1] },
    { name: "Group B", value: 100 - est_bandeja[1] }
  ];

  const bandeja3 = [
    { name: "Group A", value: est_bandeja[2] },
    { name: "Group B", value: 100 - est_bandeja[2] }
  ];

  const bandeja4 = [
    { name: "Group A", value: est_bandeja[3] },
    { name: "Group B", value: 100 - est_bandeja[3] }
  ];

   //datos para los gráficos de los lotes

   const lote1 = [
    { name: "Group A", value: est_lote[0] },
    { name: "Group B", value: 100 - est_lote[0] }
  ];

  const lote2 = [
    { name: "Group A", value: est_lote[1] },
    { name: "Group B", value: 100 - est_lote[1] }
  ];

  const lote3 = [
    { name: "Group A", value: est_lote[2] },
    { name: "Group B", value: 100 - est_lote[2] }
  ];

  const lote4 = [
    { name: "Group A", value: est_lote[3] },
    { name: "Group B", value: 100 - est_lote[3] }
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
        <div className="bandejasArriba">
          <div className="bandeja1">
            <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={bandeja1} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {bandeja1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_bandeja[0]}</p>
            </div>
            <p>END-CAPPING</p>
          </div>

          <div className="bandeja2">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={bandeja2} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {bandeja2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_bandeja[1]}</p>
            </div>
            <p>DESP-LATERAL</p>
          </div>
          </div>
          <div className="bandejasAbajo">
          <div className="bandeja3">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={bandeja3} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {bandeja3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_bandeja[2]}</p>
            </div>
            <p>DESP-SUPERFICIAL</p>
          </div>

          <div className="bandeja4">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={bandeja4} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {bandeja4.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_bandeja[3]}</p>
            </div>
            <p>DEFECTUOSAS</p>
          </div>
          </div>
        </div>

        <div className="statsLote">
          <h2 className='tituloLote'>ESTADÍSTICA LOTE</h2>
          <div className="lotesArriba">
          <div className="lote1">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={lote1} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {lote1.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_lote[0]}</p>
            </div>
            <p>END-CAPPING</p>
          </div>

          <div className="lote2">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={lote2} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {lote2.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_lote[1]}</p>
            </div>
            <p>DESP-LATERAL</p>
          </div>
          </div>
          <div className="lotesAbajo">
          <div className="lote3">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={lote3} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {lote3.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_lote[2]}</p>
            </div>
            <p>DESP-SUPERFICIAL</p>
          </div>

          <div className="lote4">
          <div className="chart">
            <ResponsiveContainer width="100%" height={80}>
              <PieChart>

                <Pie 
                  data={lote4} 
                  dataKey="value" 
                  outerRadius={35}
                  innerRadius={25}
                  fill="#8884d8"
                >
                  {lote4.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />

                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p>{est_lote[3]}</p>
            </div>
            <p>DEFECTUOSAS</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filas;
