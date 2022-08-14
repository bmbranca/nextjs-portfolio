import ExperiencePage from "../public/components/ExperiencePage";
import Footer from "../public/components/Footer";
import SecondaryNav from "../public/components/SecondaryNav";
import { AppContainer } from "../public/components/styled";

export default function Experience() {
  return (
    <AppContainer>
      <SecondaryNav />
      <ExperiencePage />
      <Footer />
    </AppContainer>
  );
}
