import axios from "axios";

const API_URL = "http://localhost:8084/api/v1/resenas";

export const enviarResena = async (data: any) => {
  return axios.post(API_URL, data);
};
