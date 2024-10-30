"use client";
import { Link, Pathnames } from "@/i18n/routing";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState, useEffect } from "react";

interface MenuInterface {
  label: string;
  path: Pathnames;
  isActive: boolean;
  hasChildren?: boolean;
  children?: MenuInterface[];
}

function Navigation(): React.ReactElement {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  
  const [menus, setMenus] = useState<MenuInterface[]>([
    { label: 'Home', path: '/' as Pathnames, isActive: false },
    { label: 'About', path: '/about' as Pathnames, isActive: false },
    {
      label: 'Services',
      path: '/services' as Pathnames, isActive: false,
      hasChildren: true,
      children: [
        { label: 'Service 1', path: '/services/service-1' as Pathnames, isActive: false },
        { label: 'Service 2', path: '/services/service-2' as Pathnames, isActive: false },
        { label: 'Service 3', path: '/services/service-3' as Pathnames, isActive: false },
      ],
    },
    { label: 'News', path: '/blogs' as Pathnames, isActive: false },
    { label: 'Contact', path: '/contact' as Pathnames, isActive: false },
  ]);

  useEffect(() => {
  setMenus((prevMenus) => 
    prevMenus.map(menu => {
      if (menu.hasChildren && menu.children) {
        const updatedChildren = menu.children.map(child => ({
          ...child,
          isActive: pathname === child.path,
        }));
        return { ...menu, children: updatedChildren, isActive: pathname === menu.path };
      }
      return { ...menu, isActive: pathname === menu.path };
    })
  );
}, [pathname]);


  return (
    <nav className='navigation'>
      <ul className="menu">
        {menus.map((menu: MenuInterface) => (
          <li className={menu.isActive ? "menu__list active" : "menu__list"} key={menu.label}>
            <Link className="menu__list__link" href={menu.path}>
              {menu.label}
            </Link>
            {menu.hasChildren && (
              <ul className="sub-menu">
                {menu.children?.map((child: MenuInterface) => (
                  <li key={child.label} className={child.isActive ? "sub-menu__list active" : "sub-menu__list"}>
                    <Link className="sub-menu__list__link" href={child.path}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
