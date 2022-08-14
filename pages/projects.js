import Footer from "../public/components/Footer";
import Navigation from "../public/components/Navigation";
import { AppContainer } from "../public/components/styled";
import ImageGrid from "../public/components/ImageGrid";

export default function Projects() {
  return (
    <AppContainer>
      <Navigation />
      <ImageGrid />
      <Footer />
    </AppContainer>
  );
}
