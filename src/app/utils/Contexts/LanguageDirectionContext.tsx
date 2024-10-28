'use client';
import { useLocale } from 'next-intl';
import React, { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react';

interface LanguageDirectionType {
  currentLanguage: string;
  currentDirection: string;
  setLanguageDirection: (element: HTMLElement | React.RefObject<HTMLElement>) => void;
}

const LanguageDirectionContext = createContext<LanguageDirectionType | undefined>(undefined);

export function LanguageDirectionContextProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [currentLanguage, setCurrentLanguage] = useState<string>(useLocale());
  const [currentDirection, setCurrentDirection] = useState<string>('ltr');

  const setLanguageDirection = useCallback((element: HTMLElement | React.RefObject<HTMLElement>): void => {
    const direction = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    setCurrentDirection(direction);

    if (element instanceof HTMLElement) {
      element.setAttribute('dir', direction);
    } else if (element?.current) {
      element.current.setAttribute('dir', direction);
    }
  }, [currentLanguage]);

  const rootDirectionHandler = useCallback((): void => {
    const rootElement: HTMLElement = document.documentElement;
    const bodyElement = document.querySelector('.main-body') as HTMLBodyElement;

    bodyElement.classList.add(`language__${currentDirection}`);
    setLanguageDirection(rootElement);
  }, [currentDirection, setLanguageDirection]);

  useEffect(() => {
    rootDirectionHandler();
  }, [currentLanguage, rootDirectionHandler]);

  return (
    <LanguageDirectionContext.Provider value={{ currentLanguage, currentDirection, setLanguageDirection }}>
      {children}
    </LanguageDirectionContext.Provider>
  );
}

export function useLanguageDirection(): LanguageDirectionType {
  const context = useContext(LanguageDirectionContext);
  if (!context) {
    throw new Error('useLanguageDirection must be used within a LanguageDirectionProvider');
  }
  return context;
}
