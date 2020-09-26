import React from "react";

export const themes = {
  warm: {
    color: "#16316C",
  },
  primary: {
    color: "#4285f4",
  },
  danger: {
    color: "#F44242",
  },
  success: {
    color: "#0F9D58",
  },
};

const ThemeContext = React.createContext(themes);

export default ThemeContext;
