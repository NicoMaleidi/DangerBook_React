import React, { useState, useEffect } from 'react';
// Nota: En un proyecto real de React, los estilos y Bootstrap
// se importan globalmente, no se definen en el componente.

const GaleriaPage: React.FC = () => {
  // 1. Hook para manejar el estado del nombre de usuario en la navbar
  const [userName, setUserName] = useState('Login');
  const [userHref, setUserHref] = useState('login.html');

  // 2. Hook useEffect para simular el código JavaScript original
  // Esto se ejecuta una vez al cargar el componente para revisar el localStorage
  useEffect(() => {
    const nombreUsuario = localStorage.getItem("usuarioNombre");
    if (nombreUsuario) {
      setUserName(`Hola, ${nombreUsuario}`);
      setUserHref("#"); 
    } else {
      setUserName("Login");
      setUserHref("login.html"); 
    }
  }, []); // El array vacío asegura que se ejecute solo al montar el componente

  return (
    // En React, todo debe estar envuelto en un solo elemento padre
    <>
      {/* --------------------------- BARRA DE NAVEGACIÓN (NAVBAR) --------------------------- */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3 collapse navbar-collapse">
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img src="imagenes/logostudiodanger.png" alt="Logo" width="50" height="44" className="me-2" />
              <span className="fw-bold">StudioDanger</span>
            </a>
            {/* Aquí usamos los estados userName y userHref */}
            <a href={userHref} className="text-light nav-link px-2" id="navbarUser">
              {userName}
            </a>
            <a href="registro.html" className="text-light nav-link px-2">Registro</a>
            <a href="https://www.instagram.com/studiodanger_/" target="_blank">
              <img src="imagenes/logo-instagram.png" alt="Instagram" className="logo-instagram " />
            </a>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="dangerbook.html">Inicio</a></li>
              <li className="nav-item"><a className="nav-link" href="nosotros.html">Nosotros</a></li>
              <li className="nav-item"><a className="nav-link" href="serviciosyprecios.html">Servicios y Precios</a></li>
              <li className="nav-item"><a className="nav-link active" href="#">Galería</a></li>
              <li className="nav-item"><a className="nav-link" href="contacto.html">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* ----------------------------------------------------------------------------------- */}
      
      <br />
      
      {/* --------------------------------- SECCIÓN GALERÍA --------------------------------- */}
      <section className="container py-5">
        <h2 className="text-center text-warning mb-5">Galería</h2>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          
          {/* Item 1: Imagen */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <img src="imagenes/fade1.jpeg" className="card-img-top" alt="fade1" />
            </div>
          </div>

          {/* Item 2: Video fade4.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/corte1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 3: Video fade6.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/fade6.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 4: Video fade5.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/fade5.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 5: Video fade3.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/fade3.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 6: Video degradado.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/degradado.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 7: Video barba.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/barba.mp4" />
              </video>
            </div>
          </div>

          {/* Item 8: Video limpiezafacial.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/limpiezafacial.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 9: Video cortemasbarba.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/cortemasbarba.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Item 10: Video cortemasdiseño.mp4 */}
          <div className="col">
            <div className="card h-100 shadow servicio-card">
              <video className="card-video-top" autoPlay muted loop playsInline>
                <source src="imagenes/cortemasdiseño.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default GaleriaPage;