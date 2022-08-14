import Navigation from "../public/components/Navigation";
import Footer from "../public/components/Footer";
import { AppContainer } from "../public/components/styled";
import AboutPage from "../public/components/About";

export default function About() {
  return (
    <AppContainer>
      <Navigation />
      <AboutPage />
      <Footer />
    </AppContainer>
  );
}
