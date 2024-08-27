import axios from "axios";

export const api = axios.create({ baseURL: "https://ruminar-back-production.up.railway.app/" });

export async function login(data) {
  const response = await api.post("login", data);
  return response.data;
}

export async function register(data) {
  const response = await api.post("cadastro", data);
  return response.data;
}


export async function getLivraria(userId, token) {
  const response = await api.get(`/livraria/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postLivraria(data, token) {
  const response = await api.post("/livraria", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteLivraria(id, token) {
  const response = await api.delete(`/livraria/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function getDieta(userId, token) {
  const response = await api.get(`/dieta/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postDieta(data, token) {
  const response = await api.post("/dieta", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteDieta(id, token) {
  const response = await api.delete(`/dieta/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function getResumo(userId, token) {
  const response = await api.get(`/resumo/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function postResumo(data, token) {
  const response = await api.post("/resumo", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.data;
}

export async function deleteResumo(id, token) {
  const response = await api.delete(`/resumo/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
    
  );
  return response.data;
}