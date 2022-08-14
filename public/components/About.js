import React from "react";
import { aboutData } from "./about-data";
import { AboutCard, AboutCardWrapper, BlurbTitle } from "./styled";

export default function AboutPage() {
  const aboutCardEl = aboutData.map((blurb) => {
    return (
      <AboutCard key={blurb.id}>
        <BlurbTitle>{blurb.title}</BlurbTitle>
        <p>{blurb.text}</p>
      </AboutCard>
    );
  });
  return <AboutCardWrapper>{aboutCardEl}</AboutCardWrapper>;
}
