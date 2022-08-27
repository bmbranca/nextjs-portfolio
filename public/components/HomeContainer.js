import React from "react";

import { HomeWrapper, Header, Subheader, Spacer } from "./styled";
import Navigation from "./Navigation";

export default function HomeContainer() {
  return (
    <>
      <Navigation />
      <HomeWrapper>
        <Header variant="blue">brian branca</Header>
        <Subheader>{"{front end web developer}"}</Subheader>
        <Spacer></Spacer>
      </HomeWrapper>
    </>
  );
}
