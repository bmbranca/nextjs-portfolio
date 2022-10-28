import React from "react";
import HomeContainer from "../public/components/HomeContainer";
import Footer from "../public/components/Footer";
import { useIntercom } from "react-use-intercom";
import { AppContainer } from "../public/components/styled";

export default function Home() {
  const { boot } = useIntercom();
  return (
    <AppContainer>
      <HomeContainer />
      <button onClick={() => boot()}>Boot</button>

      <Footer />
    </AppContainer>
  );
}
