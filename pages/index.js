import React from "react";
import HomeContainer from "../public/components/HomeContainer";
import Footer from "../public/components/Footer";

import { AppContainer } from "../public/components/styled";

export default function Home() {
  return (
    <AppContainer>
      <HomeContainer />

      <Footer />
    </AppContainer>
  );
}
