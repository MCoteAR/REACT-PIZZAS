import React from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext"; // Importar el hook personalizado

const Navbar = () => {
  const { token, logout } = useUserContext(); // Accede al estado `token` y al método `logout`

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
            {/* Siempre visibles */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/total">
                Total
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                🛒 Carrito
              </Link>
            </li>

            {/* Si el usuario está autenticado */}
            {token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    Perfil
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-danger"
                    onClick={logout} // Llama al método logout
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              // Si el usuario NO está autenticado
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Iniciar Sesión
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Registro
                  </Link>
                </li>
              </>
            )}
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
  