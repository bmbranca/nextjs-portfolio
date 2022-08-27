import React from "react";
import Link from "next/link";
import {
  ContactWrapper,
  ContactItems,
  ContactItemsStatic,
  ContactStaticItemsWrapper,
} from "./styled";

export default function ContactPage() {
  return (
    <ContactWrapper>
      <ul>
        <ContactStaticItemsWrapper>
          <ContactItemsStatic> 331-401-7602</ContactItemsStatic>
          <ContactItemsStatic> brianbranca@gmail.com</ContactItemsStatic>
        </ContactStaticItemsWrapper>
        <ContactItems>
          <Link href="https://github.com/bmbranca">github</Link>
        </ContactItems>
        <ContactItems>
          <Link href="https://www.linkedin.com/in/brian-branca/">linkedin</Link>
        </ContactItems>
        <ContactItems>
          <Link href="https://twitter.com/bmbranca16">twitter</Link>
        </ContactItems>
      </ul>
    </ContactWrapper>
  );
}
