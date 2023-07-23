import React from 'react';
import ReactDOM from 'react-dom';
import ColoradoStateParks from './ColoradoStateParks'; 
import { trees, wildlife } from './parks/RockyMountain';
import howManyParks from './parks/howManyParks'; 
import MesaVerde from './parks/MesaVerde'; 

function App() {
  howManyParks();

  console.log(trees);
  wildlife();

  return (
    <div>
      <ColoradoStateParks />
      <MesaVerde />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));