import "@/app/assets/scss/components/Footer.scss";
import FooterContent from "./FooterContent";
import FooterQuickLinks from "./FooterQuickLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterCopyrights from "./FooterCopyrights";
import FooterCTAsSection from "./FooterCTAsSection";

function Footer(): React.ReactElement {
  return (
    <footer className='main-footer'>
      <FooterCTAsSection />
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-7 col-md-6 col-12">
            <FooterContent />
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-12">
            <FooterQuickLinks />
          </div>
          <div className="col-xl-4 col-12">
            <div className="footer-newsletter-n-social-group">
              <FooterNewsletter />
              <FooterSocialMedia />
            </div>
          </div>
        </div>
        <FooterCopyrights />
      </div>
    </footer>
  )
}

export default Footer