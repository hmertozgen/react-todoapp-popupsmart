const { createContext, useState, useContext } = require("react");

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  const values = { theme, setTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
