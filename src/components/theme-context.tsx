"use client";

import { createContext, useContext, type ReactNode } from "react";

const ThemeContext = createContext<{ dark: boolean; toggle: () => void }>({ dark: false, toggle: () => undefined });

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ThemeContext.Provider value={{ dark: false, toggle: () => undefined }}>{children}</ThemeContext.Provider>;
}

export function useTheme() { return useContext(ThemeContext); }
