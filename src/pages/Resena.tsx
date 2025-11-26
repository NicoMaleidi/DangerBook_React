import React, { useState } from "react";
import axios from "axios";

const Resena: React.FC = () => {
  const [comentario, setComentario] = useState("");
  const [calificacion, setCalificacion] = useState("5");

  const [estadoEnvio, setEstadoEnvio] = useState("");
  const [errores, setErrores] = useState({
    comentario: "",
    calificacion: "",
  });

  const validarFormulario = () => {
    const nuevosErrores = { comentario: "", calificacion: "" };

    const califNum = parseInt(calificacion);

    if (!comentario.trim()) {
      nuevosErrores.comentario = "El comentario no puede estar vacío.";
    } else if (comentario.length < 10) {
      nuevosErrores.comentario = "Debe tener al menos 10 caracteres.";
    } else if (comentario.length > 300) {
      nuevosErrores.comentario = "No puede superar los 300 caracteres.";
    }

    if (isNaN(califNum) || califNum < 1 || califNum > 5) {
      nuevosErrores.calificacion = "La calificación debe ser entre 1 y 5.";
    }

    setErrores(nuevosErrores);
    return Object.values(nuevosErrores).every((e) => e === "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      const response = await axios.post(
        "http://localhost:8084/api/v1/resenas",
        {
          comentario,
          calificacion: parseInt(calificacion),
        }
      );

      if (response.status === 200 || response.status === 201) {
        setEstadoEnvio("¡Reseña enviada correctamente! Gracias por tu opinión.");
        setComentario("");
        setCalificacion("5");
        setErrores({ comentario: "", calificacion: "" });
      }
    } catch (error) {
      console.error("Error al enviar la reseña:", error);
      setEstadoEnvio("Error al enviar la reseña. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="container mt-5 mb-5 text-light">
      <h2 className="text-center mb-4 fw-bold">Deja tu reseña</h2>

      {estadoEnvio && (
        <div className="alert alert-info text-center fw-bold">
          {estadoEnvio}
        </div>
      )}

      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card bg-dark text-light p-4 shadow-lg border border-warning">
            <p className="text-center mb-4">
              Tu opinión nos ayuda a mejorar la experiencia en DangerBook.
            </p>

            <form onSubmit={handleSubmit}>
              {/* CALIFICACIÓN */}
              <div className="mb-3">
                <label htmlFor="calificacion" className="form-label">
                  Calificación (1 a 5)
                </label>
                <select
                  id="calificacion"
                  className={`form-control ${
                    errores.calificacion ? "is-invalid" : ""
                  }`}
                  value={calificacion}
                  onChange={(e) => setCalificacion(e.target.value)}
                >
                  <option value="5">5 - Excelente ⭐⭐⭐⭐⭐</option>
                  <option value="4">4 - Muy buena ⭐⭐⭐⭐</option>
                  <option value="3">3 - Buena ⭐⭐⭐</option>
                  <option value="2">2 - Regular ⭐⭐</option>
                  <option value="1">1 - Mala ⭐</option>
                </select>
                {errores.calificacion && (
                  <div className="invalid-feedback">{errores.calificacion}</div>
                )}
              </div>

              {/* COMENTARIO */}
              <div className="mb-3">
                <label htmlFor="comentario" className="form-label">
                  Comentario
                </label>
                <textarea
                  id="comentario"
                  rows={4}
                  className={`form-control ${
                    errores.comentario ? "is-invalid" : ""
                  }`}
                  value={comentario}
                  onChange={(e) => setComentario(e.target.value)}
                ></textarea>
                {errores.comentario && (
                  <div className="invalid-feedback">{errores.comentario}</div>
                )}
              </div>

              <div className="d-flex justify-content-between gap-3">
                <button
                  type="submit"
                  className="btn btn-warning flex-grow-1 fw-bold"
                >
                  Enviar reseña
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

export default Resena;
