'use client';
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