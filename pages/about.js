import Footer from "../public/components/Footer";
import { AppContainer } from "../public/components/styled";
import AboutPage from "../public/components/AboutPage";
import SecondaryNav from "../public/components/SecondaryNav";

export default function About() {
  return (
    <AppContainer>
      <SecondaryNav />
      <AboutPage />
      <Footer />
    </AppContainer>
  );
}
