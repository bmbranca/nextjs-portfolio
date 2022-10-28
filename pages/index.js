import React from "react";
import HomeContainer from "../public/components/HomeContainer";
import Footer from "../public/components/Footer";
import { AppContainer } from "../public/components/styled";
import { IntercomProvider } from "react-use-intercom";

const INTERCOM_APP_ID = "opso6xil";

export default function Home() {
  return (
    <IntercomProvider appId={INTERCOM_APP_ID}>
      <AppContainer>
        <HomeContainer />
        <Footer />
      </AppContainer>
    </IntercomProvider>
  );
}
