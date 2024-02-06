// Login.js

import React, { useState } from 'react';
import './Login.css'; // Importar estilos CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión aquí
    console.log('Iniciando sesión:', { email, password });
  };

  return (
    <div className="loginContainer">
      <h2 className="loginTitle">Iniciar Sesión</h2>
      <form className="loginForm">
        <label htmlFor="email" className="loginLabel">
          Correo Electrónico:
        </label>
        <input
          type="email"
          id="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="loginLabel">
          Contraseña:
        </label>
        <input
          type="password"
          id="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" className="loginButton" onClick={handleLogin}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
