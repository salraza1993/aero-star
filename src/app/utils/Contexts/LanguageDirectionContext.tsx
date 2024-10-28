'use client'
import { useLocale } from 'next-intl';
import React, { createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react'

interface LanguageDirectionType {
  currentLanguage: string;
  currentDirection: string;
  setLanguageDirection: (element: HTMLElement) => void;
}

const LanguageDirectionContext = createContext<LanguageDirectionType | undefined>(undefined);
export function LanguageDirectionContextProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [currentLanguage, setCurrentLanguage] = useState<string>(useLocale());
  const [currentDirection, setCurrentDirection] = useState<string>('ltr');

  const setLanguageDirection = (element: HTMLElement | React.RefObject<HTMLElement>): void => {
    if (currentLanguage === 'ar') { setCurrentDirection('rtl'); }
   
    if (element instanceof HTMLElement) {
      element.setAttribute('dir', currentDirection);
    } else if (element.current) {
      element.current.setAttribute('dir', currentDirection);
    }
  };
  
  const rootDirectionHandler = (): void => {
    const rootElement: HTMLElement = document.documentElement;
    const bodyElement = document.querySelector('.main-body') as HTMLBodyElement;
    bodyElement.classList.add(`language__${currentDirection}`);
    setLanguageDirection(rootElement);
  };

  useEffect(() => {
    rootDirectionHandler();
  }, [currentLanguage, currentDirection]);
  
  return <LanguageDirectionContext.Provider value={{
    currentLanguage,
    currentDirection,
    setLanguageDirection
  }}>{children}</LanguageDirectionContext.Provider>
}

export function useLanguageDirection(): LanguageDirectionType {
  const context = useContext(LanguageDirectionContext);
  if (!context) {
    throw new Error("LanguageDirection must be used within a LanguageDirectionProvider");
  }
  return context;
}