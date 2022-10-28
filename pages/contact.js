import SecondaryNav from "../public/components/SecondaryNav";
import { AppContainer, ContactHomeLink } from "../public/components/styled";
import ContactPage from "../public/components/ContactPage";
import Footer from "../public/components/Footer";

export default function Contact() {
  return (
    <AppContainer>
      <SecondaryNav />
      <ContactPage />
      <Footer />
    </AppContainer>
  );
}
