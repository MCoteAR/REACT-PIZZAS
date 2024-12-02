
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Pizzería Mamma Mía
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">
                Registro
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Carrito
              </Link>
            </li>
            <li className="nav-item">
              {/* Enlace del error */}
              <Link className="nav-link" to="/ruta-inexistente">
                Error 404
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








/*import './Navbar.css';




const Navbar = () => {
    const total = 25000;
    const token = false;
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="btn">🍕 Home</button>
        {token ? (
          <>
            <button className="btn">🔓 Profile</button>
            <button classname="btn">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn">🔐 Login</button>
            <button className="btn">🔐 Register</button>
          </>
        )}
        <button className="btn">🛒 Total: ${total.toLocaleString()}</button>
      </nav>
    );
  };
  
  export default Navbar;*/
  