import axios from "axios";

const API_URL = "http://localhost:8081/api/v1/usuarios/login";

export const login = async (email: string, contrasena: string) => {
  return axios.post(API_URL, { email, contrasena });
};
