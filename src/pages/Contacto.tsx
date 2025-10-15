import React, { useState } from "react";

const Contacto: React.FC = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errores, setErrores] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    mensaje: "",
  });

  const validarFormulario = () => {
    const nuevosErrores = { nombre: "", correo: "", telefono: "", mensaje: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{8,12}$/;

    if (!nombre.trim()) nuevosErrores.nombre = "El nombre no puede estar vacío.";
    if (!correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!emailRegex.test(correo)) {
      nuevosErrores.correo = "Formato de correo inválido.";
    }
    if (!telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!telefonoRegex.test(telefono)) {
      nuevosErrores.telefono = "Debe contener entre 8 y 12 números.";
    }
    if (!mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje no puede estar vacío.";
    } else if (mensaje.length < 10) {
      nuevosErrores.mensaje = "Debe tener al menos 10 caracteres.";
    } else if (mensaje.length > 200) {
      nuevosErrores.mensaje = "No puede superar los 200 caracteres.";
    }

    setErrores(nuevosErrores);
    return Object.values(nuevosErrores).every((e) => e === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validarFormulario()) {
      alert(`Gracias ${nombre}, tu mensaje ha sido enviado correctamente ✉️`);
      setNombre("");
      setCorreo("");
      setTelefono("");
      setMensaje("");
      setErrores({ nombre: "", correo: "", telefono: "", mensaje: "" });
    }
  };

  return (
    <div className="container mt-5 mb-5 text-light">
      <h2 className="text-center mb-4 fw-bold">Contáctanos</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card bg-dark text-light p-4 shadow-lg border border-warning">
            <p className="text-center mb-4">
              Déjanos tu mensaje y te responderemos lo antes posible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  className={`form-control ${
                    errores.nombre ? "is-invalid" : ""
                  }`}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Ingrese su nombre completo"
                />
                {errores.nombre && (
                  <div className="invalid-feedback">{errores.nombre}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  className={`form-control ${
                    errores.correo ? "is-invalid" : ""
                  }`}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  placeholder="Ingrese su correo"
                />
                {errores.correo && (
                  <div className="invalid-feedback">{errores.correo}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  className={`form-control ${
                    errores.telefono ? "is-invalid" : ""
                  }`}
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="Ingrese su número de teléfono"
                />
                {errores.telefono && (
                  <div className="invalid-feedback">{errores.telefono}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={4}
                  className={`form-control ${
                    errores.mensaje ? "is-invalid" : ""
                  }`}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
                {errores.mensaje && (
                  <div className="invalid-feedback">{errores.mensaje}</div>
                )}
              </div>

              <div className="d-flex justify-content-between gap-3">
                <button type="submit" className="btn btn-warning flex-grow-1 fw-bold">
                  Enviar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary flex-grow-1"
                  onClick={() => (window.location.href = "/")}
                >
                  Volver
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

