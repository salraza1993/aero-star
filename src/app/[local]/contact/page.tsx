import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ContactInfoSection from '@/app/components/Pages/ContactPage/ContactInfoSection'
import "@/app/assets/scss/Pages/ContactPage/ContactPage.scss";
import ContactGoogleMap from '@/app/components/Pages/ContactPage/ContactGoogleMap';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactFormSection from '@/app/components/Pages/ContactPage/ContactFormSection';
import { Props } from '../page';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export default function ContactPage({ params: { locale } }: Props) : React.ReactElement {
  const translate = useTranslations('ContactPage');
  // Enable static rendering
  setRequestLocale(locale);
  return <>
    <h1>{translate('title')}</h1>
    
    <SubPageHeroBanner title='Contact Us' />
    <ContactInfoSection />
    <ContactGoogleMap />
    <ContactFormSection />
    <HomeClients />
  </>
}

export const dynamicParams = true; // Enables dynamic params for static rendering
