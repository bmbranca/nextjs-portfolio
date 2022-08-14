import React from "react";
import Link from "next/link";
import { Nav, NavList, NavLogo, NavAnchor } from "./styled";

export default function SecondaryNav() {
  const styles = {
    marginRight: "2em",
  };

  return (
    <Nav>
      <Link href="/">
        <NavAnchor>home</NavAnchor>
      </Link>

      <Link href="/about">
        <NavAnchor>about</NavAnchor>
      </Link>

      <Link href="/experience">
        <NavAnchor>experience</NavAnchor>
      </Link>

      <Link href="/projects">
        <NavAnchor>projects</NavAnchor>
      </Link>
    </Nav>
  );
}
