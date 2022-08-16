import React from "react";
import Image from "next/image";
import { projectData } from "./project-data";
import {
  Project,
  IconContainer,
  Git,
  ViewSite,
  Wrapper,
  TechStackText,
  ProjectName,
  ProjectTextWrapper,
} from "./styled";
import Link from "next/link";

export default function ProjectCard() {
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
        <ProjectTextWrapper>
          <ProjectName>{project.name}</ProjectName>
          <TechStackText>{project.tech}</TechStackText>
        </ProjectTextWrapper>
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
  return <Wrapper>{projectCardEl}</Wrapper>;
}
