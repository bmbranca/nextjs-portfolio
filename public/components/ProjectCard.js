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
} from "./styled";
import Link from "next/link";

export default function ProjectCard() {
  const projectCardEl = projectData.map((project) => {
    return (
      <Project key={project.id}>
        <Image
          src={project.image}
          width="200"
          height="200"
          alt="React E-Commerce Project"
          style={{ borderRadius: "4px 4px 0 0" }}
        />
        <h4 style={{ marginBottom: "0" }}>{project.name}</h4>
        <TechStackText>{project.tech}</TechStackText>
        <IconContainer>
          <Link href="/projects">
            <a href="https://github.com/bmbranca/react-ecommerce">
              <Git />
            </a>
          </Link>
          <Link href="/projects">
            <a href="https://react-ecommerce-pearl.vercel.app/">
              <ViewSite />
            </a>
          </Link>
        </IconContainer>
      </Project>
    );
  });
  return <Wrapper>{projectCardEl}</Wrapper>;
}
