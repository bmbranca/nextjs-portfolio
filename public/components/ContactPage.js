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
          <Link href="https://github.com/bmbranca" target="_blank">
            github
          </Link>
        </ContactItems>
        <ContactItems>
          <Link
            href="https://www.linkedin.com/in/brian-branca/"
            target="_blank"
          >
            <a href="https://www.linkedin.com/in/brian-branca/" target="_blank">
              linkedin
            </a>
          </Link>
        </ContactItems>
        <ContactItems>
          <Link href="https://twitter.com/bmbranca16" target="_blank">
            <a href="https://twitter.com/bmbranca16" target="_blank">
              twitter
            </a>
          </Link>
        </ContactItems>
        <ContactItems>
          <Link href="https://www.instagram.com/brian_branca_/">
            <a href="https://www.instagram.com/brian_branca_/" target="_blank">
              instagram
            </a>
          </Link>
        </ContactItems>
      </ul>
    </ContactWrapper>
  );
}
