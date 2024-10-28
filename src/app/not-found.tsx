import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function notFound() {
  // const translate = useTranslations('NotFoundPage');
  return (
    <html>
      <body>
        <h1>Note Found</h1>
        <p>Message Text</p>
        <Link href="/">Go Back</Link>
      </body>
    </html>
  );
}