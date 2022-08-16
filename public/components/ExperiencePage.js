import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { wifiData, cafePickupData } from "./experience-data";
import { projectData } from "./project-data";
import {
  ExperienceCard,
  ExperienceContainer,
  ExperienceImageContainer,
  ExperienceTextContainer,
  ProjectSelection,
  ProjectSelectionItem,
  ProjectHeaderText,
  ProjectSelectionStatic,
  Underline,
  Project,
  ProjectName,
  TechStackText,
  IconContainer,
  Git,
  ViewSite,
  ProjectWrapper,
  OtherWork,
  OtherWorkText,
} from "./styled";

export default function Experience() {
  const [toggle, setToggle] = useState(true);

  const wifiCardEl = wifiData.map((foxtrot) => {
    return (
      <>
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
      </>
    );
  });

  const cafePickupCardEl = cafePickupData.map((foxtrot) => {
    return (
      <>
        <ExperienceCard key={foxtrot.id}>
          <ExperienceTextContainer>
            <p>{foxtrot.text}</p>
          </ExperienceTextContainer>
          <ExperienceImageContainer>
            <Image
              src={foxtrot.image}
              width="700"
              height="500"
              alt="React E-Commerce Project"
              style={{ borderRadius: "4px 4px 0 0" }}
            />
          </ExperienceImageContainer>
        </ExperienceCard>
      </>
    );
  });

  const projectCardEl = projectData.map((project) => {
    return (
      <Project key={project.id}>
        <Image
          src={project.image}
          width="700"
          height="500"
          alt="React E-Commerce Project"
          style={{ borderRadius: "4px 4px 0 0" }}
        />
        <ProjectName>{project.name}</ProjectName>
        <TechStackText>{project.tech}</TechStackText>
        <IconContainer>
          <Link href={project.gitHub}>
            <Git />
          </Link>
          <Link href={project.liveSite}>
            <ViewSite />
          </Link>
        </IconContainer>
      </Project>
    );
  });

  return (
    <>
      <ExperienceContainer>
        <h2 style={{ margin: "0", padding: "0", textAlign: "left" }}>
          foxtrot market
        </h2>
        <h4
          style={{
            color: "darkgray",
            margin: "0",
            padding: "0",
            textAlign: "left",
          }}
        >
          chicago, il
        </h4>
        <small
          style={{
            color: "darkgray",
            margin: "0",
            padding: "0",
            textAlign: "left",
          }}
        >
          2022
        </small>

        {toggle ? (
          <ProjectSelection>
            <ProjectSelectionStatic>
              wifi page<Underline></Underline>
            </ProjectSelectionStatic>
            <ProjectSelectionItem onClick={() => setToggle(false)}>
              cafe pickup
            </ProjectSelectionItem>
          </ProjectSelection>
        ) : (
          <ProjectSelection>
            <ProjectSelectionItem onClick={() => setToggle(true)}>
              wifi page
            </ProjectSelectionItem>
            <ProjectSelectionStatic>
              cafe pickup<Underline></Underline>
            </ProjectSelectionStatic>
          </ProjectSelection>
        )}

        {toggle ? (
          <ProjectHeaderText>
            This project allows Foxtrot customers to access free-wifi while they
            enjoy a hot cup of coffee. Customers enter their email and are then
            directed to a product image grid of trending products at the current
            store. This project was built with React, Next.js, and
            Styled-Components.
          </ProjectHeaderText>
        ) : (
          <ProjectHeaderText>
            This is a realworld e-commerce application. Customers are able to
            choose a store, select products for cafe-pickup, and submit the
            order. The project relies heavily upon React Context and the Foxtrot
            API. It was built with React, Next.js, and Styled-Components.
          </ProjectHeaderText>
        )}
        {toggle ? wifiCardEl : cafePickupCardEl}
      </ExperienceContainer>
      <OtherWork>
        <OtherWorkText>other work</OtherWorkText>
        <ProjectWrapper>{projectCardEl}</ProjectWrapper>
      </OtherWork>
    </>
  );
}
