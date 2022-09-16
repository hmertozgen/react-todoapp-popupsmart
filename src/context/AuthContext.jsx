import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );
  const handleClick = () => {
    setUser(userName);
    localStorage.setItem("user", JSON.stringify(userName));
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setUserName("");
  };

  const values = {
    userName,
    setUserName,
    handleClick,
    removeUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
