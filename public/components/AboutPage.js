import React from "react";
import { aboutData } from "./about-data";
import {
  AboutCard,
  AboutCardWrapper,
  AboutHeader,
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
          <BlurbTitle>{blurb.title}</BlurbTitle>
          <p>{blurb.text}</p>
        </AboutCard>
      </>
    );
  });
  return (
    <AboutCardWrapper>
      <AboutHeader>
        <TextWrapper>
          <AboutTitle>about</AboutTitle>I am a career-changing, self-taught
          front end developer passionate about building clean, simple, and
          efficient web-interfaces. I am focused on the fundamentals of web
          development and am always prepared to learn, adapt, and evolve.
        </TextWrapper>
      </AboutHeader>
      <CardContainer> {aboutCardEl}</CardContainer>
    </AboutCardWrapper>
  );
}
