import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner';
import About1stSection from '@/app/components/Pages/AboutPage/About1stSection';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import '@/app/assets/scss/Pages/AboutPage/AboutPage.scss';
import AboutServiceSection from '@/app/components/Pages/AboutPage/AboutServiceSection';
import MissionVision from '@/app/components/Pages/AboutPage/MissionVision';
import HomeBlogSection from '@/app/components/Pages/HomePage/HomeBlogSection';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import { Props } from '../page';

export default function AboutPage({ params: { locale } }: Props) : React.ReactElement {
  const translate = useTranslations('AboutPage');
  // Enable static rendering
  setRequestLocale(locale);

  const aboutBannerPath = '/images/sub-banner-image.jpg';
  
  return <>
    <h1>{translate('title')}</h1>
    <SubPageHeroBanner title={'About Us'} banner={aboutBannerPath} />
    <About1stSection />
    <AboutServiceSection />
    <MissionVision />
    <HomeBlogSection />
    <HomeClients />
  </>
}
export const dynamicParams = true; // Enables dynamic params for static rendering
