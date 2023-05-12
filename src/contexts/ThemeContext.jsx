import { createContext, useState } from "react";

export const ThemeContext = createContext({});

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState("darkTheme");

  const toggleTheme = () => {
    setTheme(theme === "lightTheme" ? "darkTheme" : "lightTheme");
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );  
}

