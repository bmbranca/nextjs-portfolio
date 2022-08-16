import React from "react";
import Link from "next/link";
import { Nav, NavList, NavLogo, NavAnchor } from "./styled";

export default function Navigation() {
  const styles = {
    marginRight: "2em",
  };

  return (
    <Nav>
      <Link href="https://docs.google.com/document/d/1f7qVwilFpOztrz1MePyA20_-A7v9XVaB0qIadTyXHHY/edit?usp=sharing">
        <NavAnchor>resume</NavAnchor>
      </Link>

      <Link href="/about">
        <NavAnchor>about</NavAnchor>
      </Link>

      <Link href="/experience">
        <NavAnchor>work</NavAnchor>
      </Link>

      <Link href="/contact">
        <NavAnchor>contact</NavAnchor>
      </Link>
    </Nav>
  );
}
