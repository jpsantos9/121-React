import React from "react";

// 
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

// This is used to create context
// context are data that can be used in multiple components
export const ThemeContext = React.createContext(
  themes.dark // default value
);