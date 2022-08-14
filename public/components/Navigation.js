import React from "react";
import Link from "next/link";
import { Nav, NavList, NavLogo, NavAnchor } from "./styled";

export default function Navigation() {
  const styles = {
    marginRight: "2em",
  };

  return (
    <Nav>
      <NavLogo>
        {" "}
        <Link href="/">
          <NavAnchor>home</NavAnchor>
        </Link>
      </NavLogo>
      <NavList>
        <li style={styles}>
          {" "}
          <Link href="/about">
            <NavAnchor>about</NavAnchor>
          </Link>
        </li>
        <li style={styles}>
          {" "}
          <Link href="/experience">
            <NavAnchor>experience</NavAnchor>
          </Link>
        </li>
        <li style={styles}>
          {" "}
          <Link href="/projects">
            <NavAnchor>projects</NavAnchor>
          </Link>
        </li>
      </NavList>
    </Nav>
  );
}
