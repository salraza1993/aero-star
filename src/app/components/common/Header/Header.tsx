// import '@/app/assets/scss/components/Header.scss';
import HeaderLogo from './HeaderLogo';
import Navigation from './Navigation';
import ThemeAndLang from './ThemeAndLang';
import Button from '../Button';
import { ThemeChangerProvider } from '@/app/utils/Contexts/ThemeChangerContext';
import { Link, Pathnames } from '@/i18n/routing';
import MobileMenu from './MobileMenu';

function Header(): React.ReactElement {
  return (
    <ThemeChangerProvider>
      <header className='main-header'>
        <div className="nav-container-blur"></div>
        <div className="container">
          <div className="main-sub-header">
            <div className="block__start">
              <Link className='header-logo' href={'/' as Pathnames}><HeaderLogo /></Link>
              <Navigation />
              <MobileMenu />
            </div>
            <div className="block__end">
              <ThemeAndLang />
              <Button type={'link'} path={'/contact' as Pathnames} icon={'user-headset'} label={'Get Assistance'} color={'accent'} />
            </div>
          </div>
        </div>
      </header>
    </ThemeChangerProvider>
  )
}

export default Header