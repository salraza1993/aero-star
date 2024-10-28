import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner';
import About1stSection from '@/app/components/Pages/AboutPage/About1stSection';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import '@/app/assets/scss/Pages/AboutPage/AboutPage.scss';
import AboutServiceSection from '@/app/components/Pages/AboutPage/AboutServiceSection';
import MissionVision from '@/app/components/Pages/AboutPage/MissionVision';
import HomeBlogSection from '@/app/components/Pages/HomePage/HomeBlogSection';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
type Props = {
  params: {locale: string};
};
function AboutPage({params: {locale}}: Props): React.ReactElement {
  const translate = useTranslations('AboutPage');
  unstable_setRequestLocale(locale);
  const aboutBannerPath = '/images/sub-banner-image.jpg';
  return <>
    <SubPageHeroBanner title={'About Us'} banner={aboutBannerPath} />
    <About1stSection />
    <AboutServiceSection />
    <MissionVision />
    <HomeBlogSection />
    <HomeClients />
  </>
}

export default AboutPage;