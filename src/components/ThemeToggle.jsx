import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle {/* Display the current theme */}
      </button>
    </div>
  );
};

export default ThemeToggle;
