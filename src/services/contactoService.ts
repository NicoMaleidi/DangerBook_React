import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/contacto";

export const enviarContacto = async (data: any) => {
  return axios.post(`${API_URL}/guardar`, data);
};
