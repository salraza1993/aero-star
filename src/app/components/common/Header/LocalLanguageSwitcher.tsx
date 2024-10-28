"use client"
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState, useTransition } from 'react'
import useClickOutside from '../customHooks/useClickOutside';
import { liVariants, ulVariants } from '../FramerMotions/motionsList';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { ListMenuInterface } from '@/app/utils/Contexts/ThemeChangerContext';
import { useParams } from 'next/navigation';
import { useLanguageDirection } from '@/app/utils/Contexts/LanguageDirectionContext';

function LocalLanguageSwitcher(): React.ReactElement {
  const { currentLanguage } = useLanguageDirection();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  
  const [isOpen, setIsOpen] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listMenu, setListMenu] = useState<ListMenuInterface[]>([
    { type: 'en', label: "English", icon: 'language', selected: true },
    { type: 'ar', label: "عربي", icon: 'language', selected: false },
  ]);

  const elementRef = useRef<HTMLLIElement>(null);  
  const handleToggleMenu = (): void => setIsOpen(!isOpen);
  const languageSwitcherHandler = (type: string): void => {
    // const nextLocale = type;
    const nextLocale = type as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    })
  }

  useClickOutside(elementRef, () => setIsOpen(false));

  useEffect(() => {
    setListMenu((prevListMenu) =>
      prevListMenu.map((menu: ListMenuInterface) => ({
        ...menu,
        selected: menu.type === currentLanguage,
      }))
    );
  }, [currentLanguage]);
  
  return (
    <li className={isOpen ? "theme-n-lang__list active" : "theme-n-lang__list"} ref={elementRef}>
      <span className={isOpen ? "icon square-element active" : "icon square-element"} onClick={handleToggleMenu}>
        <i className="fa-solid fa-globe-asia"></i>
      </span>
      <motion.ul
          animate={isOpen ? "open" : "closed"}
          variants={ulVariants}
          className={isOpen ? "theme-n-lang__menu active" : "theme-n-lang__menu"}>
          {
            listMenu.map((list: ListMenuInterface, index: number) => {
              const listActiveClass = list.selected ? 'active' : '';
              return <motion.li
                onClick={() => languageSwitcherHandler(list.type) }
                animate={isOpen ? "open" : "closed"}
                variants={liVariants}
                transition={{ delay: 0.5 * 0.1 }}
                className={`theme-n-lang__menu__list ${listActiveClass}`}
                key={index}>
                <i className={`fa-solid fa-${list.icon}`}></i>
                <span>{ list.label }</span>
              </motion.li>
            })
          }
        </motion.ul>
    </li>
  )
}

export default LocalLanguageSwitcher