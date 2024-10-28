import HomeBanners from "../components/Pages/HomePage/HomeBanners";
import HomeAbout from "../components/Pages/HomePage/HomeAbout";
import HomeServices from "../components/Pages/HomePage/HomeServices";
import HomeMapsSection from "../components/Pages/HomePage/HomeMapsSection";
import HomeBlogSection from "../components/Pages/HomePage/HomeBlogSection";
import HomeClients from "../components/Pages/HomePage/HomeClients";

import '@/app/assets/scss/Pages/HomePage/HomePage.scss';

export default function HomePage() {
  return <>
    <HomeBanners />
    <HomeAbout />
    <HomeServices />
    <HomeMapsSection />
    <HomeBlogSection />
    <HomeClients />
  </>
}
