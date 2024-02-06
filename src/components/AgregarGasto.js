// AgregarGasto.js

import React, { useState } from 'react';
import './AgregarGasto.css'; // Importar estilos CSS

const AgregarGasto = ({ onAgregarGasto }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [listaGastos, setListaGastos] = useState([]); // Nuevo estado para la lista de gastos

  const handleAgregarGasto = () => {
    if (nombre.trim() === '' || cantidad.trim() === '') {
      // Validación básica, ambos campos deben estar llenos
      alert('Por favor, complete todos los campos.');
      return;
    }

    const nuevoGasto = {
      nombre,
      cantidad: parseFloat(cantidad),
    };

    // Agregar el nuevo gasto a la lista
    setListaGastos([...listaGastos, nuevoGasto]);

    // Llamar a la función proporcionada para agregar el gasto
    onAgregarGasto(nuevoGasto);

    // Limpiar los campos después de agregar un gasto
    setNombre('');
    setCantidad('');
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Agregar Gasto</h2>
      <form className="form">
        <label htmlFor="nombre" className="label">
          Nombre del Gasto:
        </label>
        <input
          type="text"
          id="nombre"
          className="input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label htmlFor="cantidad" className="label">
          Cantidad:
        </label>
        <input
          type="number"
          id="cantidad"
          className="input"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="button" className="button" onClick={handleAgregarGasto}>
          Agregar Gasto
        </button>
      </form>
      <div className="gastosContainer">
        <h3 className="subtitle">Lista de Gastos:</h3>
        <ul className="listaGastos">
          {listaGastos.map((gasto, index) => (
            <li key={index} className="itemGasto">
              {gasto.nombre} - ${gasto.cantidad}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgregarGasto;
