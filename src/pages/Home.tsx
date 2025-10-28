import React from "react";

// 📌 Reseñas de clientes
const reseñas = [
  {
    id: 1,
    name: "David Olave",
    title: "Cliente frecuente",
    quote:
      "Excelente atención, los barberos saben lo que hacen y el ambiente es muy cómodo. ¡Siempre salgo conforme!",
    rating: 5,
    imageSrc: "/imagenes/davidolave.png",
  },
  {
    id: 2,
    name: "José Antonio K.",
    title: "Cliente nuevo",
    quote:
      "Me hicieron el mejor corte que he tenido en años. Además el lugar está limpio y bien ambientado. 10/10.",
    rating: 5,
    imageSrc: "/imagenes/kast.png",
  },
  {
    id: 3,
    name: "Sebastián P.",
    title: "Cliente",
    quote:
      "No vuelvo más.",
    rating: 2,
    imageSrc: "/imagenes/piñera.png",
  },
];

const barberos = [
  {
    id: 1,
    nombre: "Martín Svideski",
    rol: "Barbero senior",
    descripcion: "Especialista en fades, estilos urbanos y cuidado de barba.",
    imagen: "/imagenes/martin.png",
  },
  {
    id: 2,
    nombre: "Steve Lázaro",
    rol: "Barbero senior",
    descripcion: "Apasionado por el detalle, cortes modernos y perfilados precisos.",
    imagen: "/imagenes/steve.png",
  },
];

const Home: React.FC = () => {
  return (
    <div className="main-content text-center bg-dark text-light pb-0">

      {/* 🎞️ Carrusel */}
      <div
        id="carouselExample"
        className="carousel slide w-100"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner rounded-0 overflow-hidden shadow-lg">
          <div className="carousel-item active">
            <img
              src="/imagenes/miau.jpg"
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
              src="/imagenes/cortesfichas.jpg"
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

        <div className="row text-center mt-5">
          <div className="col-md-4">
            <i className="bi bi-scissors text-warning fs-1"></i>
            <h5 className="mt-3">Cortes de Precisión</h5>
            <p className="text-light">Estilos clásicos y modernos con toque profesional.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-droplet text-warning fs-1"></i>
            <h5 className="mt-3">Afeitado Clásico</h5>
            <p className="text-light">Relájate con una experiencia tradicional.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-stars text-warning fs-1"></i>
            <h5 className="mt-3">Cuidado Facial</h5>
            <p className="text-light">Limpieza facial para mantener tu piel fresca y sana.</p>
          </div>
        </div>
      </section>
      <section className="container my-5">
        <h2 className="text-warning fw-bold mb-4 text-center">Nuestro equipo</h2>
        <div className="row justify-content-center">
          {barberos.map((b) => (
            <div key={b.id} className="col-12 col-md-4 mb-4">
              <div className="card bg-secondary-subtle text-dark border-0 shadow text-center p-3">
                <img
                  src={b.imagen}
                  alt={b.nombre}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "120px", height: "120px", objectFit: "cover" }}
                />
                <h5 className="fw-bold text-warning">{b.nombre}</h5>
                <p className="mb-1">{b.rol}</p>
                <small className="text-secondary">{b.descripcion}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.3386732374245!2d-70.72080572506933!3d-33.3624260734157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c0d31e18c3ff%3A0x3f6f993b990af225!2sAv.%20Las%20Torres%20152%2C%208721874%20Quilicura%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1697399999999!5m2!1ses!2scl"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-6 text-start">
            <h2 className="text-warning fw-bold mb-3">📍 Dónde estamos</h2>
            <h4 className="text-warning">StudioDanger Barbería</h4>
            <p className="text-light">
              Nos encontramos en <strong>Avenida Las Torres 152, Quilicura</strong>.
            </p>
            <p className="text-light">
              A pasos del metro Lo Cruzat, en una zona de fácil acceso.
            </p>
            <a
              href="https://www.google.com/maps/place/Av.+Las+Torres+152,+8721874+Quilicura,+Regi%C3%B3n+Metropolitana"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-warning fw-bold mt-2"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      <section className="container my-5">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
              Reseñas de nuestros clientes
            </h2>
            <p className="display-5 mb-4 mb-md-5 text-center text-warning">
              Cumplimos lo que prometemos. Ve lo que nuestros clientes expresan sobre nosotros.
            </p>
            <hr className="w-50 mx-auto mb-5 border-light-subtle" />
          </div>
        </div>

        <div className="row gy-4">
          {reseñas.map((reseña) => (
            <div key={reseña.id} className="col-12 col-md-6 col-xl-4">
              <div className="card h-100 shadow border-0 bg-secondary-subtle text-dark text-center p-3">
                <img
                  src={reseña.imageSrc}
                  alt={reseña.name}
                  className="rounded-circle mx-auto mb-3"
                  style={{ width: "90px", height: "90px", objectFit: "cover" }}
                />
                <h5 className="fw-bold">{reseña.name}</h5>
                <p className="fst-italic">“{reseña.quote}”</p>
                <p className="text-warning mb-0">{"⭐".repeat(reseña.rating)}</p>
              </div>
            </div>
          ))}
        </div>
        
      <footer className="bg-black text-light py-4 mt-5">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <h5 className="text-warning fw-bold">Contáctanos</h5>
            <p className="mb-1">📞 +56 9 9080 7035</p>
            <p className="mb-1">✉️ studio.dangerbook@gmail.com</p>
            <p className="mb-0">📍 Avenida Las Torres 152, Quilicura</p>
          </div>
          <div className="mt-3 mt-md-0">
            <a href="/contacto" className="btn btn-warning fw-bold">
              Ir a Contacto
            </a>
          </div>
        </div>
      </footer>
      </section>
    </div>
  );
};

export default Home;
