import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {ReactNode} from 'react';
import Header from './common/Header/Header';
import Footer from './common/Footer/Footer';
import { Kanit, Roboto, Open_Sans, Merriweather, Cairo, Amiri } from "@/app/fonts/Fonts";
import { LanguageDirectionContextProvider } from '../utils/Contexts/LanguageDirectionContext';

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  const bodyFonts = [
    'main-body',
    Kanit.variable,
    Roboto.variable,
    Open_Sans.variable,
    Cairo.variable,
    Amiri.variable,
    Merriweather.variable
  ].join(' ');
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  
  return (
    <html lang={locale}>
      <body className={bodyFonts}>
        <NextIntlClientProvider messages={messages}>
          <LanguageDirectionContextProvider>
            <Header />
            {children}
            <Footer />
          </LanguageDirectionContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}