import React from "react";
import { aboutData } from "./about-data";
import {
  AboutCard,
  AboutCardWrapper,
  CardWrapper,
  BlurbTitle,
  TextWrapper,
  CardContainer,
  AboutTitle,
} from "./styled";

export default function AboutPage() {
  const aboutCardEl = aboutData.map((blurb) => {
    return (
      <>
        <AboutCard key={blurb.id}>
          <BlurbTitle style={{ textAlign: "left" }}>{blurb.title}</BlurbTitle>
          <p style={{ textAlign: "left" }}>{blurb.text}</p>
        </AboutCard>
      </>
    );
  });
  return (
    <AboutCardWrapper>
      <CardContainer>
        <TextWrapper>
          <AboutTitle>about</AboutTitle>I am a career-changing, self-taught
          front end developer passionate about building clean, simple, and
          efficient web-interfaces. I am focused on the fundamentals of web
          development and am always prepared to learn, adapt, and evolve.
        </TextWrapper>
        <CardWrapper>{aboutCardEl}</CardWrapper>
      </CardContainer>
    </AboutCardWrapper>
  );
}
