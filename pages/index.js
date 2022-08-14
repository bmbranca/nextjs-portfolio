import React from "react";
import Footer from "../public/components/Footer";
import HomeContainer from "../public/components/HomeContainer";

import { AppContainer } from "../public/components/styled";

export default function Home() {
  return (
    <AppContainer>
      <HomeContainer />
      <Footer />
    </AppContainer>
  );
}
