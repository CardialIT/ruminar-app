import axios from "axios";

const BASE_URL = process.env.RUMINAR_URL_LOCAL;

export async function getLivraria(data) {
  const response = await axios.get(`${BASE_URL}/livraria`, data);
  return response.data;
}

export async function postLivraria(data) {
  const response = await axios.post(`${BASE_URL}/livraria`, data);
  return response.data;
}
