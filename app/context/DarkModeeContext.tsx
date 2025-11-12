"use client";

import { createContext, useState, useLayoutEffect, ReactNode, FC } from "react";

interface DarkModeContextType {
  dark: boolean;
  toggleDark: () => void;
}

interface Props {
  children: ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextType>({
  dark: false,
  toggleDark: () => {},
});

export const DarkModeProvider: FC<Props> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode");
      return saved ? JSON.parse(saved) : false;
    }
    return false;
  });

  useLayoutEffect(() => {
    const body = document.body;
    if (dark) {
      body.classList.add("darkMode");
    } else {
      body.classList.remove("darkMode");
    }
    localStorage.setItem("darkMode", JSON.stringify(dark));
  }, [dark]);

  const toggleDark = () => setDark((prev) => !prev);

  return (
    <DarkModeContext.Provider value={{ dark, toggleDark }}>
      {children}
    </DarkModeContext.Provider>
  );
};
