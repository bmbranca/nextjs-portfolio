import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { ViewDesktop } from "@styled-icons/fluentui-system-regular/ViewDesktop";

export const AppContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  font-family: "Poppins", sans-serif;
  position: relative;
  height: 100vh;
`;

//Home
export const HomeWrapper = styled.div`
  border: 1px red;
`;

export const Header = styled.h1`
  font-size: 3.5rem;
  padding: 0;
  margin: 0;
  font-weight: 200;
  /* color: ${(props) => (props.variant === "blue" ? "green" : "red")}; */
`;

export const Subheader = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: 200;
  color: #a9a9a9;
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
    font-style: #03ac13;
    font-style: italic;
    font-weight: bold;
  }
`;

//Navigation
export const Nav = styled.div`
  display: flex;
  margin: 0 5em;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NavLogo = styled.p`
  display: flex;
  padding: 0;
  margin-left: 2em;
  font-size: 1rem;
  color: #494f55;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    font-style: #03ac13;
    font-weight: bold;
  }
  &:active {
    font-style: #03ac13;
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
  font-size: 1rem;
  @media (max-width: 768px) {
    margin: 0 auto;
  }

  &:hover {
    font-style: #03ac13;
    font-weight: bold;
  }
  &:active {
    font-style: #03ac13;
    font-weight: bold;
  }
`;

export const NavAnchor = styled.p`
  cursor: pointer;
  color: #494f55;
  font-size: 1.25rem;

  &:hover {
    color: #03ac13;
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
    color: #03ac13;
    font-weight: bold;
  }
`;

//Project Card
export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Project = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: white;
  max-width: 190px;
  border-radius: 10px;
  margin: 0.5em;
  padding-bottom: 1em;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-family: "Poppins", sans-serif;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5em;
`;

export const Git = styled(Github)`
  width: 25px;
  margin-right: 1em;
  margin-left: 2em;

  &:hover {
    color: #03ac13;
    font-weight: bold;
  }
`;

export const ViewSite = styled(ViewDesktop)`
  width: 25px;
  margin-left: 1em;
  margin-right: 2em;

  &:hover {
    color: #03ac13;
    font-weight: bold;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  /* justify-content: center;
  flex-wrap: wrap; */
  border: 1px solid blue;
`;

export const ProjectName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #494f55;
  padding: 0 0 0 8px;
  margin-bottom: 0;
`;

export const TechStackText = styled.p`
  text-align: left;
  font-size: 0.8rem;
  color: #494f55;
  padding: 0 0 0 8px;
  margin-top: 0;
`;

export const OtherWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10em;
`;

export const OtherWorkText = styled.h3`
  color: #494f55;
  margin-bottom: 1em;
`;

//about
export const AboutHeader = styled.div`
  display: flex;
  max-width: 915px;
  margin: 0 1em;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutTitle = styled.h2`
  color: black;
  margin-bottom: 0.25em;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #8c8c8c;
  text-align: left;
  margin: 5em 0 1em 0;
  max-width: 45%;
  line-height: 1.5rem;
`;

export const AboutCardWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding-bottom: 10em;

  font-family: "Poppins", sans-serif;
`;

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 300px;
  border-radius: 10px;
  line-height: 1.5rem;
  padding: 1em;
  margin: 1em 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CardContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BlurbTitle = styled.h2`
  margin-bottom: 0;
`;

// experience
export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
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
  border: 1px solid #03ac13;
`;

export const ExperienceTextContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  max-width: 40%;
  padding: 0 1em;
  line-height: 28px;
  text-align: left;
  font-size: 1.15rem;

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 0;
    text-align: center;
  }
`;

export const ExperienceImageContainer = styled.div`
  max-width: 100%;
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
    font-style: #03ac13;
    font-weight: bold;
  }

  &:active {
    color: #03ac13;
    font-weight: bold;
  }
`;

export const ProjectSelectionStatic = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #03ac13;
  font-weight: bold;
  margin-right: 1em;
  cursor: pointer;
  font-style: italic;
`;

export const Underline = styled.div`
  margin-top: 0.2em;
  height: 5px;
  width: 5px;
  background-color: #03ac13;
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
    color: #03ac13;
    font-weight: bold;
  }
`;

export const ContactItemsStatic = styled.li`
  list-style: none;
  font-size: 1.25rem;
  padding: 0.5em 0;
`;

export const ContactHomeLink = styled.p`
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    color: #03ac13;
    font-weight: bold;
  }
`;
