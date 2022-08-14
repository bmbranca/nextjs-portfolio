import styled from "styled-components";
import { Twitter, Linkedin } from "@styled-icons/boxicons-logos";
import { EmailOutline } from "@styled-icons/evaicons-outline/EmailOutline";
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

  &:hover {
    color: red;
    font-style: italic;
  }
`;

//Navigation
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLogo = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const NavAnchor = styled.a`
  cursor: pointer;

  &:hover {
    color: red;
    font-style: italic;

    &:active {
      color: red;
      font-style: italic;
    }
  }
`;

//footer
export const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//icons
export const Twit = styled(Twitter)`
  width: 50px;
  height: 50px;
  margin-right: 1em;
`;

export const Linked = styled(Linkedin)`
  width: 50px;
  height: 50px;
  margin-right: 1em;
`;

export const Email = styled(EmailOutline)`
  width: 50px;
  height: 50px;
`;

//Project Card
export const Project = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 27%;
  background-color: white;
  border-radius: 4px;
  margin: 2em;
  padding-bottom: 1em;
  border: 0.5px solid grey;
  font-family: "Poppins", sans-serif;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Git = styled(Github)`
  width: 20px;
  height: 20px;
  margin-right: 1em;
  margin-left: 2em;
`;

export const ViewSite = styled(ViewDesktop)`
  width: 20px;
  height: 20px;
  margin-left: 1em;
  margin-right: 2em;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const TechStackText = styled.p`
  padding: 0 0.25em;
`;

//about
export const AboutCard = styled.div`
  border: 1px solid grey;
  margin: 1em 0;
  padding: 1em 2em;
  border-radius: 5px;
`;

export const AboutCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
`;

export const BlurbTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

// experience
export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid magenta;
  width: 700px;
  margin: 2em auto;
`;

export const ExperienceCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid magenta;
  width: 700px;
  margin: 2em auto;
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
  max-width: 600px;
  border: 1px solid green;
`;

export const ExperienceTextContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap");
  font-family: "Poppins", sans-serif;
  max-width: 50%;
  padding: 1em;
`;

export const ExperienceImageContainer = styled.div`
  max-width: 50%;
`;

export const ProjectSelection = styled.div`
  display: flex;
  text-align: left;
  padding: 0
  margin: 0;
  border: 1px solid blue;
`;

export const ProjectSelectionItem = styled.div`
  margin-right: 1em;
  cursor: pointer;

  &:hover {
    color: red;
    font-style: italic;
  }

  &:active {
    color: red;
    font-style: italic;
  }
`;
