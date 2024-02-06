// RegistroUsuario.js

import React, { useState } from 'react';
import './RegistroUsuario.css'; // Importar estilos CSS

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleRegistro = () => {
    // Lógica de registro de usuario aquí
    console.log('Registrando usuario:', { nombre, email, contrasena });
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Registro de Usuario</h2>
      <form className="form">
        <input
          type="text"
          placeholder="Nombre"
          className="input"
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="input"
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button type="button" className="button" onClick={handleRegistro}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuario;
