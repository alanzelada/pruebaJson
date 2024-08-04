import './App.css';
import  Json from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
        Json.map(json =>{
          return(
            <div className='jsonBox'>
              <div>Bandeja: {json.bandeja}</div>
              <div>Fila: {json.fila}</div>
              <div>Lote: {json.lote}</div>
              <div>Status: {json.status ? 'True' : 'False'}</div>
            </div>

          )
        })
        }
      </header>
    </div>
  );
}

export default App;
