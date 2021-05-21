import React, { useState, createContext, useContext, useEffect } from "react";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

const useProvideAuth = () => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("loggedIn", { username, date: Date.now() });
      setUser({ username });

      return true;
    }
    return false;
  };

  const check = () => {
    const user = localStorage.getItem("loggedIn");

    if (user) {
      setUser({ username: user.username });
    }
  };

  const logout = () => {
    localStorage.removeItem("loggedIn");
    setUser(null);
  };

  useEffect(() => {
    check();
  }, []);

  return { user, login, logout };
};

export const ProvideAuth = ({ children }) => {
  const value = useProvideAuth();

  return (
    <AuthContext.Provider value={{ ...value }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
