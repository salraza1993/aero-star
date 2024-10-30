import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NotFoundPage() {
  const translate = useTranslations('NotFoundPage');

  return <section className='not-found-page-section'>
    <div className="container">
      <div className="not-found-page-content">
        <h1 className='fs-2 mb-3 merriweather fw-700'>{translate('title')}</h1>
        <p>{translate('message')}</p>
        <Link className='btn btn-primary mt-3' href="/">
          <i className="fa-solid fa-arrow-left"></i>
          {translate('goHome')}
        </Link>
      </div>
    </div>
  </section>
}