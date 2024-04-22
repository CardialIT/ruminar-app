import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function ContextProvider({ children }) {
  const [token, setToken] = useState("");

  const [name, setName] = useState("");

  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AuthContext.Provider
      value={{ token, setToken, name, setName, isAdmin, setIsAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useContextProvider() {
  return useContext(AuthContext);
}
