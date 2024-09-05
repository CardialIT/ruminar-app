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

export async function postFinanca(data, token) {
  const response = await api.post("/financa", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getFinancas(token) {
  const response = await api.get("/financas", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getFinancaById(id, token) {
  const response = await api.get(`/financa/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateFinanca(id, data, token) {
  const response = await api.put(`/financa/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteFinanca(id, token) {
  const response = await api.delete(`/financa/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getFinancasByUserId(userId, token) {
  const response = await api.get(`/financa/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function postCalculoWater(data, token) {
  const response = await api.post("/calculoagua", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getCalculoWaters(token) {
  const response = await api.get("/calculoaguas", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getCalculoWaterByUserId(userId, token) {
  const response = await api.get(`/calculoagua/user/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function getCalculoWaterById(id, token) {
  const response = await api.get(`/calculoagua/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function updateCalculoWater(id, data, token) {
  const response = await api.put(`/calculoagua/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function deleteCalculoWater(id, token) {
  const response = await api.delete(`/calculoagua/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}