'use client';

import { Link, Pathnames } from "@/i18n/routing";
import { useState } from "react";
import FooterContentWrapper from "./FooterContentWrapper";
type PageMenusTypes = {
  label: string,
  href: Pathnames,
}

function FooterQuickLinks(): React.ReactElement {
  const blockHeading: string = 'Discover'
  // @typescript-eslint/no-unused-vars
  const [pageMenus, setPageMenus] = useState<PageMenusTypes[]>([
    { label: "Home", href: "/" as Pathnames },
    { label: "About us ", href: "" as Pathnames },
    { label: "Our Team", href: "" as Pathnames },
    { label: "Career", href: "" as Pathnames },
    { label: "Blog ", href: "" as Pathnames },
    { label: "Contact us", href: "" as Pathnames },
  ]);

  const [servicesMenus, setServicesMenus] = useState<PageMenusTypes[]>([
    { label: "Services - 1", href: "/" as Pathnames },
    { label: "Services - 2", href: "" as Pathnames },
    { label: "Services - 3", href: "" as Pathnames },
  ]);

  return <FooterContentWrapper classes="footer-links-container" title={blockHeading}>
    <ul className="footer-links">
      {
        pageMenus.map(({ label, href }) => (
          <li className="footer-links__list" key={label}>
            <Link className="footer-links__list__link" href={href}>{label}</Link>
          </li>
        ))
      }      
    </ul>
    <ul className="footer-links">
      {
        servicesMenus.map(({ label, href }) => (
          <li className="footer-links__list" key={label}>
            <Link className="footer-links__list__link" href={href}>{label}</Link>
          </li>
        ))
      }      
    </ul>
  </FooterContentWrapper>
}

export default FooterQuickLinks