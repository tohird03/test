import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ThemeContext =  createContext();

function ThemeProvider({children}) {
  const themeLocal = window.localStorage.getItem('theme')

  const [theme, setTheme] = useState(themeLocal || 'light')

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{theme, setTheme}}>
    {children}
  </ThemeContext.Provider>
}

export {ThemeContext, ThemeProvider}
