import {routing} from '@/i18n/routing';
import BaseLayout from './components/BaseLayout';
import NotFoundPage from './components/NotFoundPage';

import '@/app/assets/scss/globals.scss';

// This page renders when a route like `/unknown.txt` is requested.
// In this case, the layout at `app/[locale]/layout.tsx` receives
// an invalid value as the `[locale]` param and calls `notFound()`.

export default function GlobalNotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </div>
  );
}