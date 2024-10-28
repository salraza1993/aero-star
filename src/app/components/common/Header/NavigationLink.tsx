'use client';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';
import {Link, Pathnames} from '@/i18n/routing';

export default function NavigationLink<Pathname extends Pathnames>({ href, ...rest }: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === href;

  return (
    <Link href={href as Pathnames} {...rest} />
  );
}