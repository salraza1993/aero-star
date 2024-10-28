import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import ContactInfoSection from '@/app/components/Pages/ContactPage/ContactInfoSection'
import "@/app/assets/scss/Pages/ContactPage/ContactPage.scss";
import ContactGoogleMap from '@/app/components/Pages/ContactPage/ContactGoogleMap';
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import ContactFormSection from '@/app/components/Pages/ContactPage/ContactFormSection';

function ContactPage() : React.ReactElement {
  return <>
    <SubPageHeroBanner title='Contact Us' />
    <ContactInfoSection />
    <ContactGoogleMap />
    <ContactFormSection />
    <HomeClients />
  </>
}

export default ContactPage