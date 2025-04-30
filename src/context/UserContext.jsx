import { createContext, useContext, useState, useEffect, useCallback } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user, setUser] = useState(
    localStorage.getItem("email")
      ? { email: localStorage.getItem("email") }
      : null
  );

  // LOGIN
  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log('Respuesta del backend (login):', data);

      if (data.token) {
        setToken(data.token);
        setUser({ email: data.email });
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        return data;
      } else {
        throw new Error("Credenciales inválidas");
      }
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    }
  };

  // REGISTER
  const register = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      console.log("Respuesta del backend (register):", data);
  
      if (data.token) {
        setToken(data.token);
        setUser({ email: data.email });
        localStorage.setItem("token", data.token);
        localStorage.setItem("email", data.email);
        return data;
      } else {
        throw new Error("No se pudo registrar");
      }
    } catch (error) {
      console.error("Register error:", error.message);
      throw error;
    }
  };
  
  // LOGOUT
  const logout = () => {
    setToken("");
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // GET PROFILE
  const getProfile = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (data.email) {
        setUser({ email: data.email });
        localStorage.setItem("email", data.email);
      }
    } catch (error) {
      console.error("Error al obtener perfil:", error.message);
    }
  }, [token]); // Dependemos de 'token' porque la API requiere el token para obtener el perfil.

  useEffect(() => {
    if (token && !user) {
      getProfile();
    }
  }, [token, user, getProfile]); // Añadimos las dependencias

  return (
    <UserContext.Provider
      value={{ token, user, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);