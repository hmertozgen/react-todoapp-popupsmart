const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );
  const changeTheme = () => {
    setTheme(!theme);
  };

  const values = { theme, setTheme, changeTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
