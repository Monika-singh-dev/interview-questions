import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeDisplay = () => {
  const { darkTheme } = useContext(ThemeContext);

  return <div className={darkTheme ? "dark" : "light"}>Theme Display</div>;
};

export default ThemeDisplay;
