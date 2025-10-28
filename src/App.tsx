import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Agenda from "./pages/Agenda";
import "./App.css";

function App() {
  return (
    <div className="app-container bg-dark text-light">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm fixed-top">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Sección izquierda: logo + login + registro + instagram */}
          <div className="d-flex align-items-center gap-3">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src="public/imagenes/logostudiodanger.png"
                alt="Logo"
                width="50"
                height="44"
                className="me-2"
              />
              <span className="fw-bold text-warning">StudioDanger</span>
            </Link>

            <Link className="nav-link text-warning px-2" to="/login">
              Login
            </Link>
            <Link className="nav-link text-warning px-2" to="/registro">
              Registro
            </Link>

            <a
              href="https://www.instagram.com/studiodanger_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public/imagenes/logo-instagram.png"
                alt="Instagram"
                width="30"
                height="30"
                className="logo-instagram"
              />
            </a>
          </div>

          {/* Botón */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menú principal */}
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/servicios">
                  Servicios y Precios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/galeria">
                  Galería
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-warning" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="main-content pt-5 mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/agenda" element={<Agenda />} />
        </Routes>
      </div>

      {/* FOOTER */}
      <footer className="footer text-center py-3 bg-dark text-warning border-top border-warning">
        © 2025 DangerBook - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
