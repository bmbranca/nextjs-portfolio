import React from "react";
import Link from "next/link";
import {
  HomeWrapper,
  Header,
  Subheader,
  ListContainer,
  Resume,
  EmailAddress,
} from "./styled";
import Navigation from "./Navigation";

export default function HomeContainer() {
  return (
    <>
      <Navigation />
      <HomeWrapper>
        <Header>brian branca</Header>
        <Subheader>{"{front end web developer}"}</Subheader>
      </HomeWrapper>
    </>
  );
}
