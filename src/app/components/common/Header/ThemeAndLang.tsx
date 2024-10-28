'use client';
import { useEffect, useRef, useState } from 'react';
import LocalLanguageSwitcher from './LocalLanguageSwitcher';
import ThemeChanger from './ThemeChanger';

function ThemeAndLang(): React.ReactElement {
  return (
    <ul className="theme-n-lang">
      <ThemeChanger />
      {/* <LocalLanguageSwitcher /> */}
    </ul>
  )
}

export default ThemeAndLang