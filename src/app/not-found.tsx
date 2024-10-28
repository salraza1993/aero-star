import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function notFound() {
  const t = useTranslations('NotFoundPage');
  return (
    <html>
      <body>
        <h1>{t('title')}</h1>
        <p>{t('message')}</p>
        <Link href="/">{t('goHome')}</Link>
      </body>
    </html>
  );
}