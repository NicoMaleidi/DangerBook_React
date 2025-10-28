import React from "react";
import { useNavigate } from "react-router-dom";

const Servicios: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center mt-5 pt-5 text-light">
      <h1 className="text-warning fw-bold mb-3">
        💈 Nuestros Servicios 💈
      </h1>
      <p className="text-secondary mb-5">
        Descubre los servicios que ofrecemos para mantener tu estilo fresco y moderno.
      </p>

      {/* GRID de servicios */}
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {/* --- SERVICIO 1 --- */}
        <div className="col">
          <div className="card servicio-card bg-dark text-light h-100">
            <img
              src="/imagenes/degradado.png"
              className="card-img-top"
              alt="Degradado"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-warning">Degradado</h5>
                <p className="card-text">
                  Un corte degradado que se adapta a tu estilo personal y resalta tus facciones.
                </p>
                <h6 className="text-light fw-bold mt-3">$12.000 CLP</h6>
              </div>
              <button
                onClick={() => navigate("/agenda")}
                className="btn btn-warning fw-bold mt-3"
              >
                Reservar 💬
              </button>
            </div>
          </div>
        </div>

        {/* --- SERVICIO 2 --- */}
        <div className="col">
          <div className="card servicio-card bg-dark text-light h-100">
            <img
              src="/imagenes/afeitado.png"
              className="card-img-top"
              alt="Afeitado Profesional"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-warning">Afeitado Profesional</h5>
                <p className="card-text">
                  Relájate con un afeitado clásico con toallas calientes y productos premium.
                </p>
                <h6 className="text-light fw-bold mt-3">$8.000 CLP</h6>
              </div>
              <button
                onClick={() => navigate("/agenda")}
                className="btn btn-warning fw-bold mt-3"
              >
                Reservar 💬
              </button>
            </div>
          </div>
        </div>

        {/* --- SERVICIO 3 --- */}
        <div className="col">
          <div className="card servicio-card bg-dark text-light h-100">
            <img
              src="/imagenes/limpiezafacial.png"
              className="card-img-top"
              alt="Cuidado Facial"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-warning">Limpieza Facial</h5>
                <p className="card-text">
                  Tratamientos faciales con productos naturales para mantener tu piel sana y fresca.
                </p>
                <h6 className="text-light fw-bold mt-3">$8.000 CLP</h6>
              </div>
              <button
                onClick={() => navigate("/agenda")}
                className="btn btn-warning fw-bold mt-3"
              >
                Reservar 💬
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicio-card bg-dark text-light h-100">
            <img
              src="/imagenes/cortemasbarba.png"
              className="card-img-top"
              alt="Cuidado Facial"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-warning">Corte + Barba</h5>
                <p className="card-text">
                  Combinación perfecta de corte de cabello y arreglo de barba para un look impecable.
                </p>
                <h6 className="text-light fw-bold mt-3">$17.000 CLP</h6>
              </div>
              <button
                onClick={() => navigate("/agenda")}
                className="btn btn-warning fw-bold mt-3"
              >
                Reservar 💬
              </button>
            </div>
          </div>
        </div>

        {/* --- SERVICIO 4 --- */}
        <div className="col">
          <div className="card servicio-card bg-dark text-light h-100">
            <img
              src="/imagenes/corteclasico.png"
              className="card-img-top"
              alt="Corte Clásico"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-warning">Corte Clásico</h5>
                <p className="card-text">
                  Estilo tradicional con acabado limpio y profesional, ideal para toda ocasión.
                </p>
                <h6 className="text-light fw-bold mt-3">$10.000 CLP</h6>
              </div>
              <button
                onClick={() => navigate("/agenda")}
                className="btn btn-warning fw-bold mt-3"
              >
                Reservar 💬
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card servicio-card bg-dark text-light h-100">
            <img
              src="/imagenes/completo.png"
              className="card-img-top"
              alt="Corte Clásico"
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <div>
                <h5 className="card-title text-warning">Servicio Completo</h5>
                <p className="card-text">
                  Incluye corte de cabello, arreglo de barba y limpieza facial para un look impecable.
                </p>
                <h6 className="text-light fw-bold mt-3">$20.000 CLP</h6>
              </div>
              <button
                onClick={() => navigate("/agenda")}
                className="btn btn-warning fw-bold mt-3"
              >
                Reservar 💬
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
