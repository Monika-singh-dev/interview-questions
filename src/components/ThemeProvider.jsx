import React, { useState } from "react";
import ThemeContext from "./ThemeContext";


const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <div>
      <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default ThemeProvider;
