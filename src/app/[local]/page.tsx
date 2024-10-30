import HomeBanners from "../components/Pages/HomePage/HomeBanners";
import HomeAbout from "../components/Pages/HomePage/HomeAbout";
import HomeServices from "../components/Pages/HomePage/HomeServices";
import HomeMapsSection from "../components/Pages/HomePage/HomeMapsSection";
import HomeBlogSection from "../components/Pages/HomePage/HomeBlogSection";
import HomeClients from "../components/Pages/HomePage/HomeClients";
import '@/app/assets/scss/Pages/HomePage/HomePage.scss';
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export type Props = {
  params: {locale: string};
};
export default function HomePage({ params: { locale } }: Props) {
  const translate = useTranslations('HomePage');
  // Enable static rendering
  setRequestLocale(locale);

  return <>
    <h1>{translate('title')}</h1>
    <HomeBanners />
    <HomeAbout />
    <HomeServices />
    <HomeMapsSection />
    <HomeBlogSection />
    <HomeClients />
  </>
}
export const dynamicParams = true; // Enables dynamic params for static rendering