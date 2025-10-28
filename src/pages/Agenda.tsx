import React, { useState } from "react";

const Agenda: React.FC = () => {
  const [reservaConfirmada, setReservaConfirmada] = useState(false);
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [barbero, setBarbero] = useState("");
  const [errores, setErrores] = useState({
    nombre: "",
    fecha: "",
    hora: "",
    barbero: "",
  });

  const validar = () => {
    const nuevos = { nombre: "", fecha: "", hora: "", barbero: "" };

    if (!nombre.trim()) nuevos.nombre = "El nombre es obligatorio.";
    if (!barbero.trim()) nuevos.barbero = "Selecciona un barbero.";
    if (!fecha.trim()) nuevos.fecha = "Selecciona una fecha válida.";
    if (!hora.trim()) nuevos.hora = "Selecciona una hora disponible.";

    setErrores(nuevos);
    return Object.values(nuevos).every((v) => v === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validar()) return;

    setReservaConfirmada(true);
    setNombre("");
    setFecha("");
    setHora("");
    setBarbero("");
  };

  return (
    <div className="container mt-5 pt-5 text-center text-light">
      <h1 className="text-warning fw-bold mb-4">Agenda tu cita 💈</h1>
      <p className="text-secondary mb-5">
        Selecciona tu barbero, fecha y hora para reservar.
      </p>

      {!reservaConfirmada ? (
        <form
          onSubmit={handleSubmit}
          className="mx-auto bg-dark p-4 rounded shadow-lg border border-warning"
          style={{ maxWidth: "500px" }}
          noValidate
        >
          {/* NOMBRE */}
          <div className="mb-3 text-start">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
            {errores.nombre && (
              <div className="invalid-feedback">{errores.nombre}</div>
            )}
          </div>

          {/* BARBERO */}
          <div className="mb-3 text-start">
            <label className="form-label">Barbero</label>
            <select
              className={`form-control ${errores.barbero ? "is-invalid" : ""}`}
              value={barbero}
              onChange={(e) => setBarbero(e.target.value)}
            >
              <option value="">Selecciona un barbero</option>
              <option value="Steve Lázaro">Steve Lázaro</option>
              <option value="Martín Svideski">Martín Svideski</option>
            </select>
            {errores.barbero && (
              <div className="invalid-feedback">{errores.barbero}</div>
            )}
          </div>

          {/* FECHA */}
          <div className="mb-3 text-start">
            <label className="form-label">Fecha</label>
            <input
              type="date"
              className={`form-control ${errores.fecha ? "is-invalid" : ""}`}
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
            />
            {errores.fecha && (
              <div className="invalid-feedback">{errores.fecha}</div>
            )}
          </div>

          {/* HORA */}
          <div className="mb-3 text-start">
            <label className="form-label">Hora</label>
            <select
              className={`form-control ${errores.hora ? "is-invalid" : ""}`}
              value={hora}
              onChange={(e) => setHora(e.target.value)}
            >
              <option value="">Selecciona una hora</option>
              {[
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
              ].map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            {errores.hora && (
              <div className="invalid-feedback">{errores.hora}</div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-warning fw-bold w-100 mt-3"
          >
            Reservar Ahora
          </button>
        </form>
      ) : (
        <div className="alert alert-success mt-4" role="alert">
          <h4 className="alert-heading text-success fw-bold">
            ¡Reserva confirmada! ✅
          </h4>
          <p>
            Tu cita ha sido agendada con éxito. ¡Te esperamos en{" "}
            <strong>StudioDanger</strong> para dejarte impecable!
          </p>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setReservaConfirmada(false)}
          >
            Agendar otra cita
          </button>
        </div>
      )}
    </div>
  );
};

export default Agenda;
