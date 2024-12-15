import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const UserContext = createContext('UserContext');

// Proveedor del contexto
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Estado inicial en true

  const login = () => setToken(true); 
  const logout = () => setToken(false); 

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children} 
    </UserContext.Provider>
  );
};

// Hook personalizado para usar el contexto
export const useUserContext = () => useContext(UserContext);


