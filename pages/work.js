import ExperiencePage from "../public/components/ExperiencePage";
import SecondaryNav from "../public/components/SecondaryNav";
import { AppContainer } from "../public/components/styled";
import Footer from "../public/components/Footer";

export default function Work() {
  return (
    <AppContainer>
      <SecondaryNav />
      <ExperiencePage />
      <Footer />
    </AppContainer>
  );
}
