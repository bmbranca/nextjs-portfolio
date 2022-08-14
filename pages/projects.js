import Footer from "../public/components/Footer";
import { AppContainer } from "../public/components/styled";
import ImageGrid from "../public/components/ImageGrid";
import SecondaryNav from "../public/components/SecondaryNav";

export default function Projects() {
  return (
    <AppContainer>
      <SecondaryNav />
      <ImageGrid />
      <Footer />
    </AppContainer>
  );
}
