// src/contexts/DarkModeContext.jsx
import  { createContext, useState } from "react";

export const DarkModeContext = createContext(null as any);

export function DarkModeProvider({ children }:any) {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
