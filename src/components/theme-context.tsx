"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

const ThemeContext = createContext<{ dark: boolean; toggle: () => void }>({ dark: false, toggle: () => undefined });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  return <ThemeContext.Provider value={{ dark, toggle: () => setDark((value) => !value) }}>{children}</ThemeContext.Provider>;
}

export function useTheme() { return useContext(ThemeContext); }
