import axios from "axios";

const API = "http://localhost:8082/api/v1";

export const obtenerDias = () => axios.get(`${API}/dia`);
export const obtenerBloques = () => axios.get(`${API}/bloque`);
export const obtenerHorarios = () => axios.get(`${API}/horarios`);
export const obtenerDisponibilidad = () => axios.get(`${API}/disponibilidad`);
