import axios from "axios";

export const api = axios.create({ baseURL: "https://ruminar.onrender.com" });

export async function getLivraria(data) {
  const response = await api.get("/livraria", data);
  return response.data;
}

export async function postLivraria(data) {
  const response = await api.post("/livraria", data);
  return response.data;
}
