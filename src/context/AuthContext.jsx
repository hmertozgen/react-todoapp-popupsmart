import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(
    JSON.parse(localStorage.getItem("user")) || ""
  );

  const values = {
    userName,
    setUserName,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useTheme = () => useContext(AuthContext);
