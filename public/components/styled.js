import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { ViewDesktop } from "@styled-icons/fluentui-system-regular/ViewDesktop";

export const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  text-align: center;
  font-family: "Poppins", sans-serif;
`;

//Home
export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 3.5rem;
  padding: 0;
  margin: 0;
  font-weight: 200;
`;

export const Subheader = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: 200;
  color: #494f55;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.5em;
  padding: 0;
`;

export const EmailAddress = styled.li`
  text-decoration: none;
  list-style: none;
  width: 100%;
  margin: 0.5em 0;
`;

export const Resume = styled.li`
  text-decoration: none;
  list-style: none;
  width: 100%;
  cursor: pointer;
  color: #494f55;

  &:hover {
    font-style: green;
    font-style: italic;
    font-weight: bold;
  }
`;

//Navigation
export const Nav = styled.div`
  display: flex;
  margin: 0 2em;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLogo = styled.p`
  display: flex;
  padding: 0;
  margin-left: 2em;
  font-size: 1.25rem;
  color: #494f55;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    font-style: green;
    font-style: italic;
    font-weight: bold;
  }
  &:active {
    font-style: green;
    font-style: italic;
    font-weight: bold;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: right;
  list-style: none;
  color: #494f55;
  font-size: 1.25rem;
  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    font-style: green;
    font-style: italic;
    font-weight: bold;
  }
  &:active {
    font-style: green;
    font-style: italic;
    font-weight: bold;
  }
`;

export const NavAnchor = styled.p`
  cursor: pointer;
  color: #494f55;
  font-size: 1.25rem;

  &:hover {
    color: green;
    font-style: italic;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    margin: 0.15em auto;
  }
`;

//footer
export const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FootText = styled.p`
  cursor: pointer;
  color: #494f55;
  font-size: 1.25rem;

  &:hover {
    color: green;
    font-style: italic;
    font-weight: bold;
  }
`;

//Project Card
export const Project = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  max-width: 350px;
  border-radius: 10px;
  margin: 2em;
  padding-bottom: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: "Poppins", sans-serif;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;

  width: 100%;
`;

export const Git = styled(Github)`
  width: 30px;
  margin-right: 1em;
  margin-left: 2em;

  &:hover {
    color: green;
    font-weight: bold;
  }
`;

export const ViewSite = styled(ViewDesktop)`
  width: 35px;
  margin-left: 1em;
  margin-right: 2em;

  &:hover {
    color: green;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TechStackText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.25rem;
  color: #494f55;
`;

export const ProjectName = styled.p`
  padding: 0;
  margin: 0.5em 0;
  font-size: 2rem;
  color: #494f55;
`;

//about
export const AboutCardWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: white;
  border-radius: 10px;
  margin: 2em;
  padding-bottom: 1em;
  font-family: "Poppins", sans-serif;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  border-radius: 10px;
  font-size: 1.25rem;
  line-height: 2rem;
  padding: 1em 2em;
  margin: 0.25em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const BlurbTitle = styled.h2`
  margin: 0;
  padding: 0;
  color: #494f55;
`;

// experience
export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  margin: 2em auto;

  @media (max-width: 768px) {
    margin: 1em;
  }
`;

export const ExperienceCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 2em auto;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ExperienceHeader = styled.h3`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  text-align: left;
  padding: 0;
  margin: 0;
`;

export const ImageTextSplitDiv = styled.div`
  display: flex;
  align-items: center;
  /* max-width: 700px; */
  border: 1px solid green;
`;

export const ExperienceTextContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  max-width: 40%;
  padding: 0 1em;
  line-height: 28px;
  text-align: left;
  font-size: 1.15rem;
`;

export const ExperienceImageContainer = styled.div`
  max-width: 65%;
`;

export const ProjectSelection = styled.div`
  display: flex;
  text-align: left;
  padding: 0;
  margin: 2em 0;
`;

export const ProjectHeaderText = styled.p`
  line-height: 28px;
  padding-right: 1em;
  text-align: left;
  font-size: 1.25rem;
`;

export const ProjectSelectionItem = styled.div`
  margin-right: 1em;
  cursor: pointer;

  &:hover {
    font-style: green;
    font-style: italic;
    font-weight: bold;
  }

  &:active {
    color: green;
    font-style: italic;
    font-weight: bold;
  }
`;

export const ProjectSelectionStatic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: green;
  font-weight: bold;
  margin-right: 1em;
  cursor: pointer;
  font-style: italic;
`;

export const Underline = styled.div`
  margin-top: 0.2em;
  height: 5px;
  width: 5px;
  background-color: green;
  border-radius: 50%;
  display: inline-block;
`;

//contact
export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 3.25em;
`;

export const ContactItems = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.5em 0;

  &:hover {
    font-style: italic;
    color: green;
    font-weight: bold;
  }
`;

export const ContactItemsStatic = styled.li`
  list-style: none;
  font-size: 1.25rem;
  padding: 0.5em 0;
`;

export const ContactHomeLink = styled.p`
  padding-right: 2em;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    font-style: italic;
    color: green;
    font-weight: bold;
  }
`;
