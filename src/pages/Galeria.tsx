import React from "react";

const Galeria: React.FC = () => {
  return (
    <section className="container py-5 mt-4">
      <h2 className="text-center text-warning mb-5">Galería</h2>

      <div className="row row-cols-1 row-cols-md-2 g-4">

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte3.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte4.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte5.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte6.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte7.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte8.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte9.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 shadow servicio-card">
            <video className="card-video-top" autoPlay muted loop playsInline>
              <source src="public/imagenes/corte10.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Galeria;
