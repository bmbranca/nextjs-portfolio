import React from "react";
import Link from "next/link";
import { ContactWrapper, ContactItems, ContactItemsStatic } from "./styled";

export default function ContactPage() {
  return (
    <ContactWrapper>
      <ul>
        <ContactItemsStatic> 331-401-7602</ContactItemsStatic>
        <ContactItemsStatic> brianbranca@gmail.com</ContactItemsStatic>
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
