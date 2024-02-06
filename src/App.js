import React from 'react';
import RegistroUsuario from './components/RegistroUsuario';
import Login from './components/Login';
import AgregarGasto from './components/AgregarGasto';

const App = () => {
  const manejarAgregarGasto = (nuevoGasto) => {
    // Lógica para manejar el nuevo gasto
    console.log('Nuevo gasto:', nuevoGasto);
  };
  return (
    <div>
      <RegistroUsuario/>
      <Login/>
      <AgregarGasto onAgregarGasto={manejarAgregarGasto} />
    </div>
  );
};

export default App;




