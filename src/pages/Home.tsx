import React from "react";

const Home: React.FC = () => {
  return (
    <div className="main-content">
      {/* Carrusel arriba y a full ancho */}
      <div
        id="carouselExample"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner rounded-0 overflow-hidden shadow-lg">
          <div className="carousel-item active">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QcovvpcUpO_NUQldhZzGt5wSJSVtAiUDqA&s"
              className="d-block w-100"
              alt="Primera imagen"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ATuEUHDQE389vXjDHuBEap4eayLyIAi0xQ&s"
              className="d-block w-100"
              alt="Segunda imagen"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="hola4.jpg"
              className="d-block w-100"
              alt="Tercera imagen"
              style={{ objectFit: "cover", height: "400px" }}
            />
          </div>
        </div>

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

      <h1 className="fw-bold display-5 mt-4" style={{ color: "#FFD700" }}>
        Bienvenid@s a DangerBook estimada clientela💈
      </h1>
      <p className="lead" style={{ color: "#FFD700" }}>
        Conoce, adopta y da amor a tu nuevo mejor amigo.
      </p>
    </div>
  );
};

export default Home;
