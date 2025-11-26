import React, { useEffect, useState } from "react";
import {  obtenerDias, obtenerBloques, 
          obtenerHorarios, obtenerDisponibilidad
 } from "../services/horariosService";
import axios from "axios";

const Agenda: React.FC = () => {
  const [dias, setDias] = useState<any[]>([]);
  const [bloques, setBloques] = useState<any[]>([]);
  const [horarios, setHorarios] = useState<any[]>([]);
  const [disponibilidad, setDisponibilidad] = useState<any[]>([]);

  const [barbero, setBarbero] = useState("");
  const [diaSeleccionado, setDiaSeleccionado] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [horasFiltradas, setHorasFiltradas] = useState<any[]>([]);

  const [reservaConfirmada, setReservaConfirmada] = useState(false);

  useEffect(() => {
    obtenerDias().then((res) => setDias(res.data));
    obtenerBloques().then((res) => setBloques(res.data));
    obtenerHorarios().then((res) => setHorarios(res.data));
    obtenerDisponibilidad().then((res) => setDisponibilidad(res.data));
  }, []);

  // Filtrar horarios según día + barbero
  useEffect(() => {
    if (!diaSeleccionado || !barbero) return;

    const horariosDelDia = horarios.filter(
      (h) => h.id_dia === parseInt(diaSeleccionado)
    );

    // Filtrar horarios donde el barbero está disponible
    const disponibles = horariosDelDia.filter((h) =>
      disponibilidad.some(
        (d) =>
          d.id_horario === h.id_horario &&
          d.id_usuario.toString() === barbero.toString()
      )
    );

    // Convertir bloque → hora visual
    const final = disponibles.map((h) => {
      const b = bloques.find((bl) => bl.id_bloque === h.id_bloque);
      return {
        id_horario: h.id_horario,
        hora: new Date(b.fechaInicio).toLocaleTimeString("es-CL", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    });

    setHorasFiltradas(final);
  }, [diaSeleccionado, barbero, horarios, disponibilidad, bloques]);

  const reservar = async () => {
    const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");

    if (!usuario.id_usuario) {
      alert("Debes iniciar sesión para reservar.");
      return;
    }

    await axios.post("http://localhost:8083/api/v1/agendamiento/guardar", {
      id_usuario: usuario.id_usuario,
      id_horario: horaSeleccionada,
      id_servicio: 1, // temporal, puedes ajustarlo
      subtotal: "10000",
    });

    setReservaConfirmada(true);
  };

  if (reservaConfirmada)
    return (
      <div className="container mt-5 pt-5 text-center text-light">
        <h2 className="text-success">¡Reserva realizada con éxito!</h2>
      </div>
    );

  return (
    <div className="container mt-5 pt-5 text-light">
      <h1 className="text-warning fw-bold mb-4 text-center">Agendar Hora</h1>

      <div className="mb-3">
        <label className="form-label">Barbero</label>
        <select
          className="form-control"
          value={barbero}
          onChange={(e) => setBarbero(e.target.value)}
        >
          <option value="">Seleccione barbero</option>
          <option value="7">Steve Lázaro</option>
          <option value="8">Martín Svideski</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Día</label>
        <select
          className="form-control"
          value={diaSeleccionado}
          onChange={(e) => setDiaSeleccionado(e.target.value)}
        >
          <option value="">Seleccione un día</option>
          {dias.map((d) => (
            <option key={d.id_dia} value={d.id_dia}>
              {d.dia}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Hora</label>
        <select
          className="form-control"
          value={horaSeleccionada}
          onChange={(e) => setHoraSeleccionada(e.target.value)}
          disabled={!horasFiltradas.length}
        >
          <option value="">Seleccione una hora</option>

          {horasFiltradas.map((h) => (
            <option key={h.id_horario} value={h.id_horario}>
              {h.hora}
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={reservar}
        className="btn btn-warning w-100 mt-3 fw-bold"
        disabled={!horaSeleccionada}
      >
        Reservar
      </button>
    </div>
  );
};

export default Agenda;
