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
        <Subheader>front end web developer</Subheader>
        <ListContainer>
          <EmailAddress>brianbranca16@gmail.com</EmailAddress>
          <Link href="https://docs.google.com/document/d/1f7qVwilFpOztrz1MePyA20_-A7v9XVaB0qIadTyXHHY/edit?usp=sharing">
            <Resume>resume</Resume>
          </Link>
        </ListContainer>
      </HomeWrapper>
    </>
  );
}
