import React, { useState } from "react";
import Image from "next/image";
import { experienceData } from "./experience-data";
import {
  ExperienceCard,
  ExperienceContainer,
  ExperienceImageContainer,
  ExperienceTextContainer,
  ProjectSelection,
  ProjectSelectionItem,
} from "./styled";

export default function Experience() {
  const [toggle, setToggle] = useState(true);
  const experienceCardEl = experienceData.map((foxtrot) => {
    return (
      <>
        {toggle ? (
          <ExperienceCard key={foxtrot.id}>
            <ExperienceImageContainer>
              <Image
                src={foxtrot.image}
                width="700"
                height="500"
                alt="React E-Commerce Project"
                style={{ borderRadius: "4px 4px 0 0" }}
              />
            </ExperienceImageContainer>

            <ExperienceTextContainer>
              <p>{foxtrot.text}</p>
            </ExperienceTextContainer>
          </ExperienceCard>
        ) : (
          <ExperienceCard key={foxtrot.id}>
            <ExperienceImageContainer>
              <Image
                src={foxtrot.image}
                width="200"
                height="200"
                alt="React E-Commerce Project"
                style={{ borderRadius: "4px 4px 0 0" }}
              />
            </ExperienceImageContainer>

            <ExperienceTextContainer>
              <p>{foxtrot.text}</p>
            </ExperienceTextContainer>
          </ExperienceCard>
        )}
      </>
    );
  });
  return (
    <ExperienceContainer>
      <ProjectSelection>
        <ProjectSelectionItem onClick={() => setToggle(true)}>
          Wifi Page
        </ProjectSelectionItem>
        <ProjectSelectionItem onClick={() => setToggle(false)}>
          Cafe Pickup
        </ProjectSelectionItem>
      </ProjectSelection>
      {experienceCardEl}
    </ExperienceContainer>
  );
}
