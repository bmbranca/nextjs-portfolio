import React from "react";
import { Foot, FooterText } from "./styled";
import { useIntercom } from "react-use-intercom";
export default function Footer() {
  const { boot } = useIntercom();
  return (
    <Foot>
      <FooterText>
        built with react.js, next.js, and styled-components
      </FooterText>
      <FooterText>💚brian branca 2022💚</FooterText>
      <button onClick={() => boot()}>Boot</button>
    </Foot>
  );
}
