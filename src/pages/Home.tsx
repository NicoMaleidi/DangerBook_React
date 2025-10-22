import React from "react";

const Home: React.FC = () => {
  return (
    <div className="main-content text-center bg-dark text-light pb-5">
      {/* Carrusel principal */}
      <div
        id="carouselExample"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner rounded-0 overflow-hidden shadow-lg">
          <div className="carousel-item active">
            <img
              src="src/imagenes/miau.jpg"
              className="d-block w-100"
              alt="Primera imagen"
              style={{ objectFit: "cover", height: "420px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/imagenes/cortesfichas.jpg"
              className="d-block w-100"
              alt="Segunda imagen"
              style={{ objectFit: "cover", height: "420px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/imagenes/hola4.jpg"
              className="d-block w-100"
              alt="Tercera imagen"
              style={{ objectFit: "cover", height: "420px" }}
            />
          </div>
        </div>

        {/* Controles del carrusel */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: "invert(100%)" }}
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: "invert(100%)" }}
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {/* Sección de bienvenida */}
      <section className="mt-4 container">
        <h1
          className="fw-bold display-5 mb-3"
          style={{ color: "#FFD700", textShadow: "2px 2px 10px rgba(0,0,0,0.6)" }}
        >
          Bienvenid@s a DangerBook 💈
        </h1>
        <p
          className="lead mx-auto"
          style={{
            color: "#FFD700",
            maxWidth: "750px",
            lineHeight: "1.6",
          }}
        >
          Deja tu estilo en nuestras manos expertas. En
          <strong> DangerBook</strong>, combinamos tradición y vanguardia para
          ofrecerte cortes de cabello y afeitados impecables. 
        </p>
      </section>
    </div>
  );
};

export default Home;
