'use client'
import { Link, Pathnames } from '@/i18n/routing';
import React, { useState } from 'react'

type copyWriteListType = {
  label: string,
  path: Pathnames
}

function FooterCopyrights() {
  const currentYear = new Date().getFullYear();
  // @typescript-eslint/no-unused-vars
  const [copyWriteList, setCopyWriteList] = useState<copyWriteListType[]>([
    { label: 'Terms & Conditions', path: '/terms-conditions' as Pathnames },
    { label: 'Privacy Policies', path: '/privacy-policies' as Pathnames },
    { label: 'FAQ’s', path: '/faqs' as Pathnames },
  ]);
  return (
    <div className='footer-copy-writes'>
      <div className="block__start">
        <p className='m-0'>© {currentYear} Copyrights by ASAS. All Rights Reserved</p>
      </div>
      <div className="block__end">
        <ul className="copy-write">
          {copyWriteList.map((list, index) => (
            <li key={index} className="copy-write__list">
              <Link className="copy-write__list__link" href={list.path}>{list.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FooterCopyrights