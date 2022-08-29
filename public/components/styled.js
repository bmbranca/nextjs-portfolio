import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import { EyeOutline } from "@styled-icons/evaicons-outline/EyeOutline";

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
  display: flex;
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 4rem;
  padding: 0;
  margin: 0;
  margin-bottom: -15px;
  font-weight: 200;

  /* color: ${(props) => (props.variant === "blue" ? "green" : "red")}; */

  @media (max-width: 415px) {
    font-size: 3.5rem;
  }

  @media (max-width: 370px) {
    font-size: 3.25rem;
  }

  @media (max-width: 312px) {
    font-size: 3rem;
  }

  @media (max-width: 281px) {
    font-size: 3rem;
  }
`;

export const Subheader = styled.h2`
  font-size: 2rem;
  padding: 0;
  margin: 0;
  font-weight: 200;
  color: #a4a4a4;

  @media (max-width: 415px) {
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    font-size: 1.25rem;
  }
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

export const Spacer = styled.div`
  border: 60px solid white;
`;

//Navigation
export const Nav = styled.div`
  display: flex;
  margin: -8px 5em;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 1em;
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
  border: 1px solid red;
  @media (max-width: 768px) {
    margin: 2em auto;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterText = styled.small`
  color: #494f55;
`;

//Project Card
export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2em;
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

export const ViewSite = styled(EyeOutline)`
  width: 35px;
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

export const OtherWorkText = styled.h2`
  color: #494f55;
`;

//about
export const AboutHeader = styled.div`
  display: flex;
  max-width: 915px;

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
  justify-content: center;
  color: #757575;
  text-align: left;
  margin: 5em 0 1em 0;
  max-width: 300px;
  line-height: 1.5rem;
`;

export const AboutCardWrapper = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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

export const CardWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  margin: 5em auto;

  @media (max-width: 768px) {
    margin: 1em;
  }
`;

export const FoxtrotContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #757575;
  margin-bottom: 6em;
  padding-bottom: 0;
`;

export const ExperienceCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto 7em auto;

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
  /* display: flex;
  align-items: center; */
  border: 1px solid #03ac13;
`;

export const ExperienceTextContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  max-width: 70%;
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
  margin-bottom: 3em;
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

  &:hover {
    color: #03ac13;
    font-weight: bold;
  }
`;

export const ContactItemsStatic = styled.li`
  list-style: none;
  font-size: 1.25rem;
  padding: 0;
  margin: 0;
`;

export const ContactHomeLink = styled.p`
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    color: #03ac13;
    font-weight: bold;
  }
`;

export const ContactStaticItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;
`;
