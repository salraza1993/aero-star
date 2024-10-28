"use client";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export interface ListMenuInterface { type: string; label: string; icon: string; selected: boolean; }

interface ThemeContextType {
  currentMode: string;
  listMenu: ListMenuInterface[],
  getAppearanceMode: () => string;
  setThemeAppearance: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeChangerProvider({ children }: { children: ReactNode }): React.ReactElement {
  const storageKey: string = 'appearanceMode';
  const defaultAppearanceValue: string = "auto";
  const [listMenu, setListMenu] = useState<ListMenuInterface[]>([
    { type: 'auto', label: "OS Default", icon: 'desktop', selected: true },
    { type: 'dark', label: "Dark", icon: 'moon', selected: false },
    { type: 'light', label: "Light", icon: 'sun', selected: false },
  ]);
  const [currentMode, setCurrentMode] = useState(defaultAppearanceValue);

  const getAppearanceMode = (): string => {
    return window.localStorage.getItem(storageKey) || defaultAppearanceValue;
  };

  const setThemeAppearance = (theme: string): void => {
    const rootElement = document.documentElement;
    if (rootElement) {
      rootElement.setAttribute('data-theme', theme);
    }
    window.localStorage.setItem(storageKey, theme);
    setCurrentMode(theme);
    setListMenu(listMenu.map((item:ListMenuInterface) => ({...item, selected: item.type === theme })));
  };

  const initializeThemeSetup = () => {
    const savedTheme = getAppearanceMode();
    setThemeAppearance(savedTheme);
  };

  useEffect(() => {
    initializeThemeSetup();
  }, []);

  return (
    <ThemeContext.Provider value={{ currentMode, setThemeAppearance, getAppearanceMode, listMenu }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeChanger(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeChanger must be used within a ThemeChangerProvider");
  }
  return context;
}
