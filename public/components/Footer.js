import React from "react";
import { Foot, FootText } from "./styled";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Foot>
        <Link href="/contact">
          <FootText>contact</FootText>
        </Link>
      </Foot>
    </>
  );
}
