import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);
  const [user, setUser] = useState(token ? { 
    nombre: "Camila Soto Valenzuela",
    email: "cami@gmail.com", 
    password: "123456" 
  } : null);
  

  const login = (userData) => {
    setUser(userData);
    setToken(true);
  };

  const logout = () => {
    setUser(null);
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
